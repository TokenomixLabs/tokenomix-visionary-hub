/**
 * Conceptual human + agent economic network.
 * Circular nodes = human participants, square nodes = machine/agent participants.
 * Peers in topology; attribution trails persist; permission boundaries constrain flows.
 * Research territory illustration — not shipped infrastructure.
 */

type Node = { x: number; y: number; kind: "human" | "agent" };

const nodes: Node[] = [
  { x: 68, y: 92, kind: "human" },
  { x: 156, y: 52, kind: "agent" },
  { x: 244, y: 96, kind: "agent" },
  { x: 320, y: 62, kind: "human" },
  { x: 108, y: 196, kind: "agent" },
  { x: 210, y: 214, kind: "human" },
  { x: 316, y: 178, kind: "agent" },
];

const edges: [number, number, boolean][] = [
  [0, 1, false],
  [1, 2, false],
  [2, 3, false],
  [0, 4, false],
  [4, 5, false],
  [5, 6, false],
  [2, 6, true],
  [1, 5, true],
];

const NodeMark = ({ node, i }: { node: Node; i: number }) => {
  const stroke = node.kind === "agent" ? "hsl(322 90% 62%)" : "hsl(250 92% 72%)";
  return (
    <g>
      <circle
        cx={node.x}
        cy={node.y}
        r="14"
        fill={stroke}
        opacity="0.13"
        className="animate-pulse-node"
        style={{ animationDelay: `${i * 420}ms`, transformOrigin: `${node.x}px ${node.y}px` }}
      />
      {node.kind === "agent" ? (
        <rect
          x={node.x - 6}
          y={node.y - 6}
          width="12"
          height="12"
          rx="1.5"
          fill="hsl(240 32% 5%)"
          stroke={stroke}
          strokeWidth="1.5"
        />
      ) : (
        <circle
          cx={node.x}
          cy={node.y}
          r="6.5"
          fill="hsl(240 32% 5%)"
          stroke={stroke}
          strokeWidth="1.5"
        />
      )}
    </g>
  );
};

export const AgentEconomyNetwork = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg
      viewBox="0 0 400 316"
      className="h-auto w-full"
      role="img"

      aria-label="Abstract network of human and machine participants exchanging contribution events within permission boundaries"
    >
      <defs>
        <linearGradient id="aen-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(235 88% 64%)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="hsl(322 90% 62%)" stopOpacity="0.75" />
        </linearGradient>
      </defs>

      {/* permission / authority boundary */}
      <rect
        x="176"
        y="24"
        width="204"
        height="248"
        rx="8"
        fill="hsl(268 86% 70%)"
        fillOpacity="0.03"
        stroke="hsl(240 22% 26%)"
        strokeDasharray="3 7"
      />
      <text
        x="372"
        y="40"
        textAnchor="end"
        className="fill-muted-foreground font-mono"
        fontSize="11"
        letterSpacing="1.4"
      >
        PERMISSION BOUNDARY
      </text>

      {/* contribution edges */}
      {edges.map(([a, b, provenance], i) => {
        const p = nodes[a];
        const q = nodes[b];
        const d = `M ${p.x} ${p.y} Q ${(p.x + q.x) / 2} ${(p.y + q.y) / 2 - 26} ${q.x} ${q.y}`;
        return (
          <g key={`${a}-${b}`}>
            <path
              d={d}
              fill="none"
              stroke={provenance ? "hsl(240 22% 32%)" : "url(#aen-edge)"}
              strokeWidth="1.2"
              strokeDasharray={provenance ? "2 5" : undefined}
              opacity={provenance ? 0.8 : 0.55}
            />
            <path
              d={d}
              fill="none"
              stroke="hsl(322 90% 62%)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="8 220"
              className="animate-flow-loop motion-settle"
              style={{ animationDelay: `${i * 620}ms` }}
              opacity={provenance ? 0.4 : 0.85}
            />
          </g>
        );
      })}

      {nodes.map((node, i) => (
        <NodeMark key={`${node.x}-${node.y}`} node={node} i={i} />
      ))}

      {/* attribution trail */}
      <path
        d="M 68 92 C 140 130, 190 170, 316 178"
        fill="none"
        stroke="hsl(250 92% 72%)"
        strokeWidth="1"
        strokeDasharray="480"
        className="animate-trace-sweep motion-settle"
      />
      {/* Legend on two centred lines: the single run overran the frame and
          truncated the last term at every width. */}
      <text
        x="200"
        y="290"
        textAnchor="middle"
        className="fill-muted-foreground font-mono"
        fontSize="11.5"
        letterSpacing="1.4"
      >
        ○ HUMAN   □ AGENT
      </text>
      <text
        x="200"
        y="308"
        textAnchor="middle"
        className="fill-muted-foreground font-mono"
        fontSize="11.5"
        letterSpacing="1.4"
      >
        — CONTRIBUTION   ⋯ ATTRIBUTION TRAIL
      </text>

    </svg>
  </div>
);
