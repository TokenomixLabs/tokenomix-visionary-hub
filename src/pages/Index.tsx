import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative bg-black">
      {/* Hero Section */}
      <section className="relative h-screen">
        <VideoHero />
        <div className="absolute inset-0">
          <Navigation />
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative">
        <ExpertiseSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;