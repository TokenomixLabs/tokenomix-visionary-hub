import { Rocket, BarChart2, Coins } from "lucide-react";

export const ExpertiseSection = () => {
  const expertise = [
    {
      icon: <Rocket className="w-12 h-12 text-neon-blue" />,
      title: "Community Building",
      description: "Expertise in fostering engaged, value-driven communities with lasting impact.",
    },
    {
      icon: <BarChart2 className="w-12 h-12 text-neon-blue" />,
      title: "Growth Hacking",
      description: "Data-driven strategies to ignite momentum and maximize reach across digital ecosystems.",
    },
    {
      icon: <Coins className="w-12 h-12 text-neon-blue" />,
      title: "Tokenomics Design",
      description: "Creating sustainable token models that balance economic growth, user incentives, and long-term value.",
    },
  ];

  return (
    <section className="w-full bg-[#1A1F2C] relative">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2D1F54] to-transparent" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-[#1E1A2E]/50 border border-[#2D1F54]/30 backdrop-blur-sm"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="font-orbitron text-2xl text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2D1F54] to-transparent" />
    </section>
  );
};