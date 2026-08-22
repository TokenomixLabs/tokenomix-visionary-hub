import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { AuthorityTopology } from "./AuthorityTopology";
import { AuthorityTopologyMobile } from "./mobile/AuthorityTopologyMobile";

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
    title="Ownership is a system rule, not a footnote."
    lead={
      <p>
        There is no universal answer to any of these questions — only a difference between systems that
        answer them explicitly and systems that leave the answers inside one administrator account.
      </p>
    }
    tier="pillar"
    tone="tint"
    visual={<AuthorityTopology className="mx-auto max-w-[28rem] lg:max-w-none" />}
    mobileVisual={<AuthorityTopologyMobile />}
    visualSide="right"
  >
    {/* Ownership reads as an architectural ledger of open questions, not as equal cards. */}
    <ol className="mt-16 border-t border-border/70 lg:mt-20">
      {questions.map((item, i) => (
        <Reveal
          as="li"
          key={item.q}
          delay={i * 60}
          className="group grid gap-2 border-b border-border/70 py-6 transition-colors duration-500 hover:bg-background/40 md:grid-cols-[auto_1fr_1.15fr] md:items-baseline md:gap-10 md:px-2 md:py-7"
        >
          <span className="font-mono text-[0.65rem] tracking-[0.2em] text-accent/80">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-lg font-medium leading-snug text-foreground md:text-xl">
            {item.q}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{item.n}</p>
        </Reveal>
      ))}
    </ol>
    <Reveal delay={420}>
      <p className="mt-8 max-w-2xl font-display text-lg leading-snug text-foreground">
        Strong economies draw their boundaries in public.
      </p>
    </Reveal>
  </Section>
);
