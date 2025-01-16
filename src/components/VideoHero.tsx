import { Volume2, VolumeX } from "lucide-react";
import { useState, useEffect } from "react";
import Player from "@vimeo/player";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";

export const VideoHero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState<Player | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const vimeoPlayer = new Player(iframe);
      setPlayer(vimeoPlayer);
      vimeoPlayer.setVolume(0);
      vimeoPlayer.setLoop(true);

      // Optimize video loading
      const quality = isMobile ? 'auto' : '1080p';
      vimeoPlayer.setQuality(quality);

      // Show video only after it's loaded
      vimeoPlayer.ready().then(() => {
        setIsVideoLoaded(true);
        vimeoPlayer.play();
      });
    }
  }, [isMobile]);

  const toggleMute = async () => {
    if (player) {
      const newMutedState = !isMuted;
      await player.setVolume(newMutedState ? 0 : 1);
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Video Background with loading state */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-primary/70"></div>
      </div>

      {/* Mobile-optimized navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 w-full">
        <div className={`w-full px-4 ${isMobile ? 'py-4' : 'py-6'} flex ${isMobile ? 'flex-col space-y-4' : 'justify-between'} items-center bg-black/20 backdrop-blur-sm`}>
          <img 
            src="/lovable-uploads/42221e45-c411-4ac5-b292-863962892b37.png" 
            alt="Tokenomix" 
            className={`h-8 w-auto ${isMobile ? 'mb-4' : ''} hover:scale-105 transition-transform duration-300 animate-fade-in`}
          />
          <NavigationMenu>
            <NavigationMenuList className={`${isMobile ? 'flex-wrap justify-center gap-4' : 'space-x-2'}`}>
              {["Expertise", "Projects", "Contact"].map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink
                    className={`text-white hover:text-neon-blue transition-all duration-300 
                      ${isMobile ? 'px-6 py-3 text-lg' : 'px-4 py-2'} 
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

      {/* Mobile-optimized mute button */}
      <Button
        variant="ghost"
        size="icon"
        className={`absolute bottom-4 right-4 z-20 
          ${isMobile ? 'w-14 h-14' : 'w-12 h-12'}
          bg-black/20 hover:bg-black/40 text-white rounded-full 
          flex items-center justify-center backdrop-blur-sm 
          transition-all duration-300 hover:scale-110 hover:shadow-lg
          active:scale-95 touch-manipulation
          animate-fade-in`}
        onClick={toggleMute}
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className={`${isMobile ? 'h-7 w-7' : 'h-6 w-6'}`} />
        ) : (
          <Volume2 className={`${isMobile ? 'h-7 w-7' : 'h-6 w-6'}`} />
        )}
      </Button>

      {/* Loading indicator */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-primary">
          <div className="w-16 h-16 border-4 border-neon-blue border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </section>
  );
};