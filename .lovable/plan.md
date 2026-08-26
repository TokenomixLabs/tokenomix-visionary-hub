# Tokenomix — Portfolio Art-Direction Release Audit

Read-only. No code changed. All prior GREEN verdicts revoked. Evidence: settled-state captures and computed measurements at 2560 / 2048 / 1920 / 1800 / 1700 / 1440 / 1280 / 1024 / 768 / 390.

## FINAL ART-DIRECTION VERDICT: NOT READY

Counts:
- Headline widows/orphans: **7 distinct** (5 H2, 2 H3), the worst present at every width from 1024 up.
- Under-composed / dead-space sections: **6**.
- Sections that genuinely merit a new motion or system graphic: **3**.

Measured hard facts behind the verdict:
- The layout container is capped at **1320px**. At 2560 that is 52% of canvas with **620px of black on each side**; at 2048, 355px per side.
- Section headlines are frozen at **41.6px from 1024px all the way to 2560px**. Type never scales with the canvas. Only the first statement (67.2px) and the closer (60px) step up.
- Page silhouette is one repeated device: intro + companion diagram, then a full-width ruled ledger. That pattern repeats in sections 01, 04, 05, 06, 07, 08, 09, 10.

---

## Defect board

### D1 — Global / whole page, 2560 and 2048
**Defect:** Content locked to 1320px inside a 2560 canvas with no ultra-wide tier; nav lockup also confined, so the logo sits ~620px in from the left edge and the nav ends ~620px short of the right.
**Severity: BLOCKER.**
**Why a human reads it as unfinished:** it looks like a 1400px site being viewed zoomed-out, not a composition made for the screen. The eye finds two enormous empty vertical bands framing everything, and the black is not doing anything — no rule, no index, no counterweight.
**Smallest safe repair:** add an ultra-wide container tier (e.g. 1440 at ≥1700, 1600 at ≥2048) plus one ultra-wide type step so section H2 reaches ~52–56px at ≥1920. Optionally anchor the left band with a thin persistent chapter index rail (`01 … 11`) so the outer field becomes deliberate structure rather than leftover.
**Present at:** 2048 yes, 1920 yes (milder), 1700 yes (mild), tablet/mobile no.

### D2 — Section 07 Intelligent Economies, seven-card grid
**Defect:** Seven cards in a three-column tinted grid leave a **two-cell empty tinted rectangle** in the final row, with visible borders, so it reads as content that failed to load.
**Severity: MATERIAL.**
**Why:** a bordered, tinted, empty cell is the single most legible "missing content" signal on a page. Human viewers do not read it as whitespace.
**Smallest safe repair:** make card 07 span the remaining two columns (mirror of the existing Position panel treatment), or move one card into the intro column to land a 3+3 grid.
**Present at:** 2048 yes, 1920 yes, 1700 yes, 1440/1280 yes, tablet/mobile no (single column).

### D3 — Section 06 Design for Behavior, lower right field
**Defect:** After the four-node engine diagram and its caption end (~y700), the question rail occupies only the left half. The result is a roughly **1200 x 600 completely empty field** in the lower right at ≥1440, growing to ~1600 wide at 2560.
**Severity: MATERIAL.**
**Why:** the section's own thesis is that an economy is a running engine, and the largest area of the frame is blank. It reads as a graphic that was planned and never delivered.
**Smallest safe repair / graphic warranted — yes:**
- Concept: **Behavior Ledger** — the seven questions on the left become live checkpoints on the existing engine circuit. A single value packet travels the loop USEFUL ACTION → CONTRIBUTION → INCENTIVE → RESPONSE; as the packet passes each stage, the matching question row on the left illuminates and a short consequence line writes itself into the right field ("unrewarded → behavior stops", "over-rewarded → abuse becomes profitable").
- What moves: the packet, the stage highlight, the question-row emphasis, and a one-line consequence readout.
- What it communicates: incentives are a circuit with checkpoints, and each unanswered question is a specific failure mode.
- Register: **scroll-linked** (packet position mapped to section progress), with an ambient idle loop when the section is parked. No hover dependency.
**Present at:** 2048 yes, 1920 yes, 1700 yes, mobile no (stacks).

### D4 — Reveal states settling half-finished inside bordered panels
**Defect:** In section 05 Economic Layers the five-row layer table sits in a bordered panel; at settled capture only three rows were painted, leaving ~200px of empty ruled panel. Section 10 Method shows the same: items 06–07 unpainted with the vertical rail continuing ~450px into nothing. Stagger delays reach ~490ms on top of a 700ms transition.
**Severity: MATERIAL.**
**Why:** unlike free-flowing text, a bordered container or a rail that runs past its last item makes the gap look like a load failure rather than an animation in progress.
**Smallest safe repair:** cap the per-item stagger (~40ms, max ~200ms total), shorten the transition to ~450ms, and trigger the observer earlier (rootMargin ~15% below the fold) so rails and panels are complete before they are centred. Rails should be sized to painted items.
**Present at:** 2048 yes, 1920 yes, 1700 yes, tablet/mobile yes.

