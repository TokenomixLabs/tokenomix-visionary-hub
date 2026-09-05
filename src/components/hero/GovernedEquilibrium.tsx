import { at } from "./timing";

/**
 * Governed Equilibrium — the Tokenomix mark rebuilt as a system diagram.
 *
 * Same geometry as the approved lockup: a circular governance boundary split
 * cold (left) / warm (right), horizontal apertures at the midline, horn-shaped
 * paths curving inward from each aperture, three vertical bars with the centre
 * tallest. Added here as *system* reading: a construction layer (rings,
 * crosshair, ticks), a value signal entering through the legitimate apertures
 * from both sides, and an equilibrium node where they meet.
 *
 * All text lives in HTML (callouts / legend) so it is never scaled by the SVG.
 * Coordinates are in a 1000 × 800 space; the mobile crop shows the mark only.
 */
const CX = 500;
const CY = 400;
const R = 250;
const APERTURE_DEG = 8;

const rad = (deg: number) => (deg * Math.PI) / 180;
const polar = (deg: number, r = R) => ({
  x: CX + Math.cos(rad(deg)) * r,
  y: CY + Math.sin(rad(deg)) * r,
});
const f = (n: number) => n.toFixed(1);

/* Boundary arcs — drawn left → right so the sequence reads cold → warm. */
const lt = polar(180 + APERTURE_DEG);
const lb = polar(180 - APERTURE_DEG);
const rt = polar(360 - APERTURE_DEG);
const rb = polar(APERTURE_DEG);
const topArc = `M ${f(lt.x)} ${f(lt.y)} A ${R} ${R} 0 0 1 ${f(rt.x)} ${f(rt.y)}`;
const bottomArc = `M ${f(lb.x)} ${f(lb.y)} A ${R} ${R} 0 0 0 ${f(rb.x)} ${f(rb.y)}`;
const ARC_LEN = Math.ceil(R * rad(180 - 2 * APERTURE_DEG)) + 12;

/* Horns: horizontal entry bar from outside the boundary to an apex, then two
   arms that leave the apex horizontally and arrive vertically beside the bars. */
const APEX = 0.72 * R; // 180
const ARM_X = 0.38 * R; // 95
const ARM_Y = 0.34 * R; // 85
const ENTRY = R + 24;

const horn = (side: 1 | -1) => {
  const ax = CX - side * APEX;
  const ex = CX - side * ARM_X;
  const c1x = ax + side * 55;
  return {
    bar: `M ${CX - side * ENTRY} ${CY} L ${ax + side * 1} ${CY}`,
    up: `M ${ax} ${CY} C ${c1x} ${CY} ${ex} ${CY - ARM_Y * 0.4} ${ex} ${CY - ARM_Y}`,
    down: `M ${ax} ${CY} C ${c1x} ${CY} ${ex} ${CY + ARM_Y * 0.4} ${ex} ${CY + ARM_Y}`,
  };
};
const left = horn(1);
const right = horn(-1);

/* Bars: centre tallest, set low in the circle exactly as in the mark. */
const BAR_W = 18;
const BAR_DX = 0.205 * R; // 51
const bars = [
  { x: CX - BAR_DX, top: CY - 0.58 * R, bottom: CY + 0.92 * R, t: 2500 },
  { x: CX, top: CY - 0.8 * R, bottom: CY + 0.94 * R, t: 2750 },
  { x: CX + BAR_DX, top: CY - 0.58 * R, bottom: CY + 0.92 * R, t: 2500 },
];

/* Ports on the boundary at the diagonals; callouts hang off the construction square corners. */
const ports = {
  tl: polar(225),
  tr: polar(315),
  bl: polar(135),
  br: polar(45),
};
const anchors = {
  tl: { x: 222, y: 120 },
  tr: { x: 778, y: 120 },
  bl: { x: 222, y: 680 },
  br: { x: 778, y: 680 },
};
const connector = (p: { x: number; y: number }, a: { x: number; y: number }) => {
  const sx = a.x < CX ? -1 : 1;
  const sy = a.y < CY ? -1 : 1;
  return `M ${f(p.x)} ${f(p.y)} C ${f(p.x + sx * 36)} ${f(p.y + sy * 36)} ${f(a.x - sx * 46)} ${a.y} ${a.x} ${a.y}`;
};

