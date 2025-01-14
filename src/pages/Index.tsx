import { VideoHero } from "@/components/VideoHero";
import { Contact } from "@/components/Contact";
import { ExpertiseSection } from "@/components/ExpertiseSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <VideoHero />
      <ExpertiseSection />
      <Contact />
    </div>
  );
};

export default Index;