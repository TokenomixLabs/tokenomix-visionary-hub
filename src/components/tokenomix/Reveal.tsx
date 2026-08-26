import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}

/**
 * Reveal is an explanatory entrance, not a load gate.
 *
 * Two rules keep ruled tables and rails from ever looking half-painted:
 *  - the stagger is capped, so a long list cannot outrun a fast scroll;
 *  - the observer fires before the element enters the viewport, so ruled
 *    containers are already complete by the time they are centred.
 */
const MAX_DELAY = 220;
const DURATION_MS = 420;

export const Reveal = ({ children, delay = 0, className = "", as = "div" }: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      // Pre-roll: start the entrance while the block is still below the fold.
      { threshold: 0, rootMargin: "0px 0px 18% 0px" },
    );
    observer.observe(node);

    // Safety net: nothing may stay unpainted once it has been on screen.
    const settle = window.setTimeout(() => setVisible(true), 1400);

    return () => {
      observer.disconnect();
      window.clearTimeout(settle);
    };
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as never}
      className={`${className} transition-[opacity,transform] ease-out will-change-transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
      style={{
        transitionDelay: `${Math.min(delay, MAX_DELAY)}ms`,
        transitionDuration: `${DURATION_MS}ms`,
      }}
    >
      {children}
    </Tag>
  );
};
