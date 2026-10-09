import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { cities } from "@/data/cities";

const CitiesSection = () => {
  return (
    <section id="obszar" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            Obszar działania
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Gdynia i okolice do 30 km
          </h2>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Realizujemy meble na wymiar w całym Trójmieście i okolicach. Kliknij miasto, aby zobaczyć szczegóły.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {cities.map((c) => (
            <Link
              key={c.slug}
              to={`/meble-na-wymiar/${c.slug}`}
              className="group flex items-center gap-3 px-5 py-4 border border-border rounded-2xl hover:bg-card hover:border-foreground/30 transition-all"
            >
              <MapPin className="w-4 h-4 text-muted-foreground group-hover:text-foreground shrink-0" />
              <div className="min-w-0">
                <div className="font-semibold text-foreground truncate">{c.name}</div>
                {c.distanceKm > 0 && (
                  <div className="text-xs text-muted-foreground">~{c.distanceKm} km</div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
