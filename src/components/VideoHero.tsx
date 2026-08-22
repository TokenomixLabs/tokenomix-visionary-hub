import HeroVideo from "./HeroVideo";
import { HeroNavigation } from "./navigation/HeroNavigation";

export const VideoHero = () => {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-background">
      <HeroNavigation />
      <HeroVideo />

      {/* Editorial overlay — decorative, does not intercept video controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
        <div className="container mx-auto pb-10 md:pb-16">
          <div className="max-w-2xl animate-rise-in">
            <p className="eyebrow text-foreground/70">Tokenomix</p>
            <h1 className="mt-3 font-display text-2xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Value architecture for the{" "}
              <span className="text-gradient-value">intelligent economy</span>.
            </h1>
            <p className="mt-4 hidden max-w-xl text-sm leading-relaxed text-foreground/70 sm:block md:text-base">
              The systems behind ownership, incentives, participation and governance.
            </p>
          </div>
        </div>
      </div>

      {/* transition into the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-52 bg-gradient-to-t from-background via-background/80 to-transparent"
      />
    </section>
  );
};
