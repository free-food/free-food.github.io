# Free Food

Interactive guide to discounts, good value deals, free stuff, and rewards schemes — filling meals for $10 or less.

Live site: [https://free-food.github.io/](https://free-food.github.io/)

## Local development (Docker only)

No Node or npm required on your host machine.

```bash
docker compose up dev       # hot-reload dev server → http://localhost:5173/
docker compose up preview   # production build + serve → http://localhost:4173/
docker compose down         # stop containers
```

Or use the Makefile shortcuts: `make dev`, `make preview`, `make down`

---

## Adding or updating content

All content lives under `src/content/`. No React code changes needed for most edits.

### Content layout

```
src/content/
├── types.ts              # Data shapes (rarely edit)
├── site.ts               # Home intro, tools, surplus apps, filter tags
├── utils.ts              # Search/filter helpers (rarely edit)
├── index.ts              # Re-exports everything
└── restaurants/
    ├── _template.ts      # Copy this to add a new restaurant
    ├── index.ts          # Register restaurants here (import + array entry)
    ├── taco-bell.ts      # One file per restaurant
    └── ...
```

### Add a new restaurant (3 steps)

**1.** Copy the template:

```bash
cp src/content/restaurants/_template.ts src/content/restaurants/chipotle.ts
```

**2.** Edit your new file — set `id`, `name`, and `deals`:

```ts
const chipotle: Restaurant = {
  id: "chipotle",           // → /restaurant/chipotle
  name: "Chipotle",
  featured: false,            // true = show on home page
  deals: [
    {
      title: "Free Guac on Birthday",
      summary: "Sign up for rewards.",
      tags: ["free", "rewards"],
      steps: ["Step 1…", "Step 2…"],
      bullets: ["Extra tip…"],
      links: [{ label: "Rewards", href: "https://…" }],
    },
  ],
};
```

**3.** Register it in `src/content/restaurants/index.ts`:

```ts
import chipotle from "./chipotle";

export const restaurants: Restaurant[] = [
  // …existing entries…
  chipotle,   // add import + array entry
];
```

Save, and the site picks it up automatically in dev. The restaurant appears on Browse and gets its own page at `/restaurant/chipotle`.

### Update an existing restaurant

Open its file in `src/content/restaurants/` (e.g. `taco-bell.ts`) and edit deals in place. Add a new deal by appending to the `deals` array.

### Edit tools or surplus apps

Edit `src/content/site.ts`:

- `toolLinks` — utility links on the Tools page
- `surplusApps` — expandable app list on the Tools page
- `siteIntro` — paragraph on the home page

### Deal tags

| Tag | Filter label | Use when |
|-----|-------------|----------|
| `free` | Free | No-cost or BOGO items |
| `budget` | Under $10 | Good value meals under ~$10 |
| `rewards` | Rewards signup | Requires creating an account |
| `unverified` | Unverified | Not personally tested yet |
| `expired` | Expired | Deal no longer active |
| `limited-time` | Limited time | Seasonal or day-specific |

### Add a new site page

Pages are React components in `src/pages/`. To add one:

1. Create `src/pages/YourPage.tsx`
2. Add a route in `src/App.tsx`: `<Route path="/your-page" element={<YourPage />} />`
3. Add a nav link in `src/components/Layout.tsx`

Restaurant pages don't need this — they're generated automatically from content files.

---

## GitHub Pages setup

Repo: `free-food/free-food.github.io`

1. Push to `main` — the deploy workflow builds and publishes automatically.
2. In **Settings → Pages**, set source to **GitHub Actions**.
3. Site is served at `https://free-food.github.io/`.

The build copies `index.html` to `404.html` so client-side routes work on direct navigation.

## Project structure

```
src/
├── content/            # All site data (edit here)
├── pages/              # Home, Tools, Browse, RestaurantDetail
├── components/         # Layout, cards, search, filters
└── styles/             # global CSS
```
