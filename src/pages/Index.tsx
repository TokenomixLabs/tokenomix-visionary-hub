import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <VideoHero />
      <div className="relative z-20">
        <Navigation />
        <div className="min-h-screen flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold animate-glow mb-6">
            Tokenomix
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-center mb-12 animate-fade-in">
            Revolutionizing blockchain economics through innovative tokenomics solutions
          </p>
        </div>
        <div className="bg-primary">
          <ExpertiseSection />
          <ProjectsSection />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Index;