import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import ContactModal from "./ContactModal";

const ContactSection = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactMode, setContactMode] = useState<"phone" | "mail">("mail");

  return (
    <>
      <section id="kontakt" className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
              Kontakt
            </span>
            <h2
              className="mt-4 text-3xl md:text-5xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Skontaktuj się
            </h2>
            <div className="mt-4 w-16 h-1 bg-accent mx-auto" />
            <p className="mt-6 text-muted-foreground">
              Chętnie porozmawiamy o Twoim projekcie.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <button
              onClick={() => { setContactMode("mail"); setContactOpen(true); }}
              className="group flex flex-col items-center gap-3 p-8 bg-background border border-border hover:shadow-lg transition-all cursor-pointer"
            >
              <Mail className="w-6 h-6 text-foreground" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Napisz</span>
              <span className="text-foreground font-bold">Wyślij wiadomość</span>
            </button>
            <a href="mailto:biuro@idealnienawymiar.pl" className="group flex flex-col items-center gap-3 p-8 bg-background border border-border hover:shadow-lg transition-all cursor-pointer">
              <Mail className="w-6 h-6 text-foreground" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">E-mail</span>
              <span className="text-foreground font-bold group-hover:underline">biuro@idealnienawymiar.pl</span>
            </a>
            <div className="flex flex-col items-center gap-3 p-8 bg-background border border-border">
              <MapPin className="w-6 h-6 text-foreground" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Obszar</span>
              <span className="text-foreground font-bold">Trójmiasto i okolice</span>
            </div>
          </motion.div>
        </div>
      </section>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} mode={contactMode} />
    </>
  );
};

export default ContactSection;
