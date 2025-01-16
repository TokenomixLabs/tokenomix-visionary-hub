import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface MuteButtonProps {
  isMuted: boolean;
  onToggle: () => void;
}

export const MuteButton = ({ isMuted, onToggle }: MuteButtonProps) => {
  const isMobile = useIsMobile();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`absolute bottom-4 right-4 z-20 
        ${isMobile ? 'w-14 h-14' : 'w-12 h-12'}
        bg-black/20 hover:bg-black/40 text-white rounded-full 
        flex items-center justify-center backdrop-blur-sm 
        transition-all duration-300 hover:scale-110 hover:shadow-lg
        active:scale-95 touch-manipulation`}
      onClick={onToggle}
      title={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? (
        <VolumeX className={`${isMobile ? 'h-7 w-7' : 'h-6 w-6'}`} />
      ) : (
        <Volume2 className={`${isMobile ? 'h-7 w-7' : 'h-6 w-6'}`} />
      )}
    </Button>
  );
};