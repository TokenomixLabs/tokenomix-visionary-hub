import { useEffect, useRef, useState } from "react";

/**
 * Scroll-linked, one-directional build index for explanatory diagrams.
 *
 * Maps the reader's progress through a section onto `steps` discrete states and
 * never walks backwards — a diagram that has been assembled holds its final
 * state. Under reduced motion (or without an observer) it resolves immediately
 * to the complete state, so the graphic is never caught mid-build.
 */
export const useBuildStep = (steps: number) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      setStep(steps);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(steps);
      return;
    }

    let frame = 0;
    let highest = 0;

    const measure = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const span = rect.height + window.innerHeight * 0.5;
      if (span <= 0) return;
      // 0 when the block's top reaches the lower third, 1 once it has passed up.
      const travelled = window.innerHeight * 0.82 - rect.top;
      const progress = Math.min(Math.max(travelled / span, 0), 1);
      const next = Math.min(steps, Math.ceil(progress * steps));
      if (next > highest) {
        highest = next;
        setStep(next);
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps]);

  return { ref, step };
};
