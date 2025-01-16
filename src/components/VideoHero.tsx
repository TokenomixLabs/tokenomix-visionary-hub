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
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary" />
      <div className="absolute inset-0">
        <iframe
          src="https://player.vimeo.com/video/1047375038?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="w-full h-full object-cover"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Background Video"
        />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-6xl font-orbitron text-white">
          Where <span className="text-neon-blue">Expertise</span> Meets Innovation
        </h1>
      </div>
    </section>
  );
};