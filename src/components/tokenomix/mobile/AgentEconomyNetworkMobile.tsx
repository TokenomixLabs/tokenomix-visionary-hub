/**
 * Portrait mobile variant of the human + agent economy.
 * Purpose-built rather than a shrunken desktop SVG: two participant columns
 * (human ○ / agent □) exchanging contribution across a single permission
 * boundary, with one persistent attribution trail running underneath.
 * Conceptual research illustration — not shipped infrastructure.
 */
const rows = [
  { y: 78, human: "circle", agent: "rect" },
  { y: 158, human: "rect", agent: "circle" },
  { y: 238, human: "circle", agent: "rect" },
] as const;

const HUMAN_X = 62;
const AGENT_X = 242;

const Mark = ({ x, y, kind }: { x: number; y: number; kind: "circle" | "rect" }) => {
  const stroke = kind === "rect" ? "hsl(322 90% 62%)" : "hsl(250 92% 72%)";
  return (
    <g>
      <circle cx={x} cy={y} r="18" fill={stroke} opacity="0.12" />
      {kind === "rect" ? (
        <rect
          x={x - 9}
          y={y - 9}
          width="18"
          height="18"
          rx="2"
          fill="hsl(240 32% 5%)"
          stroke={stroke}
          strokeWidth="2.2"
        />
      ) : (
        <circle cx={x} cy={y} r="9.5" fill="hsl(240 32% 5%)" stroke={stroke} strokeWidth="2.2" />
      )}
    </g>
  );
};

export const AgentEconomyNetworkMobile = ({ className = "" }: { className?: string }) => (
  <figure className={`m-0 ${className}`}>
    <svg
      viewBox="0 0 320 400"
      className="h-auto w-full"
      role="img"
      aria-label="Human and machine participants exchanging contribution across a permission boundary, with a persistent attribution trail"
    >
      {/* permission boundary — only the agent column sits inside it */}
      <rect
        x="176"
        y="40"
        width="128"
        height="240"
        rx="8"
        fill="hsl(268 86% 70%)"
        fillOpacity="0.04"
        stroke="hsl(240 22% 26%)"
        strokeWidth="1.4"
        strokeDasharray="3 7"
      />
      <text
        x="240"
        y="30"
        textAnchor="middle"
        className="fill-muted-foreground font-mono"
        fontSize="11"
        letterSpacing="1.4"
      >
        PERMISSIONS
      </text>
      <text
        x="62"
        y="30"
        textAnchor="middle"
        className="fill-muted-foreground font-mono"
        fontSize="11"
        letterSpacing="1.4"
      >
        PARTICIPANTS
      </text>

      {rows.map((row, i) => (
        <g key={row.y}>
          {/* contribution exchange — peers in topology, in both directions */}
          <path
            d={`M ${HUMAN_X + 24} ${row.y} Q 152 ${row.y - 26} ${AGENT_X - 24} ${row.y}`}
            fill="none"
            stroke="hsl(235 88% 64%)"
            strokeWidth="2"
            opacity="0.6"
          />
          <path
            d={`M ${AGENT_X - 24} ${row.y + 14} Q 152 ${row.y + 40} ${HUMAN_X + 24} ${row.y + 14}`}
            fill="none"
            stroke="hsl(322 90% 62%)"
            strokeWidth="2"
            opacity="0.45"
            strokeDasharray="4 6"
          />
          <Mark x={HUMAN_X} y={row.y} kind={row.human} />
          <Mark x={AGENT_X} y={row.y} kind={row.agent} />
          {i < rows.length - 1 && (
            <line
              x1="24"
              y1={row.y + 40}
              x2="296"
              y2={row.y + 40}
              stroke="hsl(240 22% 18%)"
              strokeDasharray="2 9"
            />
          )}
        </g>
      ))}

      {/* attribution trail — survives mixed contribution */}
      <path
        d="M 40 316 C 120 336, 200 296, 296 316"
        fill="none"
        stroke="hsl(250 92% 72%)"
        strokeWidth="2"
        strokeDasharray="6 7"
        opacity="0.8"
      />
      <text
        x="24"
        y="352"
        className="fill-muted-foreground font-mono"
        fontSize="11"
        letterSpacing="1.4"
      >
        ⋯ ATTRIBUTION TRAIL
      </text>
      <text
        x="24"
        y="378"
        className="fill-muted-foreground font-mono"
        fontSize="11"
        letterSpacing="1.4"
      >
        ○ HUMAN   □ AGENT
      </text>
    </svg>
    <figcaption className="mt-4 font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
      Humans and agents are peers in the topology, not in authority. Spending, signing and
      rule-changing powers stay bounded, while attribution survives mixed contribution.
    </figcaption>
  </figure>
);
