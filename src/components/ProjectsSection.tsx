import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Societi",
    logo: "/lovable-uploads/370cdaf8-407f-4434-ba46-9dd119016abd.png",
    description: "Redefining how communities create and share value through decentralized ownership and tokenized engagement",
    url: "#",
    isComingSoon: false,
  },
  {
    title: "InsiderDAO",
    logo: "/lovable-uploads/d8031f73-2ada-4016-be4b-c789b6674981.png",
    description: "Unlocking exclusive tools, strategies, and opportunities to lead and grow in the new digital age.",
    url: "#",
    isComingSoon: false,
  },
  {
    title: "Influati",
    logo: "/lovable-uploads/3d1e1097-d2c2-4378-b3ec-f6ce5241f97c.png",
    description: "Empowering creators with cutting-edge tools, strategies, and opportunities to shape the digital future.",
    url: "#",
    isComingSoon: true,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="w-full bg-[#1A1F2C] relative">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2D1F54] to-transparent" />
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D1F54] via-[#1E1A2E] to-[#0EA5E9]/20 pointer-events-none" />
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-center mb-16">
            <span className="font-orbitron text-5xl font-bold flex justify-center items-center gap-4">
              <span className="text-white">Current</span>
              <span className="text-neon-blue animate-glow">Projects</span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-[#1A1F2C]/80 border border-neon-purple/30 backdrop-blur-sm hover:border-neon-blue/50 transition-all duration-500"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 transition-opacity duration-500" />
                <CardHeader className="relative z-10">
                  <div className="h-24 flex items-center justify-center p-4">
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="h-full w-auto object-contain filter brightness-150"
                    />
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-300 text-lg mb-8 min-h-[80px]">{project.description}</p>
                  {project.isComingSoon ? (
                    <Button
                      variant="outline"
                      className="w-full bg-[#1A1F2C]/50 backdrop-blur-sm border-2 border-transparent bg-gradient-to-r from-neon-purple/50 to-neon-blue/50 text-white/90 cursor-not-allowed font-orbitron text-lg py-6"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white border-0 transition-all duration-300 font-orbitron text-lg py-6"
                      asChild
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Visit Project <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2D1F54] to-transparent" />
    </section>
  );
};