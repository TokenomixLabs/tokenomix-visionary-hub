import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="w-full min-h-screen bg-black">
      <section className="relative w-full h-screen">
        <VideoHero />
        <Navigation />
      </section>
      <ExpertiseSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
};

export default Index;