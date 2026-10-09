import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone } from "lucide-react";
import ContactModal from "./ContactModal";

const navLinks = [
  { href: "#o-nas", label: "O nas" },
  { href: "#oferta", label: "Oferta" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#dlaczego-warto", label: "Dlaczego warto" },
  { href: "#kontakt", label: "Kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactMode, setContactMode] = useState<"phone" | "mail">("phone");
  const [topBarVisible, setTopBarVisible] = useState(true);
  const topBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const barH = topBarRef.current?.offsetHeight ?? 0;
      setTopBarVisible(window.scrollY < barH);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scrollable top contact bar — not fixed, always visible on load */}
      <div
        ref={topBarRef}
        className="bg-foreground text-primary-foreground px-6 py-3 flex items-center justify-center sm:justify-end"
        style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
      >
        <div className="flex items-center gap-4">
          <button
            onClick={() => { setContactMode("phone"); setContactOpen(true); }}
            className="flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-primary-foreground text-foreground hover:bg-primary-foreground/90 transition-colors active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span className="font-semibold text-sm">666 686 691</span>
          </button>
          <button
            onClick={() => { setContactMode("mail"); setContactOpen(true); }}
            className="flex items-center px-3 py-1.5 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/25 transition-all active:scale-95"
          >
            <span className="text-lg leading-none">✉️</span>
          </button>
        </div>
      </div>

      {/* Fixed main nav — sticks to top when scrolled past the contact bar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-border ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
          <a
            href="#"
            className="text-xl tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="font-bold text-foreground">Idealnie</span>
            <span className="font-normal text-muted-foreground ml-1.5">Na Wymiar</span>
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground min-w-11 min-h-11 flex items-center justify-center -mr-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-background border-t border-border">
            <ul className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} mode={contactMode} />
    </>
  );
};

export default Navbar;
