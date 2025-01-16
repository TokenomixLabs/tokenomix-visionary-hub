import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full relative">
      <VideoHero />
      <div className="relative z-10">
        <Navigation />
        <div className="relative">
          <ExpertiseSection />
          <ProjectsSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;