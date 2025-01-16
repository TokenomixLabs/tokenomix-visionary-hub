import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <VideoHero />
      <div className="relative">
        <Navigation />
        <div className="pt-20">
          <ExpertiseSection />
          <ProjectsSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;