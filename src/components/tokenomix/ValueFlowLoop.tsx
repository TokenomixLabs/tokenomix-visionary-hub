/**
 * Closed-loop value architecture.
 * Seven stages recirculate; one branch leaks outward to depict an extractive, open loop.
 * Conceptual illustration — not a live metric.
 */
const RADIUS = 132;
const CX = 200;
const CY = 190;

const stages = [
  "Participation",
  "Contribution",
  "Attribution",
  "Rights",
  "Incentive",
  "Governance",
  "Reinvestment",
];

const point = (i: number) => {
  const angle = (i / stages.length) * Math.PI * 2 - Math.PI / 2;
  return { x: CX + Math.cos(angle) * RADIUS, y: CY + Math.sin(angle) * RADIUS };
};

const loopPath = () => {
  const pts = stages.map((_, i) => point(i));
  return (
    pts
      .map((p, i) => {
        if (i === 0) return `M ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
        const prev = pts[i - 1];
        const mx = (prev.x + p.x) / 2 + (CX - (prev.x + p.x) / 2) * 0.14;
        const my = (prev.y + p.y) / 2 + (CY - (prev.y + p.y) / 2) * 0.14;
        return `Q ${mx.toFixed(1)} ${my.toFixed(1)} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
      })
      .join(" ") + " Z"
  );
};

export const ValueFlowLoop = ({ className = "" }: { className?: string }) => {
  const path = loopPath();
  const leakFrom = point(4);

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="-56 -14 512 440"
        className="h-auto w-full"
        role="img"
        aria-label="Diagram of a closed value loop from participation through governance back to reinvestment, with one branch leaking value outward"
      >
        <defs>
          <linearGradient id="vfl-loop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(235 88% 64%)" stopOpacity="0.85" />
            <stop offset="55%" stopColor="hsl(268 86% 70%)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="hsl(322 90% 62%)" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="vfl-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(268 86% 70%)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="hsl(268 86% 70%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={CX} cy={CY} r="150" fill="url(#vfl-core)" className="animate-glow-breathe" />

        {/* system boundary */}
        <circle
          cx={CX}
          cy={CY}
          r="168"
          fill="none"
          stroke="hsl(240 22% 22%)"
          strokeDasharray="3 8"
        />

        {/* recirculating loop */}
        <path d={path} fill="none" stroke="url(#vfl-loop)" strokeWidth="1.6" opacity="0.8" />

        {/* inner return chords: reinvestment feeding participation */}
        <g fill="none" stroke="hsl(250 92% 72%)" strokeWidth="1" opacity="0.28">
          <path d={`M ${point(6).x} ${point(6).y} Q ${CX} ${CY} ${point(0).x} ${point(0).y}`} />
          <path d={`M ${point(4).x} ${point(4).y} Q ${CX} ${CY} ${point(1).x} ${point(1).y}`} />
        </g>

        {/* travelling value pulse */}
        <path
          d={path}
          fill="none"
          stroke="hsl(322 90% 62%)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeDasharray="16 984"
          className="animate-flow-loop motion-settle"
        />

        {/* leaking / extractive branch */}
        <path
          d={`M ${leakFrom.x} ${leakFrom.y} C ${leakFrom.x + 60} ${leakFrom.y + 30}, 372 ${leakFrom.y + 46}, 388 ${leakFrom.y + 92}`}
          fill="none"
          stroke="hsl(240 18% 45%)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />
        <path
          d={`M ${leakFrom.x} ${leakFrom.y} C ${leakFrom.x + 60} ${leakFrom.y + 30}, 372 ${leakFrom.y + 46}, 388 ${leakFrom.y + 92}`}
          fill="none"
          stroke="hsl(236 14% 66%)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="10 110"
          className="animate-leak-out"
        />
        <text
          x="384"
          y={leakFrom.y + 108}
          textAnchor="end"
          className="fill-muted-foreground font-mono"
          fontSize="14.5"
          letterSpacing="1.1"
        >
          LEAKAGE
        </text>


        {/* stage nodes */}
        {stages.map((label, i) => {
          const p = point(i);
          const anchor = p.x > CX + 12 ? "start" : p.x < CX - 12 ? "end" : "middle";
          const dx = anchor === "start" ? 16 : anchor === "end" ? -16 : 0;
          const dy = p.y < CY ? -14 : 22;

          return (
            <g key={label}>
              <circle
                cx={p.x}
                cy={p.y}
                r="14"
                fill="hsl(268 86% 70%)"
                opacity="0.16"
                className="animate-pulse-node"
                style={{ animationDelay: `${i * 380}ms`, transformOrigin: `${p.x}px ${p.y}px` }}
              />
              <circle
                cx={p.x}
                cy={p.y}
                r="6.5"
                fill="hsl(240 32% 5%)"
                stroke="hsl(250 92% 72%)"
                strokeWidth="1.4"
              />
              <circle cx={p.x} cy={p.y} r="2.2" fill="hsl(322 90% 62%)" />
              <text
                x={p.x + dx}
                y={p.y + dy}
                textAnchor={anchor}
                className="fill-muted-foreground font-mono"
                fontSize="10.5"
                letterSpacing="1.2"
              >
                {label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
