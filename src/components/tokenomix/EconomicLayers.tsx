import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { LayerSeam } from "./LayerSeam";
import { LayerSeamMobile } from "./mobile/LayerSeamMobile";
import { ChapterFooting } from "./ChapterFooting";

const layers = [
  {
    name: "User & community economics",
    scope: "Participation, reputation, contribution, local incentives",
    authority: "Local rules, local rewards",
  },
  {
    name: "Product & application economics",
    scope: "Pricing, packaging, access, product-level value capture",
    authority: "Application authority",
  },
  {
    name: "Marketplace & service economics",
    scope: "Supply and demand between independent participants",
    authority: "Matching and settlement rules",
  },
  {
    name: "Protocol & network economics",
    scope: "Base rules, network fees, issuance, settlement guarantees",
    authority: "Network-level authority",
  },
  {
    name: "Treasury, allocation & governance logic",
    scope: "Where value is held, how it is deployed, who may decide",
    authority: "Governed, scoped mandate",
  },
];

export const EconomicLayers = () => (
  <Section
    index="05"
    eyebrow="Economic layers"
    title="Layers can interoperate without sharing authority."
    lead={
      <p>
        Collapsing every layer into one economy feels simpler, then it becomes impossible to change
        anything without changing everything. Coherent systems keep their interfaces explicit.
      </p>
    }
    visual={<LayerSeam className="mx-auto max-w-[22rem] lg:max-w-none" />}
    mobileVisual={<LayerSeamMobile />}
    visualSide="right"
    visualWeight="light"
  >
    <div className="mt-16 lg:mt-20">
      <div className="overflow-hidden rounded-md border border-border/70">
        {layers.map((layer, i) => (
          <Reveal
            key={layer.name}
            delay={i * 80}
            className={`grid gap-2 border-border/70 p-6 md:grid-cols-[1.1fr_1.3fr_0.9fr] md:items-center md:gap-8 md:p-7 ${
              i !== 0 ? "border-t" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-8 w-1 rounded-full bg-gradient-value"
                style={{ opacity: 0.35 + i * 0.15 }}
              />
              <h3 className="font-display text-base font-medium leading-snug text-balance text-foreground md:text-lg">
                {layer.name}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground md:pl-0 pl-5">{layer.scope}</p>
            <p className="pl-5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent/80 md:pl-0 md:text-right">
              {layer.authority}
            </p>
          </Reveal>
        ))}
      </div>
      <ChapterFooting delay={440}>
        Economic boundaries are not bureaucracy. They are what makes a system survivable.
      </ChapterFooting>
    </div>
  </Section>
);
