import { motion } from "framer-motion";
import galleryWardrobe from "@/assets/gallery-wardrobe.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryKitchen2 from "@/assets/gallery-kitchen2.jpg";
import galleryCloset from "@/assets/gallery-closet.jpg";
import galleryShelves from "@/assets/gallery-shelves.jpg";
import galleryDining from "@/assets/gallery-dining.jpg";

const images = [
  {
    src: galleryKitchen2,
    alt: "Kuchnia na wymiar Gdynia — ciemne fronty drewniane z wyspą, blat kamienny, meble wykonane przez stolarza z Trójmiasta",
    label: "Kuchnia",
  },
  {
    src: galleryWardrobe,
    alt: "Szafa wnękowa na wymiar Gdynia z drzwiami przesuwnymi, jasne fronty, garderoba do sypialni",
    label: "Szafa wnękowa",
  },
  {
    src: galleryBathroom,
    alt: "Meble łazienkowe na wymiar Sopot — szafka podumywalkowa z frontami lakierowanymi, odporna na wilgoć",
    label: "Łazienka",
  },
  {
    src: galleryCloset,
    alt: "Garderoba na wymiar Gdańsk — otwarta zabudowa z półkami, wieszakami i szufladami, oświetlenie LED",
    label: "Garderoba",
  },
  {
    src: galleryShelves,
    alt: "Zabudowa meblowa do salonu na wymiar — biblioteczka z półkami i frontami push-to-open, Trójmiasto",
    label: "Zabudowa",
  },
  {
    src: galleryDining,
    alt: "Kuchnia na wymiar z wyspą — nowoczesna zabudowa bezuchwytowa, blat spiek kwarcowy, projekt stolarski Gdynia",
    label: "Kuchnia z wyspą",
  },
];

const GallerySection = () => {
  return (
    <section id="realizacje" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            Galeria
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Meble, które tworzymy z myślą o Tobie
          </h2>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-end">
                <span className="text-primary-foreground text-sm font-semibold uppercase tracking-wider px-6 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
