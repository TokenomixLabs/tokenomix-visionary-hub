import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <VideoHero />
        <div className="absolute inset-0">
          <Navigation />
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative bg-black">
        <ExpertiseSection />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;