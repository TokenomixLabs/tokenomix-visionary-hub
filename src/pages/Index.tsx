import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <VideoHero />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20"> {/* Added padding to account for navigation height */}
          <ExpertiseSection />
          <ProjectsSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;