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
    <div className="absolute inset-0 w-full h-full">
      <div className="relative w-full h-full">
        <iframe
          src="https://player.vimeo.com/video/1047375038?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="absolute top-50 left-50 min-w-[100%] min-h-[100%] w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            border: 'none',
          }}
          allow="autoplay; fullscreen"
        />
      </div>
    </div>
  );
};