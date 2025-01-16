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
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary z-10" />
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1047375038?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Background Video"
        />
      </div>
    </div>
  );
};