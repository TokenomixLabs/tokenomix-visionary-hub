# Tokenomix — Production Readiness Census (read-only audit)

No code changed. Visual branch, logo, hero video (Vimeo 1047625994), diagrams and copy untouched.

## Deployed-domain state (measured, not inferred)

- `https://tokenomix.io/` → 301 → `https://www.tokenomix.io/` (WWW canonical mapping works).
- `https://www.tokenomix.io/` → 200, served by **Netlify** (`server: Netlify`, `x-nf-request-id`).
- Live `<title>` is already `Tokenomix — Value Architecture for Intelligent Systems`, i.e. the **current approved site is deployed** — not an older consulting site. But the live page's `og:url` still reads `https://tokenomix-visionary-hub.lovable.app/`, confirming deployment parity with the current source (including its defects).
- `/og-image.png` 200 image/png, `/robots.txt` 200, `/sitemap.xml` 200, brand logo PNG 200.
- `/nonexistent-route` → 200 HTML (SPA fallback active, as configured).

## Census

| Item | State | Evidence |
|---|---|---|
| `<title>` (67 chars, on-brand) | READY | index.html:6 |
| Meta description (200 chars — over the ~160 useful limit, will truncate in SERPs) | WRONG | index.html:7 |
| `meta author` | READY | index.html:8 |
| Canonical | WRONG — points at `tokenomix-visionary-hub.lovable.app` instead of `https://www.tokenomix.io/` | index.html:10 |
| `og:title` / `og:description` / `og:type` / `og:site_name` | READY | index.html:12-15 |
| `og:url` | WRONG — lovable.app host | index.html:16 |
| `og:image` / `twitter:image` | WRONG host (asset itself exists and is valid) | index.html:17,21 |
| OG image asset suitability | READY — 1200x629 PNG, 228 KB (1px under the 630 ideal, harmless) | public/og-image.png |
| `twitter:card` / title / description | READY | index.html:18-20 |
| Favicon (PNG) | READY but suboptimal — logo is a 500x75 wordmark, so it renders as an illegible sliver in a square tab icon | index.html:23, public/lovable-uploads/42221e45… |
| `favicon.ico` | UNREFERENCED — file exists in `public/` but no `<link>` uses it | public/favicon.ico |
| `apple-touch-icon` | MISSING | index.html |
| `manifest.webmanifest` | MISSING | — |
| `theme-color` | MISSING | index.html |
| JSON-LD / schema | MISSING — no Organization or WebSite schema | index.html |
| robots.txt | WRONG — `Sitemap:` line points at the lovable.app host | public/robots.txt:4 |
| sitemap.xml | WRONG — `<loc>` is the lovable.app host; also no `<lastmod>` | public/sitemap.xml:4 |
| Hardcoded lovable.app/preview/localhost | WRONG — 4 in index.html, 1 in robots.txt, 1 in sitemap.xml. No `localhost` or `id-preview` hardcodes anywhere in `src/` | see above |
| `lovable-uploads/*` image paths in components | READY — these are real files in `public/`, served 200 on the live domain; not a preview dependency | HeroNavigation.tsx:36, HeroVideo.tsx:28, Footer.tsx:17 |
| `cdn.gpteng.co/gptengineer.js` script tag in production HTML | WRONG for a production build — third-party editor script, extra request and external dependency on the public site | index.html:31 |
| Stale legacy consulting wording | READY — no "consulting/advisory/strategy" legacy copy remains; only the intentional "not a pie chart" line | CategoryStatement.tsx:24 |
| Build/hosting config | READY — `netlify.toml` build `npm run build`, publish `dist`, Node 18.19.0 | netlify.toml |
| SPA routing | READY — `/*` → `/index.html` 200, verified live | netlify.toml:10-13 |
| Publish directory | READY — `dist` matches Vite default | netlify.toml:6 |
| Router surface | READY — single `/` route, no 404 route needed but also none defined | src/App.tsx |
| Security/cache headers (HSTS, X-Frame-Options, long-cache for hashed assets) | MISSING | netlify.toml |
| Video/embed production concerns | UNVERIFIED — Vimeo is blocked from this sandbox, so playback, fade-over-fallback and one-tap unmute can only be confirmed on the live domain (desktop + iOS Safari) | HeroVideo.tsx |
| `NPM_FLAGS = "--legacy-peer-deps"` | UNVERIFIED — masks peer-dep conflicts; harmless today, worth revisiting | netlify.toml:3 |

## Smallest safe fix set (code-fixable, no visual change)

1. `index.html:10,16,17,21` — repoint canonical, `og:url`, `og:image`, `twitter:image` to `https://www.tokenomix.io/`.
2. `index.html:7` — trim meta description to ~155 chars, keeping the lead sentence.
3. `public/robots.txt:4` and `public/sitemap.xml:4` — repoint to `https://www.tokenomix.io/`; add `<lastmod>`.
4. `index.html` — add `apple-touch-icon`, `theme-color` (brand dark background), `link rel="icon"` for the existing `favicon.ico`, and a square favicon crop of the brand mark so the tab icon is legible.
5. `index.html` — add Organization + WebSite JSON-LD (name, url `https://www.tokenomix.io/`, logo).
6. `index.html:31` — remove the `cdn.gpteng.co` script from the shipped HTML (or leave it if editor tagging in preview is preferred; this is a judgment call, not a defect that breaks the site).
7. `netlify.toml` — add a `[[headers]]` block: HSTS, `X-Content-Type-Options`, `Referrer-Policy`, and immutable caching for `/assets/*`.

Optional, only if PWA-style installability is wanted: add `manifest.webmanifest`. Not needed for a one-page marketing site.

## Infrastructure / domain-binding / deployment (not code)

- Domain + WWW canonical + SPA fallback are already correct and live. No DNS work required.
- After the metadata fix deploys, force a re-scrape in a link-preview debugger (LinkedIn, Facebook, X, Slack) — crawlers cache the old lovable.app preview.
- Submit `https://www.tokenomix.io/sitemap.xml` in Google Search Console after the sitemap host is corrected.

## Production-domain smoke checks still required (cannot be done from the sandbox)

1. Hero video plays and fades over the branded fallback on desktop Chrome and iOS Safari.
2. One-tap mute/unmute works on both.
3. Social preview renders the OG image after a forced re-scrape.
4. Reduced-motion setting still yields a legible hero.

**Verdict: source code is GREEN WITH FIXES** — all defects are metadata/host-string level; nothing structural, visual, or copy-related blocks production.
