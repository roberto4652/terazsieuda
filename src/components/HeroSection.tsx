import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";

import heroImage1 from "@/assets/hero-kitchen.jpg";
import heroImage2 from "@/assets/hero-kitchen2.jpg";
import heroImage3 from "@/assets/hero-kitchen3.jpg";
import heroImage4 from "@/assets/hero-kitchen4.jpg";

const slides = [
  {
    src: heroImage1,
    alt: "Kuchnia na wymiar – jasne drewno",
    heading: "Czas na zmiany? Odmień swoje wnętrze",
    sub: "Dodaj świeżość i\u00a0poczuj radość z\u00a0aranżacji przestrzeni, w\u00a0której żyjesz.",
  },
  {
    src: heroImage4,
    alt: "Kuchnia na wymiar – styl skandynawski",
    heading: "Nadaj ciepło i\u00a0nowoczesny styl swojemu wnętrzu",
    sub: "Łączymy estetykę z\u00a0funkcjonalnością, tworząc przestrzeń dopasowaną do\u00a0Ciebie.",
  },
  {
    src: heroImage2,
    alt: "Kuchnia na wymiar – beż i marmur",
    heading: "Projekty dopasowane do\u00a0Twoich potrzeb",
    sub: "Dostosowujemy każdy detal do\u00a0indywidualnych wymagań, łącząc design z\u00a0praktycznością.",
  },
  {
    src: heroImage3,
    alt: "Kuchnia na wymiar – ciemne drewno",
    heading: "Meble modulowe nie spełniają Twoich oczekiwań?",
    sub: "Każdy element powstaje z\u00a0dbałością o\u00a0detale — solidnie, estetycznie i\u00a0bez kompromisów.",
  },
];

const HeroSection = ({ autoplay = true }: { autoplay?: boolean }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-play: only starts when autoplay prop is true
  useEffect(() => {
    if (!emblaApi || !autoplay) return;

    let interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6500);

    const resetTimer = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 6500);
    };

    emblaApi.on("select", resetTimer);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", resetTimer);
    };
  }, [emblaApi, autoplay]);

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0 cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 relative h-[85vh]">
              <img
                src={slide.src}
                alt={slide.alt}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/10" />
            </div>
          ))}
        </div>
      </div>


      {/* Content overlay */}
      <div className="relative z-10 flex items-end min-h-[85vh] pointer-events-none">
        <div className="w-full max-w-7xl mx-auto px-6 pb-16 md:pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] max-w-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {slides[selectedIndex].heading}
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-primary-foreground max-w-xl leading-relaxed font-light drop-shadow-sm">
                {slides[selectedIndex].sub}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="#realizacje"
              className="pointer-events-auto inline-block px-8 py-4 bg-primary-foreground text-foreground font-semibold text-sm uppercase tracking-wider hover:bg-accent transition-colors"
            >
              Zobacz więcej →
            </a>
            <a
              href="#kontakt"
              className="pointer-events-auto inline-block px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors"
            >
              Kontakt
            </a>
          </div>

          {/* Slide indicators */}
          <div className="mt-8 flex gap-1 pointer-events-auto justify-center w-full">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className="min-w-11 min-h-11 flex items-center justify-center"
                aria-label={`Slajd ${i + 1}`}
              >
                <span
                  className={`block rounded-full transition-all duration-500 ${
                    i === selectedIndex
                      ? "w-3 h-3 bg-primary-foreground"
                      : "w-2.5 h-2.5 bg-primary-foreground/50 hover:bg-primary-foreground/70"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
