# Architecture Document

## Overview

Unexplored Telangana is a digital atlas built as a monorepo with three layers: **frontend** (interactive mapping and storytelling), **backend** (REST API), and **content** (MDX-based Git CMS). The architecture prioritizes open-source sustainability, community contribution, and visual excellence.

---

## Monorepo Decisions

### Why a Monorepo?

1. **Shared types and config** across frontend and backend without versioning headaches
2. **Atomic commits** that span the full stack (e.g., add a new location with its API endpoint and frontend page in one PR)
3. **Consistent tooling** — one Biome config, one TypeScript config, one CI pipeline
4. **Simplified local development** — `bun run dev` starts everything

### Package Boundaries

| Package | Responsibility | Dependencies |
|---------|---------------|-------------|
| `@ut/types` | Shared TypeScript interfaces, enums, type guards | None |
| `@ut/config` | Constants, district data, categories | `@ut/types` |
| `@ut/ui` | Design system — Button, Card, Badge, Input, utilities | React 19, Radix UI, Motion |
| `@ut/web` | Frontend application — routing, pages, map, state | `@ut/ui`, `@ut/types`, `@ut/config` |
| `@ut/api` | Backend API — routing, validation, OpenAPI docs | `@ut/types`, `@ut/config` |

---

## Frontend Architecture

### Routing Strategy

TanStack Router provides file-based routing with full TypeScript safety. The route structure maps directly to the URL structure:

```
/                           → Landing page with fullscreen map
/districts/$slug            → District explorer (sidebar + map)
/locations/$slug            → Destination page (editorial layout)
```

Each route can declare search params (e.g., `?category=temples`) with automatic Zod validation.

### State Management

Zustand manages global UI state:
- `activeDistrict` — currently selected district
- `activeCategory` — active category filter
- `activeLayer` — map layer visibility
- `searchQuery` — search input
- `sidebarOpen` — mobile sidebar toggle

TanStack Query manages server state:
- Caches API responses (district list, locations, GeoJSON)
- Provides loading/error states for all data fetching
- Configurable stale time and retry logic
- Prepares for SSR when PostGIS is added

### Map Architecture

The Map component is a **controlled wrapper** around MapLibre GL JS:

1. **WebGL Rendering:** MapLibre renders vector tiles on GPU via WebGL
2. **Marker System:** Custom HTML/CSS markers with category-based colors
3. **GeoJSON Layers:** District boundaries loaded as GeoJSON features and rendered as fill + line layers
4. **Future Enhancement:** Clustered markers using Supercluster (for locations > 100)

**Why MapLibre over Leaflet?** MapLibre renders vector tiles (smaller, faster, smoother) vs Leaflet's raster tiles. It supports 3D terrain, pitch, bearing, and fly-to animations. Leaflet is simpler but can't match the premium map feel.

### CSS Architecture

Tailwind CSS v4 with a custom design token system:

- **Font scale:** Source Serif 4 (headings), Inter (body), JetBrains Mono (code/UI)
- **Color system:** Six branded palettes — obsidian (dark), terracotta (warm), saffron (accent), jade (nature), sand (neutral), crimson (emphasis)
- **Component layer:** shadcn/ui primitives (Radix UI) customized with CVA variants
- **Animation:** Motion (formerly Framer Motion) for page transitions, scroll reveals, and map interactions

---

## Backend Architecture

### Fastify Plugin System

Each domain (districts, locations, GeoJSON) is a **Fastify plugin** — self-contained module with routes, schemas, and handlers. Plugins are registered with a `/api` prefix.

### OpenAPI Integration

Fastify's `@fastify/swagger` automatically generates OpenAPI 3.0 specs from route schemas. The Swagger UI is available at `/docs`. This enables:
- Auto-generated API clients for the frontend
- Self-documenting API for contributors
- PostGIS migration path with clear contract

### Content Delivery

The API currently returns static data from `@ut/config`. This is intentionally simple:

1. Route handler imports district data
2. Route handler returns JSON response
3. No database query, no caching layer, no auth

**Why?** This project is in its **content-gathering phase**. The priority is building the content pipeline (MDX files, GeoJSON, photography) — not premature database optimization. When the content volume grows past ~500 locations, the migration to PostGIS will follow the same API contract.

### PostGIS Migration Path

When the data volume justifies it:

