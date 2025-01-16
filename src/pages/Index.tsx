import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="flex flex-col min-h-screen w-full bg-[#1A1F2C] overflow-hidden">
      <VideoHero />
      <Navigation />
      <ExpertiseSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
};

export default Index;