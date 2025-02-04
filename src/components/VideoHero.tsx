import HeroVideo from "./HeroVideo";
import { HeroNavigation } from "./navigation/HeroNavigation";

export const VideoHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <HeroVideo />
      <HeroNavigation />
    </section>
  );
};
