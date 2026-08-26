import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { AccumulatingStructure } from "./AccumulatingStructure";
import { useBuildStep } from "@/hooks/use-build-step";

const method = [
  ["Understand the system", "What is actually being coordinated, and for whom."],
  ["Map actors & value", "Every participant, every flow, every place value can leak."],
  ["Model incentives", "What behavior becomes cheapest under the proposed rules."],
  ["Define rights & authority", "Who owns, who claims, who decides, at which layer."],
  ["Test failure modes", "Which abuse becomes profitable, and at what scale."],
  ["Design governance", "How rules change legitimately once value depends on them."],
  ["Model evolution", "What the economy looks like at 10x, and when people leave."],
];

export const Method = () => {
  const { ref, step } = useBuildStep(method.length);

  return (
    <Section
      index="10"
      eyebrow="Method"
      title="A design method, not a service&nbsp;menu."
      lead={
        <p>
          This is the sequence the work follows — reasoning, mapping and stress-testing structure rather
          than proprietary tooling.
        </p>
      }
      tone="tint"
      introClassName="max-w-4xl xl:mx-auto xl:text-center"
    >
      {/* Seven-step rail with its result drawn alongside: each step adds one
          layer to the structure, so the chapter ends on a finished frame. */}
      <div
        ref={ref}
        className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[1fr_0.82fr] lg:items-start lg:gap-16 3xl:gap-24"
      >
        <div className="relative">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-primary/50 via-accent/40 to-signal/60 md:left-[11px]"
          />
          <ol>
            {method.map(([name, detail], i) => {
              const reached = step > i;
              return (
                <Reveal
                  as="li"
                  key={name}
                  delay={i * 30}
                  className="relative grid gap-2 border-b border-border/60 py-6 pl-10 md:grid-cols-[auto_1fr] md:items-baseline md:gap-x-8 md:pl-16 lg:grid-cols-[auto_1fr]"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-[1.85rem] h-[15px] w-[15px] rounded-full border bg-background transition-colors duration-500 md:left-1 md:top-[1.95rem] ${
                      reached ? "border-signal/70" : "border-accent/50"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`absolute left-[5px] top-[2.15rem] h-[5px] w-[5px] rounded-full transition-colors duration-500 md:left-[9px] md:top-[2.25rem] ${
                      reached ? "bg-signal" : "bg-accent/80"
                    }`}
                  />
                  <span className="font-mono text-[0.65rem] tracking-[0.2em] text-accent/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium leading-snug text-balance text-foreground md:text-xl">
                      {name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {detail}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
          <Reveal delay={160}>
            <div className="mt-10 pl-10 md:pl-16">
              <p className="eyebrow">Output</p>
              <p className="mt-3 max-w-2xl font-display text-xl leading-snug text-balance text-foreground 3xl:text-2xl">
                An economy whose behavior is intentional under pressure.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="hidden md:block">
          <AccumulatingStructure step={step} className="lg:sticky lg:top-28" />
        </Reveal>
      </div>
    </Section>
  );
};
