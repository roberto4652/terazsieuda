const Footer = () => {
  return (
    <footer className="bg-foreground py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p
            className="text-primary-foreground font-bold text-xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Meble Na Wymiar
          </p>
          <p className="text-primary-foreground/50 text-sm mt-1">
            Idealnie na wymiar – Trójmiasto i okolice
          </p>
        </div>
        <p className="text-primary-foreground/30 text-xs uppercase tracking-wider">
          © {new Date().getFullYear()} Meble Na Wymiar. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
