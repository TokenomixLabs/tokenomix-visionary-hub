import { Volume2, VolumeX } from "lucide-react";
import { useState, useEffect } from "react";
import Player from "@vimeo/player";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

export const VideoHero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    // Initialize Vimeo player
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const vimeoPlayer = new Player(iframe);
      setPlayer(vimeoPlayer);
      
      // Set initial state
      vimeoPlayer.setVolume(0); // Start muted
      vimeoPlayer.setLoop(true); // Loop the video
      vimeoPlayer.play(); // Autoplay
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
    <section className="relative min-h-screen">
      {/* Navigation with gradient background */}
      <div className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-[2px]">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <img 
            src="/lovable-uploads/42221e45-c411-4ac5-b292-863962892b37.png" 
            alt="Tokenomix" 
            className="h-8 w-auto"
          />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-white hover:text-neon-blue transition-colors px-4 py-2 font-medium"
                  href="#expertise"
                >
                  Expertise
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-white hover:text-neon-blue transition-colors px-4 py-2 font-medium"
                  href="#projects"
                >
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-white hover:text-neon-blue transition-colors px-4 py-2 font-medium"
                  href="#contact"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="relative w-full h-full" style={{ padding: "56.25% 0 0 0" }}>
          <iframe
            src="https://player.vimeo.com/video/1047366093?badge=0&autopause=0&player_id=0&app_id=58479&background=1&controls=0"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="tokenomix-hero"
          />
        </div>

        {/* Lighter gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/20"></div>

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
      </div>
    </section>
  );
};