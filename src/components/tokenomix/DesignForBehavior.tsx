import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { BehaviorEngine } from "./BehaviorEngine";
import { BehaviorEngineMobile } from "./mobile/BehaviorEngineMobile";
import { BehaviorLedger } from "./BehaviorLedger";
import { useBuildStep } from "@/hooks/use-build-step";

const questions = [
  "Which useful action should happen more often?",
  "Which contribution actually creates value here?",
  "How is that contribution measured or recognised?",
  "Which abuse becomes profitable if the incentives are wrong?",
  "What happens to the economy as the network grows?",
  "What happens when participants leave?",
  "What is owned, what is portable, what is governable?",
];

export const DesignForBehavior = () => {
  const { ref, step } = useBuildStep(questions.length);

  return (
    <Section
      index="06"
      eyebrow="Design for behavior"
      title="Economies are behavior engines. Design the behavior first."
      lead={
        <p>
          A token design that cannot answer these seven questions is a distribution plan, not an economy.
          None of them are about price; all of them are about what the system will actually do.
        </p>
      }
      tone="tint"
      visual={<BehaviorEngine />}
      mobileVisual={<BehaviorEngineMobile />}
    >
      {/* Questions read down the left and the scope band closes that column, so the
          ledger on the right is accompanied rather than left standing alone. */}
      <div
        ref={ref}
        className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-16 3xl:gap-24"
      >
        <div>
          <ol className="space-y-0">
            {questions.map((q, i) => {
              const reached = step > i;
              return (
                <Reveal
                  as="li"
                  key={q}
                  delay={i * 40}
                  className="group flex items-baseline gap-6 border-b border-border/60 py-5"
                >
                  <span
                    className={`font-mono text-xs transition-colors duration-500 ${
                      reached ? "text-signal" : "text-accent/70"
                    }`}
                  >
                    Q{i + 1}
                  </span>
                  <p
                    className={`font-display text-lg leading-snug transition-colors duration-500 md:text-xl 3xl:text-[1.4rem] ${
                      reached ? "text-foreground" : "text-foreground/70"
                    }`}
                  >
                    {q}
                  </p>
                </Reveal>
              );
            })}
          </ol>

          {/* Scope statement now closes the questions column — no dead field below Q7. */}
          <Reveal delay={80}>
            <aside className="panel mt-10 bg-gradient-surface p-7 md:mt-12 md:p-9">
              <p className="eyebrow">Out of scope</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Tokenomix does not optimise token prices, forecast returns or advise on investment.
                Value architecture is concerned with conduct and structure: what the system rewards,
                what it permits, and what it can become.
              </p>
              <p className="mt-7 border-t border-border/70 pt-6 font-display text-lg leading-snug text-balance text-foreground md:text-xl">
                Speculation is a side effect of a system. It is a poor foundation for one.
              </p>
            </aside>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <BehaviorLedger active={step} className="lg:sticky lg:top-28" />
        </Reveal>
      </div>
    </Section>
  );
};

