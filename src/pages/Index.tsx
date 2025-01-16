import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col">
      <div className="relative h-screen overflow-hidden">
        <VideoHero />
        <div className="absolute inset-0">
          <Navigation />
          <div className="h-[calc(100vh-88px)] flex items-center justify-center px-4">
            <h1 className="text-4xl md:text-6xl font-orbitron text-white text-center animate-glow">
              <span>Where </span>
              <span className="text-neon-blue">Expertise </span>
              <span>Meets Innovation</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <ExpertiseSection />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;