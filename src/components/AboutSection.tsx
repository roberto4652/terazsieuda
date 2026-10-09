const AboutSection = () => {
  return (
    <section id="o-nas" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            O nas
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-bold text-foreground leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Tworzymy z pasją
            <br />
            i&nbsp;precyzją
          </h2>
          <div className="mt-2 w-16 h-1 bg-accent" />
        </div>

        <div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Tworzymy meble na wymiar, dopasowane do potrzeb i przestrzeni klienta.
            Każdy projekt realizujemy indywidualnie, z&nbsp;dbałością o&nbsp;detale
            i&nbsp;wysoką jakość wykonania.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            Od pomysłu, przez projekt, aż po montaż — dbamy o każdy etap realizacji,
            aby efekt końcowy spełnił Twoje oczekiwania.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
