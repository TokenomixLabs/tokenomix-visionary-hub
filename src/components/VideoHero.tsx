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
    <div className="w-full h-screen relative overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1047375038?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        className="absolute top-0 left-0 w-full h-full"
        style={{
          width: '100vw',
          height: '100vh',
          border: 'none',
        }}
        allow="autoplay; fullscreen"
        title="Background Video"
      />
    </div>
  );
};