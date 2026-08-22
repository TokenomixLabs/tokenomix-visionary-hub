import { Section } from "./Section";
import { Reveal } from "./Reveal";

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
    title={
      <>
        Incentives are architecture. <span className="text-muted-foreground">Not marketing.</span>
      </>
    }
    lead={
      <p>
        Two systems can share the same product, the same technology and the same total supply, and
        still produce opposite behavior — because reward, ownership and rule-change are designed
        differently. Behavior is downstream of structure.
      </p>
    }
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

            {/* structural illustration: where value settles */}
            <svg viewBox="0 0 320 70" className="mt-9 h-auto w-full" aria-hidden="true">
              {Array.from({ length: 9 }).map((_, n) => {
                const x = 12 + n * 36;
                const height = system.tone === "signal" ? 12 + ((n * 7) % 34) : n < 2 ? 46 : 6;
                return (
                  <rect
                    key={n}
                    x={x}
                    y={60 - height}
                    width="10"
                    height={height}
                    rx="2"
                    fill={system.tone === "signal" ? "hsl(322 90% 62%)" : "hsl(240 22% 26%)"}
                    opacity={system.tone === "signal" ? 0.75 : 0.9}
                  />
                );
              })}
              <line x1="0" y1="62" x2="320" y2="62" stroke="hsl(240 22% 20%)" />
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
