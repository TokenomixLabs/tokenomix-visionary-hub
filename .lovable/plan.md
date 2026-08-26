# Independent Post-Correction Re-Proof — Tokenomix

Read-only certification of current main, measured live at 2560 / 2048 / 1920 / 1800 / 1700 / 1440 / 1280 / 1024 / 768 / 390. Nothing in the previous pass was inherited; every gate was re-measured or re-viewed.

## Verdict

**GREEN WITH MINOR — with one MATERIAL cluster to clear first (diagram label overrun + ultra-wide headline leading).**

Counts: widows/orphans **1** (768/390 chapter footing), under-composed fields **4**, new regressions traceable to the fixes **3**, blockers **0**, overflow **0** at all ten widths.

## Former gates — re-proved

| Gate | Result |
| --- | --- |
| Ultra-wide shell / type scale | CLEAR. Container 1320 → 1520 (1700) → 1760 (2048+). H1 67.2 → 80 → 86.4px, H2 41.6 → 53.6 → 57.6px. No frozen type at 2560. |
| Intelligent Economies grid | CLEAR. Seven cards + Position panel, zero empty bordered cells at 2560/1440/768/390. |
| Reveal reliability | CLEAR. After a full scroll pass, 0 elements left at opacity 0 with height > 20px at every width; no half-painted tables or rails observed. |
| Former widows (`wall.` `first.` `drift.` `human-only.` `in.`) | CLEAR. All resolve on-line; Final Statement reads "worth participating in." intact. |
| Companion diagrams 04 / 05 / 07 | Present and legible in role; 04's plate labels are the defect below. |
| Behavior Ledger (06) | CLEAR and genuinely semantic — stage names (Useful Action → Contribution → Incentive → Response) map Q1–Q7 onto the engine circuit, with a "left unanswered" consequence line. Not filler. |
| Method Accumulating Structure (10) | CLEAR as a climax: the frame closes on a completed system boundary with a stated outcome line. |
| Hero fallback cap | CLEAR. No void; video composition untouched. |
| Final Statement emptiness / approved silhouettes | CLEAR, preserved. |
| Horizontal overflow | CLEAR (0px) at all ten widths. |

## Defect board

**D1 — Ownership (04) authority-topology plate labels overrun their plates. 768, 1440, 1920, 2560. MATERIAL.**
`MARKETPLACE / SERVICES`, `APPLICATION / COMMUNITY` and `PARTICIPANT / CONTRIBUTOR` extend past the right edge of the rounded plate they sit in, so the type appears to burst the box and collide with the connector stubs. A human reads this as a broken diagram, not a designed one. Smallest repair: widen the plate rects (or shorten to `MARKETPLACE`, `APPLICATION`, `PARTICIPANT` with the qualifier as a second smaller line) so every label sits inside its plate with padding.

**D2 — Ultra-wide headline leading collision. 2048, 2560. MATERIAL.**
At 57.6px H2 with `leading-[1.1]`, descenders touch the following cap line — clearest on "Ownership is a system / rule, not a footnote." (the `y` of "system" grazes "rule"). Smallest repair: relax leading one step at `3xl`/`4xl` (e.g. `3xl:leading-[1.14]`).

**D3 — Explanatory SVG labels below the legibility floor. MATERIAL (worst at 1440 and 768).**
The 12px floor was applied to HTML captions but not to in-SVG labels, which scale with the diagram: Incentive/Behavior map renders `CONTRIBUTION` at 8.8px and `EXIT` at 8.4px at 1440; the 7-stage value topology renders its stage ring at 8.1–8.5px at 768. These read as ghost text. Smallest repair: raise those `fontSize` values so the rendered size (fontSize × svg scale) stays ≥ 11.5px at the narrowest rendered width.

**D4 — Design for Behavior (06): new empty field under the question list. 1440–2560. MATERIAL (regression from the fix).**
The Behavior Ledger column is far taller than the seven questions, leaving roughly 600px of dead left column below Q7 before the out-of-scope band. The fix cured the right void and created a left one. Smallest repair: let the questions column carry the out-of-scope band's first cell, or cap the ledger's height / drop the sticky offset so the two columns end within ~120px of each other.

**D5 — Ownership (04) and Intelligent Economies (07) intro rows under-composed at 2560. MINOR.**
Left text column ends ~250px above the diagram's baseline and the diagram's own column has ~200px of trailing air, so the row reads bottom-light. Smallest repair: add the chapter footing line or the diagram legend into the short column at `4xl`.

**D6 — Chapter footing widow. 768 and 390. MINOR.**
"Strong economies draw their boundaries in / public." leaves a one-word last line. Smallest repair: non-breaking space between "in" and "public."

**D7 — Method (10) structure labels crowd. 1440. MINOR.**
`STRESS` sits between `VALIDATOR` and `TREASURY` with ~2px clearance, and the `OWNERSHIP` dashed frame runs under the `BUILDER` label. No clipping, but it reads as accidental. Smallest repair: nudge `STRESS` up-left and inset the ownership frame.

**D8 — Research (09) detail column reads as ghost text. 1440–2560. MINOR.**
13px muted descriptions sit ~300px right of their 24px titles; the pairing loses its bond and the small type looks faded. Smallest repair: raise the detail size one step at `3xl` and tighten the column gap.

**D9 — Page length at small widths. 390 (24,194px) and 768 (21,226px). MINOR.**
Roughly 62 phone screens end-to-end. Nothing is broken, but the mobile rhythm is long. Smallest repair: reduce the standard mobile section rhythm one step (`py-20` → `py-16` below `md`).

**Checked and clear:** no duplicate/repetitive engine visuals (the ledger and the engine share vocabulary but not silhouette), no Behavior Ledger or Accumulating Structure label clipping at 768/390 (0 out-of-frame SVG labels at every width), no generic decorative animation added, no new grid-span awkwardness, no overflow, no console errors originating in app code (only Vimeo permissions-policy notices and one 401 from the Vimeo embed).

## If you approve

I will fix D1–D4 first (the MATERIAL cluster), then D6–D8, and re-prove the same ten widths. D5 and D9 are judgment calls — say the word if you want them in or out.
