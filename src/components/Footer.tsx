const sections = [
  { label: "Architecture", id: "architecture" },
  { label: "Incentives", id: "incentives" },
  { label: "Ownership", id: "ownership" },
  { label: "Intelligent Economies", id: "intelligent-economies" },
  { label: "Research", id: "research" },
  { label: "Contact", id: "contact" },
];


export const Footer = () => (
  <footer id="connect-with-us" className="border-t border-border/60 bg-surface/30 py-16">
    <div className="container mx-auto">
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <img
            src="/tokenomix-logo.png"
            alt="Tokenomix"
            className="h-7 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Designing how value, ownership, incentives and governance actually work inside intelligent
            and decentralized systems.
          </p>
          <p className="mt-7 font-mono text-xs tracking-[0.18em] text-muted-foreground/80">
            VALUE · OWNERSHIP · INCENTIVES · GOVERNANCE
          </p>

        </div>

        <nav aria-label="Footer">
          <p className="eyebrow">Sections</p>
          <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-7 text-xs text-muted-foreground md:flex-row md:items-center">
        <p className="font-mono">© {new Date().getFullYear()} Tokenomix. All rights reserved.</p>
        <p className="max-w-lg">
          Nothing on this site is investment advice or a promise of returns.
        </p>
      </div>
    </div>
  </footer>
);
