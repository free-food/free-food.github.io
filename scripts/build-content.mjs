import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { marked } from "marked";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const contentDir = path.join(root, "content");
const outFile = path.join(root, "src", "generated", "content.json");

const VALID_TAGS = new Set([
  "free",
  "budget",
  "rewards",
  "unverified",
  "expired",
  "limited-time",
]);

const ALL_TAGS = [
  { id: "free", label: "Free" },
  { id: "budget", label: "Under $10" },
  { id: "rewards", label: "Rewards signup" },
  { id: "unverified", label: "Unverified" },
  { id: "expired", label: "Expired" },
  { id: "limited-time", label: "Limited time" },
];

function parseLinks(text) {
  const links = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  while ((match = re.exec(text)) !== null) {
    links.push({ label: match[1], href: match[2] });
  }
  return links;
}

function parseTags(line) {
  return line
    .replace(/^tags:\s*/i, "")
    .split(",")
    .map((t) => t.trim())
    .filter((t) => VALID_TAGS.has(t));
}

function inlineText(tokens) {
  if (!tokens) return "";
  return tokens
    .map((t) => {
      if (t.type === "text") return t.text;
      if (t.type === "strong") return inlineText(t.tokens);
      if (t.type === "em") return inlineText(t.tokens);
      if (t.type === "link") return t.text;
      return "";
    })
    .join("");
}

function listItemToNestedBullet(item) {
  let text = "";
  let bullets;

  for (const token of item.tokens ?? []) {
    if (token.type === "text") text += token.text;
    if (token.type === "paragraph") text += inlineText(token.tokens);
    if (token.type === "list") {
      bullets = token.items.map((sub) => listItemToNestedBullet(sub));
    }
  }

  text = text.trim();
  if (bullets?.length) return { text, bullets };
  return text;
}

function listItemToStep(item) {
  const result = listItemToNestedBullet(item);
  if (typeof result === "string") return result;
  if (result.bullets?.length) return result;
  return result.text;
}

function parseDealBody(body) {
  let text = body.trim();
  const tags = [];
  const links = [];

  const tagsMatch = text.match(/^tags:\s*(.+)$/im);
  if (tagsMatch) {
    tags.push(...parseTags(tagsMatch[0]));
    text = text.replace(/^tags:\s*.+$/im, "").trim();
  }

  const linksLineMatch = text.match(/^links:\s*(.+)$/im);
  if (linksLineMatch) {
    links.push(...parseLinks(linksLineMatch[1]));
    text = text.replace(/^links:\s*.+$/im, "").trim();
  }

  const tokens = marked.lexer(text);
  let summary = "";
  const steps = [];
  const bullets = [];
  let sawOrderedList = false;

  for (const token of tokens) {
    if (token.type === "paragraph") {
      const paraLinks = parseLinks(token.text);
      links.push(...paraLinks);
      const plain = token.text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
      if (!sawOrderedList && steps.length === 0 && bullets.length === 0) {
        summary += (summary ? " " : "") + plain;
      }
    }
    if (token.type === "list") {
      if (token.ordered) {
        sawOrderedList = true;
        steps.push(...token.items.map((item) => listItemToStep(item)));
      } else if (!sawOrderedList && steps.length === 0) {
        bullets.push(
          ...token.items.map((item) => {
            const b = listItemToNestedBullet(item);
            return typeof b === "string" ? b : b.text;
          }),
        );
      }
    }
  }

  const deal = { title: "" };
  if (summary) deal.summary = summary.trim();
  if (tags.length) deal.tags = tags;
  if (links.length) deal.links = links;
  if (steps.length) deal.steps = steps;
  if (bullets.length) deal.bullets = bullets;
  return deal;
}

function parseRestaurantFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  if (!data.id || !data.name) {
    throw new Error(`${filePath}: frontmatter requires id and name`);
  }

  const restaurant = {
    id: data.id,
    name: data.name,
    deals: [],
  };
  if (data.featured) restaurant.featured = true;

  const sections = content.split(/^## /m).filter((s) => s.trim());
  for (const section of sections) {
    const newline = section.indexOf("\n");
    const title = newline === -1 ? section.trim() : section.slice(0, newline).trim();
    const body = newline === -1 ? "" : section.slice(newline + 1);
    const deal = parseDealBody(body);
    deal.title = title;
    restaurant.deals.push(deal);
  }

  return restaurant;
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseToolsFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);

  const toolLinks = [];
  const surplusApps = [];
  let surplusAppsIntro = "";
  let section = null;

  const lines = content.split("\n");
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## Utilities")) {
      section = "utilities";
      i++;
      continue;
    }
    if (line.startsWith("## Surplus")) {
      section = "surplus";
      i++;
      while (i < lines.length && !lines[i].trim()) i++;
      while (
        i < lines.length &&
        !lines[i].startsWith("###") &&
        !lines[i].startsWith("##")
      ) {
        surplusAppsIntro += (surplusAppsIntro ? " " : "") + lines[i].trim();
        i++;
      }
      continue;
    }

    if (line.startsWith("### ") && section === "utilities") {
      const name = line.slice(4).trim();
      i++;
      const descLines = [];
      let href = "";
      while (i < lines.length && !lines[i].startsWith("###") && !lines[i].startsWith("##")) {
        const l = lines[i].trim();
        if (l.startsWith("url:")) {
          href = l.replace(/^url:\s*/i, "").trim();
        } else if (l.startsWith("http")) {
          href = l;
        } else if (l) {
          descLines.push(l);
        }
        i++;
      }
      toolLinks.push({
        id: slugify(name),
        name,
        description: descLines.join(" ") || undefined,
        href,
      });
      continue;
    }

    if (line.startsWith("### ") && section === "surplus") {
      const name = line.slice(4).trim();
      i++;
      const descLines = [];
      while (i < lines.length && !lines[i].startsWith("###") && !lines[i].startsWith("##")) {
        const l = lines[i].trim();
        if (l) descLines.push(l);
        i++;
      }
      surplusApps.push({
        id: slugify(name),
        name,
        description: descLines.join(" ") || undefined,
      });
      continue;
    }

    i++;
  }

  return { toolLinks, surplusApps, surplusAppsIntro };
}

function build() {
  const sitePath = path.join(contentDir, "site.md");
  const toolsPath = path.join(contentDir, "tools.md");
  const restaurantsDir = path.join(contentDir, "restaurants");

  const siteRaw = fs.readFileSync(sitePath, "utf8");
  const { content: siteContent } = matter(siteRaw);
  const siteIntro = siteContent.trim();

  const { toolLinks, surplusApps, surplusAppsIntro } = parseToolsFile(toolsPath);

  const restaurantFiles = fs
    .readdirSync(restaurantsDir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .sort();

  const restaurants = restaurantFiles.map((f) =>
    parseRestaurantFile(path.join(restaurantsDir, f)),
  );

  const output = {
    siteIntro,
    toolLinks,
    surplusApps,
    surplusAppsIntro,
    allTags: ALL_TAGS,
    restaurants,
  };

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify(output, null, 2) + "\n");
  console.log(
    `Built content: ${restaurants.length} restaurants → ${path.relative(root, outFile)}`,
  );
}

function watch() {
  build();
  const watchPaths = [
    path.join(contentDir, "site.md"),
    path.join(contentDir, "tools.md"),
    path.join(contentDir, "restaurants"),
  ];
  let timer;
  const schedule = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      try {
        build();
      } catch (err) {
        console.error(err.message);
      }
    }, 100);
  };
  for (const p of watchPaths) {
    fs.watch(p, { recursive: true }, schedule);
  }
  console.log("Watching content/ for changes…");
}

if (process.argv.includes("--watch")) {
  watch();
} else {
  build();
}
