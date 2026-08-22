import HeroVideo from "./HeroVideo";
import { HeroNavigation } from "./navigation/HeroNavigation";

export const VideoHero = () => {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-background">
      <HeroNavigation />
      <HeroVideo />

      {/* subtle transition from video into the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-background via-background/40 to-transparent"
      />
    </section>
  );
};
