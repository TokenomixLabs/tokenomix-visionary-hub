import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const VideoHero = () => {
  return (
    <section className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Using only the poster image for now since no video is provided */}
        <div
          className="absolute w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lovable-uploads/a0458f04-0eb0-495a-9095-a6e47fcd937d.png')"
          }}
        />
        {/* Enhanced gradient overlay with stronger bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 font-orbitron animate-glow drop-shadow-[0_0_25px_rgba(14,165,233,0.3)]">
            TOKENOMIX
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 font-orbitron font-light drop-shadow-lg">
            Shaping the Future of Decentralized Economies
          </p>
          <Button className="bg-neon-blue hover:bg-neon-purple text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 font-orbitron shadow-lg shadow-neon-blue/20">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};