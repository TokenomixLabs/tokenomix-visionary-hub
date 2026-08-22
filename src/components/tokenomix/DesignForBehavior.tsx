import { Section } from "./Section";
import { Reveal } from "./Reveal";

const questions = [
  "Which useful action should happen more often?",
  "Which contribution actually creates value here?",
  "How is that contribution measured or recognised?",
  "Which abuse becomes profitable if the incentives are wrong?",
  "What happens to the economy as the network grows?",
  "What happens when participants leave?",
  "What is owned, what is portable, what is governable?",
];

export const DesignForBehavior = () => (
  <Section
    index="06"
    eyebrow="Design for behavior"
    title={
      <>
        Economies are behavior engines. <br className="hidden sm:block" />
        <span className="text-muted-foreground">Design the behavior first.</span>
      </>
    }
    lead={
      <p>
        A token design that cannot answer these seven questions is a distribution plan, not an economy.
        None of them are about price. All of them are about what the system will actually do once real
        participants arrive and start optimising.
      </p>
    }
    className="border-y border-border/60 bg-surface/40"
  >
    <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
      <ol className="space-y-0">
        {questions.map((q, i) => (
          <Reveal
            as="li"
            key={q}
            delay={i * 60}
            className="group flex items-baseline gap-6 border-b border-border/60 py-5"
          >
            <span className="font-mono text-xs text-accent/70">Q{i + 1}</span>
            <p className="font-display text-lg leading-snug text-foreground/90 transition-colors group-hover:text-foreground md:text-xl">
              {q}
            </p>
          </Reveal>
        ))}
      </ol>
      <Reveal delay={200}>
        <aside className="panel bg-gradient-surface p-7 md:p-9">
          <p className="eyebrow">Out of scope</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Tokenomix does not optimise token prices, forecast returns or advise on investment. Value
            architecture is concerned with conduct and structure: what the system rewards, what it
            permits, and what it can become.
          </p>
          <div className="my-7 h-px w-full bg-border/70" />
          <p className="font-display text-lg leading-snug text-foreground">
            Speculation is a side effect of a system. It is a poor foundation for one.
          </p>
        </aside>
      </Reveal>
    </div>
  </Section>
);
