/**
 * Light accompaniment for the Economic Layers section.
 * Stacked translucent planes with bounded interfaces; small value packets cross
 * the seams without merging ownership or authority.
 */
const planes = [0, 1, 2, 3];

export const LayerSeam = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg
      viewBox="0 0 280 260"
      className="h-auto w-full"
      role="img"
      aria-label="Stacked economic planes with bounded interfaces and value packets crossing between them"
    >
      <defs>
        <linearGradient id="ls-plane" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(235 88% 64%)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="hsl(268 86% 70%)" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      {planes.map((i) => {
        const y = 30 + i * 58;
        return (
          <g key={i}>
            {/* isometric plane */}
            <path
              d={`M 40 ${y} L 190 ${y - 24} L 250 ${y + 6} L 100 ${y + 30} Z`}
              fill="url(#ls-plane)"
              stroke="hsl(240 22% 26%)"
              strokeWidth="1"
            />
            {/* bounded interface marker */}
            <line
              x1="145"
              y1={y + 30}
              x2="145"
              y2={y + 58}
              stroke="hsl(240 22% 22%)"
              strokeDasharray="2 5"
            />
            {/* crossing value packet */}
            {i < planes.length - 1 && (
              <circle
                r="3"
                cx="145"
                cy={y + 34}
                fill="hsl(322 90% 62%)"
                className="animate-pulse-node"
                style={{ animationDelay: `${i * 700}ms`, transformOrigin: `145px ${y + 34}px` }}
              />
            )}
          </g>
        );
      })}

      <text
        x="40"
        y="252"
        className="fill-muted-foreground font-mono"
        fontSize="7.5"
        letterSpacing="1.4"
      >
        EXPLICIT INTERFACES · SEPARATE AUTHORITY
      </text>
    </svg>
  </div>
);
