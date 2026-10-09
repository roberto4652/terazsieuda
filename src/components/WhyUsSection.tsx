import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, Sparkles, Clock } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Indywidualne podejście",
    desc: "Każdy projekt dopasowujemy do potrzeb i stylu klienta.",
    number: "01",
  },
  {
    icon: ShieldCheck,
    title: "Solidne materiały",
    desc: "Używamy sprawdzonych, trwałych materiałów najwyższej jakości.",
    number: "02",
  },
  {
    icon: Sparkles,
    title: "Dokładność i estetyka",
    desc: "Dbamy o każdy detal, aby efekt końcowy był perfekcyjny.",
    number: "03",
  },
  {
    icon: Clock,
    title: "Terminowość",
    desc: "Realizujemy projekty w ustalonym terminie, bez zbędnych opóźnień.",
    number: "04",
  },
];

const WhyUsSection = () => {
  return (
    <section id="dlaczego-warto" className="section-padding bg-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 font-semibold">
            Dlaczego warto
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-bold text-primary-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Postaw na jakość
          </h2>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <span className="text-4xl font-bold text-primary-foreground/15 block mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                {item.number}
              </span>
              <item.icon className="w-7 h-7 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold text-primary-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
