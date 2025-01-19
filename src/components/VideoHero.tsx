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

  const handlePlayerReady = async (vimeoPlayer: Player) => {
    setPlayer(vimeoPlayer);
    setIsVideoLoaded(true);
    // Ensure initial muted state
    await vimeoPlayer.setVolume(0);
    setIsMuted(true);
  };

  const toggleMute = async () => {
    if (!player) return;

    try {
      const currentVolume = await player.getVolume();
      const newVolume = currentVolume === 0 ? 1 : 0;
      
      // First ensure video is playing
      await player.play();
      
      // Then set volume
      await player.setVolume(newVolume);
      setIsMuted(newVolume === 0);
      
      console.log('Volume toggled:', newVolume);
    } catch (error) {
      console.error('Error toggling mute:', error);
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