/**
 * Portrait mobile variant of the rule-state transition.
 * STATE n descends through an authority gate into STATE n+1; a rejected path stops short
 * and an arbitrary override bypasses the gate entirely.
 */
export const GovernanceStateTransitionMobile = ({ className = "" }: { className?: string }) => (
  <figure className={`m-0 ${className}`}>
    <svg
      viewBox="0 0 320 400"
      className="h-auto w-full"
      role="img"
      aria-label="Vertical diagram of a legitimate rule change passing through an authority gate, a rejected path that changes nothing, and an override that bypasses the gate"
    >
      <defs>
        <linearGradient id="gstm-path" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(235 88% 64%)" />
          <stop offset="100%" stopColor="hsl(322 90% 62%)" />
        </linearGradient>
      </defs>

      {/* states */}
      <rect x="46" y="20" width="150" height="52" rx="6" fill="hsl(240 28% 8%)" stroke="hsl(240 22% 28%)" strokeWidth="1.4" />
      <text x="121" y="43" textAnchor="middle" className="fill-foreground font-mono" fontSize="12.5" letterSpacing="1.6">
        STATE n
      </text>
      <text x="121" y="60" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="12.5" letterSpacing="1.4">
        v1.4
      </text>

      <rect x="46" y="300" width="150" height="52" rx="6" fill="hsl(240 28% 8%)" stroke="hsl(322 90% 62%)" strokeWidth="1.6" />
      <text x="121" y="323" textAnchor="middle" className="fill-foreground font-mono" fontSize="12.5" letterSpacing="1.6">
        STATE n+1
      </text>
      <text x="121" y="340" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="12.5" letterSpacing="1.4">
        v1.5
      </text>

      {/* legitimate path through the gate */}
      <path d="M 121 72 L 121 178 M 121 190 L 121 300" fill="none" stroke="url(#gstm-path)" strokeWidth="2.4" />
      <path
        d="M 121 72 L 121 178 M 121 190 L 121 300"
        fill="none"
        stroke="hsl(322 90% 62%)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="22 320"
        className="animate-flow-loop motion-settle"
      />
      <circle cx="121" cy="120" r="7" fill="hsl(240 32% 5%)" stroke="hsl(250 92% 72%)" strokeWidth="2.2" />
      <circle cx="121" cy="248" r="7" fill="hsl(240 32% 5%)" stroke="hsl(322 90% 62%)" strokeWidth="2.2" />

      {/* authority gate */}
      <line x1="40" y1="184" x2="202" y2="184" stroke="hsl(268 86% 70%)" strokeWidth="3.4" opacity="0.6" />
      <text x="40" y="172" className="fill-foreground font-mono" fontSize="13.0" letterSpacing="1.6">
        AUTHORITY GATE
      </text>

      {/* rejected path — stops short of a new state */}
      <path
        d="M 121 120 C 74 152, 60 190, 58 236"
        fill="none"
        stroke="hsl(240 22% 32%)"
        strokeWidth="2"
        strokeDasharray="5 8"
      />
      <text x="16" y="258" className="fill-muted-foreground font-mono" fontSize="12.5" letterSpacing="1.4">
        REJECTED
      </text>

      {/* override — bypasses the gate */}
      <path
        d="M 196 46 C 268 110, 268 250, 196 320"
        fill="none"
        stroke="hsl(356 76% 56%)"
        strokeWidth="2"
        strokeDasharray="4 9"
        opacity="0.6"
      />
      <text x="234" y="188" className="fill-muted-foreground font-mono" fontSize="12.5" letterSpacing="1.4">
        OVERRIDE
      </text>

      <text x="16" y="368" className="fill-muted-foreground font-mono" fontSize="12" letterSpacing="1.4">
        ONE LEGITIMATE PATH
      </text>
    </svg>
    <figcaption className="mt-4 diagram-caption">
      A scoped proposal passes the gate and becomes a versioned rule. Rejection changes nothing.
      An administrative override reaches the new state without legitimacy.
    </figcaption>
  </figure>
);
