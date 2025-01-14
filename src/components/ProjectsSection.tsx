import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Societi",
    logo: "/lovable-uploads/370cdaf8-407f-4434-ba46-9dd119016abd.png",
    description: "Empowering the future of decentralized communities through tokenized ownership and engagement.",
    url: "#", // Replace with actual Societi URL
    isComingSoon: false,
  },
  {
    title: "InsiderDAO",
    logo: "/lovable-uploads/d8031f73-2ada-4016-be4b-c789b6674981.png",
    description: "Unlocking Knowledge and Opportunities for Digital Sovereignty.",
    url: "#", // Replace with actual InsiderDAO URL
    isComingSoon: false,
  },
  {
    title: "Influati",
    logo: "/lovable-uploads/3d1e1097-d2c2-4378-b3ec-f6ce5241f97c.png",
    description: "Redefining Influence in the Digital Age.",
    url: "#",
    isComingSoon: true,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12 font-orbitron">
          Our <span className="text-neon-blue animate-glow">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-primary/30 border-neon-purple/30 backdrop-blur-sm hover:border-neon-blue/50 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 transition-opacity duration-300" />
              <CardHeader className="relative z-10">
                <div className="h-24 flex items-center justify-center p-4">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="h-full w-auto object-contain filter brightness-150 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                  />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300 mb-6">{project.description}</p>
                {project.isComingSoon ? (
                  <Button
                    variant="outline"
                    className="w-full border-neon-purple/20 text-neon-purple/50 cursor-not-allowed opacity-70"
                    disabled
                  >
                    Coming Soon
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 hover:text-white hover:border-neon-blue group"
                    asChild
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      Visit Project <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};