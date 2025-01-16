import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <VideoHero />
      <ExpertiseSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;