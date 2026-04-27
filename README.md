# vierra-portfolio-v2

Cyberpunk single-page portfolio with a custom CMS. Turborepo monorepo containing the public site, the admin CMS, a Hono API, and a Drizzle/Postgres data layer.

## Stack

- **Monorepo:** Turborepo + pnpm workspaces
- **Web (`apps/web`):** Next.js 15 (App Router) + Tailwind v4 — public portfolio
- **CMS (`apps/cms`):** Next.js 15 + Tailwind v4 — admin editor
- **API (`apps/api`):** Hono on Node 20 (`@hono/node-server`)
- **DB:** Postgres 16 in Docker (Supabase later) + Drizzle ORM
- **Validation:** Zod via `drizzle-zod` (derived from Drizzle schema)

## Ports

| Service | Port | URL |
|---|---|---|
| Web (portfolio) | **1803** | http://localhost:1803 |
| CMS (admin) | **1804** | http://localhost:1804 |
| API (Hono) | **1800** | http://localhost:1800 |
| Postgres | **1832** | `postgres://vierra:vierra@localhost:1832/vierra` |

## Layout

```
apps/
├── web/    # public portfolio site (port 1803)
├── cms/    # custom admin UI (port 1804) — skeleton
└── api/    # Hono API (port 1800) — health route + stubbed CRUD
packages/
├── db/         # Drizzle schema + client (source of truth)
├── schemas/    # Zod validators derived from Drizzle via drizzle-zod
├── api-client/ # typed read API (returns fixtures while api is deferred)
├── ui/         # shared React primitives (placeholder)
├── utils/      # cn, formatUtcClock, etc.
├── types/      # non-DB shared types
├── eslint-config/
└── tsconfig/
docker-compose.yml  # Postgres on host port 1832
```

## Status

**Frontend complete, backend deferred.** The `apps/web` portfolio is fully built and renders pixel-perfect to the prototype with hardcoded content from `@vierra/api-client` fixtures. The DB schema is authored in `packages/db` and ready to migrate. The Hono API has a `/health` route and stub routes returning 501. The CMS is a skeleton.

## Getting started

```bash
pnpm install            # install workspace deps
pnpm db:up              # start Postgres in Docker on :1832
pnpm dev                # run web (1803), cms (1804), api (1800) in parallel
```

Just want the portfolio?

```bash
pnpm install
pnpm --filter @vierra/web dev
# → http://localhost:1803
```

## Scripts

- `pnpm dev` — run all dev servers in parallel
- `pnpm build` — build all apps + packages
- `pnpm typecheck` — type-check the whole workspace
- `pnpm lint` — lint everything
- `pnpm format` — Prettier-format the workspace
- `pnpm db:up` / `db:down` / `db:logs` / `db:reset` — Postgres lifecycle
- `pnpm --filter @vierra/db db:generate` — generate Drizzle migrations from schema
- `pnpm --filter @vierra/db db:migrate` — apply migrations to `DATABASE_URL`

## Origin

Implemented from a Claude Design handoff bundle (cyberpunk portfolio prototype). See plan: `~/.claude/plans/users-rarivera-downloads-vierra-portfol-dazzling-wreath.md`.
