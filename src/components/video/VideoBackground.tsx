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
      
      vimeoPlayer.setLoop(true);
      
      const quality = isMobile ? 'auto' : '1080p';
      vimeoPlayer.setQuality(quality);

      vimeoPlayer.ready().then(() => {
        console.log('Vimeo player ready');
        onPlayerReady(vimeoPlayer);
        
        // Ensure video is playing
        vimeoPlayer.play().then(() => {
          console.log('Video playback started');
        }).catch(error => {
          console.error('Error starting playback:', error);
        });
      });

      return () => {
        vimeoPlayer.unload();
      };
    }
  }, [isMobile, onPlayerReady]);

  return (
    <div className={`absolute inset-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://player.vimeo.com/video/1047375038?background=1&autoplay=1&loop=1&transparent=0&controls=0"
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