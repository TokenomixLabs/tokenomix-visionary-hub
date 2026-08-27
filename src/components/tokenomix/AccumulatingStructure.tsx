interface AccumulatingStructureProps {
  /** 1-based method step reached. Structure only ever accumulates. */
  step: number;
  className?: string;
}

const nodes = [
  { x: 118, y: 118, label: "BUILDER" },
  { x: 250, y: 96, label: "USER" },
  { x: 330, y: 210, label: "AGENT" },
  { x: 200, y: 262, label: "TREASURY" },
  { x: 96, y: 232, label: "VALIDATOR" },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 0],
  [0, 3],
  [1, 3],
];

const captions = [
  "Boundary: what the system is responsible for.",
  "Actors placed — every participant that can act.",
  "Flows drawn — where value can move and leak.",
  "Rights scoped — who owns and who decides.",
  "Stress applied — the edge that pays to break.",
  "Governance closed — rules can change legitimately.",
  "Evolution modelled — the same structure at 10x.",
];

/**
 * Accumulating structure — the method's visual climax. Each step of the rail
 * adds one layer of the same drawing: boundary, actors, flows, rights, stress,
 * governance, scale. Nothing is removed, so the finished frame is the argument.
 */
export const AccumulatingStructure = ({ step, className = "" }: AccumulatingStructureProps) => {
  const s = Math.min(Math.max(step, 1), 7);
  const on = (n: number) => (s >= n ? 1 : 0);
  const t = "opacity 600ms ease-out";

  return (
    <figure className={`w-full ${className}`}>
      <div className="panel bg-gradient-surface p-6 md:p-8">
        <div className="flex items-baseline justify-between gap-4">
          <p className="eyebrow">Accumulating structure</p>
          <p className="font-mono text-[0.7rem] tracking-[0.2em] text-accent/80">
            STEP {String(s).padStart(2, "0")} / 07
          </p>
        </div>

        <svg
          viewBox="0 0 420 340"
          role="img"
          aria-label="A system drawing that accumulates one layer per method step: boundary, actors, value flows, rights, stress test, governance loop and scale."
          className="mt-6 w-full"
        >
          {/* 07 — scale ghost */}
          <g style={{ transition: t }} opacity={on(7) * 0.5}>
            {nodes.map((n) => (
              <g key={`ghost-${n.label}`}>
                <circle cx={n.x + 26} cy={n.y - 20} r="3" fill="hsl(var(--accent) / 0.35)" />
                <circle cx={n.x - 24} cy={n.y + 22} r="3" fill="hsl(var(--accent) / 0.35)" />
                <circle cx={n.x + 18} cy={n.y + 26} r="2.4" fill="hsl(var(--accent) / 0.25)" />
              </g>
            ))}
          </g>

          {/* 01 — boundary */}
          <g style={{ transition: t }} opacity={on(1)}>
            <rect
              x="40"
              y="46"
              width="340"
              height="252"
              rx="10"
              fill="hsl(var(--surface) / 0.35)"
              stroke="hsl(var(--border))"
              strokeWidth="1"
            />
            <text x="40" y="34" fontSize="12" letterSpacing="1.6" fill="hsl(var(--muted-foreground))" className="font-mono">
              SYSTEM BOUNDARY
            </text>
          </g>

          {/* 06 — governance loop */}
          <g style={{ transition: t }} opacity={on(6)}>
            <ellipse
              cx="212"
              cy="176"
              rx="146"
              ry="106"
              fill="none"
              stroke="hsl(var(--primary) / 0.5)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
            <text x="212" y="308" fontSize="12" letterSpacing="1.6" textAnchor="middle" fill="hsl(var(--primary))" className="font-mono">
              GOVERNANCE LOOP
            </text>
          </g>

          {/* 04 — rights clusters */}
          <g style={{ transition: t }} opacity={on(4)}>
            <rect x="70" y="88" width="152" height="100" rx="8" fill="none" stroke="hsl(var(--accent) / 0.4)" strokeDasharray="3 5" />
            <text x="70" y="80" fontSize="12" letterSpacing="1.4" fill="hsl(var(--accent))" className="font-mono">
              OWNERSHIP
            </text>
            <rect x="244" y="162" width="124" height="100" rx="8" fill="none" stroke="hsl(var(--accent) / 0.4)" strokeDasharray="3 5" />
            <text x="244" y="154" fontSize="12" letterSpacing="1.4" fill="hsl(var(--accent))" className="font-mono">
              AUTHORITY
            </text>
          </g>


          {/* 03 — flows */}
          <g style={{ transition: t }} opacity={on(3)}>
            {edges.map(([a, b], i) => (
              <line
                key={`e-${i}`}
                x1={nodes[a].x}
                y1={nodes[a].y}
                x2={nodes[b].x}
                y2={nodes[b].y}
                stroke="hsl(var(--accent) / 0.45)"
                strokeWidth="1"
              />
            ))}
          </g>

          {/* 05 — stress on the weakest edge */}
          <g style={{ transition: t }} opacity={on(5)}>
            <line
              x1={nodes[0].x}
              y1={nodes[0].y}
              x2={nodes[3].x}
              y2={nodes[3].y}
              stroke="hsl(var(--signal))"
              strokeWidth="1.6"
              strokeDasharray="5 5"
            />
            <text x="118" y="204" fontSize="12" letterSpacing="1.4" fill="hsl(var(--signal))" className="font-mono">
              STRESS
            </text>
          </g>

          {/* 02 — actors */}
          <g style={{ transition: t }} opacity={on(2)}>
            {nodes.map((n) => (
              <g key={n.label}>
                <circle cx={n.x} cy={n.y} r="7" fill="hsl(var(--background))" stroke="hsl(var(--accent) / 0.7)" />
                <circle cx={n.x} cy={n.y} r="2.6" fill="hsl(var(--accent))" />
                <text
                  x={n.x}
                  y={n.y - 14}
                  fontSize="12"
                  letterSpacing="1.4"
                  textAnchor="middle"
                  fill="hsl(var(--foreground))"
                  className="font-mono"
                >
                  {n.label}
                </text>
              </g>
            ))}
          </g>
        </svg>

        <div className="mt-7 border-t border-border/70 pt-5">
          <p
            key={s}
            className="animate-fade-in font-display text-base leading-snug text-foreground md:text-lg"
          >
            {captions[s - 1]}
          </p>
        </div>
      </div>
      <figcaption className="mt-4 diagram-caption">
        The drawing accumulates with the method — the final frame is the deliverable, not a diagram of
        one.
      </figcaption>
    </figure>
  );
};
