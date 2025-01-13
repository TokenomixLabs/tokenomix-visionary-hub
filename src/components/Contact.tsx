import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section className="py-20 bg-primary bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-neon-purple/20 via-primary to-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 font-orbitron">
            Get in <span className="text-neon-blue">Touch</span>
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                placeholder="Name" 
                className="bg-primary/50 border-neon-purple/20 text-white placeholder:text-gray-400 focus:border-neon-blue/50" 
              />
              <Input 
                placeholder="Email" 
                type="email" 
                className="bg-primary/50 border-neon-purple/20 text-white placeholder:text-gray-400 focus:border-neon-blue/50" 
              />
            </div>
            <Input 
              placeholder="Subject" 
              className="bg-primary/50 border-neon-purple/20 text-white placeholder:text-gray-400 focus:border-neon-blue/50" 
            />
            <Textarea 
              placeholder="Message" 
              className="bg-primary/50 border-neon-purple/20 text-white placeholder:text-gray-400 focus:border-neon-blue/50 h-32" 
            />
            <Button className="w-full bg-neon-blue hover:bg-neon-purple text-white py-6 font-orbitron transition-all duration-300">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};