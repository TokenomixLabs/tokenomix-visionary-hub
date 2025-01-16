import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <img 
            src="/lovable-uploads/42221e45-c411-4ac5-b292-863962892b37.png" 
            alt="Tokenomix" 
            className="h-8 w-auto"
          />
          <div className="flex space-x-8">
            {["Expertise", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                to={`#${item.toLowerCase()}`}
                className="text-white hover:text-neon-blue transition-colors font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};