import { Brain, Users, Repeat, Rocket, BarChart3, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const expertiseAreas = [
  {
    title: "Visionary Strategy",
    description: "Crafting foresight-driven frameworks that shape innovation, empower growth, and create transformative solutions.",
    icon: Lightbulb,
  },
  {
    title: "Decentralized Systems",
    description: "Pioneering ownership-driven platforms that empower communities through tokenized engagement.",
    icon: Brain,
  },
  {
    title: "AI Collaboration",
    description: "Leveraging advanced AI tools to enhance scalability, streamline operations, and innovate systems of growth.",
    icon: Users,
  },
  {
    title: "Systems of Duplication",
    description: "Scalable frameworks for replicating success across teams, platforms, and communities.",
    icon: Repeat,
  },
  {
    title: "Community Building",
    description: "Expertise in fostering engaged, value-driven communities with lasting impact.",
    icon: Rocket,
  },
  {
    title: "Growth Hacking",
    description: "Data-driven strategies to ignite momentum and maximize reach across digital ecosystems.",
    icon: BarChart3,
  },
];

export const ExpertiseSection = () => {
  return (
    <div className="relative">
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12 font-orbitron animate-glow drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]">
            Where <span className="text-neon-blue animate-glow drop-shadow-[0_0_25px_rgba(14,165,233,0.5)]">Expertise</span> Meets Innovation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <Card 
                key={index} 
                className="animate-slide-up bg-primary/50 border-neon-purple/20 backdrop-blur-sm hover:border-neon-blue/50 transition-all duration-300" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <area.icon className="h-12 w-12 text-neon-blue mb-4" />
                  <CardTitle className="text-xl font-orbitron text-white">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Separator className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
    </div>
  );
};