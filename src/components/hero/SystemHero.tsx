import { ArrowRight } from "lucide-react";
import { HeroNavigation } from "@/components/navigation/HeroNavigation";
import { GovernedEquilibrium } from "./GovernedEquilibrium";
import { HeroRail } from "./HeroRail";
import { at } from "./timing";

const foundations = ["People", "Capital", "Ideas", "Systems", "Greater", "Together"];

const ctaBase =
  "inline-flex min-h-[3.25rem] items-center justify-center gap-3 rounded-sm px-6 font-mono text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-all duration-300 3xl:text-[0.78rem]";

/**
 * Flagship hero: copy left, Governed Equilibrium diagram right, progression rail
 * across the foot. Near-full-viewport, sits directly under the fixed navigation.
 */
export const SystemHero = () => (
  <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-background">
    <HeroNavigation />

    {/* Field: technical grid, very fine rules, restrained signal glows */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 grid-field opacity-[0.22] [mask-image:radial-gradient(ellipse_at_62%_46%,black,transparent_74%)]" />
      <div className="absolute left-[-12%] top-[18%] h-[46vw] w-[46vw] max-h-[720px] max-w-[720px] rounded-full bg-cyan/[0.07] blur-3xl" />
      <div className="absolute right-[-10%] top-[26%] h-[44vw] w-[44vw] max-h-[700px] max-w-[700px] rounded-full bg-magenta/[0.07] blur-3xl" />
      <div className="absolute left-1/2 top-[40%] h-[30vw] w-[30vw] max-h-[520px] max-w-[520px] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-3xl" />
    </div>

    <div className="container relative mx-auto flex flex-1 flex-col pb-14 pt-28 md:pt-32 lg:pb-16 lg:pt-36 3xl:pt-44">
      <div className="relative grid flex-1 gap-14 lg:grid-cols-[minmax(0,40fr)_minmax(0,60fr)] lg:gap-10 xl:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] xl:gap-14 3xl:gap-20">
        {/* Copy */}
        <div className="flex flex-col lg:min-h-full">
          <div className="lg:my-auto">
            <div className="ge-anim ge-rise" style={at(0, 900)}>
              <span aria-hidden="true" className="block h-px w-12 bg-gradient-spectrum" />
              <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.3em] text-muted-foreground 3xl:text-[0.8rem]">
                Intelligent economy architecture
              </p>
            </div>

            <h1 className="mt-7 font-display text-[clamp(2.35rem,3.6vw+0.5rem,4.6rem)] font-bold uppercase leading-[0.98] tracking-[-0.02em] text-foreground 4xl:text-[4.9rem]">
              <span className="ge-anim ge-rise block" style={at(120, 900)}>
                The economy
              </span>
              <span className="ge-anim ge-rise block" style={at(240, 900)}>
                Is the <span className="text-gradient-spectrum">system.</span>
              </span>
            </h1>

            <p
              className="ge-anim ge-rise mt-7 max-w-[34rem] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg 3xl:max-w-[38rem] 3xl:text-xl"
              style={at(420, 900)}
            >
              Tokenomix designs the paths value takes, the rights it creates, the incentives that shape
              behavior, and the rules by which intelligent economies evolve.
            </p>

            <div className="ge-anim ge-rise mt-9 flex flex-wrap gap-3" style={at(560, 900)}>
              <a
                href="#architecture"
                className={`${ctaBase} group bg-gradient-spectrum text-primary-foreground shadow-spectrum hover:brightness-110`}
              >
                Explore the architecture
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#intelligent-economies"
                className={`${ctaBase} border border-foreground/25 text-foreground hover:border-accent/70 hover:bg-accent/5`}
              >
                Intelligent economies
              </a>
            </div>
          </div>

          {/* Lower-left foundation stack — technical, quiet */}
          <ul
            className="ge-anim ge-fade mt-14 flex flex-col gap-2 border-l border-border/70 pl-4 font-mono text-[0.72rem] uppercase tracking-[0.3em] text-muted-foreground/70 lg:mt-12 3xl:text-[0.78rem]"
            style={at(800, 1000)}
          >
            {foundations.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>
        </div>

        {/* System diagram */}
        <div className="relative flex items-center lg:border-l lg:border-border/40 lg:pl-8 xl:pl-10 xl:pr-12 3xl:pl-14 3xl:pr-16">
          <GovernedEquilibrium />
          <p
            className="ge-anim ge-fade absolute right-0 top-1/2 hidden -translate-y-1/2 rotate-180 whitespace-nowrap font-mono text-[0.72rem] uppercase tracking-[0.34em] text-muted-foreground/80 [writing-mode:vertical-rl] xl:block 3xl:text-[0.8rem]"
            style={at(6200, 900)}
          >
            A more balanced tomorrow
          </p>
        </div>
      </div>
    </div>

    <HeroRail />
  </section>
);
