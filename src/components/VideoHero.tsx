import { Volume2, VolumeX } from "lucide-react";
import { useState, useEffect } from "react";
import Player from "@vimeo/player";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";

export const VideoHero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState<Player | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const vimeoPlayer = new Player(iframe);
      setPlayer(vimeoPlayer);
      vimeoPlayer.setVolume(0);
      vimeoPlayer.setLoop(true);
      vimeoPlayer.play();
    }
  }, []);

  const toggleMute = async () => {
    if (player) {
      const newMutedState = !isMuted;
      await player.setVolume(newMutedState ? 0 : 1);
      setIsMuted(newMutedState);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://player.vimeo.com/video/1047375038?background=1&autoplay=1&loop=1&byline=0&title=0"
          className="absolute h-screen w-screen scale-[1.02]"
          allow="autoplay; fullscreen"
          frameBorder="0"
          style={{ pointerEvents: 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-primary"></div>
      </div>

      {/* Navigation Bar */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className={`flex ${isMobile ? 'flex-col space-y-4' : 'justify-between'} items-center`}>
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

      {/* Mute Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full w-12 h-12"
        onClick={toggleMute}
      >
        {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
      </Button>
    </div>
  );
};