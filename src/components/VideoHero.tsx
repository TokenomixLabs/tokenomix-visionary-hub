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
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1047375038?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        className="absolute inset-0 w-full h-full object-cover"
        allow="autoplay; fullscreen"
        style={{ border: 'none' }}
      />
    </div>
  );
};