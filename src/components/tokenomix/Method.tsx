import { Section } from "./Section";
import { Reveal } from "./Reveal";

const method = [
  ["Understand the system", "What is actually being coordinated, and for whom."],
  ["Map actors & value", "Every participant, every flow, every place value can leak."],
  ["Model incentives", "What behavior becomes cheapest under the proposed rules."],
  ["Define rights & authority", "Who owns, who claims, who decides, at which layer."],
  ["Test failure modes", "Which abuse becomes profitable, and at what scale."],
  ["Design governance", "How rules change legitimately once value depends on them."],
  ["Model evolution", "What the economy looks like at 10x, and when people leave."],
];

export const Method = () => (
  <Section
    index="10"
    eyebrow="Method"
    title="A design method, not a service menu."
    lead={
      <p>
        This is the sequence the work follows — reasoning, mapping and stress-testing structure rather
        than proprietary tooling.
      </p>
    }
    tone="tint"
  >
    {/* Seven-step rail: a single continuous path, no grid, no empty cell. */}
    <div className="relative mt-16 lg:mt-20">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-primary/50 via-accent/40 to-signal/60 md:left-[11px]"
      />
      <ol>
        {method.map(([name, detail], i) => (
          <Reveal
            as="li"
            key={name}
            delay={i * 70}
            className="relative grid gap-2 border-b border-border/60 py-6 pl-10 md:grid-cols-[auto_1fr_1.15fr] md:items-baseline md:gap-10 md:pl-16"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-[1.85rem] h-[15px] w-[15px] rounded-full border border-accent/50 bg-background md:left-1 md:top-[1.95rem]"
            />
            <span
              aria-hidden="true"
              className="absolute left-[5px] top-[2.15rem] h-[5px] w-[5px] rounded-full bg-accent/80 md:left-[9px] md:top-[2.25rem]"
            />
            <span className="font-mono text-[0.65rem] tracking-[0.2em] text-accent/80">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-lg font-medium leading-snug text-foreground md:text-xl">
              {name}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{detail}</p>
          </Reveal>
        ))}
      </ol>
      <Reveal delay={520}>
        <div className="mt-10 pl-10 md:pl-16">
          <p className="eyebrow">Output</p>
          <p className="mt-3 max-w-2xl font-display text-xl leading-snug text-foreground">
            An economy whose behavior is intentional under pressure.
          </p>
        </div>
      </Reveal>
    </div>
  </Section>
);
