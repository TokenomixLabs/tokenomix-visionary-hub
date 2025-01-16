import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="relative">
        <VideoHero />
        <div className="absolute inset-0">
          <Navigation />
          <div className="h-screen flex items-center justify-center">
            <h1 className="text-6xl font-orbitron text-white animate-glow">
              DECENTRALIZED SYSTEMS
            </h1>
          </div>
        </div>
        <ExpertiseSection />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;