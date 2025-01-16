import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <VideoHero />
      <div className="relative z-10">
        <Navigation />
        <div className="flex flex-col">
          <div className="min-h-screen flex items-center">
            <div className="w-full">
              <ExpertiseSection />
            </div>
          </div>
          <ProjectsSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;