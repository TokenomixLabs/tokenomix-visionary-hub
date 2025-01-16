import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <div className="h-screen relative overflow-hidden">
        <VideoHero />
        <Navigation />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-orbitron text-white text-center animate-glow">
            <span className="text-white">Where </span>
            <span className="text-neon-blue">Expertise </span>
            <span className="text-white">Meets Innovation</span>
          </h1>
        </div>
      </div>
      <div className="relative bg-black">
        <ExpertiseSection />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;