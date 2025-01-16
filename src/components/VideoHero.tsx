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
    // Ensure initial muted state
    vimeoPlayer.setVolume(0).then(() => {
      console.log('Initial volume set to 0');
    });
  };

  const toggleMute = () => {
    if (player) {
      const newMutedState = !isMuted;
      player.getVolume().then(currentVolume => {
        console.log('Current volume before toggle:', currentVolume);
        return player.setVolume(newMutedState ? 0 : 1);
      }).then(() => {
        setIsMuted(newMutedState);
        console.log('Volume toggled:', newMutedState ? 'Muted' : 'Unmuted');
      }).catch(error => {
        console.error('Error handling volume:', error);
      });
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