/**
 * Portrait mobile variant of the behavior engine.
 * Four stages descend a rail and return to the top: useful action → contribution →
 * incentive → response → useful action.
 */
const stages = ["USEFUL ACTION", "CONTRIBUTION", "INCENTIVE", "RESPONSE"];
const RAIL = 72;
const TOP = 46;
const GAP = 74;

export const BehaviorEngineMobile = ({ className = "" }: { className?: string }) => {
  const bottom = TOP + GAP * (stages.length - 1);
  const circuit = `M ${RAIL} ${TOP} L ${RAIL} ${bottom} C ${RAIL - 44} ${bottom + 22}, ${RAIL - 44} ${TOP - 22}, ${RAIL} ${TOP}`;

  return (
    <figure className={`m-0 ${className}`}>
      <svg
        viewBox="0 0 320 340"
        className="h-auto w-full"
        role="img"
        aria-label="Vertical diagram of a four-stage behavior circuit: useful action, contribution, incentive, participant response, returning to useful action"
      >
        <rect
          x="16"
          y="16"
          width="288"
          height="290"
          rx="10"
          fill="none"
          stroke="hsl(240 22% 20%)"
          strokeDasharray="3 9"
        />

        <path d={circuit} fill="none" stroke="hsl(250 92% 72%)" strokeWidth="2.2" opacity="0.8" />
        <path
          d={circuit}
          fill="none"
          stroke="hsl(322 90% 62%)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="24 620"
          className="animate-flow-loop motion-settle"
        />

        {stages.map((label, i) => {
          const y = TOP + i * GAP;
          return (
            <g key={label}>
              <rect
                x={RAIL - 7}
                y={y - 7}
                width="14"
                height="14"
                rx="2"
                fill="hsl(240 32% 5%)"
                stroke="hsl(250 92% 72%)"
                strokeWidth="2.2"
              />
              <rect x={RAIL - 2.5} y={y - 2.5} width="5" height="5" fill="hsl(322 90% 62%)" />
              <text
                x={RAIL + 24}
                y={y + 5}
                className="fill-foreground font-mono"
                fontSize="13.0"
                letterSpacing="1.6"
              >
                {label}
              </text>
            </g>
          );
        })}

        <text
          x="16"
          y="330"
          className="fill-muted-foreground font-mono"
          fontSize="12.5"
          letterSpacing="1.6"
        >
          FOUR STAGES · ONE CIRCUIT
        </text>
      </svg>
      <figcaption className="mt-4 diagram-caption">
        The return arc is where design happens. The questions below are checkpoints on this loop.
      </figcaption>
    </figure>
  );
};
