/**
 * Signature Tokenomix visual: a value topology / incentive field.
 * Nodes = actors and states, paths = value routes, loops = feedback.
 * Purely decorative — labels live in the surrounding copy.
 */
export const ValueTopology = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg
      viewBox="0 0 520 420"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram of value circulating through a designed economic topology"
    >
      <defs>
        <linearGradient id="vt-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(235 88% 64%)" stopOpacity="0.8" />
          <stop offset="60%" stopColor="hsl(268 86% 70%)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(322 90% 62%)" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="vt-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(268 86% 70%)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(268 86% 70%)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="260" cy="210" r="190" fill="url(#vt-glow)" />

      {/* governance boundary */}
      <rect
        x="52"
        y="46"
        width="416"
        height="328"
        rx="10"
        fill="none"
        stroke="hsl(240 22% 24%)"
        strokeDasharray="3 7"
      />

      {/* layer separators */}
      {[128, 210, 292].map((y) => (
        <line key={y} x1="52" y1={y} x2="468" y2={y} stroke="hsl(240 22% 20%)" strokeWidth="1" />
      ))}

      {/* circulation paths */}
      <g fill="none" stroke="url(#vt-edge)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M96 336 C 150 300, 150 240, 200 210" />
        <path d="M200 210 C 250 182, 250 130, 300 96" />
        <path d="M300 96 C 372 96, 424 140, 424 210" />
        <path d="M424 210 C 424 286, 356 336, 288 320" />
        <path d="M288 320 C 220 306, 150 336, 96 336" opacity="0.65" />
        <path d="M200 210 C 262 232, 330 220, 424 210" strokeDasharray="2 6" opacity="0.7" />
        <path d="M300 96 C 246 148, 196 262, 288 320" strokeDasharray="2 6" opacity="0.5" />
      </g>

      {/* travelling value pulses */}
      <g stroke="hsl(322 90% 62%)" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <path
          d="M96 336 C 150 300, 150 240, 200 210 C 250 182, 250 130, 300 96 C 372 96, 424 140, 424 210 C 424 286, 356 336, 288 320 C 220 306, 150 336, 96 336"
          strokeDasharray="14 186"
          className="animate-flow-dash"
          opacity="0.9"
        />
      </g>

      {/* nodes */}
      {[
        [96, 336, 7],
        [200, 210, 9],
        [300, 96, 8],
        [424, 210, 9],
        [288, 320, 7],
      ].map(([cx, cy, r], i) => (
        <g key={`${cx}-${cy}`}>
          <circle
            cx={cx}
            cy={cy}
            r={Number(r) + 8}
            fill="hsl(268 86% 70%)"
            className="animate-pulse-node"
            style={{ animationDelay: `${i * 420}ms`, transformOrigin: `${cx}px ${cy}px` }}
            opacity="0.18"
          />
          <circle cx={cx} cy={cy} r={r} fill="hsl(240 32% 5%)" stroke="hsl(250 92% 72%)" strokeWidth="1.5" />
          <circle cx={cx} cy={cy} r={2.5} fill="hsl(322 90% 62%)" />
        </g>
      ))}

      {/* allocation ticks */}
      {Array.from({ length: 14 }).map((_, i) => (
        <line
          key={i}
          x1={70 + i * 28}
          y1="374"
          x2={70 + i * 28}
          y2={374 - ((i % 5) + 1) * 5}
          stroke="hsl(235 88% 64%)"
          strokeWidth="1.5"
          opacity={0.25 + (i % 5) * 0.14}
        />
      ))}
    </svg>
  </div>
);
