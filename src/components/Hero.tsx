import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-primary bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-purple/20 via-primary to-primary">
      <div className="container mx-auto px-4 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-orbitron animate-glow">
            Shaping the Future of
            <span className="text-neon-blue"> Tokenomics</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-orbitron font-light">
            Expert insights and strategic consulting for decentralized economies
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