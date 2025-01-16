import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="w-full min-h-screen">
      <div className="fixed inset-0">
        <VideoHero />
      </div>
      <div className="relative z-10">
        <Navigation />
      </div>
      <div className="relative z-10 mt-screen bg-black">
        <ExpertiseSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;