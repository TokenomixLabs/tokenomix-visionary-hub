import { useState } from "react";
import Player from "@vimeo/player";
import { VideoBackground } from "./video/VideoBackground";
import { HeroNavigation } from "./navigation/HeroNavigation";
import { MuteButton } from "./video/MuteButton";

export const VideoHero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState<Player | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handlePlayerReady = (vimeoPlayer: Player) => {
    setPlayer(vimeoPlayer);
    setIsVideoLoaded(true);
    vimeoPlayer.setVolume(0); // Ensure initial muted state
  };

  const toggleMute = async () => {
    if (player) {
      const newMutedState = !isMuted;
      try {
        await player.setVolume(newMutedState ? 0 : 1);
        setIsMuted(newMutedState);
        console.log('Volume toggled:', newMutedState ? 'Muted' : 'Unmuted');
        
        // Verify the volume was set correctly
        const currentVolume = await player.getVolume();
        console.log('Current volume:', currentVolume);
      } catch (error) {
        console.error('Error toggling mute:', error);
      }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary">
      <VideoBackground onPlayerReady={handlePlayerReady} isVideoLoaded={isVideoLoaded} />
      <HeroNavigation />
      <MuteButton isMuted={isMuted} onToggle={toggleMute} />

      {!isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-primary">
          <div className="w-16 h-16 border-4 border-neon-blue border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </section>
  );
};