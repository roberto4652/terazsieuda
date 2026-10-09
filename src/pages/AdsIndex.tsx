import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { adsServices } from "@/data/adsServices";
import { cities } from "@/data/cities";
import Footer from "@/components/Footer";

const AdsIndex = () => {
  useEffect(() => {
    document.title = "Landingi Google Ads — Idealnie na Wymiar";
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "noindex, nofollow";
    return () => {
      robots?.parentElement?.removeChild(robots);
    };
  }, []);

  return (
    <main>
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" /> Strona główna
          </Link>
          <h1
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Strony docelowe pod Google Ads
          </h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            {adsServices.length} usług × {cities.length} miast = {adsServices.length * cities.length} adresów.
            Każdy link wklej jako &bdquo;Final URL&rdquo; w odpowiedniej grupie reklam. Strony są ustawione na
            noindex, więc nie konkurują z podstronami SEO.
          </p>

          <div className="space-y-12">
            {adsServices.map((s) => (
              <div key={s.slug}>
                <h2
                  className="text-xl md:text-2xl font-bold text-foreground mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.name}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {cities.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/oferta/${s.slug}/${c.slug}`}
                      className="px-4 py-2 border border-border rounded-full text-sm text-foreground hover:bg-accent transition-colors"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AdsIndex;
