import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <VideoHero />
        <div className="absolute inset-0 z-10">
          <Navigation />
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative z-20 bg-black">
        <ExpertiseSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;