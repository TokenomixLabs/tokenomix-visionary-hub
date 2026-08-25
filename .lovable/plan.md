# Tokenomix — Final Visual Audit (read-only)

Method: live browser captures of the full vertical sequence at 1700 / 1440 / 1280 / 1024 / 768 / 390, plus measured hero geometry and reveal-state probing. No code changed.

## VERDICT: GREEN WITH FIXES

The editorial spine, typography, chapter tone alternation and diagram language all hold. Four composition defects and a set of transition voids keep it from unqualified GREEN. One narrow visual pass is warranted — nothing structural.

## P0

1. **Mobile hero has no presence — 390px hero band measures 235px tall.**
   Section `#top` renders as a thin 16:9 strip: wordmark, tagline wrapping to two lines, and the mute control crowding the right edge inside a shallow letterbox. Desktop is 826px and reads as a full stage. On phones the site effectively opens on the Category headline, so the brand entrance is lost and the mute affordance reads like a stray floating button.

## P1

2. **Trailing summary tiles read as empty artwork panels during normal scrolling.**
   Value Architecture ("Feedback loop", 8th cell of the 4-up grid) and Intelligent Economies ("Position", 8th cell of the 3-up grid) both resolve to opacity 1 eventually, but at the sequence delays they inherit (~490ms behind their grid) a captured scroll-through shows a large tinted rectangle with no content — in Intelligent Economies it reads as a two-column dead field because the adjacent cell is genuinely empty. Visually this is the exact "missing artwork" signature.

3. **Economic Layers diagram is undersized and its caption is clipped at 768.**
   At tablet the desktop `LayerSeam` SVG is used at roughly half its intended measure; the footing label truncates mid-word ("SEPARATE AUTHORI"). Clipped typography at a real device width.

4. **Stranded closing lines with stacked voids at chapter ends.**
   "Most projects design layer one and hope the rest emerges." (Category), "Strong economies draw their boundaries in public." (Ownership), "Economic boundaries are not bureaucracy…" (Economic Layers) and "No model is correct everywhere…" (Governance) each sit alone at full width with a large empty right field and then a tall padding void before the next chapter. Read together they are the page's main source of oversized transition gaps.

5. **Research and Method open with a half-empty desktop composition.**
   At 1440/1700 both chapters place headline plus lead in the left measure with the entire right half black, while every neighbouring chapter pairs its headline with a diagram. The composition implies a visual that never arrives, so the imbalance reads as absence rather than restraint.

## P2

6. **Grid-of-tiles silhouette repeats.** Value Architecture and Intelligent Economies share nearly the same bordered tile-grid rhythm, and the numbered rail device (Ownership, Research, Method, Governance steps) repeats four times. Neither is wrong; together they slightly flatten the middle of the page.
7. **Governance chapter is the densest stack on the page** — state rail, five-step row, then a four-row tradeoff table, then a stranded closing line. At 1280 it is the one place the eye has no rest.
8. **Reveal resolution feels unfinished on fast scroll.** Late cards in long grids and rails are still mid-fade when the next chapter is already on screen. The animation's resolved state is correct; its arrival is late.

## Truth / copy states (visual reading only, no rewrite)

- Clean: "Out of scope", "Structural illustrations, not forecasts", "Position — open research territory", Research disclaimer, footer "Nothing on this site is investment advice", and the Contact/inquiry copy. Nothing on screen implies shipped infrastructure, clients, metrics or products.
- Watch item only: the "Inquiry channel" CTA is styled as the single strongest button on the page, which visually promises a working intake path. Its behaviour must remain explicitly non-submitting or clearly a mail path; the styling alone raises the expectation.

## Leave alone

- Hero video asset, Vimeo ID, mute control behaviour, wordmark and favicon.
- Colour system, gradients, Space Grotesk / IBM Plex typography, tone alternation.
- All copy, section numbering, chapter order, the seven-question ledger, Out of Scope card, Governance tradeoff table wording.
- Incentives A/B comparison, Behavior Engine and its mobile variant, Value Flow Loop, Authority Topology, Governance state rail, Agent Economy visuals.
- Footer structure, sitemap/robots/metadata, Netlify config.

## Recommended narrow pass (if approved)

Layout and geometry only, six targeted changes: give the mobile hero real vertical stature; make the trailing summary tiles resolve with the grid instead of behind it and close the empty adjacent cell; give Economic Layers a tablet-legible visual measure; tighten chapter-end voids and pull the stranded closing lines into a resolved footing; give Research and Method a right-column anchor so the composition is balanced; and shorten late reveal delays so long grids settle before the next chapter enters.

No redesign, no copy edits, no hero/video/brand changes.
