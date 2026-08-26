/**
 * Portrait mobile variant of the authority topology.
 * Four stacked plates, each holding its own authority marker on a shared axis.
 * Conceptual architecture — Tokenomix owns none of these layers.
 */
const plates = [
  "Protocol / network",
  "Marketplace / services",
  "Application / community",
  "Participant / contributor",
];

export const AuthorityTopologyMobile = ({ className = "" }: { className?: string }) => (
  <figure className={`m-0 ${className}`}>
    <svg
      viewBox="0 0 320 400"
      className="h-auto w-full"
      role="img"
      aria-label="Four stacked economic layers, each with its own authority marker on a shared axis"
    >
      <defs>
        <linearGradient id="atm-plate" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(235 88% 64%)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="hsl(268 86% 70%)" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      {/* authority axis */}
      <line x1="268" y1="34" x2="268" y2="348" stroke="hsl(240 22% 22%)" strokeWidth="1.4" />
      <text
        x="268"
        y="24"
        textAnchor="middle"
        className="fill-muted-foreground font-mono"
        fontSize="12.5"
        letterSpacing="1.6"
      >
        AUTHORITY
      </text>

      {plates.map((plate, i) => {
        const y = 40 + i * 78;
        return (
          <g key={plate}>
            <rect
              x="16"
              y={y}
              width="212"
              height="56"
              rx="6"
              fill="url(#atm-plate)"
              stroke="hsl(240 22% 26%)"
              strokeWidth="1.4"
            />
            <text
              x="32"
              y={y + 33}
              className="fill-foreground font-mono"
              fontSize="12.5"
              letterSpacing="1.4"
            >
              {plate.toUpperCase()}
            </text>
            {/* scoped authority marker — never shared with the plate above */}
            <line
              x1="228"
              y1={y + 28}
              x2="262"
              y2={y + 28}
              stroke="hsl(322 90% 62%)"
              strokeWidth="1.8"
              opacity="0.75"
            />
            <circle
              cx="268"
              cy={y + 28}
              r="6"
              fill="hsl(240 32% 5%)"
              stroke="hsl(322 90% 62%)"
              strokeWidth="2.2"
            />
            {/* bounded interface between plates */}
            {i < plates.length - 1 && (
              <line
                x1="16"
                y1={y + 67}
                x2="228"
                y2={y + 67}
                stroke="hsl(240 22% 20%)"
                strokeDasharray="3 8"
              />
            )}
          </g>
        );
      })}

      {/* Split so the legend stays inside the frame at 390px. */}
      <text x="16" y="366" className="fill-muted-foreground font-mono" fontSize="12" letterSpacing="1.4">
        FOUR PLATES
      </text>
      <text x="16" y="384" className="fill-muted-foreground font-mono" fontSize="12" letterSpacing="1.4">
        FOUR SEPARATE MANDATES
      </text>
    </svg>
    <figcaption className="mt-4 diagram-caption">
      Each layer carries its own authority — fee policy, settlement, pricing, governance, claims.
      Interoperation across a dashed interface never transfers the mandate.
    </figcaption>
  </figure>
);