const CONSTRUCTION = "hsl(240 30% 21%)";
const TICK = "hsl(236 14% 66%)";

interface DiagramProps {
  idPrefix: string;
  compact?: boolean;
  className?: string;
}

const Diagram = ({ idPrefix, compact = false, className = "" }: DiagramProps) => {
  const id = (name: string) => `${idPrefix}-${name}`;
  const url = (name: string) => `url(#${id(name)})`;

  return (
    <svg
      viewBox={compact ? "170 110 660 580" : "0 0 1000 800"}
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="System diagram built from the Tokenomix mark: a governance boundary with apertures on each side, inward paths, three central bars, and a value signal entering from both sides to an equilibrium node at the centre. Contribution, ownership, incentives and authority attach to the boundary."
    >
      <defs>
        <linearGradient
          id={id("spectrum")}
          gradientUnits="userSpaceOnUse"
          x1={CX - R - 30}
          x2={CX + R + 30}
          y1={CY}
          y2={CY}
        >
          <stop offset="0%" stopColor="hsl(198 100% 66%)" />
          <stop offset="34%" stopColor="hsl(232 96% 72%)" />
          <stop offset="64%" stopColor="hsl(272 92% 72%)" />
          <stop offset="100%" stopColor="hsl(304 100% 71%)" />
        </linearGradient>
        <linearGradient id={id("sig-l")} gradientUnits="userSpaceOnUse" x1="0" x2={CX} y1="0" y2="0">
          <stop offset="0%" stopColor="hsl(198 100% 72%)" stopOpacity="0" />
          <stop offset="45%" stopColor="hsl(198 100% 76%)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="hsl(198 100% 88%)" stopOpacity="1" />
        </linearGradient>
        <linearGradient id={id("sig-r")} gradientUnits="userSpaceOnUse" x1="1000" x2={CX} y1="0" y2="0">
          <stop offset="0%" stopColor="hsl(304 100% 74%)" stopOpacity="0" />
          <stop offset="45%" stopColor="hsl(304 100% 78%)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="hsl(304 100% 90%)" stopOpacity="1" />
        </linearGradient>
        <radialGradient id={id("glow-l")} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(205 100% 66%)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="hsl(205 100% 66%)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id("glow-r")} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(300 100% 70%)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="hsl(300 100% 70%)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id("node")} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(232 60% 97%)" stopOpacity="0.9" />
          <stop offset="35%" stopColor="hsl(262 90% 80%)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="hsl(262 90% 80%)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Atmosphere — restrained, cold left / warm right */}
      <g className="ge-anim ge-fade" style={at(300, 1800)}>
        <ellipse cx={CX - 120} cy={CY} rx="280" ry="250" fill={url("glow-l")} />
        <ellipse cx={CX + 120} cy={CY} rx="280" ry="250" fill={url("glow-r")} />
      </g>

      {/* Construction layer */}
      <g className="ge-anim ge-fade" style={at(150, 1400)} fill="none" strokeWidth="1">
        <line x1="0" y1={CY} x2="1000" y2={CY} stroke={CONSTRUCTION} opacity="0.8" />
        <line x1={CX} y1="0" x2={CX} y2="800" stroke={CONSTRUCTION} opacity="0.8" />
        <circle cx={CX} cy={CY} r={R + 30} stroke={CONSTRUCTION} strokeDasharray="2 7" />
        <circle cx={CX} cy={CY} r={R + 62} stroke={CONSTRUCTION} strokeDasharray="1 11" opacity="0.7" />
        {/* coordinate ticks */}
        <g stroke={TICK} opacity="0.35">
          {[40, 80, 120, 160, 840, 880, 920, 960].map((x) => (
            <line key={`hx${x}`} x1={x} y1={CY + 5} x2={x} y2={CY + 11} />
          ))}
          {[40, 80, 720, 760].map((y) => (
            <line key={`vy${y}`} x1={CX + 5} y1={y} x2={CX + 11} y2={y} />
          ))}
        </g>
        {/* coordinate squares where the axes meet the outer ring */}
        <g stroke={TICK} opacity="0.55" fill="hsl(240 32% 5%)">
          {[
            [CX - R - 62, CY],
            [CX + R + 62, CY],
            [CX, CY - R - 62],
            [CX, CY + R + 62],
          ].map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x - 3.5} y={y - 3.5} width="7" height="7" />
          ))}
        </g>
      </g>

      {/* Governance boundary — resolves left → right */}
      <g fill="none" stroke={url("spectrum")} strokeWidth="16">
        <path d={topArc} className="ge-anim ge-draw" style={at(500, 2000, { "--len": `${ARC_LEN}` })} />
        <path d={bottomArc} className="ge-anim ge-draw" style={at(500, 2000, { "--len": `${ARC_LEN}` })} />
      </g>

      {/* Apertures → inward horns */}
      <g fill="none" stroke={url("spectrum")} strokeLinecap="round">
        {[left, right].map((h, i) => (
          <g key={i}>
            <path d={h.bar} strokeWidth="16" className="ge-anim ge-draw" style={at(1750, 900, { "--len": "120" })} />
            <path d={h.up} strokeWidth="12" className="ge-anim ge-draw" style={at(2250, 900, { "--len": "160" })} />
            <path d={h.down} strokeWidth="12" className="ge-anim ge-draw" style={at(2250, 900, { "--len": "160" })} />
          </g>
        ))}
      </g>

      {/* Three bars — rise from the floor of the boundary */}
      <g fill={url("spectrum")}>
        {bars.map((b) => (
          <rect
            key={b.x}
            x={b.x - BAR_W / 2}
            y={b.top}
            width={BAR_W}
            height={b.bottom - b.top}
            className="ge-anim ge-grow"
            style={at(b.t, 1000, { transformOrigin: `${b.x}px ${b.bottom}px` } as Record<string, string>)}
          />
        ))}
      </g>

      {/* Value signal — enters through the legitimate apertures from both sides */}
      <g fill="none" strokeWidth="1.6" strokeLinecap="round">
        <path
          d={`M 0 ${CY} L ${CX - BAR_W / 2} ${CY}`}
          stroke={url("sig-l")}
          className="ge-anim ge-draw"
          style={at(3300, 1600, { "--len": "500" })}
        />
        <path
          d={`M 1000 ${CY} L ${CX + BAR_W / 2} ${CY}`}
          stroke={url("sig-r")}
          className="ge-anim ge-draw"
          style={at(3300, 1600, { "--len": "500" })}
        />
      </g>
      <circle
        cx="18"
        cy={CY}
        r="3.2"
        fill="hsl(198 100% 88%)"
        className="ge-anim ge-pulse"
        style={at(3300, 1650, { "--travel": `${CX - 18 - 4}px` })}
      />
      <circle
        cx="982"
        cy={CY}
        r="3.2"
        fill="hsl(304 100% 90%)"
        className="ge-anim ge-pulse"
        style={at(3300, 1650, { "--travel": `${-(CX - 18 - 4)}px` })}
      />

      {/* Equilibrium node — resolves once, then holds */}
      <g className="ge-anim ge-node" style={at(4850, 1100, { transformOrigin: `${CX}px ${CY}px` } as Record<string, string>)}>
        <circle cx={CX} cy={CY} r="30" fill={url("node")} />
        <circle cx={CX} cy={CY} r="11" fill="none" stroke="hsl(232 60% 96%)" strokeWidth="1" opacity="0.55" />
        <circle cx={CX} cy={CY} r="4.2" fill="hsl(232 60% 97%)" />
      </g>

      {/* Ports on the boundary */}
      <g className="ge-anim ge-fade" style={at(4600, 900)}>
        {Object.values(ports).map((p) => (
          <g key={`${p.x}-${p.y}`}>
            <circle cx={f(p.x)} cy={f(p.y)} r="8" fill="hsl(240 32% 5%)" stroke={url("spectrum")} strokeWidth="1.6" />
            <circle cx={f(p.x)} cy={f(p.y)} r="2.4" fill="hsl(232 30% 95%)" />
          </g>
        ))}
      </g>

      {/* Callout connectors — desktop/tablet only; the mobile legend sits below the mark */}
      {!compact && (
        <g fill="none" stroke={TICK} strokeWidth="1" opacity="0.7">
          {(["tl", "tr", "bl", "br"] as const).map((k, i) => (
            <g key={k}>
              <path
                d={connector(ports[k], anchors[k])}
                className="ge-anim ge-draw"
                style={at(5000 + i * 160, 800, { "--len": "230" })}
              />
              <circle
                cx={anchors[k].x}
                cy={anchors[k].y}
                r="3"
                fill="hsl(240 32% 5%)"
                className="ge-anim ge-fade"
                style={at(5500 + i * 160, 500)}
              />
            </g>
          ))}
        </g>
      )}
    </svg>
  );
};

