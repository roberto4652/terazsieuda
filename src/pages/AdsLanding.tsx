import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { CheckCircle2, Phone, MessageCircle, MapPin, Star, ShieldCheck, Clock } from "lucide-react";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import { getAdsService, adsServices } from "@/data/adsServices";
import { cities } from "@/data/cities";

const PHONE = "666 686 691";
const TEL = "tel:+48666686691";
const WA = "https://wa.me/48666686691";

const AdsLanding = ({ seo = false }: { seo?: boolean }) => {
  const { service: serviceSlug, city: citySlug } = useParams<{ service: string; city: string }>();
  const service = getAdsService(serviceSlug);
  const city = cities.find((c) => c.slug === citySlug);

  useEffect(() => {
    if (!service || !city) return;
    const title = `${service.h1} ${city.nameLocative} — bezpłatny pomiar i wycena`;
    const desc = `${service.h1} ${city.nameLocative}. ${service.priceNote} Zadzwoń: ${PHONE}.`;
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setMeta("description", desc);
    // Strony reklamowe nie mają być indeksowane (duplikaty treści / ruch płatny)
    setMeta("robots", seo ? "index, follow" : "noindex, follow");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = seo
      ? `https://idealnienawymiar.pl/uslugi/${service.slug}/${city.slug}`
      : `https://idealnienawymiar.pl/oferta/${service.slug}/${city.slug}`;

    return () => {
      const robots = document.querySelector('meta[name="robots"]');
      robots?.parentElement?.removeChild(robots);
      if (canonical) canonical.href = "https://idealnienawymiar.pl/";
    };
  }, [service, city, seo]);

  if (!service || !city) return <Navigate to="/" replace />;

  const cta = (variant: "solid" | "outline" = "solid") => (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={TEL}
        className={`inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-colors min-h-[52px] ${
          variant === "solid"
            ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
      >
        <Phone className="w-4 h-4" /> Zadzwoń: {PHONE}
      </a>
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 font-semibold text-sm uppercase tracking-wider transition-colors min-h-[52px] ${
          variant === "solid"
            ? "border-foreground text-foreground hover:bg-foreground/5"
            : "border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
        }`}
      >
        <MessageCircle className="w-4 h-4" /> Napisz na WhatsApp
      </a>
    </div>
  );

  return (
    <main>
      {/* Minimalny pasek — bez nawigacji, żeby nie rozpraszać ruchu z reklam */}
      <header className="border-b border-border bg-background">
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="text-sm font-bold uppercase tracking-[0.18em] text-foreground">
            Idealnie Na Wymiar
          </Link>
          <a
            href={TEL}
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground min-h-[44px]"
          >
            <Phone className="w-4 h-4" /> {PHONE}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <img
          src={service.image}
          alt={`${service.imageAlt} — ${city.name}`}
          width={1600}
          height={900}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
        <div className="relative max-w-5xl mx-auto px-5 py-16 md:py-24">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-foreground/90 font-semibold mb-4">
            <MapPin className="w-4 h-4" /> {city.name}
            {city.distanceKm > 0 && ` · ok. ${city.distanceKm} km od Gdyni`}
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground leading-[1.1] max-w-2xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {service.h1} {city.nameLocative}
          </h1>
          <p className="mt-5 text-base md:text-lg text-primary-foreground/90 max-w-xl leading-relaxed">
            {service.subtitle}
          </p>
          <div className="mt-8">{cta("outline")}</div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/90">
            <span className="inline-flex items-center gap-2"><Star className="w-4 h-4" /> Pomiar i projekt 3D gratis</span>
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> Realizacja 4–6 tygodni</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Pisemna gwarancja</span>
          </div>
        </div>
      </section>

      {/* KORZYŚCI */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Dlaczego {city.name} wybiera naszą pracownię
            </h2>
            <ul className="space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-3xl p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground font-semibold mb-3">
              Wycena
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">{service.priceNote}</p>
            <p className="text-muted-foreground mb-6">
              Obsługujemy {city.name}
              {city.neighborhoods.length > 0 && ` i okolice: ${city.neighborhoods.slice(0, 6).join(", ")}`}.
              Dojazd na pomiar bezpłatny.
            </p>
            {cta()}
          </div>
        </div>
      </section>

      {/* PROCES */}
      <section className="section-padding bg-card">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Jak to działa — 3 kroki
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.steps.map((s, i) => (
              <div key={s.title} className="bg-background border border-border rounded-3xl p-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-primary-foreground font-bold mb-4">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {seo && (
        <section className="section-padding bg-background">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold text-foreground mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {service.name} {city.nameLocative} i okolicy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{city.description}</p>
            <p className="text-muted-foreground leading-relaxed">
              Więcej o naszej pracy w tej okolicy:{" "}
              <Link to={`/meble-na-wymiar/${city.slug}`} className="text-foreground underline">
                meble na wymiar {city.nameLocative}
              </Link>
              .
            </p>
          </div>
        </section>
      )}

      <GallerySection />

      {/* FAQ krótkie */}
      <section className="section-padding bg-card">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Najczęstsze pytania — {city.name}
          </h2>
          <div className="space-y-5">
            {service.faq.map((f) => (
              <div key={f.q} className="bg-background border border-border rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-2">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {seo && (
        <section className="section-padding bg-background border-t border-border">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Inne usługi {city.nameLocative}
              </h2>
              <div className="flex flex-wrap gap-2">
                {adsServices.filter((s) => s.slug !== service.slug).map((s) => (
                  <Link key={s.slug} to={`/uslugi/${s.slug}/${city.slug}`} className="px-4 py-2 border border-border rounded-full text-sm text-foreground hover:bg-accent">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                {service.name} w innych miastach
              </h2>
              <div className="flex flex-wrap gap-2">
                {cities.filter((c) => c.slug !== city.slug).map((c) => (
                  <Link key={c.slug} to={`/uslugi/${service.slug}/${c.slug}`} className="px-4 py-2 border border-border rounded-full text-sm text-foreground hover:bg-accent">
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA końcowe */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {service.name} {city.nameLocative} — umów bezpłatny pomiar
          </h2>
          <p className="text-muted-foreground mb-8">
            Odpisujemy tego samego dnia. Bez zaliczek za projekt, bez zobowiązań.
          </p>
          <div className="flex justify-center">{cta()}</div>
        </div>
      </section>

      <Footer />

      {/* Sticky CTA mobilne */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-border bg-background/95 backdrop-blur px-4 py-3 flex gap-3">
        <a
          href={TEL}
          className="flex-1 inline-flex items-center justify-center gap-2 min-h-[48px] rounded-full bg-foreground text-primary-foreground font-semibold text-sm uppercase tracking-wider"
        >
          <Phone className="w-4 h-4" /> Zadzwoń
        </a>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 min-h-[48px] rounded-full border-2 border-foreground text-foreground font-semibold text-sm uppercase tracking-wider"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
      <div className="h-20 md:hidden" />
    </main>
  );
};

export default AdsLanding;
