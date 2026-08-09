# Free Food

Interactive guide to discounts, good value deals, free stuff, and rewards schemes - filling meals for $10 or less.

Live site: [https://free-food.github.io/](https://free-food.github.io/)

## Local development (Docker only)

No Node or npm required on your host machine.

```bash
docker compose up dev       # hot-reload dev server → http://localhost:5173/
docker compose up preview   # production build + serve → http://localhost:4173/
docker compose down         # stop containers
```

Or: `make dev`, `make preview`, `make down`

The dev server watches `content/` and rebuilds automatically when you save a Markdown file.

---

## Editing content (Markdown)

All site content lives in **`content/`** as Markdown. No TypeScript editing required.

```
content/
├── site.md                 # Home page intro paragraph
├── tools.md                # Utility links + surplus food apps
└── restaurants/
    ├── _template.md        # Copy this to add a restaurant
    ├── taco-bell.md
    └── ...
```

### Add a restaurant

```bash
cp content/restaurants/_template.md content/restaurants/chipotle.md
```

Edit the file, save, and it appears on the site.

### Restaurant file format

```markdown
---
id: taco-bell
name: Taco Bell
featured: true
---

## Deal Title

Short summary shown on cards.

tags: free, budget, rewards
links: [tacobell.com](http://tacobell.com)

1. First numbered step
   - Sub-bullet under that step
2. Step with a nested list
   - Option A
   - Option B
3. Another step

- Use a plain bullet list when there are no numbered steps
```

**Frontmatter** (between `---` at the top):

| Field | Required | Description |
|-------|----------|-------------|
| `id` | yes | URL slug → `/restaurant/taco-bell` |
| `name` | yes | Display name |
| `featured` | no | `true` to show on home page |

**Per deal** (each `##` heading):

| Line | Example |
|------|---------|
| Summary | First paragraph after the heading |
| Tags | `tags: free, budget, rewards, unverified, expired, limited-time` |
| Links | `links: [Label](https://url), [Other](https://url2)` |
| Steps | Numbered list (`1. 2. 3.`) - indent with spaces for sub-bullets |
| Bullets only | `- item` list (when no numbered steps) |

Nested bullets work at any depth - just indent with 3 spaces per level (standard Markdown).

### Edit tools

Edit [`content/tools.md`](content/tools.md):

```markdown
## Utilities

### My New Tool

Description of what it does.

url: https://example.com

## Surplus Restaurant & Grocery Apps

Intro paragraph for this section…

### App Name

Optional description when expanded.
```

### Edit home intro

Edit the body of [`content/site.md`](content/site.md) (below the frontmatter).

---

## How it works

Markdown files are compiled to `src/generated/content.json` by `scripts/build-content.mjs` on every dev/build run. The React UI reads that JSON - presentation is unchanged, only the authoring format is Markdown.

---

## GitHub Pages setup

Repo: `free-food/free-food.github.io`

1. Push to `main` - the deploy workflow builds and publishes automatically.
2. In **Settings → Pages**, set source to **GitHub Actions**.
3. Site is served at `https://free-food.github.io/`.

## Project structure

```
content/                  # ← edit Markdown here
scripts/build-content.mjs # parser
src/
├── generated/            # auto-generated JSON (don't edit)
├── content/              # types + search helpers
├── pages/
└── components/
```
