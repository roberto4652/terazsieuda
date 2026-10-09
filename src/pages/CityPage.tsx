import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, MapPin, CheckCircle2, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPhone from "@/components/FloatingPhone";
import OfferSection from "@/components/OfferSection";
import GallerySection from "@/components/GallerySection";
import WhyUsSection from "@/components/WhyUsSection";
import FaqSection from "@/components/FaqSection";
import { cities } from "@/data/cities";
import { adsServices } from "@/data/adsServices";

const CityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = cities.find((c) => c.slug === slug);

  useEffect(() => {
    if (!city) return;
    const title = `Twoja Kuchnia – Idealnie na Wymiar | Meble na wymiar ${city.nameLocative}`;
    const desc = `Meble na wymiar ${city.nameLocative}. Kuchnie, szafy wnękowe, garderoby, meble łazienkowe. Bezpłatny pomiar, projekt 3D i wycena. Stolarz z Gdyni.`;
    document.title = title;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setMeta("description", desc);
    setMeta("og:title", title, "property");
    setMeta("og:description", desc, "property");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://idealnienawymiar.pl/meble-na-wymiar/${city.slug}`;

    return () => {
      canonical!.href = "https://idealnienawymiar.pl/";
    };
  }, [city]);

  if (!city) return <Navigate to="/" replace />;

  return (
    <main className="scroll-smooth">
      <Navbar />

      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Strona główna
          </Link>

          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            <span>
              {city.name}
              {city.distanceKm > 0 && ` · ok. ${city.distanceKm} km od Gdyni`}
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold text-foreground leading-[1.05]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Meble na wymiar {city.nameLocative}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {city.description}
          </p>

          <ul className="mt-8 space-y-3">
            {city.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground">
                <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="tel:+48666686691"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-foreground/90 transition-colors rounded-full"
            >
              <Phone className="w-4 h-4" /> 666 686 691
            </a>
            <a
              href="#faq"
              className="inline-flex items-center px-6 py-3 border-2 border-foreground text-foreground font-semibold text-sm uppercase tracking-wider hover:bg-foreground/5 transition-colors rounded-full"
            >
              Zobacz FAQ
            </a>
          </div>
        </div>
      </section>

      {/* Rozbudowana treść SEO */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto space-y-12">
          {city.sections.map((s, i) => (
            <article key={i}>
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {s.heading}
              </h2>
              <div className="space-y-4">
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}

          {city.neighborhoods.length > 0 && (
            <article>
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Dzielnice i osiedla — {city.name}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                Meble na wymiar {city.nameLocative} montujemy między innymi w dzielnicach:
              </p>
              <div className="flex flex-wrap gap-2">
                {city.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="px-3 py-1 border border-border rounded-full text-sm text-foreground bg-background"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </article>
          )}
        </div>
      </section>

      <OfferSection />
      <GallerySection />
      <WhyUsSection />
      <FaqSection />

      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Obsługujemy również
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/meble-na-wymiar/${c.slug}`}
                  className="px-4 py-2 border border-border rounded-full text-sm text-foreground hover:bg-accent transition-colors"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Nasze usługi {city.nameLocative}
          </h2>
          <div className="flex flex-wrap gap-2">
            {adsServices.map((s) => (
              <Link key={s.slug} to={`/uslugi/${s.slug}/${city.slug}`} className="px-4 py-2 border border-border rounded-full text-sm text-foreground hover:bg-accent">
                {s.name} {city.nameLocative}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <FloatingPhone />
    </main>
  );
};

export default CityPage;
