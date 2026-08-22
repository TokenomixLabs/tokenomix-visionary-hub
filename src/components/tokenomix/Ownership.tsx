import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { AuthorityTopology } from "./AuthorityTopology";

const questions = [
  { q: "Who owns the protocol layer?", n: "Ownership of the base rules is rarely the same as ownership of the experience built on top." },
  { q: "Who owns the community or application layer?", n: "Participation economics can be governed locally without touching network rules." },
  { q: "Who can set prices?", n: "Pricing authority is an economic power, and it can sit at more than one layer." },
  { q: "Who can change protocol-level fees?", n: "Fee authority determines who captures value as the system scales." },
  { q: "Who benefits from value creation?", n: "Beneficiaries should be identifiable before launch, not discovered afterwards." },
  { q: "Who holds governance authority?", n: "Authority without a defined scope quietly becomes authority over everything." },
];

export const Ownership = () => (
  <Section
    id="ownership"
    index="04"
    eyebrow="Ownership"
    title={
      <>
        Ownership is a system rule — <span className="text-gradient-value">not a footnote</span>.
      </>
    }
    lead={
      <p>
        There is no universal answer to any of these questions. There is only a difference between
        systems that answer them explicitly and systems that leave the answers concentrated inside a
        single administrator account. Strong economies draw their boundaries in public.
      </p>
    }
    className="border-y border-border/60 bg-surface/40"
    visual={<AuthorityTopology className="mx-auto max-w-[28rem] lg:max-w-none" />}
    visualSide="right"
  >
    <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-border/70 bg-border/50 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
      {questions.map((item, i) => (
        <Reveal
          key={item.q}
          delay={i * 70}
          className="group bg-background/85 p-7 transition-colors duration-500 hover:bg-surface-raised/70"
        >
          <span className="font-mono text-[0.65rem] tracking-[0.2em] text-accent/70">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-5 font-display text-lg font-medium leading-snug text-foreground">
            {item.q}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.n}</p>
          <span
            aria-hidden="true"
            className="mt-6 block h-px w-10 bg-gradient-value opacity-40 transition-all duration-500 group-hover:w-20 group-hover:opacity-100"
          />
        </Reveal>
      ))}
    </div>
  </Section>
);
