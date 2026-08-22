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
  leadClassName?: string;
  introClassName?: string;
  /** Explanatory visual paired with the section intro. */
  visual?: ReactNode;
  /** Which side the visual sits on at desktop. Defaults to right. */
  visualSide?: "left" | "right";
  /** Narrower visual column for lighter accompaniments. */
  visualWeight?: "full" | "light";
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
  leadClassName,
  introClassName,
  visual,
  visualSide = "right",
  visualWeight = "full",
}: SectionProps) => {
  const textContainer = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  const leadContainer = leadClassName ?? textContainer;

  const textBlock = (
    <div>
      {(eyebrow || index) && (
        <Reveal>
          <HeaderCluster index={index} eyebrow={eyebrow} align={align} />
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-[2.7rem]">
          {title}
        </h2>
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
    <section id={id} className={`relative scroll-mt-24 py-24 md:py-32 ${className}`}>
      <div className="container mx-auto">
        {visual ? (
          <div
            className={`grid items-center gap-12 lg:gap-16 ${
              visualWeight === "light"
                ? "lg:grid-cols-[1.25fr_0.75fr]"
                : "lg:grid-cols-[1fr_1fr]"
            }`}
          >
            <div className={visualSide === "left" ? "lg:order-2" : ""}>{textBlock}</div>
            <Reveal
              delay={140}
              className={visualSide === "left" ? "lg:order-1" : ""}
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
              <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.2rem]">
                {title}
              </h2>
            </Reveal>
            {lead && (
              <Reveal delay={120}>
                <div className={`mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg ${leadContainer}`}>
                  {lead}
                </div>
              </Reveal>
            )}
          </div>
        ) : (
          <div className={introClassName ?? textContainer}>
            {(eyebrow || index) && (
              <Reveal>
                <HeaderCluster index={index} eyebrow={eyebrow} align={align} />
              </Reveal>
            )}
            <Reveal delay={60}>
              <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-[2.9rem]">
                {title}
              </h2>
            </Reveal>
            {lead && (
              <Reveal delay={120}>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {lead}
                </div>
              </Reveal>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
