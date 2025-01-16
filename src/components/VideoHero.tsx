import { useState, useEffect } from "react";
import Player from "@vimeo/player";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { Navigation } from "./Navigation";

export const VideoHero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState<Player | null>(null);

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
      <div className="absolute inset-0">
        <iframe
          src="https://player.vimeo.com/video/1047375038?background=1&autoplay=1&loop=1&byline=0&title=0"
          className="w-full h-full scale-[1.02] object-cover"
          allow="autoplay; fullscreen"
          frameBorder="0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-primary/90"></div>
      </div>
      
      <Navigation />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-orbitron animate-glow">
            Shaping the Future of
            <span className="text-neon-blue"> Tokenomics</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-orbitron font-light">
            Expert insights and strategic consulting for decentralized economies
          </p>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-4 right-4 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full w-12 h-12"
        onClick={toggleMute}
      >
        {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
      </Button>
    </div>
  );
};