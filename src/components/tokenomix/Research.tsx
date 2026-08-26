import { Section } from "./Section";
import { Reveal } from "./Reveal";

const themes = [
  {
    domain: "Intelligent organizations",
    note: "How coordination, authority and reward change when part of the organization is machine-operated.",
  },
  {
    domain: "Sovereign value systems",
    note: "Economies that hold their own rules rather than renting them from a platform.",
  },
  {
    domain: "Decentralized governance",
    note: "Legitimacy, scope and rule-versioning as economic infrastructure.",
  },
  {
    domain: "Token-aware participation",
    note: "Designing contribution and standing so ownership means something specific.",
  },
  {
    domain: "Intelligent digital infrastructure",
    note: "Metering, permissioning and attribution for systems that act on their own.",
  },
  {
    domain: "Distributed cognition",
    note: "Attribution and incentive design across many contributors and many machines.",
  },
];

export const Research = () => (
  <Section
    id="research"
    index="09"
    eyebrow="Research & frameworks"
    title="Current research territory, not a client logo wall."
    lead={
      <p>
        Tokenomix explores these domains through frameworks, architecture writing and collaborative
        work — the questions that shape how value, ownership and governance get designed.
      </p>
    }
    introClassName="max-w-4xl xl:mx-auto xl:text-center"
  >
    <div className="mt-16 lg:mt-20">
      <div className="border-t border-border/70">
        {themes.map((theme, i) => (
          <Reveal
            key={theme.domain}
            delay={i * 70}
            className="group grid gap-3 border-b border-border/70 py-7 transition-colors duration-500 hover:bg-surface/50 md:grid-cols-[auto_1fr_1.2fr] md:items-baseline md:gap-10 md:px-2"
          >
            <span className="font-mono text-[0.65rem] tracking-[0.2em] text-accent/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl font-medium leading-snug text-foreground md:text-2xl">
              {theme.domain}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{theme.note}</p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={480}>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Tokenomix has contributed to and published thinking around independent systems and
          communities. Those systems remain independent — nothing here is presented as owned or
          operated by Tokenomix.
        </p>
      </Reveal>
    </div>
  </Section>
);
