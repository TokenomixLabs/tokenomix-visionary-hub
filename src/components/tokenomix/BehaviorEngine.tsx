/**
 * Behavior engine: a rectangular four-stage circuit.
 * USEFUL ACTION → CONTRIBUTION → INCENTIVE → RESPONSE → back to USEFUL ACTION.
 * Outer checkpoints are design prompts (abuse, growth, exit, ownership), not claims.
 * Rectangular silhouette deliberately differs from the circular ValueFlowLoop.
 */
const X0 = 84;
const X1 = 324;
const Y0 = 86;
const Y1 = 254;

const stages = [
  { x: X0, y: Y0, label: "USEFUL ACTION", anchor: "start" as const, dx: 0, dy: -16 },
  { x: X1, y: Y0, label: "CONTRIBUTION", anchor: "end" as const, dx: 0, dy: -16 },
  { x: X1, y: Y1, label: "INCENTIVE", anchor: "end" as const, dx: 0, dy: 24 },
  { x: X0, y: Y1, label: "RESPONSE", anchor: "start" as const, dx: 0, dy: 24 },
];

const checkpoints = [
  { x: X0 + 60, y: Y0 - 44, label: "ABUSE?" },
  { x: X1 - 4, y: Y0 - 44, label: "GROWTH?" },
  { x: X1 - 4, y: Y1 + 54, label: "EXIT?" },
  { x: X0, y: Y1 + 54, label: "OWNERSHIP?" },
];

const circuit = `M ${X0} ${Y0} H ${X1} V ${Y1} H ${X0} Z`;

export const BehaviorEngine = ({ className = "" }: { className?: string }) => (
  <figure className={`m-0 ${className}`}>
    <svg
      viewBox="0 0 408 340"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram of a four-stage behavior circuit: useful action leads to contribution, contribution to incentive, incentive to participant response, and response back to useful action, with design checkpoints for abuse, growth, exit and ownership"
    >
      <defs>
        <linearGradient id="be-circuit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(235 88% 64%)" stopOpacity="0.9" />
          <stop offset="55%" stopColor="hsl(268 86% 70%)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(322 90% 62%)" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* design boundary */}
      <rect
        x="26"
        y="34"
        width="356"
        height="272"
        rx="8"
        fill="none"
        stroke="hsl(240 22% 20%)"
        strokeDasharray="3 8"
      />

      {/* circuit */}
      <path d={circuit} fill="none" stroke="url(#be-circuit)" strokeWidth="1.5" opacity="0.85" />

      {/* inner cross-check hairlines */}
      <g stroke="hsl(250 92% 72%)" strokeWidth="1" opacity="0.22" fill="none">
        <path d={`M ${X0} ${Y1} L ${X1} ${Y0}`} strokeDasharray="2 7" />
        <path d={`M ${X0} ${Y0} L ${X1} ${Y1}`} strokeDasharray="2 7" />
      </g>

      {/* travelling pulse */}
      <path
        d={circuit}
        fill="none"
        stroke="hsl(322 90% 62%)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="18 800"
        className="animate-flow-loop motion-settle"
      />

      {/* stage nodes */}
      {stages.map((s, i) => (
        <g key={s.label}>
          <rect
            x={s.x - 11}
            y={s.y - 11}
            width="22"
            height="22"
            rx="2"
            fill="hsl(268 86% 70%)"
            opacity="0.14"
            className="animate-pulse-node"
            style={{ animationDelay: `${i * 400}ms`, transformOrigin: `${s.x}px ${s.y}px` }}
          />
          <rect
            x={s.x - 5.5}
            y={s.y - 5.5}
            width="11"
            height="11"
            rx="1.5"
            fill="hsl(240 32% 5%)"
            stroke="hsl(250 92% 72%)"
            strokeWidth="1.4"
          />
          <text
            x={s.x + s.dx}
            y={s.y + s.dy}
            textAnchor={s.anchor}
            className="fill-foreground font-mono"
            fontSize="9"
            letterSpacing="1.4"
          >
            {s.label}
          </text>
        </g>
      ))}

      {/* checkpoints — prompts, not assertions */}
      {checkpoints.map((c) => (
        <text
          key={c.label}
          x={c.x}
          y={c.y}
          textAnchor={c.x === X1 - 4 ? "end" : "start"}
          className="fill-muted-foreground font-mono"
          fontSize="8"
          letterSpacing="1.4"
        >
          {c.label}
        </text>
      ))}

      <text
        x="204"
        y={(Y0 + Y1) / 2 + 3}
        textAnchor="middle"
        className="fill-muted-foreground font-mono"
        fontSize="8"
        letterSpacing="2"
      >
        BEHAVIOR ENGINE
      </text>
    </svg>
    <figcaption className="mt-5 font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
      Four stages, one circuit. The questions on the left are checkpoints on this loop.
    </figcaption>
  </figure>
);
