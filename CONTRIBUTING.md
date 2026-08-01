# Contributing to wealthdock

## Dev environment

- Node 20+ (CI runs Node 22)
- pnpm, activated via Corepack: `corepack enable && corepack prepare pnpm@9.15.9 --activate`

Install dependencies once at the repo root — this is a pnpm workspace, so a single `pnpm install` links all `apps/*`/`packages/*`:

```bash
pnpm install
```

## Before opening a PR

Run the same checks CI runs, from the repo root:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

These are Turborepo pipelines (`turbo run <task>`) that fan out across every app/package that defines that script.

## Pull requests

Keep PRs focused on a single change. Fill out the PR template and link any related issue.
