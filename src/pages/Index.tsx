import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-primary overflow-hidden">
      <VideoHero />
      <Navigation />
      <div className="relative z-10 mt-screen">
        <ExpertiseSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;