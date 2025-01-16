import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative h-screen">
        <VideoHero />
        <Navigation />
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