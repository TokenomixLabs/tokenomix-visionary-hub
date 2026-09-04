import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import ErrorBoundary from "@/components/ErrorBoundary";

const VIMEO_ID = 1047625994;
/** If Vimeo has not reported ready by then, we keep the branded fallback in place. */
const READY_TIMEOUT_MS = 6000;

/**
 * Branded fallback that sits BEHIND the Vimeo iframe.
 * Visible until the player reports ready — so a blocked, throttled, 401'd or
 * privacy-filtered Vimeo frame never shows a third-party error screen as the
 * first impression. Uses only existing Tokenomix brand assets and tokens.
 */
const HeroFallback = ({ active }: { active: boolean }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute inset-0 z-[1] overflow-hidden bg-background transition-opacity duration-700 ${
      active ? "opacity-100" : "opacity-0"
    }`}
  >
    <div className="absolute inset-0 grid-field opacity-[0.28] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
    <div className="absolute left-1/2 top-1/2 h-[min(680px,92vw)] w-[min(680px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center">
      <img
        src="/tokenomix-logo.png"
        alt=""
        className="h-8 w-auto opacity-90 md:h-11"
      />
      <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-muted-foreground md:text-[0.8rem]">
        Value · Ownership · Incentives · Governance
      </p>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
  </div>
);

const VideoPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [ready, setReady] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let cancelled = false;
    const player = new Player(iframe);
    playerRef.current = player;

    const timeout = window.setTimeout(() => {
      if (!cancelled && !ready) {
        // Vimeo never became ready — the branded fallback stays.
        console.warn("Vimeo player did not become ready in time; keeping hero fallback.");
      }
    }, READY_TIMEOUT_MS);

    player
      .ready()
      .then(async () => {
        if (cancelled) return;
        try {
          await player.setMuted(true);
          await player.setLoop(true);
          await player.play();
        } catch {
          /* autoplay may still be resolved by the muted URL params */
        }
        if (!cancelled) setReady(true);
      })
      .catch((error) => {
        console.error("Vimeo player unavailable:", error);
      });

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      playerRef.current = null;
      player.destroy().catch(() => undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMute = useCallback(async () => {
    const player = playerRef.current;
    const next = !isMuted;
    setIsMuted(next);
    if (!player) return;
    try {
      // Vimeo needs both: setMuted flips the mute flag, setVolume restores level.
      await player.setMuted(next);
      await player.setVolume(next ? 0 : 1);
      if (!next) await player.play();
    } catch (error) {
      console.error("Could not change hero audio state:", error);
      setIsMuted(!next);
    }
  }, [isMuted]);

  return (
    <div className="relative mt-4 w-full overflow-hidden bg-background">
      {/* Height is capped on every tier: on ultra-wide canvases a raw 16:9 frame
          would open a ~1450px void whenever the video is slow or blocked. */}
      <div className="relative h-[clamp(25rem,72svh,34rem)] sm:h-auto sm:aspect-video sm:max-h-[min(82svh,860px)]">
        <HeroFallback active={!ready} />
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${VIMEO_ID}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&background=1&muted=1&loop=1&playsinline=1`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 2,
            opacity: ready ? 1 : 0,
            transition: "opacity 700ms ease",
          }}
          title="Tokenomix Hero Video"
        />
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-[9999] flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={28} className="text-white" /> : <Volume2 size={28} className="text-white" />}
      </Button>
      <div className="pointer-events-none absolute top-0 left-0 z-[3] h-20 w-full bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-[3] h-20 w-full bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

const HeroVideo = () => (
  <ErrorBoundary>
    <VideoPlayer />
  </ErrorBoundary>
);

export default HeroVideo;
