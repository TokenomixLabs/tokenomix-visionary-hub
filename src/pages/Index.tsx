import { Navigation } from "@/components/Navigation";
import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <VideoHero />
      <div className="relative">
        <Navigation />
        <main className="flex flex-col">
          <section className="min-h-screen flex items-center justify-center relative">
            <Hero />
          </section>
          <section className="relative bg-primary min-h-screen">
            <ExpertiseSection />
          </section>
          <ProjectsSection />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Index;