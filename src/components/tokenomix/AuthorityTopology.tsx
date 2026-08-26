/**
 * Authority topology: economic layers with distinct authority domains attached.
 * Interoperation across layers does not imply shared authority.
 * Conceptual architecture — Tokenomix owns none of these layers.
 */

const layers = [
  { name: "Protocol / network", y: 46 },
  { name: "Marketplace / services", y: 110 },
  { name: "Application / community", y: 174 },
  { name: "Participant / contributor", y: 238 },
];

const domains = [
  { name: "Fee policy", layer: 0, x: 250 },
  { name: "Settlement rules", layer: 0, x: 250 },
  { name: "Pricing", layer: 1, x: 250 },
  { name: "Governance", layer: 2, x: 250 },
  { name: "Claims & rights", layer: 3, x: 250 },
];

export const AuthorityTopology = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg
      viewBox="0 0 420 300"
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
        <g key={layer.name}>
          <rect
            x="14"
            y={layer.y}
            width="196"
            height="44"
            rx="5"
            fill="url(#at-plane)"
            stroke="hsl(240 22% 24%)"
          />
          <text
            x="28"
            y={layer.y + 26}
            className="fill-foreground font-mono"
            fontSize="11.0"
            letterSpacing="1.6"
          >
            {layer.name.toUpperCase()}
          </text>
          {/* bounded interface between planes */}
          {i < layers.length - 1 && (
            <line
              x1="14"
              y1={layer.y + 54}
              x2="210"
              y2={layer.y + 54}
              stroke="hsl(240 22% 20%)"
              strokeDasharray="2 6"
            />
          )}
        </g>
      ))}

      {/* authority connectors */}
      {domains.map((domain, i) => {
        const layer = layers[domain.layer];
        const y = layer.y + 22;
        return (
          <g key={domain.name}>
            <path
              d={`M 210 ${y} C ${domain.x - 30} ${y}, ${domain.x - 30} ${44 + i * 52}, ${domain.x} ${44 + i * 52}`}
              fill="none"
              stroke="hsl(250 92% 72%)"
              strokeWidth="1.1"
              opacity="0.35"
            />
            <path
              d={`M 210 ${y} C ${domain.x - 30} ${y}, ${domain.x - 30} ${44 + i * 52}, ${domain.x} ${44 + i * 52}`}
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
              cy={44 + i * 52}
              r="4"
              fill="hsl(240 32% 5%)"
              stroke="hsl(322 90% 62%)"
              strokeWidth="1.4"
            />
            <text
              x={domain.x + 10}
              y={47 + i * 52}
              className="fill-muted-foreground font-mono"
              fontSize="10.0"
              letterSpacing="1.2"
            >
              {domain.name.toUpperCase()}
            </text>
          </g>
        );
      })}

      <text
        x="14"
        y="292"
        className="fill-muted-foreground font-mono"
        fontSize="9.5"
        letterSpacing="1.4"
      >
        AUTHORITY IS SCOPED PER LAYER
      </text>
    </svg>
  </div>
);
