import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ValueTopology } from "./ValueTopology";

const layers = [
  { label: "Supply & allocation", note: "One layer. The one everyone argues about." },
  { label: "Contribution & attribution", note: "Who actually creates value, and how it is recognised." },
  { label: "Rights & authority", note: "What holding something entitles you to do." },
  { label: "Rule change", note: "How the economy is allowed to evolve." },
];

export const CategoryStatement = () => (
  <Section
    id="architecture"
    index="01"
    eyebrow="Category"
    titleWide
    title={
      <>
        Tokenomics is not a pie chart. It is{" "}
        <span className="text-gradient-value">behavior encoded into an economy</span>.
      </>
    }
    lead={
      <>
        <p>
          A supply schedule tells you almost nothing about whether a system will work. It describes
          quantity, not conduct. The questions that decide outcomes are structural: who contributes,
          who owns, who decides, which behavior is rewarded, which rights exist, how value moves, and
          what happens when the network changes shape.
        </p>
        <p className="text-foreground">
          Tokenomix designs that architecture — the paths value takes, the boundaries it respects, and
          the rules that can legitimately change.
        </p>
      </>
    }
  >
    <div className="mt-16 grid items-center gap-12 lg:mt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
      <Reveal>
        <ol className="divide-y divide-border/70 border-y border-border/70">
          {layers.map((layer, i) => (
            <li key={layer.label} className="group flex gap-6 py-6">
              <span className="font-mono text-xs text-accent/70 pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-medium text-foreground">{layer.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{layer.note}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 font-display text-xl text-foreground/90">
          Most projects design layer one and hope the rest emerges.
        </p>
      </Reveal>
      <Reveal delay={120}>
        <ValueTopology className="animate-drift" />
      </Reveal>
    </div>
  </Section>
);
