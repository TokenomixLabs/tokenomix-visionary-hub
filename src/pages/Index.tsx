import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-transparent">
      <VideoHero />
      <Navigation />
      <div className="relative z-10">
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-orbitron animate-fade-in">
              Where <span className="text-neon-blue animate-glow">Expertise</span> Meets Innovation
            </h1>
          </div>
        </div>
        <ExpertiseSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;