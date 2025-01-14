import { VideoHero } from "@/components/VideoHero";
import { Contact } from "@/components/Contact";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <VideoHero />
      <ExpertiseSection />
      <ProjectsSection />
      <Contact />
    </div>
  );
};

export default Index;