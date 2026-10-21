# Plan: October 2026 security updates

Based on thoughts/research/2026-10-21-nodejs-october-2026-security-advisory.md.
Delivery: commit to `develop`, push, open PR develop -> main for review.

## Phase 1: Pin a supported Node line

- [x] Add `engines.node: "24.x"` to package.json (Vercel honours this over dashboard setting)
- [x] Add `.nvmrc` with `24`
- [x] Update README prerequisites (Node 24, pnpm 10)

## Phase 2: Upgrade Next.js and dependencies

- [x] next and eslint-config-next -> 15.5.28
- [x] `pnpm update` for in-range transitive fixes
- [x] pnpm overrides for transitive packages that stay vulnerable (lodash etc.)
- [x] Replace deprecated `images.domains` with `remotePatterns`
- [x] `pnpm check` (format + lint) and `pnpm build` pass on Node 24
- [x] `pnpm audit --prod` shows no critical/high (remaining: braces, no fix, dev-only; postcss-selector-parser moderate, build-time)

## Phase 3: Keep it from drifting again

- [x] Add `.github/dependabot.yml` (npm weekly, github-actions)

## Acceptance

- Build passes on Node 24.22.1
- No critical or high production advisories
- PR open from develop to main
