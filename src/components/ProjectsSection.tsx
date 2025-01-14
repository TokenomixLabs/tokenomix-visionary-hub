import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Societi",
    description: "Decentralizing Communities and Empowering Ownership.",
    url: "#", // Replace with actual Societi URL
    isComingSoon: false,
  },
  {
    title: "InsiderDAO",
    description: "Unlocking Knowledge and Opportunities for Digital Sovereignty.",
    url: "#", // Replace with actual InsiderDAO URL
    isComingSoon: false,
  },
  {
    title: "Influati",
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
                <div className="h-16 flex items-center justify-center">
                  {/* Replace with actual project logos */}
                  <h3 className="text-2xl font-orbitron text-white">{project.title}</h3>
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