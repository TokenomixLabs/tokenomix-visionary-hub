import { VideoHero } from "@/components/VideoHero";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <VideoHero />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;