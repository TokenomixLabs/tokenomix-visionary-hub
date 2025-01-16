import { useState } from "react";
import { VideoBackground } from "./video-hero/VideoBackground";
import { Navigation } from "./video-hero/Navigation";
import { MuteControl } from "./video-hero/MuteControl";
import { LoadingSpinner } from "./video-hero/LoadingSpinner";
import Player from "@vimeo/player";

export const VideoHero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState<Player | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = (vimeoPlayer: Player) => {
    setPlayer(vimeoPlayer);
    setIsVideoLoaded(true);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary">
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <VideoBackground onLoadComplete={() => setIsVideoLoaded(true)} />
      </div>

      <Navigation />
      
      <MuteControl 
        player={player}
        isMuted={isMuted}
        onMuteToggle={() => setIsMuted(!isMuted)}
      />

      {!isVideoLoaded && <LoadingSpinner />}
    </section>
  );
};