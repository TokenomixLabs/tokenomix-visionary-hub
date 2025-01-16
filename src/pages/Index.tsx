import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <VideoHero />
        </div>
        <div className="relative z-10">
          <Navigation />
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative bg-black">
        <ExpertiseSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;