import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export const ChapterFooting = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <Reveal delay={delay}>
    <div className="mt-8 border-t border-border/70 pt-6 md:mt-10 md:grid md:grid-cols-[minmax(0,2fr)_1fr] md:gap-12">
      <p className="max-w-3xl font-display text-lg leading-snug text-foreground md:text-xl">{children}</p>
      <span aria-hidden="true" className="hidden h-px self-center rule-gradient md:block" />
    </div>
  </Reveal>
);