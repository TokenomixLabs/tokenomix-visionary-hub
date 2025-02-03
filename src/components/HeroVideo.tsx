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
    <div className="relative w-full overflow-hidden bg-black pt-6 md:pt-12">
      <AspectRatio ratio={16/9}>
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1047625994?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&controls=0"
          className="w-full h-full"
          title="OMNISX. Hero Video"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%'
          }}
        />
      </AspectRatio>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMuted(!isMuted)}
        className="absolute z-50 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center bottom-8 right-8"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </Button>
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
