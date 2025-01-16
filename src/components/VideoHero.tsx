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
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary z-10" />
      <div className="absolute inset-0">
        <iframe
          src="https://player.vimeo.com/video/1047375038?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            border: 'none'
          }}
          allow="autoplay; fullscreen"
          title="Background Video"
        />
      </div>
    </div>
  );
};