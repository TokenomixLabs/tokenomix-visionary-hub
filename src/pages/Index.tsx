import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <VideoHero />
      <div className="relative z-10">
        <Navigation />
        <div className="min-h-screen flex flex-col">
          <div className="flex-1 flex flex-col justify-center">
            <ExpertiseSection />
          </div>
          <ProjectsSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;