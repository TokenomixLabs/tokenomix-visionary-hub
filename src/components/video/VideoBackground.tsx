import { useEffect } from "react";
import Player from "@vimeo/player";
import { useIsMobile } from "@/hooks/use-mobile";

interface VideoBackgroundProps {
  onPlayerReady: (player: Player) => void;
}

export const VideoBackground = ({ onPlayerReady }: VideoBackgroundProps) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const player = new Player(iframe);
      
      player.ready().then(async () => {
        try {
          // Set initial configuration
          await player.setLoop(true);
          await player.setVolume(0);
          await player.setQuality(isMobile ? 'auto' : '1080p');
          
          // Try to start playback
          await player.play();
          
          // Notify parent component that player is ready
          onPlayerReady(player);
        } catch (error) {
          console.error('Error setting up video player:', error);
        }
      });
    }
  }, [isMobile, onPlayerReady]);

  return (
    <div className="absolute inset-0 w-full h-full">
      <iframe
        src="https://player.vimeo.com/video/1047625994?background=1&autoplay=1&loop=1&transparent=0&controls=0&muted=1&autopause=0&playsinline=1"
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-primary/70" />
    </div>
  );
};