### D5 — Headline widows and orphans
**Defect (7 distinct):**
1. "Current research territory, not a client logo wall." → **"wall."** alone, centred, last line 10% of measure. Present 2560 → 1024.
2. "Economies are behavior engines. Design the behavior first." → **"first."** alone. Present 2560 → 1024.
3. "Value follows the paths you design. Everything else is drift." → **"drift."** alone at 1280.
4. "When machines participate, economics stops being human-only." → **"human-only."** alone at 1024 and 390.
5. "A design method, not a service menu." → orphan at 768.
6. "Build an economy worth participating in." → **"in."** alone at 390.
7. H3 orphans: "Who owns the community or application layer?" (1024) and "Treasury, allocation & governance logic" (390).
**Severity: MATERIAL** (1 and 2 are centred, which makes the stranded word unmissable).
**Why:** a single word alone under a centred display line is the classic "nobody art-directed this" tell.
**Smallest safe repair:** `text-wrap: balance` on section headings plus non-breaking joins on the specific two-word tails; tune headline max-width per breakpoint rather than one global measure.
**Present at:** 2048 yes (2), 1920 yes (2), 1700 yes (2), tablet 1, mobile 3.

### D6 — Companion diagrams top-anchored, leaving lower-right voids
**Defect:** In sections 04, 05, 07 the diagram occupies only the upper portion of its column and sits left inside it, leaving 400–600px of empty canvas to its right and below before the ledger starts. Intro-to-ledger gaps measure ~140–200px at ≥1920.
**Severity: MINOR.**
**Why:** the diagram feels dropped in rather than composed against the text block; the void is not cinematic because a hard ruled ledger begins immediately underneath.
**Smallest safe repair:** let diagrams fill their column width at ≥1700, and tighten the intro-to-ledger gap by ~30%.
**Present at:** 2048 yes, 1920 yes, 1700 yes, mobile no.

### D7 — Microcopy too small for the canvas
**Defect:** 17 elements below 12.5px carry real content. Worst: SVG legends and captions at **10.4px / 10.88px** ("Where standing accumulates", "Participation → contribution → attribution →"), muted-foreground on near-black, unchanged at 2560.
**Severity: MINOR** (accessibility-adjacent).
**Why:** at a 27" viewing distance the diagram legends — the part that makes each graphic legible — become grey texture.
**Smallest safe repair:** floor diagram legends at 12px and step to 13–14px at ≥1700; lift caption colour one step.
**Present at:** 2048 yes, 1920 yes, 1700 yes, mobile yes (9.92px hero tagline).

### D8 — Sections 09 Research and 10 Method have no visual voice
**Defect:** Both are centred head plus a plain ruled list, zero graphic, and both trail ~200–450px of empty canvas. Section 10 is the page's method climax and is visually the flattest thing on the page.
**Severity: MINOR to MATERIAL** (weak climax before the closer).
**Graphic warranted — yes, for 10 only:**
- Concept: **Accumulating Structure** — as the seven method steps reveal, a small companion diagram assembles one element per step: actors appear as nodes, value flows draw as edges, rights render as boundary boxes, failure tests flash stress on the weakest edge, governance closes the loop, evolution scales the whole graph down and redraws it at 10x density.
- What moves: one construction event per step, then a single scale-and-redraw at the final step.
- What it communicates: the method is cumulative — the artefact is a finished system, not a checklist.
- Register: **scroll-linked**, one-directional, holds its final state.
- Section 09 should stay list-only; a graphic there would compete with the closer.
**Present at:** all widths.

### D9 — Hero, mobile and ultra-wide
**Defect:** In this sandbox Vimeo is network-blocked, so the branded fallback is what renders: at 2560 it is a **1456px-tall** near-black field with a centred logo lockup. Mobile is clamped to 560px and reads correctly.
**Severity: MINOR / UNVERIFIED.**
**Why:** at 2560 the fallback alone is a very long empty entrance; with video playing it is intentional and cinematic. Cannot be proven here.
**Repair:** none in code. Cap fallback height at ~820px so a video failure never produces a 1456px void, and smoke-test playback plus one-tap unmute on the published domain.
**Present at:** 2048/1920 yes (1168 / 1096px), mobile no.

### CLEAR — genuinely intentional emptiness, leave alone
- **Section 11 Final Statement:** centred lockup, single gradient CTA, wide dark surround. This reads as a deliberate cinematic close at every width, 2560 included. Do not fill it.
- **Section 01 headline block:** the 67.2px two-line statement with gradient second line is the strongest frame on the page.
- **Footer:** correctly proportioned, disclaimer legible, truth-gating language ("Inquiry channel") honest and not misleading.
- **Diagram silhouettes** (value topology, authority topology, layer seam, agent network, behavior engine): ownable, non-clichéd, on-brand. Keep as designed.

---

## Proposed fix pass (for approval, in priority order)

1. Ultra-wide tier: container steps at ≥1700 / ≥2048, plus one headline size step at ≥1920 (D1).
2. Close the seven-card hole in Intelligent Economies (D2).
3. Reveal timing and rail sizing so no bordered panel or rail ever settles half-painted (D4).
4. Headline balancing and per-breakpoint measures to clear all 7 widows (D5).
5. Diagram column fill and gap tightening; legend type floor and contrast lift (D6, D7).
6. Behavior Ledger scroll-linked graphic for section 06 (D3).
7. Accumulating Structure scroll-linked graphic for section 10 (D8).
8. Cap hero fallback height (D9).

No copy, logo, hero asset, palette, typeface or diagram silhouette changes are proposed.

### Technical notes
- Container cap lives in `tailwind.config.ts` (`container`); heading scale lives in `Section.tsx`.
- Reveal stagger and duration live in `src/components/tokenomix/Reveal.tsx` plus the per-item `delay={i * 60|70}` call sites.
- Seven-card grid is `IntelligentEconomies.tsx`; behavior field is `DesignForBehavior.tsx` + `BehaviorEngine.tsx`; method rail is `Method.tsx`.
- New graphics follow the existing pattern: desktop SVG component plus a portrait `mobile/` variant wired through `Section`'s `visual` / `mobileVisual` props.
