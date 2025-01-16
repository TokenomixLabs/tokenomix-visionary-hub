import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen w-full overflow-hidden">
        <VideoHero />
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navigation />
        </div>
      </div>

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