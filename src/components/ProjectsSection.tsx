import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "@/components/ui/image";

const projects = [
  {
    title: "Societi",
    logo: "/lovable-uploads/370cdaf8-407f-4434-ba46-9dd119016abd.png",
    description: "Decentralizing Communities and Empowering Ownership.",
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
          Our <span className="text-neon-blue">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-primary/50 border-neon-blue/20 backdrop-blur-sm hover:border-neon-blue/50 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 transition-opacity duration-300" />
              <CardHeader className="relative z-10">
                <div className="h-24 flex items-center justify-center p-4">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="h-full w-auto object-contain filter brightness-200"
                  />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300 mb-6">{project.description}</p>
                {project.isComingSoon ? (
                  <div className="text-neon-purple font-orbitron animate-pulse">
                    Coming Soon
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:text-white group"
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