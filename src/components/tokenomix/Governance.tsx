import { Section } from "./Section";
import { Reveal } from "./Reveal";

const steps = [
  { label: "Current rule state", detail: "The economy as it operates today, legible to participants." },
  { label: "Proposal", detail: "A specific, scoped change — not a sentiment." },
  { label: "Authority & legitimacy", detail: "Whoever decides, decides within a defined mandate." },
  { label: "Rule version", detail: "The change is recorded, versioned and inspectable." },
  { label: "New economic state", detail: "Behavior shifts because the rules did, not because someone intervened." },
];

const choices = [
  ["Token voting", "Broad participation; vulnerable to concentration and apathy."],
  ["Delegated authority", "Faster, more expert; requires accountability and revocation."],
  ["Council or multisig", "Practical for small systems; scope must be explicit."],
  ["Deliberate immutability", "Strong guarantee; forfeits the ability to correct mistakes."],
];

export const Governance = () => (
  <Section
    index="08"
    eyebrow="Governance"
    title={
      <>
        Economics without a legitimate rule-change mechanism{" "}
        <span className="text-muted-foreground">is just discretion.</span>
      </>
    }
    lead={
      <p>
        Governance is not a civic add-on. It is the mechanism by which economic rules change over time —
        and every system has one, whether it is designed, inherited or hidden inside an admin key.
      </p>
    }
    className="border-y border-border/60 bg-surface/40"
  >
    <div className="mt-16 lg:mt-20">
      <ol className="grid gap-px overflow-hidden rounded-md border border-border/70 bg-border/50 md:grid-cols-5">
        {steps.map((step, i) => (
          <Reveal
            as="li"
            key={step.label}
            delay={i * 90}
            className="relative flex min-h-[180px] flex-col justify-between bg-background/85 p-6"
          >
            <span className="font-mono text-[0.65rem] tracking-[0.2em] text-accent/70">
              {i === 0 ? "STATE n" : i === steps.length - 1 ? "STATE n+1" : `STEP ${i}`}
            </span>
            <div>
              <h3 className="font-display text-base font-medium leading-snug text-foreground">
                {step.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
            </div>
            <span
              aria-hidden="true"
              className={`absolute bottom-0 left-0 h-0.5 w-full ${
                i === steps.length - 1 ? "bg-gradient-value" : "bg-primary/25"
              }`}
            />
          </Reveal>
        ))}
      </ol>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {choices.map(([name, tradeoff], i) => (
          <Reveal key={name} delay={i * 80}>
            <div className="panel h-full p-6">
              <h4 className="font-display text-base font-medium text-foreground">{name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tradeoff}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={360}>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          No single model is correct for every system. What matters is that the choice is deliberate and
          its consequences are understood before value depends on it.
        </p>
      </Reveal>
    </div>
  </Section>
);
