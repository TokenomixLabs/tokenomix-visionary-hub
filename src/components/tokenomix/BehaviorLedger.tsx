interface BehaviorLedgerProps {
  /** 1-based checkpoint the reader has arrived at. 0 = nothing traversed yet. */
  active: number;
  className?: string;
}

/**
 * Behavior ledger — the seven questions rendered as checkpoints on the same
 * engine circuit described above: useful action, contribution, incentive,
 * response, and the feedback return that closes the loop.
 *
 * The packet descends as the reader moves through the questions, and each
 * checkpoint carries its own consequence: what the economy does when that
 * question goes unanswered. Explanatory, not decorative.
 */
const checkpoints = [
  { tag: "ACTION", stage: 0, consequence: "Nothing in particular is being encouraged." },
  { tag: "VALUE", stage: 1, consequence: "Rewards land on activity instead of contribution." },
  { tag: "MEASURE", stage: 1, consequence: "Recognition becomes arbitrary and contestable." },
  { tag: "ABUSE", stage: 2, consequence: "Extraction becomes the cheapest winning strategy." },
  { tag: "SCALE", stage: 2, consequence: "The economy dilutes precisely as it succeeds." },
  { tag: "EXIT", stage: 3, consequence: "Value leaves the system with whoever holds it." },
  { tag: "RIGHTS", stage: 3, consequence: "Authority defaults to whoever deployed the contract." },
];

const stages = ["Useful action", "Contribution", "Incentive", "Response"];

const SPINE_X = 66;
const TOP = 44;
const GAP = 58;


export const BehaviorLedger = ({ active, className = "" }: BehaviorLedgerProps) => {
  const reached = Math.min(Math.max(active, 0), checkpoints.length);
  const currentY = TOP + Math.max(reached - 1, 0) * GAP;
  const current = checkpoints[Math.max(reached - 1, 0)];

  return (
    <figure className={`w-full ${className}`}>
      <div className="panel bg-gradient-surface p-6 md:p-8">
        <div className="flex items-baseline justify-between gap-4">
          <p className="eyebrow">Behavior ledger</p>
          <p className="font-mono text-[0.7rem] tracking-[0.2em] text-accent/80">
            {String(Math.max(reached, 1)).padStart(2, "0")} / 07
          </p>
        </div>

        <svg
          viewBox="0 0 320 428"
          role="img"
          aria-label="The seven design questions shown as checkpoints on the behavior engine circuit, each with the consequence of leaving it unanswered."
          className="mx-auto mt-6 w-full max-w-[380px]"
        >

          {/* engine spine */}
          <line
            x1={SPINE_X}
            y1={TOP - 22}
            x2={SPINE_X}
            y2={TOP + (checkpoints.length - 1) * GAP + 34}
            stroke="hsl(var(--border))"
            strokeWidth="1"
          />
          {/* feedback return */}
          <path
            d={`M ${SPINE_X} ${TOP + (checkpoints.length - 1) * GAP + 34}
                C ${SPINE_X - 46} ${TOP + (checkpoints.length - 1) * GAP + 34},
                  ${SPINE_X - 46} ${TOP - 22},
                  ${SPINE_X} ${TOP - 22}`}
            fill="none"
            stroke="hsl(var(--accent) / 0.4)"
            strokeWidth="1"
            strokeDasharray="3 5"
          />
          <text
            x={SPINE_X - 52}
            y={TOP + 170}
            fontSize="13.5"
            letterSpacing="1.6"
            fill="hsl(var(--muted-foreground))"
            transform={`rotate(-90 ${SPINE_X - 52} ${TOP + 170})`}
            textAnchor="middle"
            className="font-mono"
          >
            FEEDBACK
          </text>


          {/* stage bands */}
          {stages.map((stage, s) => {
            const first = checkpoints.findIndex((c) => c.stage === s);
            const last = checkpoints.map((c) => c.stage).lastIndexOf(s);
            const y = TOP + first * GAP;
            const h = (last - first) * GAP;
            const on = reached > first;
            return (
              <g key={stage} style={{ transition: "opacity 500ms ease-out" }} opacity={on ? 1 : 0.35}>
                <rect
                  x={SPINE_X - 4}
                  y={y - 12}
                  width="8"
                  height={h + 24}
                  rx="4"
                  fill={on ? "hsl(var(--accent) / 0.16)" : "hsl(var(--border) / 0.5)"}
                />
                <text
                  x={SPINE_X + 18}
                  y={y - 18}
                  fontSize="13.5"
                  letterSpacing="1.6"
                  fill={on ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))"}
                  className="font-mono"
                >
                  {stage.toUpperCase()}
                </text>
              </g>
            );
          })}

          {/* checkpoints */}
          {checkpoints.map((c, i) => {
            const y = TOP + i * GAP;
            const on = reached > i;
            return (
              <g key={c.tag} style={{ transition: "opacity 450ms ease-out" }} opacity={on ? 1 : 0.4}>
                <line
                  x1={SPINE_X}
                  y1={y}
                  x2={SPINE_X + 74}
                  y2={y}
                  stroke={on ? "hsl(var(--accent) / 0.55)" : "hsl(var(--border))"}
                  strokeWidth="1"
                />
                <circle
                  cx={SPINE_X + 74}
                  cy={y}
                  r="3.4"
                  fill={on ? "hsl(var(--accent))" : "hsl(var(--border))"}
                />
                <text
                  x={SPINE_X + 86}
                  y={y + 4}
                  fontSize="13.5"
                  letterSpacing="1.5"
                  fill={on ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))"}
                  className="font-mono"
                >
                  Q{i + 1} · {c.tag}
                </text>
              </g>
            );
          })}

          {/* travelling packet */}
          <g style={{ transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)" }} transform={`translate(0 ${currentY})`}>
            <circle cx={SPINE_X} cy="0" r="8" fill="hsl(var(--signal) / 0.18)" />
            <circle cx={SPINE_X} cy="0" r="3.6" fill="hsl(var(--signal))" />
          </g>
        </svg>

        <div className="mt-7 border-t border-border/70 pt-5">
          <p className="diagram-caption">Left unanswered</p>
          <p
            key={current.tag}
            className="mt-3 animate-fade-in font-display text-base leading-snug text-foreground md:text-lg"
          >
            {current.consequence}
          </p>
        </div>
      </div>
      <figcaption className="mt-4 diagram-caption">
        Each question is a checkpoint on the engine circuit — answered, it shapes conduct; skipped, it
        becomes the failure mode named above.
      </figcaption>
    </figure>
  );
};
