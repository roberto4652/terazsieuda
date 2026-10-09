import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Ile kosztuje kuchnia na wymiar w Gdyni?",
    a: "Cena zależy od materiałów (płyta laminowana, fornir, lakier), okuć oraz stopnia skomplikowania zabudowy. Każdą wycenę przygotowujemy indywidualnie po bezpłatnym pomiarze u klienta w Gdyni i okolicach do 30 km.",
  },
  {
    q: "Jak długo trwa realizacja mebli na wymiar?",
    a: "Standardowy czas realizacji to 4–8 tygodni od zaakceptowania projektu i wpłaty zaliczki. Termin zależy od zakresu prac, dostępności materiałów i okuć oraz aktualnego obłożenia pracowni.",
  },
  {
    q: "Czy dojeżdżacie poza Gdynię?",
    a: "Tak. Obsługujemy Gdynię i całe Trójmiasto (Sopot, Gdańsk) oraz okolice w promieniu do 30 km — m.in. Rumię, Redę, Wejherowo, Kosakowo, Puck i Żukowo. Pomiar i konsultacja u klienta są bezpłatne.",
  },
  {
    q: "Jak wygląda proces zamówienia?",
    a: "1. Kontakt telefoniczny lub przez WhatsApp. 2. Bezpłatny pomiar i rozmowa o potrzebach. 3. Projekt z wizualizacją 3D i wycena. 4. Zaliczka i zamówienie materiałów. 5. Produkcja w pracowni. 6. Montaż u klienta.",
  },
  {
    q: "Jakich materiałów używacie?",
    a: "Pracujemy na sprawdzonych płytach (Kronospan, Egger, Pfleiderer), frontach lakierowanych, fornirowanych i MDF, blatach laminowanych, kompozytowych i drewnianych. Okucia — Blum, Hettich, GTV.",
  },
  {
    q: "Czy udzielacie gwarancji?",
    a: "Tak. Na wykonane meble udzielamy gwarancji na konstrukcję i montaż. Osobne warunki gwarancji obejmują okucia i mechanizmy (bezpośrednio od producenta, np. Blum — dożywotnia).",
  },
  {
    q: "Czy przygotowujecie projekt i wizualizację?",
    a: "Tak, każde zamówienie poprzedzamy projektem i wizualizacją 3D, dzięki czemu jeszcze przed produkcją widzisz jak meble będą wyglądać w Twoim wnętrzu.",
  },
];

const FaqSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    script.id = "faq-jsonld";
    document.head.appendChild(script);
    return () => {
      document.getElementById("faq-jsonld")?.remove();
    };
  }, []);

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            FAQ
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Najczęstsze pytania
          </h2>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto" />
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
