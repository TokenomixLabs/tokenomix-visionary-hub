/**
 * Portrait mobile variant of the value loop.
 * Seven stages descend a spine and return via a closed circuit; one branch leaks outward.
 * Only three anchors are labelled — the caption carries the rest.
 */
const nodes = [0, 1, 2, 3, 4, 5, 6];
const TOP = 44;
const GAP = 44;
const SPINE = 96;

export const ValueFlowLoopMobile = ({ className = "" }: { className?: string }) => {
  const bottom = TOP + GAP * (nodes.length - 1);
  const leakY = TOP + GAP * 4;

  return (
    <figure className={`m-0 ${className}`}>
      <svg
        viewBox="0 0 320 400"
        className="h-auto w-full"
        role="img"
        aria-label="Vertical diagram of a closed value loop returning from reinvestment to participation, with one branch leaking value out of the system"
      >
        <defs>
          <linearGradient id="vflm-spine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(235 88% 64%)" />
            <stop offset="60%" stopColor="hsl(268 86% 70%)" />
            <stop offset="100%" stopColor="hsl(322 90% 62%)" />
          </linearGradient>
        </defs>

        {/* system boundary */}
        <rect
          x="18"
          y="18"
          width="284"
          height="330"
          rx="10"
          fill="none"
          stroke="hsl(240 22% 20%)"
          strokeDasharray="3 9"
        />

        {/* spine + closed return */}
        <path
          d={`M ${SPINE} ${TOP} L ${SPINE} ${bottom} C ${SPINE + 96} ${bottom + 26}, ${SPINE + 96} ${TOP - 26}, ${SPINE} ${TOP}`}
          fill="none"
          stroke="url(#vflm-spine)"
          strokeWidth="2.4"
          opacity="0.85"
        />
        <path
          d={`M ${SPINE} ${TOP} L ${SPINE} ${bottom} C ${SPINE + 96} ${bottom + 26}, ${SPINE + 96} ${TOP - 26}, ${SPINE} ${TOP}`}
          fill="none"
          stroke="hsl(322 90% 62%)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="26 700"
          className="animate-flow-loop motion-settle"
        />

        {/* leaking branch */}
        <path
          d={`M ${SPINE} ${leakY} C ${SPINE - 40} ${leakY + 34}, ${SPINE - 52} ${leakY + 60}, 44 ${leakY + 96}`}
          fill="none"
          stroke="hsl(240 18% 42%)"
          strokeWidth="2"
          strokeDasharray="5 8"
        />
        <text
          x="44"
          y={leakY + 114}
          className="fill-muted-foreground font-mono"
          fontSize="12"
          letterSpacing="1.6"
        >
          LEAKAGE
        </text>

        {/* stage nodes — unlabelled beads carry the sequence */}
        {nodes.map((i) => {
          const y = TOP + i * GAP;
          const anchor = i === 0 || i === nodes.length - 1;
          return (
            <g key={i}>
              <circle
                cx={SPINE}
                cy={y}
                r={anchor ? 11 : 8}
                fill="hsl(240 32% 5%)"
                stroke={anchor ? "hsl(322 90% 62%)" : "hsl(250 92% 72%)"}
                strokeWidth="2.2"
              />
              <circle cx={SPINE} cy={y} r={anchor ? 4 : 2.6} fill="hsl(322 90% 62%)" />
            </g>
          );
        })}

        <text
          x={SPINE + 26}
          y={TOP + 5}
          className="fill-foreground font-mono"
          fontSize="12"
          letterSpacing="1.6"
        >
          PARTICIPATION
        </text>
        <text
          x={SPINE + 26}
          y={bottom + 5}
          className="fill-foreground font-mono"
          fontSize="12"
          letterSpacing="1.6"
        >
          REINVESTMENT
        </text>
        <text
          x="238"
          y={TOP + GAP * 3}
          textAnchor="middle"
          className="fill-muted-foreground font-mono"
          fontSize="11"
          letterSpacing="1.6"
        >
          RETURN
        </text>

        <text
          x="18"
          y="376"
          className="fill-muted-foreground font-mono"
          fontSize="11"
          letterSpacing="1.6"
        >
          SEVEN STAGES · ONE CLOSED CIRCUIT
        </text>
      </svg>
      <figcaption className="mt-4 font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
        Participation → contribution → attribution → rights → incentive → governance →
        reinvestment. The return arc is the design decision; the branch leaving the boundary is
        value the system never recovers.
      </figcaption>
    </figure>
  );
};
