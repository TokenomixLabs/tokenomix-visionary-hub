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
    <section className="fixed top-0 left-0 w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary z-10" />
      <iframe
        src="https://player.vimeo.com/video/1047375038?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        className="w-full h-full object-cover"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        frameBorder="0"
        allow="autoplay; fullscreen"
        title="Background Video"
      />
    </section>
  );
};