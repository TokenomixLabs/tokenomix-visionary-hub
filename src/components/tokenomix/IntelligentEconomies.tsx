import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { AgentEconomyNetwork } from "./AgentEconomyNetwork";
import { AgentEconomyNetworkMobile } from "./mobile/AgentEconomyNetworkMobile";

const territory = [
  {
    title: "Machine-generated work",
    body: "When output is produced continuously and cheaply, value shifts to direction, judgment and verification.",
  },
  {
    title: "Agent services",
    body: "Autonomous participants consume and provide services. They need accounts, limits and economic standing.",
  },
  {
    title: "Usage-based value creation",
    body: "Value accrues from what a system does, metered at the point of real use rather than at announcement.",
  },
  {
    title: "Human + machine attribution",
    body: "Credit has to survive collaboration. Provenance across mixed contribution is an economic primitive.",
  },
  {
    title: "Permissions & economic authority",
    body: "An agent's spending, signing and rule-changing powers are design decisions, not defaults.",
  },
  {
    title: "Programmable incentives",
    body: "Rewards can respond to conditions. That is leverage, and it is also a new class of failure mode.",
  },
  {
    title: "Reputation & capability as context",
    body: "Track record, capability and provenance become inputs to pricing, access and trust.",
  },
];

export const IntelligentEconomies = () => (
  <Section
    id="intelligent-economies"
    index="07"
    eyebrow="Intelligent economies"
    title={
      <>
        When machines participate,{" "}
        <span className="text-gradient-value">economics stops being human-only</span>.
      </>
    }
    lead={
      <p>
        Once intelligent systems can perform work, hold permissions and transact, contribution,
        attribution, rights and authority all need answers that do not assume a human on every side.
        Tokenomix treats this as an architecture problem rather than a narrative.
      </p>
    }
    tier="pillar"
    visual={<AgentEconomyNetwork className="mx-auto max-w-[27rem] lg:max-w-none" />}
    mobileVisual={<AgentEconomyNetworkMobile />}
    visualSide="left"
  >
    <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-border/70 bg-border/50 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
      {territory.map((item, i) => (
        <Reveal
          key={item.title}
          delay={i * 40}
          className={`group relative bg-background/85 p-7 transition-colors duration-500 hover:bg-surface-raised/70 ${
            i === territory.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] text-accent/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span aria-hidden="true" className="h-px w-6 bg-border" />
          </div>
          <h3 className="mt-6 font-display text-lg font-medium leading-snug text-balance text-foreground">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
        </Reveal>
      ))}
      <Reveal delay={160} className="bg-gradient-surface p-7 sm:col-span-2 lg:col-span-2">
        <p className="eyebrow">Position</p>
        <p className="mt-5 max-w-3xl font-display text-lg leading-snug text-balance text-foreground md:text-xl">
          Open research territory. Described as design work in progress, not as shipped infrastructure.
        </p>
      </Reveal>
    </div>
  </Section>
);
