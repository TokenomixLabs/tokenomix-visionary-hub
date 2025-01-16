import { useState, useEffect } from "react";
import Player from "@vimeo/player";
import { useIsMobile } from "@/hooks/use-mobile";

interface VideoBackgroundProps {
  onPlayerReady: (player: Player) => void;
  isVideoLoaded: boolean;
}

export const VideoBackground = ({ onPlayerReady, isVideoLoaded }: VideoBackgroundProps) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const vimeoPlayer = new Player(iframe);
      vimeoPlayer.setVolume(0);
      vimeoPlayer.setLoop(true);

      const quality = isMobile ? 'auto' : '1080p';
      vimeoPlayer.setQuality(quality);

      vimeoPlayer.ready().then(() => {
        onPlayerReady(vimeoPlayer);
        vimeoPlayer.play();
      });
    }
  }, [isMobile, onPlayerReady]);

  return (
    <div className={`absolute inset-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://player.vimeo.com/video/1047375038?badge=0&autopause=0&player_id=0&app_id=58479&background=1&controls=0&muted=1"
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
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-primary/70"></div>
    </div>
  );
};