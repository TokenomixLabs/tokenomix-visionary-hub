/**
 * Rule-state transition: STATE n → scoped proposal → authority gate → versioned rule → STATE n+1.
 * Rejected paths fade before reaching state. Arbitrary override is shown as an illegitimate
 * side channel that bypasses the gate.
 * Conceptual illustration.
 */
export const GovernanceStateTransition = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg
      viewBox="0 0 420 280"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram of a legitimate rule-change path through an authority gate, contrasted with an arbitrary administrative override"
    >
      <defs>
        <linearGradient id="gst-path" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(235 88% 64%)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="hsl(322 90% 62%)" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* states */}
      {[
        { x: 18, label: "STATE n", v: "v1.4", w: 76 },
        { x: 314, label: "STATE n+1", v: "v1.5", w: 90 },
      ].map((s, i) => (
        <g key={s.label}>
          <rect
            x={s.x}
            y="104"
            width={s.w}
            height="60"
            rx="5"
            fill="hsl(240 28% 8%)"
            stroke={i === 1 ? "hsl(322 90% 62%)" : "hsl(240 22% 26%)"}
            strokeWidth="1.2"
          />
          <text
            x={s.x + 38}
            y="130"
            textAnchor="middle"
            className="fill-foreground font-mono"
            fontSize="12.5"
            letterSpacing="1.4"
          >
            {s.label}
          </text>
          <text
            x={s.x + 38}
            y="146"
            textAnchor="middle"
            className="fill-muted-foreground font-mono"
            fontSize="11.5"
            letterSpacing="1.2"
          >
            {s.v}
          </text>
        </g>
      ))}

      {/* authority gate */}
      <rect
        x="188"
        y="72"
        width="4"
        height="124"
        rx="2"
        fill="hsl(268 86% 70%)"
        opacity="0.5"
        
      />
      <text
        x="190"
        y="58"
        textAnchor="middle"
        className="fill-muted-foreground font-mono"
        fontSize="11"
        letterSpacing="1.4"
      >
        AUTHORITY GATE
      </text>

      {/* legitimate path */}
      <path
        d="M 94 134 L 132 134 C 158 134, 162 134, 186 134 M 194 134 C 240 134, 280 134, 326 134"
        fill="none"
        stroke="url(#gst-path)"
        strokeWidth="1.6"
        opacity="0.8"
      />
      <path
        d="M 94 134 L 186 134 M 194 134 L 326 134"
        fill="none"
        stroke="hsl(322 90% 62%)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray="14 240"
        className="animate-flow-loop motion-settle"
      />
      <g>
        <circle cx="140" cy="134" r="5" fill="hsl(240 32% 5%)" stroke="hsl(250 92% 72%)" strokeWidth="1.4" />
        <text x="146" y="116" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="11" letterSpacing="1">
          SCOPED PROPOSAL
        </text>
        <circle cx="262" cy="134" r="5" fill="hsl(240 32% 5%)" stroke="hsl(322 90% 62%)" strokeWidth="1.4" />
        <text x="262" y="116" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="11" letterSpacing="1">
          VERSIONED RULE
        </text>
      </g>

      {/* rejected path — fades before the state */}
      <path
        d="M 94 134 C 130 190, 150 210, 184 212"
        fill="none"
        stroke="hsl(240 22% 30%)"
        strokeWidth="1.2"
        strokeDasharray="4 6"
      />
      <path
        d="M 94 134 C 130 190, 150 210, 184 212"
        fill="none"
        stroke="hsl(236 14% 66%)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="10 160"
        className="animate-leak-out"
      />
      <text x="192" y="215" className="fill-muted-foreground font-mono" fontSize="11" letterSpacing="1.2">
        REJECTED — NO STATE CHANGE
      </text>

      {/* arbitrary override — bypasses the gate, marked illegitimate */}
      <path
        d="M 94 120 C 150 22, 260 22, 326 118"
        fill="none"
        stroke="hsl(356 76% 56%)"
        strokeWidth="1.2"
        strokeDasharray="3 7"
        opacity="0.55"
      />
      <text x="210" y="16" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="11" letterSpacing="1.2">
        ADMIN OVERRIDE — BYPASSES LEGITIMACY
      </text>

      {/* version lineage */}
      <g stroke="hsl(240 22% 22%)" strokeWidth="1">
        <line x1="18" y1="250" x2="402" y2="250" />
        {["v1.1", "v1.2", "v1.3", "v1.4", "v1.5"].map((v, i) => (
          <g key={v}>
            <line x1={40 + i * 84} y1="244" x2={40 + i * 84} y2="256" />
            <text
              x={40 + i * 84}
              y="270"
              textAnchor="middle"
              className="fill-muted-foreground font-mono"
              fontSize="11"
              stroke="none"
              letterSpacing="1.2"
            >
              {v}
            </text>
          </g>
        ))}
      </g>
    </svg>
  </div>
);
