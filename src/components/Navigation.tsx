import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

export const Navigation = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <img 
            src="/lovable-uploads/42221e45-c411-4ac5-b292-863962892b37.png" 
            alt="Tokenomix" 
            className="h-8 w-auto"
          />
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              {["Expertise", "Projects", "Contact"].map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink
                    className="text-white hover:text-neon-blue transition-colors px-4 py-2 font-medium rounded-lg"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};