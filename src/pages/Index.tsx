import { VideoHero } from "@/components/VideoHero";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <main className="min-h-screen bg-primary overflow-hidden">
      <VideoHero />
      <div id="expertise">
        <ExpertiseSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <Footer />
      <BackToTop />
    </main>
  );
};

export default Index;