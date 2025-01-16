import { useEffect } from "react";
import Player from "@vimeo/player";

export const VideoHero = () => {
  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const player = new Player(iframe);
      player.setVolume(0);
      player.play().catch(console.error);
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full">
      <div className="absolute inset-0 bg-black/60" /> {/* Darkened overlay */}
      <iframe
        src="https://player.vimeo.com/video/1047375038?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100vw',
          height: '100vh',
          transform: 'translate(-50%, -50%) scale(1.2)',
          border: 'none',
          pointerEvents: 'none',
          zIndex: -1
        }}
        allow="autoplay; fullscreen"
        title="Background Video"
      />
    </div>
  );
};