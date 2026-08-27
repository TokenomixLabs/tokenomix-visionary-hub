/**
 * Two behavior engines side by side.
 * A: standing concentrates early, later contribution changes little, flow terminates outward.
 * B: contribution keeps producing standing, value distributes and recirculates.
 * Conceptual illustration — not a forecast.
 */

const NODES_A = [
  { x: 62, y: 148, r: 15 },
  { x: 104, y: 122, r: 12 },
  { x: 146, y: 160, r: 4.5 },
  { x: 186, y: 132, r: 3.5 },
  { x: 224, y: 164, r: 3 },
];

const NODES_B = [
  { x: 62, y: 150, r: 7.5 },
  { x: 104, y: 122, r: 8.5 },
  { x: 146, y: 158, r: 9 },
  { x: 186, y: 126, r: 8 },
  { x: 224, y: 152, r: 9.5 },
];

const Panel = ({
  variant,
  label,
  caption,
}: {
  variant: "a" | "b";
  label: string;
  caption: string;
}) => {
  const signal = variant === "b";
  const nodes = signal ? NODES_B : NODES_A;
  const spine = nodes
    .map((n, i) => (i === 0 ? `M ${n.x} ${n.y}` : `L ${n.x} ${n.y}`))
    .join(" ");

  return (
    <div className="panel bg-gradient-surface p-4">
      <div className="flex items-baseline justify-between">
        <span className="eyebrow text-[0.72rem]">{label}</span>
        <span
          className={`font-mono text-[0.75rem] uppercase tracking-[0.18em] ${
            signal ? "text-signal" : "text-muted-foreground"
          }`}
        >
          {signal ? "recirculates" : "terminates"}
        </span>
      </div>

      <svg viewBox="0 0 280 200" className="mt-2 h-auto w-full" aria-hidden="true">
        <defs>
          <linearGradient id={`ibm-${variant}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(235 88% 64%)" stopOpacity="0.8" />
            <stop
              offset="100%"
              stopColor={signal ? "hsl(322 90% 62%)" : "hsl(240 18% 40%)"}
              stopOpacity="0.85"
            />
          </linearGradient>
        </defs>

        {/* contribution inflow ticks */}
        <g stroke="hsl(235 88% 64%)" strokeWidth="1.2" opacity="0.35">
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={i} x1="16" y1={60 + i * 18} x2="34" y2={60 + i * 18} />
          ))}
        </g>
        <text
          x="16"
          y="46"
          className="fill-muted-foreground font-mono"
          fontSize="13"
          letterSpacing="1.1"
        >
          CONTRIBUTION
        </text>

        {/* baseline: time / sustained participation */}
        <line x1="34" y1="186" x2="266" y2="186" stroke="hsl(240 22% 20%)" />
        <text
          x="266"
          y="197"
          textAnchor="end"
          className="fill-muted-foreground font-mono"
          fontSize="13"
          letterSpacing="1.1"
        >
          SUSTAINED PARTICIPATION →
        </text>


        {/* standing spine */}
        <path d={spine} fill="none" stroke={`url(#ibm-${variant})`} strokeWidth="1.5" opacity="0.7" />

        {/* flow pulse along the spine */}
        <path
          d={spine}
          fill="none"
          stroke={signal ? "hsl(322 90% 62%)" : "hsl(236 14% 66%)"}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="12 380"
          className="animate-flow-loop motion-settle"
          opacity={signal ? 0.95 : 0.5}
        />

        {/* nodes: where standing accumulates */}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r + 7}
              fill={signal ? "hsl(322 90% 62%)" : "hsl(250 92% 72%)"}
              opacity={signal ? 0.14 : i < 2 ? 0.16 : 0.05}
              className="animate-pulse-node"
              style={{ animationDelay: `${i * 340}ms`, transformOrigin: `${n.x}px ${n.y}px` }}
            />
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="hsl(240 32% 5%)"
              stroke={signal ? "hsl(322 90% 62%)" : i < 2 ? "hsl(250 92% 72%)" : "hsl(240 22% 30%)"}
              strokeWidth="1.4"
            />
            <line
              x1={n.x}
              y1={n.y + n.r}
              x2={n.x}
              y2="186"
              stroke="hsl(240 22% 22%)"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
          </g>
        ))}

        {/* terminating exit (A) vs return path (B) */}
        {signal ? (
          <>
            <path
              d="M 224 152 C 250 120, 120 92, 62 132"
              fill="none"
              stroke="hsl(268 86% 70%)"
              strokeWidth="1.2"
              opacity="0.5"
            />
            <path
              d="M 224 152 C 250 120, 120 92, 62 132"
              fill="none"
              stroke="hsl(322 90% 62%)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="10 300"
              className="animate-flow-loop motion-settle"
            />
            <text
              x="140"
              y="84"
              textAnchor="middle"
              className="fill-muted-foreground font-mono"
              fontSize="13"
              letterSpacing="1.1"
            >
              RETURNS TO PARTICIPATION
            </text>

          </>
        ) : (
          <>
            <path
              d="M 83 110 C 90 74, 140 60, 176 34"
              fill="none"
              stroke="hsl(240 18% 45%)"
              strokeWidth="1.2"
              strokeDasharray="4 6"
            />
            <path
              d="M 83 110 C 90 74, 140 60, 176 34"
              fill="none"
              stroke="hsl(236 14% 66%)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="10 140"
              className="animate-leak-out"
            />
            <text
              x="182"
              y="30"
              className="fill-muted-foreground font-mono"
              fontSize="13"
              letterSpacing="1.1"
            >
              EXIT
            </text>

          </>
        )}
      </svg>

      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{caption}</p>
    </div>
  );
};

export const IncentiveBehaviorMap = ({ className = "" }: { className?: string }) => (
  <div className={`grid gap-4 sm:grid-cols-2 ${className}`}>
    <Panel
      variant="a"
      label="System A"
      caption="Standing settles at the earliest positions. Later work barely moves the system."
    />
    <Panel
      variant="b"
      label="System B"
      caption="Standing keeps forming where work happens, and value re-enters participation."
    />
  </div>
);
