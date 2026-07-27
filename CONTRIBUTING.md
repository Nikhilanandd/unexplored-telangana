# Contributing to Unexplored Telangana

Thank you for your interest in contributing. This project is a labor of love to document Telangana's untold stories.

---

## Code of Conduct

Be respectful. Be constructive. This is a documentation project for a real state with real cultural heritage.

---

## Ways to Contribute

1. **Add a location** — Create an MDX file for a waterfall, fort, temple, lake, etc.
2. **Improve existing content** — Fix factual errors, add travel tips, update access info
3. **Add GeoJSON data** — Find or create district boundary files
4. **Submit photography** — Add original photos (CC BY-SA 4.0 licensed)
5. **Fix bugs** — Report or fix technical issues
6. **Improve documentation** — Clarify setup instructions, add examples
7. **Design** — Improve the UI/UX, add animations, enhance accessibility

---

## Development Setup

### Prerequisites

- **Bun** v1.2+ ([install](https://bun.sh))
- **Node.js** v22+ (for some tooling)
- **Git**

### First-time Setup

```bash
git clone https://github.com/nikhilanandd/unexplored-telangana.git
cd unexplored-telangana
bun install
bun run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start all apps in development mode |
| `bun run dev:web` | Start only the web app (http://localhost:3000) |
| `bun run dev:api` | Start only the API (http://localhost:4000) |
| `bun run build` | Build all packages for production |
| `bun run lint` | Check code style with Biome |
| `bun run lint:fix` | Auto-fix lint issues |
| `bun run format` | Format code with Biome |
| `bun run typecheck` | Run TypeScript type checking |
| `bun run test` | Run unit tests |
| `bun run test:e2e` | Run end-to-end tests |

---

## Adding a New Location

### Step 1: Create the MDX File

Create a file at `content/locations/[slug].mdx` with the following frontmatter:

```yaml
---
title: "Location Name"
slug: "location-slug"
district: "District Name"
category: "temples"  # See categories below
coordinates:
  lat: 18.258
  lng: 79.943
bestSeason: "October – February"
accessibility: "Paved road access, parking available"
history: >
  Brief history of the location — 2-3 sentences.
travelTips:
  - "Tip 1"
  - "Tip 2"
nearbyAttractions:
  - "Nearby place 1"
  - "Nearby place 2"
images:
  - "/content/location-slug/01.jpg"
  - "/content/location-slug/02.jpg"
osmLink: "https://www.openstreetmap.org/node/ID"
---

# Location Name

Rich markdown content about the location...
```

### Valid Categories

| Category | Icon | Examples |
|----------|------|----------|
| `waterfalls` | 💧 | Bogatha, Pochera, Kuntala |
| `forts` | 🏰 | Golconda, Bhongir, Elgandal |
| `temples` | 🛕 | Ramappa, Yadadri, Bhadrakali |
| `lakes` | 🌊 | Hussain Sagar, Pakhal, Laknavaram |
| `reservoirs` | 🏗 | Nagarjuna Sagar, Sriram Sagar |
| `archaeological` | 🏛 | Phanigiri, Pandavula Gutta |
| `eco-tourism` | 🌿 | Ananthagiri, Mrugavani |
| `food` | 🍛 | Hyderabadi biryani, Irani chai |
| `viewpoints` | 🏔 | Koheda Gutta, Ananthagiri |
| `wildlife` | 🐘 | Eturnagaram, Amrabad Tiger Reserve |
| `camping` | ⛺ | Laknavaram Island, Ananthagiri |
| `museums` | 🏛 | Salar Jung, Telangana State Museum |
| `hidden-gems` | 💎 | Lesser-known locations |

### Step 2: Add Photos

Place photos in `apps/web/public/content/[slug]/`:
- `01-hero.jpg` — Main hero image (16:9, landscape)
- `02-gallery.jpg`, `03-gallery.jpg`, etc. — Additional photos

### Step 3: Find Coordinates

Use [OpenStreetMap](https://www.openstreetmap.org) to find the exact coordinates:
1. Search for the location
2. Right-click on the map
3. Select "Show address"
4. Copy the latitude and longitude

Add an `osmLink` pointing to the location's OSM node, way, or relation.

### Step 4: Submit a Pull Request

```bash
git checkout -b content/add-[slug]
git add content/locations/[slug].mdx
git add apps/web/public/content/[slug]/
git commit -m "feat(content): add [Location Name]"
git push origin content/add-[slug]
```

Create a PR with a description including:
- Brief description of the location
- Source of information
- Photo credits (if applicable)

---

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Usage |
|--------|-------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation |
| `content:` | Content changes (MDX files, photos) |
| `geo:` | GeoJSON changes |
| `style:` | Code style (formatting, linting) |
| `refactor:` | Code refactoring |
| `test:` | Tests |
| `chore:` | Build, CI, dependencies |

---

## Code Style

- **Language:** TypeScript with strict mode
- **Formatting:** Biome with 2-space indentation, single quotes, semicolons not required
- **Linting:** Biome recommended rules + accessibility rules
- **Imports:** Organized automatically by Biome
- **Components:** Functional components with named exports
- **File naming:** kebab-case for files, PascalCase for components

Pre-commit hooks will auto-format and lint your code. Run `bun run lint` to check before committing.

---

## Review Process

1. Maintainers will review your PR within 48 hours
2. Content PRs require factual accuracy review
3. Code PRs require passing CI (lint + typecheck + tests)
4. At least one approving review required to merge

---

## License

By contributing, you agree that your contributions will be licensed under:
- **Code:** MIT License
- **Content:** CC BY-SA 4.0
- **Documentation:** CC BY-SA 4.0
