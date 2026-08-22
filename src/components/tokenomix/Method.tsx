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
    title={
      <>
        A design method, <span className="text-muted-foreground">not a service menu.</span>
      </>
    }
    lead={
      <p>
        This is the sequence the work follows. It is intellectual process — reasoning, mapping and
        stress-testing structure — rather than proprietary tooling.
      </p>
    }
    className="border-y border-border/60 bg-surface/40"
  >
    <div className="mt-16 lg:mt-20">
      <ol className="grid gap-px overflow-hidden rounded-md border border-border/70 bg-border/50 sm:grid-cols-2 lg:grid-cols-4">
        {method.map(([name, detail], i) => (
          <Reveal
            as="li"
            key={name}
            delay={i * 70}
            className="relative flex min-h-[180px] flex-col justify-between bg-background/85 p-6"
          >
            <span className="font-mono text-[0.65rem] tracking-[0.2em] text-accent/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-base font-medium leading-snug text-foreground md:text-lg">
                {name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
            </div>
          </Reveal>
        ))}
        <Reveal as="li" delay={520} className="flex min-h-[180px] flex-col justify-end bg-gradient-surface p-6">
          <p className="eyebrow">Output</p>
          <p className="mt-3 font-display text-base leading-snug text-foreground">
            An economy whose behavior is intentional under pressure.
          </p>
        </Reveal>
      </ol>
    </div>
  </Section>
);
