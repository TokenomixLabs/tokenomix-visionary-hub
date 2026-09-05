import { at } from "./timing";

/**
 * Bottom hero rail: the progression the whole site then argues.
 * Nodes light cold → warm, left to right, once the diagram has resolved.
 */
const stages = [
  { label: "Value", color: "hsl(var(--cyan))" },
  { label: "Rights", color: "hsl(228 96% 70%)" },
  { label: "Behavior", color: "hsl(var(--accent))" },
  { label: "Authority", color: "hsl(288 94% 70%)" },
  { label: "Evolution", color: "hsl(var(--magenta))" },
];

const railLabel =
  "whitespace-nowrap font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground sm:tracking-[0.24em] 3xl:text-[0.8rem]";

/* Below xl the two end labels take their own row so the stage rail never has
   to share the width with them; from xl they bracket the rail on one line. */
export const HeroRail = () => (
  <div className="relative border-t border-border/60">
    <div className="container mx-auto py-5 md:py-6">
      <div className="ge-anim ge-fade flex items-center justify-between gap-6 xl:hidden" style={at(5800, 900)}>
        <span className={railLabel}>Architect value</span>
        <span className={railLabel}>Govern intelligence</span>
      </div>

      <div className="mt-4 grid items-center gap-y-3 xl:mt-0 xl:grid-cols-[auto_1fr_auto] xl:gap-x-14">
        <span className={`${railLabel} ge-anim ge-fade hidden xl:block`} style={at(5800, 900)}>
          Architect value
        </span>

        <ol className="relative flex flex-wrap items-center gap-x-6 gap-y-3 md:flex-nowrap md:justify-between md:gap-x-4">
          {/* connecting hairline, from tablet up */}
          <span
            aria-hidden="true"
            className="ge-anim ge-extend pointer-events-none absolute inset-x-0 top-1/2 hidden h-px bg-gradient-spectrum opacity-40 md:block"
            style={at(5600, 1300)}
          />
          {stages.map((stage, i) => (
            <li
              key={stage.label}
              className="relative flex items-center gap-2.5 bg-background md:px-3 first:md:pl-0 last:md:pr-0"
            >
              <span
                aria-hidden="true"
                className="ge-anim ge-light block h-2 w-2 rounded-full"
                style={{
                  ...at(5900 + i * 180, 600),
                  backgroundColor: stage.color,
                  boxShadow: `0 0 10px ${stage.color}, 0 0 2px ${stage.color}`,
                }}
              />
              <span className="whitespace-nowrap font-mono text-[0.74rem] uppercase tracking-[0.2em] text-foreground/90 3xl:text-[0.82rem]">
                {stage.label}
              </span>
              {i < stages.length - 1 && (
                <span aria-hidden="true" className="font-mono text-[0.74rem] text-muted-foreground/60 md:hidden">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>

        <span className={`${railLabel} ge-anim ge-fade hidden xl:block`} style={at(5800, 900)}>
          Govern intelligence
        </span>
      </div>
    </div>
  </div>
);
