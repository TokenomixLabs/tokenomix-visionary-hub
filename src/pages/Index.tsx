import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <VideoHero />
      <Navigation />
      <div className="relative z-20 mt-[100vh]">
        <div className="bg-primary">
          <ExpertiseSection />
          <ProjectsSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;