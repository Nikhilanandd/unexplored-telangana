# Unexplored Telangana

> A digital atlas of Telangana — its districts, heritage, ecology, and untold stories. Built for explorers, by explorers.

Unexplored Telangana is an open-source platform documenting every district of Telangana through interactive maps, rich storytelling, and structured geographic data. It encourages people to explore their own state before traveling elsewhere.

---

## Quick Start

```bash
bun install
bun run dev
```

- **Web app:** http://localhost:3000
- **API server:** http://localhost:4000
- **API docs:** http://localhost:4000/docs

---

## Architecture

### Monorepo Structure

```
unexplored-telangana/
├── apps/
│   ├── web/          # React 19 frontend (Vite, TanStack Router, MapLibre)
│   └── api/          # Fastify REST API with OpenAPI docs
├── packages/
│   ├── ui/           # Design system (Tailwind, Radix, Motion)
│   ├── types/        # Shared TypeScript types
│   └── config/       # Shared constants and configuration
├── content/
│   ├── districts/    # District overviews as MDX
│   └── locations/    # Destination pages as MDX with frontmatter
├── geojson/
│   └── districts/    # GeoJSON district boundary files
├── docs/             # Architecture and contribution docs
├── scripts/          # Utility scripts
├── docker/           # Docker and nginx configuration
└── .github/          # CI/CD workflows
```

### Tech Stack

| Layer        | Technology                           |
| ------------ | ------------------------------------ |
| Runtime      | Bun                                  |
| Language     | TypeScript 5.x                       |
| Frontend     | React 19, Vite 6, Tailwind 4         |
| Router       | TanStack Router                      |
| Data Fetch   | TanStack Query                       |
| State        | Zustand                              |
| Maps         | MapLibre GL JS, OpenStreetMap tiles  |
| UI           | Tailwind CSS, Radix UI, Motion       |
| Backend      | Fastify 5, Zod, OpenAPI              |
| Content      | MDX with frontmatter (Git as CMS)    |
| Testing      | Vitest, Playwright                   |
| Tooling      | Biome, Husky, lint-staged            |
| CI/CD        | GitHub Actions, Docker               |

### Design Decisions

**Why Bun?** Bun provides a unified JavaScript runtime, package manager, and bundler — dramatically simplifying the toolchain. It's significantly faster than Node.js for development workflows and supports TypeScript out of the box.

**Why MapLibre GL JS?** MapLibre is the open-source fork of Mapbox GL JS. It's fully open, has no usage limits, and works beautifully with OpenStreetMap tiles. Unlike Google Maps, it doesn't require API keys or payments, aligning with our open-source ethos.

**Why TanStack Router?** TanStack Router provides type-safe routing with built-in search params, nested layouts, and excellent data loading patterns. Combined with TanStack Query, it gives us a complete data management solution with caching, deduplication, and background refetching.

**Why MDX + Git as CMS?** Storing content as MDX files in Git eliminates database dependencies, enables community contributions via pull requests, and provides version history for free. Each location is a self-contained file with structured frontmatter.

**Why a custom design system?** shadcn/ui components are customized with a unique color palette inspired by Telangana's landscape — obsidian, terracotta, saffron, jade, sand, and crimson. The design prioritizes typography, whitespace, and editorial storytelling over dashboards.

### Database Strategy

The current API serves static data from config and content files. The architecture is prepared for a future PostgreSQL + PostGIS migration:

- **PostGIS** for spatial queries (find locations within a district boundary, filter by proximity)
- **Prisma ORM** for type-safe database access
- **Server-side rendering** with React Server Components when the data volume grows

### Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines on:
- Setting up the development environment
- Adding new locations via MDX
- Adding GeoJSON district boundaries
- Code style and conventions
- Commit message format

---

## License

Unexplored Telangana is open-source software licensed under the [MIT License](./LICENSE). Content (MDX files, images) is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
