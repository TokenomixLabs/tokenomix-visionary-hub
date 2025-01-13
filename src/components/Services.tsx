import { Coins, BarChart, Network, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Token Design",
    description: "Creating sustainable token economies that drive value and growth",
    icon: Coins,
  },
  {
    title: "Economic Modeling",
    description: "Advanced modeling and simulation of token dynamics",
    icon: BarChart,
  },
  {
    title: "Network Analysis",
    description: "Understanding and optimizing network effects in token systems",
    icon: Network,
  },
  {
    title: "Security Assessment",
    description: "Comprehensive security analysis of token mechanisms",
    icon: Shield,
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12 font-orbitron">
          What We <span className="text-neon-blue">Do</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="animate-slide-up bg-primary/50 border-neon-purple/20 backdrop-blur-sm hover:border-neon-blue/50 transition-all duration-300" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <service.icon className="h-12 w-12 text-neon-blue mb-4" />
                <CardTitle className="text-xl font-orbitron text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};