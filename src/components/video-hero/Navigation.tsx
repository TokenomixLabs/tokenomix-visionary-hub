import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

const NAVIGATION_ITEMS = ["Expertise", "Projects", "Contact"];

export const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="w-full px-6 py-4 flex flex-col bg-black/10 backdrop-blur-sm">
        <div className="w-full flex justify-center mb-6">
          <img 
            src="/lovable-uploads/42221e45-c411-4ac5-b292-863962892b37.png" 
            alt="Tokenomix" 
            className="h-8 w-auto hover:scale-105 transition-transform duration-300 animate-fade-in"
          />
        </div>
        
        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex flex-col items-center space-y-3 w-full">
            {NAVIGATION_ITEMS.map((item) => (
              <NavigationMenuItem key={item} className="w-full max-w-[280px]">
                <NavigationMenuLink
                  className="w-full text-white hover:text-neon-blue transition-all duration-300 
                    px-8 py-3 text-xl font-orbitron font-medium 
                    bg-black/20 hover:bg-black/30 rounded-full
                    hover:shadow-[0_0_15px_rgba(14,165,233,0.2)]
                    active:scale-95 touch-manipulation flex items-center justify-center
                    animate-fade-in border border-white/5"
                  href={`#${item.toLowerCase()}`}
                  style={{
                    animationDelay: `${NAVIGATION_ITEMS.indexOf(item) * 100}ms`
                  }}
                >
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};