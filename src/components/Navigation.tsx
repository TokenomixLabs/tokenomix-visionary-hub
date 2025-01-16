import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/42221e45-c411-4ac5-b292-863962892b37.png" 
              alt="Tokenomix" 
              className="h-8 md:h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["Expertise", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                to={`#${item.toLowerCase()}`}
                className="text-white hover:text-neon-blue transition-colors duration-300 font-medium text-lg"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black/95 flex items-center justify-center md:hidden z-50">
              <div className="flex flex-col space-y-8">
                {["Expertise", "Projects", "Contact"].map((item) => (
                  <Link
                    key={item}
                    to={`#${item.toLowerCase()}`}
                    className="text-white hover:text-neon-blue transition-colors duration-300 font-medium text-xl text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};