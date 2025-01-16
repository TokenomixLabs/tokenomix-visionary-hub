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
        <div className="absolute inset-0 z-20">
          <Navigation />
          <div className="h-full flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-orbitron animate-fade-in">
                EMPOWERING ECONOMIES
              </h1>
            </div>
          </div>
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