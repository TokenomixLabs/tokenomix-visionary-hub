import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const VideoHero = () => {
  return (
    <section className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/lovable-uploads/a0458f04-0eb0-495a-9095-a6e47fcd937d.png"
        >
          {/* Add your video source here */}
          <source src="/path-to-your-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 font-orbitron animate-glow">
            TOKENOMIX
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-orbitron font-light">
            Shaping the Future of Decentralized Economies
          </p>
          <Button className="bg-neon-blue hover:bg-neon-purple text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 font-orbitron">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};