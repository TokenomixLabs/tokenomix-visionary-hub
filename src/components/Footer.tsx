import { Github, Twitter, Facebook, Instagram } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Contact } from "@/components/Contact";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "Github" },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary via-primary/90 to-black py-16">
      <div id="connect-with-us" className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-white/60 hover:text-neon-blue transition-colors"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          <h2 className="text-3xl font-orbitron text-white">
            Connect With Us
          </h2>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white border-0 font-orbitron px-8 py-6 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-300"
              >
                Make An Inquiry
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl bg-primary border-neon-purple/20">
              <Contact isDialog />
            </DialogContent>
          </Dialog>
        </div>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-between text-white/60 text-sm">
          <p>2024 © Tokenomix, All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-neon-blue transition-colors">Terms of use</a>
            <a href="#" className="hover:text-neon-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neon-blue transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};