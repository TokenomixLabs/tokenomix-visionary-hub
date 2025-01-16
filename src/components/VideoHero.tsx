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
    <div className="fixed top-0 left-0 w-full h-screen -z-10">
      <iframe
        src="https://player.vimeo.com/video/1047375038?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'cover',
        }}
        frameBorder="0"
        allow="autoplay; fullscreen"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};