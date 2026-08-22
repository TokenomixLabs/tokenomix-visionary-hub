# Tokenomix — Final Art-Direction Audit (findings only, no changes)

Reviewed the live render at 1440px (13,693px tall) and 390px (20,435px tall), plus current source. Hero video, logo, positioning and research/product-state distinctions untouched in all recommendations.

## 1. Mobile loses the entire explanatory layer (highest value)

**Issue.** `Section.tsx` hides every `visual` below `md`, so all five diagrams (ValueFlowLoop, IncentiveBehaviorMap, AuthorityTopology, LayerSeam, AgentEconomyNetwork, GovernanceStateTransition) disappear on phones. Mobile becomes 20,000px of text and stacked cards with no system imagery at all — the exact opposite of the desktop argument.

**Why it matters.** The diagrams are now the strongest proof that this is an architecture practice, not a consultancy. On mobile the site reverts to a generic dark text site, and mobile is where most first impressions land.

**Treatment.** Author mobile variants rather than hiding: strip internal labels, keep 2–3 anchor labels, widen stroke weights, target a 4:5 portrait viewBox, and render full-bleed edge-to-edge (breaking the container) with one mono caption line underneath carrying the meaning the labels used to carry. Priority order: ValueFlowLoop, AuthorityTopology, GovernanceStateTransition. LayerSeam and the incentive strips can stay desktop-only.

## 2. Repetition of one grid device across six sections

**Issue.** Sections 02, 04, 07, 08 (both grids) and 10 all resolve into the same artifact: bordered `gap-px` tile grid, mono index in the corner, title, two-line body — plus a pulsing dot on many of them. Section 09 (Research) is the only structurally different list, and it is the most confident block on the page.

**Why it matters.** Uniform containers flatten hierarchy; the reader cannot tell which sections are pillars and which are supporting detail. It also reads as template output, which undercuts the "designed system" claim.

**Treatment.** Allow the tile grid in at most two places (ValueArchitecture as the value spine, IntelligentEconomies). Recast the others onto distinct structures: Ownership's six questions as a numbered rule list in the Research pattern; Governance's four models as a single comparison row with an explicit tradeoff column; Method as a stepped horizontal rail (see 5). Remove the per-card pulsing dots — reserve pulse for diagrams only.

## 3. Section seams are soft and the page reads as one field

**Issue.** Each section ends with a small muted paragraph followed by 300–400px of empty ground before an almost invisible hairline. Only ValueArchitecture carries a surface tint (`border-y bg-surface/40`); everything else is the same background, so twelve sections read as one continuous scroll with no chapters.

**Why it matters.** Without seams there is no pacing, and long-form editorial work depends on pacing. It also makes the page feel longer than it is.

**Treatment.** Two-value vertical scale only (`py-28` standard, `py-40` for the three pillar sections); alternate `bg-surface/30` on every other section so tint marks the chapter change; at each seam place the section index and eyebrow directly against a full-width hairline (index as a hanging marker in the left gutter). Cut the trailing muted paragraphs to one line or fold them into the lead.

## 4. Heading hierarchy is single-level and the two-tone device is a tic

**Issue.** Nearly every H2 uses the same construction — white first clause, muted or violet second clause ("…not a footnote", "…not a client logo wall", "…not a service menu", "Everything else is drift"). Sizes are also near-identical between a pillar section and a supporting one, while `titleWide` produces an inconsistent jump in two places.

**Why it matters.** When every heading has the same rhetorical shape and weight, none of them land, and the reader stops registering the structure of the argument.

**Treatment.** Fix exactly three heading scales: opening statement, section, closing statement. Reserve the two-tone construction for three headings only (opening, Intelligent Economies, closing); render the rest as flat foreground with the emphasis carried by scale and the mono index. Trim every lead to two sentences maximum — several are currently four lines at full measure and compete with the headline.

## 5. Method (10) and Governance model cards now read as the weakest blocks

**Issue.** Both are diagram-free card grids sitting after sections that just raised the bar. Method's seven items in a 4-column grid leave a visibly empty eighth cell, and the row of four governance model cards is the most generic composition on the page.

**Why it matters.** Method is where a prospective collaborator decides whether the practice is rigorous. An empty grid cell is a craft error visible at a glance.

**Treatment.** Rebuild Method as a numbered stepped rail — seven rows, hanging mono index, hairline rules, no boxes — which removes the empty-cell problem entirely and echoes Research without copying it. Give Governance's four models a comparison row with a shared "what it forfeits" column instead of equal-weight cards. No new graphics needed for either.

## Secondary note — motion cadence

All diagram animations loop continuously at similar tempo, so with two diagrams near the fold the page has constant ambient movement. Recommendation: run each diagram's flow animation two or three cycles after reveal, then hold static; keep only one slow breathing element per viewport.
