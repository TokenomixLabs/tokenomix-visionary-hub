import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const VideoHero = () => {
  return (
    <section className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className="absolute w-full h-full bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-10000 animate-subtle-zoom"
          style={{
            backgroundImage: "url('/lovable-uploads/a0458f04-0eb0-495a-9095-a6e47fcd937d.png')"
          }}
        />
        {/* Enhanced gradient overlay with stronger contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-primary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 font-orbitron animate-glow drop-shadow-[0_0_35px_rgba(14,165,233,0.4)] animate-float">
            TOKENOMIX
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 font-orbitron font-light drop-shadow-lg animate-fade-in opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            Shaping the Future of Decentralized Economies
          </p>
          <Button 
            className="bg-neon-blue hover:bg-neon-purple text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 font-orbitron shadow-lg shadow-neon-blue/20 hover:shadow-neon-purple/30 hover:scale-105 animate-fade-in opacity-0" 
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};