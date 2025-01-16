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
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/1047375038?badge=0&autopause=0&player_id=0&app_id=58479&background=1&controls=0"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(1.2)',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              pointerEvents: 'none'
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="tokenomix-hero"
          />
        </div>

        {/* Lighter gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-primary/70"></div>
      </div>

      {/* Navigation with slightly darker background */}
      <div className="absolute top-0 left-0 w-full z-50">
        <div className={`container mx-auto px-4 py-6 flex ${isMobile ? 'flex-col space-y-4' : 'justify-between'} items-center bg-black/20 backdrop-blur-sm rounded-b-lg`}>
          <img 
            src="/lovable-uploads/42221e45-c411-4ac5-b292-863962892b37.png" 
            alt="Tokenomix" 
            className={`h-8 w-auto ${isMobile ? 'mb-4' : ''}`}
          />
          <NavigationMenu>
            <NavigationMenuList className={`${isMobile ? 'flex-wrap justify-center gap-2' : 'space-x-2'}`}>
              {["Expertise", "Projects", "Contact"].map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink
                    className="text-white hover:text-neon-blue transition-colors px-4 py-2 font-medium backdrop-blur-sm bg-black/10 rounded-lg shadow-sm"
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

      {/* Mute/Unmute Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-4 right-4 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
        onClick={toggleMute}
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="h-6 w-6" />
        ) : (
          <Volume2 className="h-6 w-6" />
        )}
      </Button>
    </section>
  );
};