import { Section } from "./Section";
import { Reveal } from "./Reveal";

const stages = [
  {
    key: "Participation",
    body: "Someone enters the system with intent — to use, build, curate, secure or govern.",
  },
  {
    key: "Contribution",
    body: "Intent becomes work: liquidity, code, judgment, moderation, distribution, data, compute.",
  },
  {
    key: "Attribution",
    body: "Contribution is recognised and attached to an identity, agent or account. Unattributed value leaks.",
  },
  {
    key: "Rights & entitlement",
    body: "Attribution resolves into what a participant may claim, access, use or decide.",
  },
  {
    key: "Incentive",
    body: "Reward flows to the actors whose behavior the system genuinely depends on.",
  },
  {
    key: "Governance",
    body: "Rules change transparently, with a legitimate path from proposal to new economic state.",
  },
  {
    key: "Reinvestment",
    body: "Value circulates back into capability and participation instead of exiting the system.",
  },
];

export const ValueArchitecture = () => (
  <Section
    index="02"
    eyebrow="The value architecture"
    title={
      <>
        Value follows the paths you design. <br className="hidden sm:block" />
        <span className="text-muted-foreground">Everything else is drift.</span>
      </>
    }
    lead={
      <p>
        An economy is not a funnel. It branches, loops and feeds back. The sequence below is the spine
        of a working system — but the interesting design decisions live in the returns, where value
        re-enters participation rather than terminating in extraction.
      </p>
    }
    className="border-y border-border/60 bg-surface/40"
  >
    <div className="mt-16 lg:mt-20">
      <ol className="relative grid gap-px overflow-hidden rounded-md border border-border/70 bg-border/50 md:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage, i) => (
          <Reveal
            as="li"
            key={stage.key}
            delay={i * 70}
            className="relative flex min-h-[190px] flex-col justify-between bg-background/85 p-6 transition-colors duration-500 hover:bg-surface-raised/80"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.65rem] tracking-[0.2em] text-accent/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-node"
                style={{ animationDelay: `${i * 300}ms` }}
                aria-hidden="true"
              />
            </div>
            <div className="mt-8">
              <h3 className="font-display text-lg font-medium leading-snug text-foreground">
                {stage.key}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
            </div>
            {i < stages.length - 1 && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-value lg:block"
              />
            )}
          </Reveal>
        ))}
        <Reveal
          as="li"
          delay={stages.length * 70}
          className="flex min-h-[190px] flex-col justify-end bg-gradient-surface p-6"
        >
          <p className="eyebrow">Feedback loop</p>
          <p className="mt-3 font-display text-lg leading-snug text-foreground">
            Reinvestment returns to participation. A closed loop compounds; an open one bleeds.
          </p>
        </Reveal>
      </ol>
    </div>
  </Section>
);
