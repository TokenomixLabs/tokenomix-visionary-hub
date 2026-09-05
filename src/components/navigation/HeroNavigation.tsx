import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Architecture", id: "architecture" },
  { label: "Incentives", id: "incentives" },
  { label: "Ownership", id: "ownership" },
  { label: "Intelligent Economies", id: "intelligent-economies" },
  { label: "Research", id: "research" },
  { label: "Contact", id: "contact" },
];

export const HeroNavigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-500 ${
        scrolled || open ? "border-b border-border/60 bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container mx-auto flex items-center justify-between py-4"
      >
        <a href="#top" className="flex items-center" aria-label="Tokenomix home">
          <img
            src="/tokenomix-logo.png"
            alt="Tokenomix"
            className="h-12 w-auto md:h-16"
          />
        </a>

        <div className="hidden items-center lg:flex xl:gap-4 3xl:gap-6">
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="rounded-sm px-2.5 py-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-300 hover:text-foreground xl:px-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden min-h-[2.5rem] items-center rounded-sm border border-foreground/25 px-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:border-accent/70 hover:bg-accent/5 xl:inline-flex"
          >
            Request access
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-border/70 text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-border/60 lg:hidden">
          <ul className="container mx-auto flex flex-col py-2">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center border-b border-border/40 py-4 font-display text-base text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-[2.75rem] items-center rounded-sm border border-foreground/25 px-5 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-foreground"
              >
                Request access
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
