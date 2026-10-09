import { UtensilsCrossed, DoorOpen, Bath, Puzzle } from "lucide-react";

const offers = [
  {
    icon: UtensilsCrossed,
    title: "Kuchnie na wymiar",
    desc: "Funkcjonalne i piękne zabudowy kuchenne, idealnie dopasowane do Twojej przestrzeni.",
  },
  {
    icon: DoorOpen,
    title: "Szafy wnękowe i garderoby",
    desc: "Maksymalne wykorzystanie przestrzeni dzięki szafom dopasowanym do każdej wnęki.",
  },
  {
    icon: Bath,
    title: "Meble łazienkowe",
    desc: "Trwałe i odporne na wilgoć meble, które nadadzą Twojej łazience elegancki charakter.",
  },
  {
    icon: Puzzle,
    title: "Zabudowy niestandardowe",
    desc: "Nietypowe rozwiązania meblowe na skosy, poddasza i trudne przestrzenie.",
  },
];

const OfferSection = () => {
  return (
    <section id="oferta" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            Oferta
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Wykonamy dla Ciebie
          </h2>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((item, i) => (
            <div
              key={item.title}
              className="group bg-background p-8 hover:shadow-lg transition-all duration-300 border border-border"
            >
              <item.icon className="w-8 h-8 text-foreground mb-5 group-hover:text-muted-foreground transition-colors" />
              <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
