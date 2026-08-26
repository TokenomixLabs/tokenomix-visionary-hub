/**
 * Portrait treatment of the Economic Layers seam.
 * Value can cross explicit interfaces while authority remains scoped to each layer.
 */
const layers = [
  "USER / COMMUNITY",
  "PRODUCT / APPLICATION",
  "MARKETPLACE / SERVICE",
  "PROTOCOL / NETWORK",
  "TREASURY / GOVERNANCE",
];

export const LayerSeamMobile = ({ className = "" }: { className?: string }) => (
  <figure className={`m-0 ${className}`}>
    <svg
      viewBox="0 0 320 480"
      className="h-auto w-full"
      role="img"
      aria-label="Five economic layers connected by explicit interfaces while retaining separate authority"
    >
      <defs>
        <linearGradient id="lsm-layer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(235 88% 64%)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="hsl(268 86% 70%)" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      <line x1="272" y1="36" x2="272" y2="402" stroke="hsl(240 22% 24%)" strokeWidth="1.2" />
      <text x="272" y="24" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="9" letterSpacing="1.4">
        AUTHORITY
      </text>

      {layers.map((layer, i) => {
        const y = 42 + i * 72;
        return (
          <g key={layer}>
            <rect x="16" y={y} width="218" height="48" rx="4" fill="url(#lsm-layer)" stroke="hsl(240 22% 26%)" strokeWidth="1.2" />
            <text x="30" y={y + 29} className="fill-foreground font-mono" fontSize="10" letterSpacing="1.2">
              {layer}
            </text>
            <line x1="234" y1={y + 24} x2="264" y2={y + 24} stroke="hsl(322 90% 62%)" strokeWidth="1.5" opacity="0.7" />
            <circle cx="272" cy={y + 24} r="5" fill="hsl(240 32% 5%)" stroke="hsl(322 90% 62%)" strokeWidth="1.8" />
            {i < layers.length - 1 && (
              <g>
                <line x1="16" y1={y + 60} x2="234" y2={y + 60} stroke="hsl(240 22% 23%)" strokeDasharray="3 7" />
                <circle cx="126" cy={y + 60} r="3" fill="hsl(322 90% 62%)" className="animate-pulse-node motion-settle" style={{ animationDelay: `${i * 500}ms`, transformOrigin: `126px ${y + 60}px` }} />
              </g>
            )}
          </g>
        );
      })}

      <text x="16" y="440" className="fill-muted-foreground font-mono" fontSize="10" letterSpacing="1.2">
        EXPLICIT INTERFACES
      </text>
      <text x="16" y="458" className="fill-muted-foreground font-mono" fontSize="10" letterSpacing="1.2">
        SEPARATE AUTHORITY
      </text>
    </svg>
    <figcaption className="mt-3 font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
      Value crosses explicit interfaces. Authority remains scoped to its layer.
    </figcaption>
  </figure>
);