import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <VideoHero />
      <Navigation />
      <ExpertiseSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;