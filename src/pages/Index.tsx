import { VideoHero } from "@/components/VideoHero";
import { Contact } from "@/components/Contact";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <VideoHero />
      <ExpertiseSection />
      <ProjectsSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;