import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { IncentiveBehaviorMap } from "./IncentiveBehaviorMap";

const systems = [
  {
    name: "System A",
    thesis: "Rewards extraction",
    tone: "muted" as const,
    rules: [
      "Reward attaches to holding, not to contributing",
      "Ownership is granted once and never re-earned",
      "Rule changes happen at administrative discretion",
      "Early positioning outweighs sustained work",
    ],
    behavior: "Participants optimise for exit timing. Contribution becomes a cost, not a path.",
  },
  {
    name: "System B",
    thesis: "Rewards contribution",
    tone: "signal" as const,
    rules: [
      "Reward attaches to recognised, attributable contribution",
      "Participation rights are earned and can be renewed",
      "Rule changes follow an inspectable governance path",
      "Long-horizon alignment outweighs early capture",
    ],
    behavior:
      "Participants optimise for usefulness. The cheapest way to gain standing is to do the work.",
  },
];

export const Incentives = () => (
  <Section
    id="incentives"
    index="03"
    eyebrow="Incentives"
    title="Incentives are architecture, not marketing."
    lead={
      <p>
        Two systems can share the same product, technology and total supply and still produce opposite
        behavior. Behavior is downstream of structure.
      </p>
    }
    visual={<IncentiveBehaviorMap />}
    visualSide="left"
  >
    <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2">
      {systems.map((system, i) => (
        <Reveal key={system.name} delay={i * 120}>
          <article
            className={`panel h-full p-7 md:p-9 ${
              system.tone === "signal" ? "shadow-signal" : ""
            }`}
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="eyebrow">{system.name}</span>
              <span
                className={`font-mono text-[0.65rem] uppercase tracking-[0.2em] ${
                  system.tone === "signal" ? "text-signal" : "text-muted-foreground"
                }`}
              >
                {system.thesis}
              </span>
            </div>

            <div className="my-7 h-px w-full bg-border/70" />

            <ul className="space-y-4">
              {system.rules.map((rule) => (
                <li key={rule} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className={`mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full ${
                      system.tone === "signal" ? "bg-signal" : "bg-border"
                    }`}
                  />
                  {rule}
                </li>
              ))}
            </ul>

            {/* structural illustration: how standing is distributed across participants */}
            <svg viewBox="0 0 320 44" className="mt-9 h-auto w-full" aria-hidden="true">
              <line x1="4" y1="22" x2="316" y2="22" stroke="hsl(240 22% 20%)" />
              {Array.from({ length: 11 }).map((_, n) => {
                const x = 12 + n * 29.6;
                const r =
                  system.tone === "signal" ? 3.4 + ((n * 4) % 9) / 1.6 : n < 2 ? 9.5 : 2;
                return (
                  <circle
                    key={n}
                    cx={x}
                    cy="22"
                    r={r}
                    fill="hsl(240 32% 5%)"
                    stroke={
                      system.tone === "signal"
                        ? "hsl(322 90% 62%)"
                        : n < 2
                          ? "hsl(250 92% 72%)"
                          : "hsl(240 22% 30%)"
                    }
                    strokeWidth="1.3"
                  />
                );
              })}
            </svg>
            <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground/70">
              Where standing accumulates
            </p>

            <p className="mt-7 font-display text-base leading-relaxed text-foreground">
              {system.behavior}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
    <Reveal delay={260}>
      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Neither diagram is a forecast. They are structural illustrations of the same principle: the
        design decides which behavior is cheapest, and participants find that path quickly.
      </p>
    </Reveal>
  </Section>
);
