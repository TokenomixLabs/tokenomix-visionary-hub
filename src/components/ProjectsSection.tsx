import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    title: "Societi",
    logo: "/lovable-uploads/370cdaf8-407f-4434-ba46-9dd119016abd.png",
    description: "Redefining how communities create and share value through decentralized ownership and tokenized engagement",
    url: "#", // Replace with actual Societi URL
    isComingSoon: false,
  },
  {
    title: "InsiderDAO",
    logo: "/lovable-uploads/d8031f73-2ada-4016-be4b-c789b6674981.png",
    description: "Unlocking exclusive tools, strategies, and opportunities to lead and grow in the new digital age.",
    url: "#", // Replace with actual InsiderDAO URL
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
    <div className="relative">
      <section className="py-20 bg-gradient-to-b from-[#2D1F54] via-[#1E1A2E] to-[#0EA5E9]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12 font-orbitron">
            Current{" "}
            <span className="text-neon-blue animate-glow drop-shadow-[0_0_15px_rgba(14,165,233,0.5)]">
              Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-primary/30 border-neon-purple/30 backdrop-blur-sm hover:border-neon-blue/50 transition-all duration-300 shadow-[0_0_25px_rgba(14,165,233,0.1)] hover:shadow-[0_0_35px_rgba(14,165,233,0.2)]"
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
      <Separator className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />
    </div>
  );
};