1. Add `@ut/db` package with Prisma schema + PostGIS extension
2. Import content pipeline data into PostgreSQL
3. Switch API route handlers from config imports to Prisma queries
4. Add spatial query endpoints (locations within bounding box, proximity search)
5. Zero frontend changes — the API contract stays identical

---

## Content Pipeline

### Git as CMS

All content lives in the `content/` directory as MDX files. This is the **source of truth** for the entire platform.

**Advantages:**
- **Zero infrastructure cost:** No CMS hosting, no database, no auth system
- **Branch previews:** Every PR creates a deploy preview of new content
- **Version history:** Full audit trail of who changed what and when
- **Community contributions:** Anyone can submit a location via PR
- **Offline-first:** Contributors can add content from any text editor

### MDX Format

Each location is an MDX file with structured YAML frontmatter:

```yaml
---
title: "Ramappa Temple"
slug: "ramappa-temple"
district: "Mulugu"
category: "temples"
coordinates:
  lat: 18.258
  lng: 79.943
bestSeason: "October – February"
---
```

The MDX body supports full Markdown + React components (DistrictHero, LocationCard, CategoryGrid). This enables rich visual storytelling beyond plain text.

### Content Validation

A future CI step will:
1. Validate YAML frontmatter against the `LocationFrontmatter` type
2. Check that images referenced in frontmatter exist in the filesystem
3. Verify coordinates fall within district boundaries
4. Ensure OSM links are valid

### GeoJSON Dataset

District boundaries are stored as GeoJSON FeatureCollection files in `geojson/districts/`. Sources:
- OSM administrative boundaries (free, community-maintained)
- Survey of India data (pending license clarification)

Each file (`adilabad.json`, `warangal.json`, etc.) contains a single Feature. The API aggregates them into a FeatureCollection.

---

## CI/CD Pipeline

### GitHub Actions

```
push/PR → lint + typecheck → unit tests → build → E2E tests
```

- **Check job:** Runs Biome lint + TypeScript typecheck (fast, parallel)
- **Test job:** Runs Vitest unit tests
- **Build job:** Builds all packages (only runs if check + test pass)
- **E2E job:** Runs Playwright tests against built app

### Deployment Strategy (Future)

The architecture supports two deployment modes:

1. **Static export** (Netlify, Vercel, Cloudflare Pages):
   - Frontend is fully static (client-side rendered)
   - API routes are built at build time (no runtime API needed for static data)
   - Content is bundled as JSON at build time

2. **Full stack** (Docker, Fly.io, Railway):
   - Frontend served by nginx or CDN
   - API running as a separate service
   - PostGIS database for spatial queries
   - Docker Compose for local development mirroring production

---

## Accessibility

| Requirement | Implementation |
|------------|---------------|
| WCAG AA contrast | Tailwind color tokens verified for 4.5:1 minimum |
| Keyboard navigation | Radix UI primitives with built-in keyboard control |
| Screen readers | Semantic HTML, ARIA labels on interactive elements |
| Focus management | Focus trap in modals, autofocus on search, skip-to-content |
| Responsive design | Mobile-first breakpoints, sidebar dismiss on district select |
| Performance | Lazy-loaded map component, code-split routes, optimized fonts |
| PWA | Manifest.json, service worker (future), offline content |

---

## Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.0s |
| Total Bundle Size | < 200KB (gzipped) |
| Map Rendering | 60 FPS on desktop, 30 FPS on mobile |

---

## Design System Philosophy

### "Editorial, Not Dashboard"

Every visual decision follows this rule:

- **Do:** Full-bleed hero images, generous whitespace, prominent serif headings, soft shadows, smooth spring animations
- **Don't:** Dense data tables, card grids, flat UI, sharp corners, instant transitions

### Color Palette Rationale

- **Obsidian (dark mode base):** Creates depth and lets photography pop. Reduces eye strain during long browsing sessions.
- **Terracotta:** Warm earth tones reflecting the Deccan plateau landscape
- **Saffron:** Vibrant accent color, culturally resonant with Telangana
- **Jade:** Natural greens for eco-tourism and wildlife categories
- **Sand:** Warm neutrals for readability and balance
- **Crimson:** Emphasis for interactive states and critical indicators

### Typography

- **Source Serif 4:** Editorial headings — has the gravitas of print journalism with modern proportions
- **Inter:** Clean, highly readable body text — widely tested for web accessibility
- **JetBrains Mono:** Monospace for code, coordinates, and technical data
