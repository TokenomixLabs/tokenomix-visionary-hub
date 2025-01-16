import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useState, useEffect } from "react";
import Player from "@vimeo/player";

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

        {/* Enhanced gradient overlay with stronger contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-primary"></div>

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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 font-orbitron animate-glow drop-shadow-[0_0_35px_rgba(14,165,233,0.4)] animate-float">
            TOKENOMIX
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 font-orbitron font-light drop-shadow-lg animate-fade-in opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            Shaping the Future of Decentralized Economies
          </p>
          <Button 
            className="bg-neon-blue hover:bg-neon-purple text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 font-orbitron shadow-lg shadow-neon-blue/20 hover:shadow-neon-purple/30 hover:scale-105 animate-fade-in opacity-0" 
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};