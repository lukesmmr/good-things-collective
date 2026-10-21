# Research: Node.js October 2026 security advisory and repo security posture

Date: 2026-10-21
Source: https://nodejs.org/en/blog/vulnerability/october-2026-security-releases

## Advisory summary

Fixed versions: v26.12.1, v24.22.1, v22.23.4. Ten CVEs, highest severity High.

| CVE             | Severity | Lines    | Component                                           |
| --------------- | -------- | -------- | --------------------------------------------------- |
| CVE-2026-105482 | High     | 22/24/26 | dns.resolve truncates names with NUL                |
| CVE-2026-105483 | High     | 24/26    | TLS hostname check bypass (fullwidth digits)        |
| CVE-2026-106069 | High     | 22/24/26 | TLS hostname check bypass (loose IP resolution)     |
| CVE-2026-111497 | High     | 22/24/26 | Brotli decoder OOB write (RCE)                      |
| CVE-2026-105481 | Medium   | 22/24/26 | http keep-alive processes early response            |
| CVE-2026-106072 | Medium   | 22/24/26 | TLS non-canonical IPv4 vs DNS SANs                  |
| CVE-2026-106074 | Medium   | 22/24/26 | randomUUID/randomInt entropy cache in snapshots/SEA |
| CVE-2026-106070 | Low      | 26       | ZipFile prefix bytes                                |
| CVE-2026-106071 | Low      | 26       | Permission model fs over-grant                      |
| CVE-2026-106073 | Low      | 22/24/26 | Permission model bypass via fs.realpathSync         |

Also bumps undici, c-ares, OpenSSL (22/24), ca-certs (eMudhra intermediate CA compromise).

## How it applies to this repo

- Hosting: goodthings.dev is served by Vercel (x-vercel-* headers) behind Cloudflare.
- Vercel only exposes major Node lines (22.x, 24.x) and rolls out patch releases itself.
  Default for new projects is 24.x. No Node version is pinned in package.json, .nvmrc, or
  a Vercel config file in the repo, so the deployed major is whatever the dashboard says.
- Server-side Node API surface is tiny: one route handler (`src/app/api/contact/route.ts`)
  that calls `crypto.randomUUID()` and uses the Resend SDK (fetch over TLS to api.resend.com).
  The TLS hostname-check CVEs and the undici/http keep-alive fix are the ones that touch
  that path. The Brotli RCE needs attacker-controlled compressed input; the app does not
  decompress untrusted data. The randomUUID issue needs snapshots/SEA; not used.
- Local dev was on Node v23.11.0, an end-of-life line that receives no fixes.
  nvm already has v24.22.1 installed.

Conclusion: the Node advisory itself needs only (a) pinning a supported major so Vercel
and local dev agree, and (b) moving local dev off Node 23.

## Other findings (higher impact than the Node advisory)

`pnpm audit` on the lockfile: 3 critical, 51 high, 35 moderate, 5 low.

- next 15.2.4: three critical RCEs (React flight protocol CVE-2025-66478 fixed 15.2.6;
  Image Optimization AVIF RCE and Windows-host RCE fixed 15.5.24), plus middleware bypass,
  SSRF, DoS, cache poisoning fixes up to 15.5.27. Latest 15.x is 15.5.28; it still accepts
  React 18 as a peer. Next 16 is a major and out of scope.
- recharts -> lodash 4.17.21 (code injection via _.template, prototype pollution). Fixed 4.18.x.
- Build/dev-time transitive deps: minimatch, brace-expansion, picomatch, flatted, js-yaml,
  postcss, nanoid, browserslist, glob, sharp. Mostly in-range updates.
- 40 open Dependabot alerts on GitHub, but no `.github/dependabot.yml`, so no update PRs.
- No CI workflow in the repo.
- README says Node 18.x (EOL since April 2025).
- `next.config.js` uses deprecated `images.domains`.

Non-blocking notes for later:

- CSP allows `'unsafe-eval'` and `'unsafe-inline'` for scripts.
- Rate limiter is an in-memory Map; on serverless each instance has its own store.
- `src/pages/*.tsx` sits where Next's Pages Router looks for routes, so files there become
  routes like `/Contact` alongside the App Router pages.
