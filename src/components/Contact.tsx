import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactProps {
  isDialog?: boolean;
}

const inputStyles = "bg-primary/50 border-neon-purple/20 text-white placeholder:text-gray-400 focus:border-neon-blue/50";

export const Contact = ({ isDialog = false }: ContactProps) => {
  const containerClass = isDialog ? "" : "py-20 bg-primary bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-neon-purple/20 via-primary to-primary";
  const innerContainerClass = isDialog ? "" : "container mx-auto px-4";
  const formContainerClass = isDialog ? "" : "max-w-2xl mx-auto";

  return (
    <div className={containerClass}>
      <div className={innerContainerClass}>
        <div className={formContainerClass}>
          {!isDialog && (
            <h2 className="text-4xl font-bold text-white text-center mb-12 font-orbitron">
              Get in <span className="text-neon-blue">Touch</span>
            </h2>
          )}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                placeholder="Name" 
                className={inputStyles}
              />
              <Input 
                placeholder="Email" 
                type="email" 
                className={inputStyles}
              />
            </div>
            <Input 
              placeholder="Subject" 
              className={inputStyles}
            />
            <Textarea 
              placeholder="Message" 
              className={`${inputStyles} h-32`}
            />
            <Button className="w-full bg-neon-blue hover:bg-neon-purple text-white py-6 font-orbitron transition-all duration-300">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};