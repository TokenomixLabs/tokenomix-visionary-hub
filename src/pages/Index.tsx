import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <VideoHero />
      <main>
        <ExpertiseSection />
        <ProjectsSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;