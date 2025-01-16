import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";

export const HeroNavigation = () => {
  const isMobile = useIsMobile();

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className={`w-full ${isMobile ? 'px-4 py-4' : 'px-6 py-6'} flex ${isMobile ? 'flex-col gap-4' : 'flex-row justify-between'} items-center bg-black/20 backdrop-blur-sm`}>
        <img 
          src="/lovable-uploads/42221e45-c411-4ac5-b292-863962892b37.png" 
          alt="Tokenomix" 
          className={`${isMobile ? 'h-6' : 'h-8'} w-auto hover:scale-105 transition-transform duration-300 animate-fade-in`}
        />
        <NavigationMenu>
          <NavigationMenuList className={`${isMobile ? 'flex-wrap justify-center gap-2' : 'space-x-2'}`}>
            {["Expertise", "Projects", "Contact"].map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink
                  className={`text-white hover:text-neon-blue transition-all duration-300 
                    ${isMobile ? 'text-sm px-3 py-1.5' : 'px-4 py-2'} 
                    font-medium backdrop-blur-sm bg-black/10 rounded-lg shadow-sm 
                    hover:shadow-neon-blue/20 hover:scale-105 hover:bg-black/20
                    active:scale-95 touch-manipulation
                    animate-fade-in`}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    animationDelay: `${["Expertise", "Projects", "Contact"].indexOf(item) * 100}ms`
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