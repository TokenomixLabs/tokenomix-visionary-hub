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
    
    try {
      // Explicitly set initial volume to 0 and verify it was set
      await vimeoPlayer.setVolume(0);
      const volume = await vimeoPlayer.getVolume();
      console.log('Initial volume set to:', volume);
      setIsMuted(true);
    } catch (error) {
      console.error('Error setting initial volume:', error);
    }
  };

  const toggleMute = async () => {
    if (!player) {
      console.error('Player not initialized');
      return;
    }

    try {
      // Get current state
      const currentVolume = await player.getVolume();
      console.log('Current volume:', currentVolume);
      
      // Set new volume state
      const newVolume = currentVolume === 0 ? 1 : 0;
      await player.setVolume(newVolume);
      
      // Verify the volume was actually set
      const verifyVolume = await player.getVolume();
      console.log('New volume set to:', verifyVolume);
      
      // Update UI state
      setIsMuted(verifyVolume === 0);
      
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