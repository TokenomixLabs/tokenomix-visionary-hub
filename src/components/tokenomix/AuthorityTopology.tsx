/**
 * Authority topology: economic layers with distinct authority domains attached.
 * Interoperation across layers does not imply shared authority.
 * Conceptual architecture — Tokenomix owns none of these layers.
 *
 * Labels are set on two lines inside each plate so no name can burst its box or
 * collide with the authority connector stubs at any rendered width.
 */

const PLATE_X = 14;
const PLATE_W = 202;
const PLATE_H = 50;
const PLATE_RIGHT = PLATE_X + PLATE_W;

const layers = [
  { top: "Protocol", bottom: "Network", y: 44 },
  { top: "Marketplace", bottom: "Services", y: 108 },
  { top: "Application", bottom: "Community", y: 172 },
  { top: "Participant", bottom: "Contributor", y: 236 },
];

const domains = [
  { name: "Fee policy", layer: 0, x: 252 },
  { name: "Settlement rules", layer: 0, x: 252 },
  { name: "Pricing", layer: 1, x: 252 },
  { name: "Governance", layer: 2, x: 252 },
  { name: "Claims & rights", layer: 3, x: 252 },
];

export const AuthorityTopology = ({ className = "" }: { className?: string }) => (
  <figure className={`m-0 ${className}`}>
    <svg
      viewBox="0 0 420 306"
      className="h-auto w-full"
      role="img"
      aria-label="Layered map showing economic layers and the distinct authority domains attached to each"
    >
      <defs>
        <linearGradient id="at-plane" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(235 88% 64%)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="hsl(268 86% 70%)" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {layers.map((layer, i) => (
        <g key={layer.top}>
          <rect
            x={PLATE_X}
            y={layer.y}
            width={PLATE_W}
            height={PLATE_H}
            rx="5"
            fill="url(#at-plane)"
            stroke="hsl(240 22% 24%)"
          />
          <text
            x={PLATE_X + 16}
            y={layer.y + 21}
            className="fill-foreground font-mono"
            fontSize="11.5"
            letterSpacing="1.3"
          >
            {layer.top.toUpperCase()}
          </text>
          <text
            x={PLATE_X + 16}
            y={layer.y + 38}
            className="fill-muted-foreground font-mono"
            fontSize="11.5"
            letterSpacing="1.3"
          >
            {layer.bottom.toUpperCase()}
          </text>
          {/* bounded interface between planes */}
          {i < layers.length - 1 && (
            <line
              x1={PLATE_X}
              y1={layer.y + 57}
              x2={PLATE_RIGHT}
              y2={layer.y + 57}
              stroke="hsl(240 22% 20%)"
              strokeDasharray="2 6"
            />
          )}
        </g>
      ))}

      {/* authority connectors */}
      {domains.map((domain, i) => {
        const layer = layers[domain.layer];
        const y = layer.y + 25;
        const ty = 46 + i * 52;
        return (
          <g key={domain.name}>
            <path
              d={`M ${PLATE_RIGHT} ${y} C ${domain.x - 30} ${y}, ${domain.x - 30} ${ty}, ${domain.x} ${ty}`}
              fill="none"
              stroke="hsl(250 92% 72%)"
              strokeWidth="1.1"
              opacity="0.35"
            />
            <path
              d={`M ${PLATE_RIGHT} ${y} C ${domain.x - 30} ${y}, ${domain.x - 30} ${ty}, ${domain.x} ${ty}`}
              fill="none"
              stroke="hsl(322 90% 62%)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeDasharray="8 200"
              className="animate-flow-loop motion-settle"
              style={{ animationDelay: `${i * 900}ms` }}
            />
            <circle
              cx={domain.x}
              cy={ty}
              r="4"
              fill="hsl(240 32% 5%)"
              stroke="hsl(322 90% 62%)"
              strokeWidth="1.4"
            />
            <text
              x={domain.x + 11}
              y={ty + 4}
              className="fill-muted-foreground font-mono"
              fontSize="11.5"
              letterSpacing="1.1"
            >
              {domain.name.toUpperCase()}
            </text>
          </g>
        );
      })}

      <text
        x={PLATE_X}
        y="300"
        className="fill-muted-foreground font-mono"
        fontSize="11.5"
        letterSpacing="1.2"
      >
        AUTHORITY IS SCOPED PER LAYER
      </text>
    </svg>
    <figcaption className="mt-5 diagram-caption">
      Four layers, four separate mandates — fee policy, settlement, pricing, governance, claims.
      Interoperation across a dashed interface never transfers authority.
    </figcaption>
  </figure>
);
