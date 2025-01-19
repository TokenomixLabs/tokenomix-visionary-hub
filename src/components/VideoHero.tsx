import { useState } from "react";
import Player from "@vimeo/player";
import { VideoBackground } from "./video/VideoBackground";
import { HeroNavigation } from "./navigation/HeroNavigation";
import { MuteButton } from "./video/MuteButton";
import { useIsMobile } from "@/hooks/use-mobile";

export const VideoHero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState<Player | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const isMobile = useIsMobile();

  const handlePlayerReady = (vimeoPlayer: Player) => {
    vimeoPlayer.setVolume(0);
    setPlayer(vimeoPlayer);
    setIsVideoLoaded(true);
  };

  const toggleMute = async () => {
    if (player) {
      try {
        const volume = await player.getVolume();
        const newVolume = volume === 0 ? 1 : 0;
        await player.setVolume(newVolume);
        setIsMuted(newVolume === 0);
        
        // If unmuting on mobile, ensure video is playing
        if (isMobile && newVolume > 0) {
          await player.play();
        }
      } catch (error) {
        console.error('Error toggling mute:', error);
      }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary">
      <VideoBackground onPlayerReady={handlePlayerReady} />
      <HeroNavigation />
      <MuteButton isMuted={isMuted} onToggle={toggleMute} />

      {!isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-primary">
          <div className="w-16 h-16 border-4 border-neon-blue border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </section>
  );
};