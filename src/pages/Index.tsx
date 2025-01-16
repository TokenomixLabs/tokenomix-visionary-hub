import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-primary overflow-hidden">
      <VideoHero />
      <ExpertiseSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
};

export default Index;