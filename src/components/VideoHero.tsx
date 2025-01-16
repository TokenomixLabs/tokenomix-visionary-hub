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
    <div className="relative w-full h-screen overflow-hidden -mt-[80px]">
      <iframe
        src="https://player.vimeo.com/video/1047375038?background=1&autoplay=1&loop=1&byline=0&title=0"
        className="absolute top-0 left-0 w-full h-full scale-[1.02] object-cover"
        allow="autoplay; fullscreen"
        frameBorder="0"
      />
    </div>
  );
};