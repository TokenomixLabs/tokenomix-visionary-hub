# Final Independent Portfolio Certification — Tokenomix

Read-only. Nothing inherited from prior passes. Every gate re-measured live on current main at 2560 / 2048 / 1920 / 1800 / 1700 / 1440 / 1280 / 1024 / 768 / 390, with a full scroll pass at each width plus section crops for human-visible confirmation.

## FINAL CERTIFICATION VERDICT

**NOT READY** — 0 blockers, 2 MATERIAL regressions introduced by the last repair pass, 3 MINOR. Both MATERIALs are visible in a single glance at normal reading distance, so this fails a portfolio gate even though the page is structurally sound.

Counts: widows/orphans **0**, under-composed fields **3**, regressions traceable to the last pass **2**, reveal failures **0**, horizontal overflow failures **0** (0px at all ten widths).

## Gate board

| Gate | Result |
| --- | --- |
| Ownership (04) plate labels contained 768–2560 | **CLEAR.** Two-line plates (PROTOCOL / NETWORK etc.) sit fully inside their rects with padding at every width. Not cramped — verified visually at 1920. |
| Ultra-wide H2 leading | **CLEAR.** "Ownership is a system / rule, not a footnote." at 57.6px / 1.18 shows no descender-to-cap contact at 2048 or 2560. |
| Widows / orphans | **CLEAR. 0** single-word last lines across all headings, paragraphs and list items at all ten widths. Chapter footing "…boundaries in public." holds on one line at 768 and 390. |
| Design for Behavior left/right termination | **CLEAR.** No column delta above 200px at 1280–2560; the earlier ~600px dead left field is gone and the out-of-scope band does not overweight the left column. |
| Behavior Ledger semantics/scale | **CLEAR.** Checkpoint labels 13.5u render 12–16px effective, ledger height in balance with the question list. |
| Method (10) accumulation climax | **CLEAR** as a climax; label clearance acceptable (OWNERSHIP/AUTHORITY frames and BUILDER/TREASURY read as intended). |
| Intelligent Economies grid | **CLEAR.** Seven cards plus Position panel, **0** empty bordered cells at every width. |
| Reveal reliability | **CLEAR.** After a full scroll pass, 0 content elements left at opacity 0 with height > 20px. |
| Hero fallback / video | **CLEAR.** Vimeo returns 401 in this sandbox (referrer-blocked, not an app defect); the branded logo + VALUE · OWNERSHIP · INCENTIVES · GOVERNANCE fallback fills the frame with no void and the mute control stays present. |
| Final Statement emptiness | **CLEAR**, preserved. |
| Horizontal overflow | **CLEAR. 0px** at 2560/2048/1920/1800/1700/1440/1280/1024/768/390. |
| Console | **CLEAR** of app-origin errors — only Vimeo permissions-policy notices and the sandbox 401. |

## Defect board

**M1 — Diagram mono labels render larger than body copy. Incentives (03) at 768; Economic Layers (02) and Design for Behavior (06) at 1800–2560. MATERIAL. Regression.**
Raising in-SVG `fontSize` to clear the legibility floor removed the upper bound. In a 280-unit viewBox stretched to a full tablet column, `CONTRIBUTION`, `EXIT`, `SUSTAINED PARTICIPATION →` and `RETURNS TO PARTICIPATION` render at **31.9px** — twice the 16px section lead and nearly headline scale, while their own explanatory captions sit at 12px. The label shouts and the argument whispers: hierarchy is inverted. Same fault at 1800+ where `EXPLICIT INTERFACES` / `SEPARATE AUTHORITY` hit **27.2px** and the engine stage names (`USEFUL ACTION`, `CONTRIBUTION`, `INCENTIVE`, `RESPONSE`) hit **26.7px**.
Smallest repair: cap the rendered size instead of the raw unit — constrain those small-viewBox SVGs with a `max-w-[...]` (or wider viewBox) so effective label size lands in an 11.5–15px band at every width.

**M2 — Intelligent Economies (07) legend is truncated at the frame edge. 768, 1024, 1440, 1920, 2048, 2560. MATERIAL.**
The single legend run `○ HUMAN □ AGENT — CONTRIBUTION ⋯ ATTRIBUTION TRAIL` overruns the SVG box by 20–51px depending on width; on screen it reads "⋯ ATTRIBUTION TR" with the word cut mid-letter. Confirmed visually at 1440. A reader sees a broken diagram key.
Smallest repair: break the legend into two centred lines (as already done in Economic Layers) or drop the letter-spacing on that one run so it fits the viewBox.

**m3 — Incentives (03) baseline label grazes the frame bottom at 768. MINOR.**
`SUSTAINED PARTICIPATION →` sits 2px below the SVG's bottom edge, so the arrow and descenders touch the panel boundary. Smallest repair: raise that label ~6 units.

**m4 — Under-composed fields. 3 total. MINOR.**
Ownership (04) at 1920–2560: left text column ends ~300px above the diagram's baseline. Method (10) at 1280–1700: right column ends 221–247px above the left rail (400px at 1024). Incentives at 1024: 269px delta. Nothing is broken, but each row reads bottom-light on one side. Smallest repair: let the short column carry the chapter footing or the diagram legend at `lg` and above.

**m5 — Mobile page length. 390 (23,812px) and 768 (21,708px). MINOR.**
Roughly 61 phone screens end-to-end; the rhythm is long but not compressed — no giant type, no crushed spacing, no clipping at 390 (0 out-of-frame labels, 0 oversized labels, 0 ghost text).

**Actively searched and clear:** no ghost text anywhere (0 labels under 11.3px effective at all ten widths), no cramped two-line plates, no Behavior Ledger scale problem, no out-of-scope band imbalance, no Method frame crowding elsewhere, no excessive mobile compression, no new widows, no clipped or half-painted reveals, no grid holes.

## If you want these cleared

Fix M1 and M2 (both are label-geometry only, no layout change), then m3, and re-prove the same ten widths. m4 and m5 are judgment calls — say whether they are in scope.
