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

Or use the Makefile shortcuts:

```bash
make dev
make preview
make down
```

## Editing content

Deal data lives in [`src/content/deals.ts`](src/content/deals.ts). Each restaurant has an `id` (URL slug), `name`, optional `featured` flag, and a `deals` array.

Deal fields:

- `title` — deal name
- `summary` — short description shown on cards
- `tags` — `free`, `budget`, `rewards`, `unverified`, `expired`, `limited-time`
- `steps` — ordered instructions (numbered list)
- `bullets` — unordered tips
- `links` — external links with `label` and `href`

Tools and surplus-food apps are in the same file (`toolLinks`, `surplusApps`).

## GitHub Pages setup

Repo: `free-food/free-food.github.io`

1. Push to `main` — the deploy workflow builds and publishes automatically.
2. In **Settings → Pages**, set source to **GitHub Actions**.
3. Site is served at `https://free-food.github.io/`.

The build copies `index.html` to `404.html` so client-side routes (e.g. `/browse`, `/restaurant/taco-bell`) work on direct navigation.

## Project structure

```
src/
├── content/deals.ts    # all site content
├── pages/              # Home, Tools, Browse, RestaurantDetail
├── components/         # Layout, cards, search, filters
└── styles/             # global CSS
```
