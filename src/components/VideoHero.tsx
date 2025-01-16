import { useEffect } from "react";
import Player from "@vimeo/player";

export const VideoHero = () => {
  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const player = new Player(iframe);
      player.setVolume(0);
      player.play();
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <iframe
          src="https://player.vimeo.com/video/1047375038?background=1&autoplay=1&loop=1&byline=0&title=0"
          className="w-full h-full object-cover scale-[1.02]"
          allow="autoplay; fullscreen"
          frameBorder="0"
        />
      </div>
    </div>
  );
};