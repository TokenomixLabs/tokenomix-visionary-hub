# Tokenomix — Release Readiness Audit (read-only)

Verified against source plus a real Chromium session at 1700 / 1440 / 1280 / 1024 / 768 / 390, including reduced-motion and keyboard passes. No code was changed.

## BLOCKER

**1. Hero has no fallback when the Vimeo iframe fails to load.**
In the sandbox session the Vimeo request returned HTTP 401 and the hero rendered Cloudflare's own page inside the frame: a white serif headline "We couldn't verify the security of your connection. Access to this content has been restricted. Contact your internet service provider for help." That is what the top 100% of the first viewport showed at every width tested. The sandbox IP is the likely cause of the 401, so this is probably not what a normal visitor sees — but the underlying defect is real and environment-independent: `src/components/HeroVideo.tsx` renders a bare `padding:56.25%` iframe with no poster, no brand fallback layer behind it, and an `ErrorBoundary` that only catches React render errors, never an iframe that loads foreign content. Any visitor on a network, extension, or region that blocks `player.vimeo.com` sees a third-party error screen as the first impression of the brand. The video and logo themselves stay exactly as they are; only a layer behind/around the frame is needed.

## HIGH

**2. The page has no `<h1>`.** The rendered heading list at every width starts at `H2` ("Tokenomics is not a pie chart..."). The only `h1` in the codebase is inside `ErrorBoundary`'s fallback. Document outline and SEO both read this as a page with no topic.

**3. Head metadata is incomplete for release.** `index.html` has title, description, og:title/description/type and twitter:card/title/description, but is missing `<link rel="canonical">`, `og:url`, `og:image` / `twitter:image`, and `og:site_name`. `public/og-image.png` exists in the repo and is referenced by nothing.

**4. No `robots.txt` and no `sitemap.xml`.** `public/` contains only `favicon.ico`, `og-image.png`, `placeholder.svg`, `lovable-uploads/`.

**5. Mute toggle is unverifiable and likely non-functional.** `HeroVideo.tsx` unmutes by posting a raw object (`{method:'setVolume', value:1}`) to the iframe rather than using the `@vimeo/player` instance it imports and then discards. The video is muted in the URL (`muted=1`), so unmuting also needs `setMuted(false)`, not volume alone. It could not be exercised because the frame never loaded. This is the same class of bug reported earlier as "two taps to get sound".

## MEDIUM

**6. Two body diagrams still vanish on mobile with no substitute.** Measured at 390: `#intelligent-economies` renders its `AgentEconomyNetwork` svg at 0x0, and `#incentives` renders `IncentiveBehaviorMap` at 0x0. `Section` hides `visual` below `md` and only three sections supply a `mobileVisual` (ValueFlowLoop, AuthorityTopology, GovernanceStateTransition — all three confirmed rendering at readable sizes on 390: 342x276 and 342x428). Intelligent Economies is a pillar chapter and loses its argument entirely on phones.

**7. Netlify has no SPA fallback.** `netlify.toml` declares build and publish only, no `/* -> /index.html 200` redirect. Any deep link or typo'd path returns Netlify's raw 404, and `App.tsx` has no catch-all route either.

**8. 60 elements are animating simultaneously on mobile.** Counted live at 390. `.motion-settle` caps some at three iterations, but the count is high for low-end phones. Not a correctness failure — worth a pass before release.

**9. Decorative glow overflows the mobile viewport.** `FinalStatement.tsx`'s `h-[520px] w-[520px]` blur element measures right edge 455px in a 390px viewport. No horizontal scroll results (`document.scrollWidth === 390` at every width, and zero overflow items at 768–1700), so this is cosmetic only.

## LOW

**10. Dead legacy video code.** `src/components/video/VideoBackground.tsx` and `src/components/video/MuteButton.tsx` are imported by nothing; `VideoBackground` does `document.querySelector('iframe')` and would fight the live hero if ever remounted. `HeroVideo.tsx` also has unused `AspectRatio` and `isMobile`.

**11. Console noise.** Beyond the Vimeo 401 chain: permissions-policy warnings for `xr-spatial-tracking` / `cross-origin-isolated` / `keyboard-map` (Vimeo's own frame), a Cloudflare Turnstile double-render warning, `Failed to create WebGPU Context Provider`, and one `OTS parsing error` on a Google-hosted WOFF2 at 390. All third-party; none affect the app.

**12. Eyebrow type is at the low end of legibility** — `0.68rem` uppercase at `0.28em` tracking in `muted-foreground`. Readable but the tightest text on the site.

## CLEAN

- Zero horizontal overflow at 1700 / 1440 / 1280 / 1024 / 768 / 390.
- All seven in-page anchors resolve: `#top`, `#architecture`, `#incentives`, `#ownership`, `#intelligent-economies`, `#research`, `#contact`. Both nav and footer nav.
- No fake form and no fake success state. `Contact.tsx` carries an explicit "contact capture is not connected" note, a `disabled` fieldset, and a button labelled "Inquiry channel not connected".
- No placeholder social links anywhere; the footer uses a text tagline instead.
- Reduced motion honoured: animation durations collapse to `1e-06s` and full text content (11,749 chars) still renders.
- Keyboard focus reaches every interactive control in DOM order with a visible `2px` outline; the mute button and menu button both carry `aria-label`.
- Both logo images have `alt="Tokenomix"` and load (naturalWidth 500). Favicon is the correct green/blue mark.
- Heading nesting is consistent (H2 chapters, H3 items, H4 governance options) once an H1 exists above it.
- Body-copy contrast is comfortable (light text on the near-black `240 32% 5%` background).
- Legacy "Growth Hacking" phrasing: **not present** in the current source. Nothing to flag.
- Conceptual wording: Research is explicitly framed as "Current research territory, not a client logo wall", Method as "A design method, not a service menu", and the footer disclaims investment advice. No material misrepresentation of product or category found.

## RELEASE VERDICT: GREEN WITH FIXES

Everything structural, semantic, responsive, accessible and truthful holds up. The one thing standing between this and a release is that the first viewport is a third-party iframe with nothing behind it.

## Smallest exact fix set

1. `HeroVideo.tsx` — add a brand fallback layer behind the iframe (dark gradient plus the existing logo mark), give the iframe a load-timeout state that keeps that layer visible if Vimeo never reports ready, and keep the video, ID `1047625994`, and mute control untouched.
2. `HeroVideo.tsx` — drive mute through the `@vimeo/player` instance (`setMuted` + `setVolume`) instead of raw `postMessage`, fixing the double-tap.
3. `CategoryStatement.tsx` — promote the opening thesis to `h1` (visual scale unchanged), and demote nothing else.
4. `index.html` — add canonical `https://tokenomix-visionary-hub.lovable.app/`, `og:url`, `og:site_name`, and point `og:image` / `twitter:image` at the existing `og-image.png` published URL.
5. Add `public/robots.txt` and `public/sitomap.xml` (single-URL sitemap).
6. Add a mobile variant for `AgentEconomyNetwork` and wire `mobileVisual` on Intelligent Economies; leave `IncentiveBehaviorMap` desktop-only since that chapter's list content is self-sufficient.
7. `netlify.toml` — add the `/* -> /index.html 200` SPA redirect.
8. `FinalStatement.tsx` — clamp the decorative glow so it stays inside the viewport at 390.
9. Delete `src/components/video/VideoBackground.tsx` and `src/components/video/MuteButton.tsx`; drop the unused imports in `HeroVideo.tsx`.

Items 1–3 are the release-critical set; 4–9 are the same-pass cleanup. Nothing here redesigns a chapter, changes the palette, or rewrites copy.
