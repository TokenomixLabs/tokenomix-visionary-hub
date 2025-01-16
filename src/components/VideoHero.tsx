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
    <div className="fixed inset-0 w-screen h-screen">
      <iframe
        src="https://player.vimeo.com/video/1047375038?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        className="w-screen h-screen object-cover"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          border: 'none',
        }}
        allow="autoplay; fullscreen"
      />
    </div>
  );
};