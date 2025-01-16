import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <section className="h-screen w-full relative">
        <VideoHero />
        <Navigation />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-6xl font-orbitron text-white text-center animate-glow">
            <span className="text-white">Where </span>
            <span className="text-neon-blue">Expertise </span>
            <span className="text-white">Meets Innovation</span>
          </h1>
        </div>
      </section>
      <section className="bg-black">
        <ExpertiseSection />
        <ProjectsSection />
        <Footer />
      </section>
    </main>
  );
};

export default Index;