const callouts = [
  { key: "tl", title: "Contribution", items: ["Ideas", "Capital", "People", "Data"], side: "left", row: "top" },
  { key: "tr", title: "Ownership", items: ["Rights", "Stake", "Participation", "Belonging"], side: "right", row: "top" },
  { key: "bl", title: "Incentives", items: ["Align", "Reward", "Coordinate", "Sustain"], side: "left", row: "bottom" },
  { key: "br", title: "Authority", items: ["Govern", "Rule change", "Legitimize", "Evolve"], side: "right", row: "bottom" },
] as const;

const CalloutBody = ({
  title,
  items,
  align,
  tone,
}: {
  title: string;
  items: readonly string[];
  align: "left" | "right";
  tone: "cold" | "warm";
}) => (
  <div className={align === "right" ? "text-right" : "text-left"}>
    <p className="font-mono text-[0.78rem] font-medium uppercase tracking-[0.24em] text-foreground 3xl:text-[0.88rem]">
      {title}
    </p>
    <span
      aria-hidden="true"
      className={`mt-2 block h-px w-8 ${tone === "cold" ? "bg-cyan/70" : "bg-magenta/70"} ${
        align === "right" ? "ml-auto" : ""
      }`}
    />
    <ul className="mt-2.5 space-y-1 font-mono text-[0.74rem] uppercase leading-none tracking-[0.2em] text-muted-foreground 3xl:text-[0.82rem]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export const GovernedEquilibrium = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-full ${className}`}>
    {/* Desktop / tablet: full construction field with attached callouts */}
    <div className="relative hidden md:block">
      <Diagram idPrefix="ge-d" />
      {callouts.map((c, i) => {
        const x = c.side === "left" ? "21%" : "79%";
        const y = c.row === "top" ? "15%" : "85%";
        return (
          <div
            key={c.key}
            className="absolute"
            style={{
              left: x,
              top: y,
              transform: c.side === "left" ? "translate(-100%, -50%)" : "translate(0, -50%)",
            }}
          >
            <div className="ge-anim ge-rise" style={at(5500 + i * 160, 700)}>
              <CalloutBody
                title={c.title}
                items={c.items}
                align={c.side === "left" ? "right" : "left"}
                tone={c.side === "left" ? "cold" : "warm"}
              />
            </div>
          </div>
        );
      })}
    </div>

    {/* Mobile: the mark alone, then a 2 × 2 legend */}
    <div className="md:hidden">
      <Diagram idPrefix="ge-m" compact />
      <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7">
        {callouts.map((c, i) => (
          <div key={c.key} className="ge-anim ge-rise" style={at(5000 + i * 140, 700)}>
            <dt className="flex items-center gap-2.5 font-mono text-[0.78rem] font-medium uppercase tracking-[0.22em] text-foreground">
              <span
                aria-hidden="true"
                className={`h-2 w-2 rounded-full ${c.side === "left" ? "bg-cyan" : "bg-magenta"}`}
              />
              {c.title}
            </dt>
            <dd className="mt-2.5 space-y-1.5 pl-[1.1rem] font-mono text-[0.74rem] uppercase leading-none tracking-[0.18em] text-muted-foreground">
              {c.items.map((item) => (
                <span key={item} className="block">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
);
