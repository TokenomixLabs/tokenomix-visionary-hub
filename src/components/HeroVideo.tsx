import { Button } from "../components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { AspectRatio } from "../components/ui/aspect-ratio";
import { useIsMobile } from "../hooks/use-mobile";
import ErrorBoundary from "./ErrorBoundary";

const VideoPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // We don't need to manually load the script since we have @vimeo/player installed
    import('@vimeo/player').then(() => {
      // Vimeo player is ready
    }).catch(error => {
      console.error('Error loading Vimeo player:', error);
    });
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      // Post message to Vimeo player
      iframe.contentWindow?.postMessage({
        method: 'setVolume',
        value: isMuted ? 0 : 1
      }, '*');
    }
  }, [isMuted]);

  return (
    <div className="relative w-full overflow-hidden bg-black mt-4">
      <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1047625994?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;background=1&amp;muted=1&amp;loop=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}
          title="Tokenomix Hero Video"
        />
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMuted(!isMuted)}
        className="absolute z-[9999] bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center bottom-8 right-8 border-2 border-white/30"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={28} className="text-white" /> : <Volume2 size={28} className="text-white" />}
      </Button>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

const HeroVideo = () => (
  <ErrorBoundary>
    <VideoPlayer />
  </ErrorBoundary>
);

export default HeroVideo;
