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
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary pointer-events-none z-10" />
      <iframe
        src="https://player.vimeo.com/video/1047375038?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        className="absolute top-0 left-0 w-full h-full object-cover"
        frameBorder="0"
        allow="autoplay; fullscreen"
        title="Background Video"
      />
    </div>
  );
};