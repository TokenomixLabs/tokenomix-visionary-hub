import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Player from "@vimeo/player";

interface MuteControlProps {
  player: Player | null;
  isMuted: boolean;
  onMuteToggle: () => void;
}

export const MuteControl = ({ player, isMuted, onMuteToggle }: MuteControlProps) => {
  const handleMuteToggle = async () => {
    if (player) {
      await player.setVolume(isMuted ? 1 : 0);
      onMuteToggle();
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute bottom-6 right-6 z-20 
        w-14 h-14 bg-black/40 hover:bg-black/60 text-white rounded-full 
        flex items-center justify-center backdrop-blur-md 
        transition-all duration-300 hover:scale-110 hover:shadow-lg
        active:scale-95 touch-manipulation border border-white/10
        animate-fade-in"
      onClick={handleMuteToggle}
      title={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? (
        <VolumeX className="h-7 w-7" />
      ) : (
        <Volume2 className="h-7 w-7" />
      )}
    </Button>
  );
};