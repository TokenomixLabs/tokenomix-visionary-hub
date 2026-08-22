import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Contact } from "@/components/Contact";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export const FinalStatement = () => (
  <section id="contact" className="relative scroll-mt-24 overflow-hidden py-28 md:py-40">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 grid-field opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
    />
    <div className="container relative mx-auto">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow">Final statement</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-7 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Build an economy <span className="text-gradient-value">worth participating in</span>.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            If you are designing how value, ownership, incentives and governance should work inside an
            intelligent or decentralized system, start the conversation with the architecture.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-11 flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="group h-auto bg-gradient-value px-9 py-5 font-display text-base tracking-tight text-primary-foreground shadow-architectural transition-transform duration-300 hover:scale-[1.02] hover:brightness-110"
                >
                  Make an inquiry
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl border-border bg-surface">
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  Start the conversation
                </h2>
                <p className="text-sm text-muted-foreground">
                  Tell us about the system you are designing.
                </p>
                <Contact isDialog />
              </DialogContent>
            </Dialog>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
