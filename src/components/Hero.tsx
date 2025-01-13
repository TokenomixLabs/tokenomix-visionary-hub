import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary-light/10 to-secondary-light/10">
      <div className="container mx-auto px-4 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Shaping the Future of
            <span className="text-primary-light"> Tokenomics</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Expert insights and strategic consulting for decentralized economies
          </p>
          <Button className="bg-primary-light hover:bg-primary-dark text-white px-8 py-6 text-lg rounded-lg transition-all">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};