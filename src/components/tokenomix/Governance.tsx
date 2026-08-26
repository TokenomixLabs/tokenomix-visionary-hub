import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { GovernanceStateTransition } from "./GovernanceStateTransition";
import { GovernanceStateTransitionMobile } from "./mobile/GovernanceStateTransitionMobile";
import { ChapterFooting } from "./ChapterFooting";

const steps = [
  { marker: "STATE n", label: "Current rule state", detail: "The economy as it operates today, legible to participants." },
  { marker: "STEP 1", label: "Proposal", detail: "A specific, scoped change — not a sentiment." },
  { marker: "STEP 2", label: "Authority & legitimacy", detail: "Whoever decides, decides within a defined mandate." },
  { marker: "STEP 3", label: "Rule version", detail: "The change is recorded, versioned and inspectable." },
  { marker: "STATE n+1", label: "New economic state", detail: "Behavior shifts because the rules did, not because someone intervened." },
];

const choices = [
  { name: "Token voting", gives: "Broad participation and open standing", forfeits: "Resilience against concentration and apathy" },
  { name: "Delegated authority", gives: "Speed and applied expertise", forfeits: "Simplicity — it requires accountability and revocation" },
  { name: "Council or multisig", gives: "Practical coordination at small scale", forfeits: "Implicit trust — scope must be written down" },
  { name: "Deliberate immutability", gives: "A guarantee nothing can be quietly changed", forfeits: "The ability to correct a mistake" },
];

export const Governance = () => (
  <Section
    index="08"
    eyebrow="Governance"
    title="Economics without a legitimate rule-change mechanism is just discretion."
    lead={
      <p>
        Governance is the mechanism by which economic rules change over time. Every system has one,
        whether it is designed, inherited or hidden inside an admin key.
      </p>
    }
    tier="pillar"
    tone="tint"
    visual={<GovernanceStateTransition className="mx-auto max-w-[28rem] lg:max-w-none" />}
    mobileVisual={<GovernanceStateTransitionMobile />}
    visualSide="right"
  >
    <div className="mt-16 lg:mt-20">
      {/* Stepped state rail — no boxes, the hairline carries the sequence. */}
      <ol className="relative border-t border-border/70 md:flex md:border-t-0">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 hidden h-px w-full bg-gradient-value opacity-30 md:block"
        />
        {steps.map((step, i) => (
          <Reveal
            as="li"
            key={step.label}
            delay={i * 90}
            className="relative flex-1 border-b border-border/70 py-6 md:border-b-0 md:pr-8 md:pt-8"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 hidden h-2 w-px bg-border md:block"
            />
            <span
              className={`font-mono text-[0.75rem] tracking-[0.2em] ${
                i === steps.length - 1 ? "text-signal" : "text-accent/80"
              }`}
            >
              {step.marker}
            </span>
            <h3 className="mt-4 font-display text-base font-medium leading-snug text-foreground md:text-lg">
              {step.label}
            </h3>
            <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-muted-foreground 3xl:text-[1.02rem]">
              {step.detail}
            </p>
          </Reveal>
        ))}
      </ol>

      {/* Model comparison — what each choice gives, and what it gives up. */}
      <div className="mt-16 overflow-hidden rounded-md border border-border/70">
        <div className="hidden grid-cols-[1fr_1.1fr_1.1fr] gap-8 border-b border-border/70 bg-background/40 px-6 py-4 md:grid">
          <span className="eyebrow">Model</span>
          <span className="eyebrow">What it gives</span>
          <span className="eyebrow">What it forfeits</span>
        </div>
        {choices.map((choice, i) => (
          <Reveal
            key={choice.name}
            delay={i * 80}
            className={`grid gap-2 px-6 py-6 md:grid-cols-[1fr_1.1fr_1.1fr] md:items-baseline md:gap-8 ${
              i !== 0 ? "border-t border-border/70" : ""
            }`}
          >
            <h4 className="font-display text-base font-medium text-foreground md:text-lg">
              {choice.name}
            </h4>
            <div className="md:contents">
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:mt-0">
                <span className="eyebrow mr-2 md:hidden">Gives</span>
                {choice.gives}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-signal/80 md:mt-0">
                <span className="eyebrow mr-2 md:hidden">Forfeits</span>
                {choice.forfeits}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <ChapterFooting delay={360}>
        No model is correct everywhere. What matters is that the tradeoff was chosen, not inherited.
      </ChapterFooting>
    </div>
  </Section>
);
