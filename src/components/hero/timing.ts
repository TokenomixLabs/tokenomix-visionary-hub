import type { CSSProperties } from "react";

/**
 * Timeline helper for the hero's one-shot explanatory sequence.
 * `t` = start offset, `d` = duration (ms). Read by `.ge-anim` in index.css.
 */
export const at = (t: number, d?: number, extra?: Record<string, string>): CSSProperties =>
  ({
    "--t": `${t}ms`,
    ...(d !== undefined ? { "--d": `${d}ms` } : {}),
    ...(extra ?? {}),
  }) as CSSProperties;
