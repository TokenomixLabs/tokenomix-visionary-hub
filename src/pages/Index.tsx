import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <VideoHero />
      <Navigation />
      <div className="relative">
        <ExpertiseSection />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;