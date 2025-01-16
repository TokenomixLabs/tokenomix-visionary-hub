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
    <div className="relative w-full h-screen overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1047375038?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        className="absolute inset-0 w-full h-full object-cover"
        allow="autoplay; fullscreen"
        title="Background Video"
        style={{ border: 'none' }}
      />
      <div className="absolute inset-0 bg-black/30" /> {/* Overlay to ensure text visibility */}
    </div>
  );
};