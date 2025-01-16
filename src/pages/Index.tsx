import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <VideoHero />
      <div className="bg-primary">
        <ExpertiseSection />
        <ProjectsSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;