import { VideoHero } from "@/components/VideoHero";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { ExpertiseSection } from "@/components/ExpertiseSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <VideoHero />
      <ExpertiseSection />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;