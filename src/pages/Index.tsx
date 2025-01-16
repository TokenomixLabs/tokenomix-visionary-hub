import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div>
      <div className="relative h-screen">
        <VideoHero />
        <Navigation />
      </div>
      <div className="bg-primary">
        <ExpertiseSection />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;