import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative">
      <VideoHero />
      <div className="relative z-20">
        <Navigation />
        <div className="min-h-screen bg-primary pt-screen">
          <ExpertiseSection />
          <ProjectsSection />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Index;