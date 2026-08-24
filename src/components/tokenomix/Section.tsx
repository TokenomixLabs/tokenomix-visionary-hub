import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id?: string;
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
  titleWide?: boolean;
  /** Semantic level for the section title. Exactly one section should use h1. */
  headingLevel?: "h1" | "h2";
  leadClassName?: string;
  introClassName?: string;
  /** Explanatory visual paired with the section intro (desktop). */
  visual?: ReactNode;
  /** Portrait-composed variant shown below md, where the labelled desktop SVG would be illegible. */
  mobileVisual?: ReactNode;
  /** Which side the visual sits on at desktop. Defaults to right. */
  visualSide?: "left" | "right";
  /** Narrower visual column for lighter accompaniments. */
  visualWeight?: "full" | "light";
  /** Vertical rhythm tier: standard chapters vs pillar chapters. */
  tier?: "standard" | "pillar";
  /** Chapter tone — alternating tint marks the boundary between chapters. */
  tone?: "base" | "tint";
}

const HeaderCluster = ({
  index,
  eyebrow,
  align,
}: {
  index?: string;
  eyebrow?: string;
  align?: "left" | "center";
}) => (
  <div
    className={`mb-6 flex items-center gap-3 ${
      align === "center" ? "justify-center" : ""
    }`}
  >
    {index && <span className="font-mono text-xs text-accent/80">{index}</span>}
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <span className="hidden h-px w-16 rule-gradient sm:block" aria-hidden="true" />
  </div>
);

export const Section = ({
  id,
  index,
  eyebrow,
  title,
  lead,
  children,
  className = "",
  align = "left",
  titleWide = false,
  headingLevel = "h2",
  leadClassName,
  introClassName,
  visual,
  mobileVisual,
  visualSide = "right",
  visualWeight = "full",
  tier = "standard",
  tone = "base",
}: SectionProps) => {
  const textContainer = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  const leadContainer = leadClassName ?? textContainer;
  /* Semantic level only — visual scale stays identical. */
  const Heading = headingLevel;

  const rhythm = tier === "pillar" ? "py-28 md:py-40" : "py-20 md:py-28";
  const chapterTone = tone === "tint" ? "border-t border-border/60 bg-surface/30" : "";

  const mobileVisualBlock = mobileVisual ? (
    <Reveal delay={120} className="mt-12 md:hidden">
      {mobileVisual}
    </Reveal>
  ) : null;

  const textBlock = (
    <div>
      {(eyebrow || index) && (
        <Reveal>
          <HeaderCluster index={index} eyebrow={eyebrow} align={align} />
        </Reveal>
      )}
      <Reveal delay={60}>
        <Heading className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-[2.6rem]">
          {title}
        </Heading>
      </Reveal>
      {lead && (
        <Reveal delay={120}>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {lead}
          </div>
        </Reveal>
      )}
    </div>
  );

  return (
    <section
      id={id}
      className={`relative scroll-mt-24 ${rhythm} ${chapterTone} ${className}`}
    >
      <div className="container mx-auto">
        {visual ? (
          <div
            className={`grid items-center gap-12 lg:gap-16 ${
              visualWeight === "light"
                ? "lg:grid-cols-[1.25fr_0.75fr]"
                : "lg:grid-cols-[1fr_1fr]"
            }`}
          >
            <div className={visualSide === "left" ? "lg:order-2" : ""}>
              {textBlock}
              {mobileVisualBlock}
            </div>
            {/* Labelled system diagrams need width to stay legible — below md the
                portrait mobileVisual carries the argument instead. */}
            <Reveal
              delay={140}
              className={`hidden md:block ${visualSide === "left" ? "lg:order-1" : ""}`}
            >
              {visual}
            </Reveal>
          </div>
        ) : titleWide ? (
          <div className={introClassName}>
            <Reveal>
              <div className={textContainer}>
                <HeaderCluster index={index} eyebrow={eyebrow} align={align} />
              </div>
            </Reveal>
            <Reveal delay={60}>
              <Heading className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.2rem]">
                {title}
              </Heading>
            </Reveal>
            {lead && (
              <Reveal delay={120}>
                <div className={`mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg ${leadContainer}`}>
                  {lead}
                </div>
              </Reveal>
            )}
            {mobileVisualBlock}
          </div>
        ) : (
          <div className={introClassName ?? textContainer}>
            {(eyebrow || index) && (
              <Reveal>
                <HeaderCluster index={index} eyebrow={eyebrow} align={align} />
              </Reveal>
            )}
            <Reveal delay={60}>
              <Heading className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-[2.6rem]">
                {title}
              </Heading>
            </Reveal>
            {lead && (
              <Reveal delay={120}>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {lead}
                </div>
              </Reveal>
            )}
            {mobileVisualBlock}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
