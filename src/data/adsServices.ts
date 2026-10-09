import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroKitchen2 from "@/assets/hero-kitchen2.jpg";
import galleryCloset from "@/assets/gallery-closet.jpg";
import galleryWardrobe from "@/assets/gallery-wardrobe.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryShelves from "@/assets/gallery-shelves.jpg";

export type AdsService = {
  slug: string;
  /** Krótka nazwa usługi, np. "Kuchnie na wymiar" */
  name: string;
  /** Nagłówek H1 bez miasta, np. "Kuchnie na wymiar" */
  h1: string;
  /** Podtytuł pod H1 */
  subtitle: string;
  image: string;
  imageAlt: string;
  /** Punkty przewagi — pokazywane jako lista z checkmarkami */
  benefits: string[];
  /** 3 kroki procesu */
  steps: { title: string; text: string }[];
  /** Krótkie Q&A na landingu (bez JSON-LD — strony są noindex) */
  faq: { q: string; a: string }[];
  /** Widełki cenowe / informacja o wycenie */
  priceNote: string;
};

export const adsServices: AdsService[] = [
  {
    slug: "kuchnie-na-wymiar",
    name: "Kuchnie na wymiar",
    h1: "Kuchnie na wymiar",
    subtitle:
      "Projekt 3D, bezpłatny pomiar i wycena w 48 h. Produkcja we własnej pracowni, montaż bez podwykonawców.",
    image: heroKitchen,
    imageAlt: "Kuchnia na wymiar z wyspą — fronty lakierowane, blat kamienny",
    benefits: [
      "Bezpłatny pomiar u Ciebie i projekt 3D przed decyzją",
      "Okucia Blum i Hettich z cichym domykiem w standardzie",
      "Blaty kamienne, spiek kwarcowy lub laminat — do wyboru",
      "Realizacja 4–6 tygodni od podpisania umowy",
      "Pisemna gwarancja na meble i montaż",
    ],
    steps: [
      { title: "Telefon lub WhatsApp", text: "Krótka rozmowa o metrażu, stylu i budżecie. Umawiamy termin pomiaru." },
      { title: "Pomiar i projekt 3D", text: "Przyjeżdżamy, mierzymy, projektujemy. Wycena bez ukrytych kosztów." },
      { title: "Produkcja i montaż", text: "Robimy u siebie, montujemy sami. Sprzątamy po sobie." },
    ],
    faq: [
      { q: "Ile kosztuje kuchnia na wymiar?", a: "Najczęściej 12–30 tys. zł za komplet zabudowy z blatem i okuciami. Dokładną cenę podajemy po pomiarze — za darmo." },
      { q: "Jak długo trwa realizacja?", a: "Standardowo 4–6 tygodni od podpisania umowy i wpłaty zaliczki." },
      { q: "Czy pomiar jest płatny?", a: "Nie. Pomiar, projekt 3D i wycena są bezpłatne i niezobowiązujące." },
    ],
    priceNote: "Kuchnie zwykle od 12 000 zł — ostateczna cena po bezpłatnym pomiarze.",
  },
  {
    slug: "szafy-wnekowe",
    name: "Szafy wnękowe",
    h1: "Szafy wnękowe na wymiar",
    subtitle:
      "Wykorzystujemy każdy centymetr wnęki — także pod skosami. Drzwi przesuwne, składane lub uchylne.",
    image: galleryCloset,
    imageAlt: "Szafa wnękowa na wymiar z drzwiami przesuwnymi",
    benefits: [
      "Idealne dopasowanie do wnęki, także przy krzywych ścianach",
      "Drzwi przesuwne z cichym domykiem lub fronty uchylne",
      "Oświetlenie LED i wysuwane wieszaki w opcji",
      "Wnętrze projektowane pod Twoje rzeczy, nie pod katalog",
      "Montaż w jeden dzień",
    ],
    steps: [
      { title: "Kontakt", text: "Dzwonisz lub piszesz na WhatsApp — odpisujemy tego samego dnia." },
      { title: "Pomiar wnęki", text: "Sprawdzamy piony, skosy i listwy. Projektujemy układ wnętrza." },
      { title: "Montaż", text: "Szafa trafia do Ciebie gotowa — składamy i regulujemy na miejscu." },
    ],
    faq: [
      { q: "Ile kosztuje szafa wnękowa?", a: "Zwykle 3–9 tys. zł w zależności od szerokości, frontów i wyposażenia wnętrza." },
      { q: "Czy robicie szafy pod skosy?", a: "Tak, poddasza i skosy to nasza codzienność — projektujemy je indywidualnie." },
      { q: "Jaki jest czas oczekiwania?", a: "Zazwyczaj 3–5 tygodni od akceptacji projektu." },
    ],
    priceNote: "Szafy wnękowe zwykle od 3 000 zł — wycena po bezpłatnym pomiarze.",
  },
  {
    slug: "garderoby",
    name: "Garderoby",
    h1: "Garderoby na wymiar",
    subtitle:
      "Otwarte systemy lub pełna zabudowa. Porządek dopasowany do Twojej garderoby, nie odwrotnie.",
    image: galleryWardrobe,
    imageAlt: "Garderoba na wymiar z otwartymi półkami i oświetleniem LED",
    benefits: [
      "Projekt układu: drążki, półki, szuflady, buty, walizki",
      "Oświetlenie LED z czujnikiem ruchu",
      "Systemy otwarte (tańsze) lub pełna zabudowa z frontami",
      "Wykończenia: płyta, fornir, lakier, szkło lacobel",
      "Gwarancja pisemna",
    ],
    steps: [
      { title: "Rozmowa", text: "Ustalamy, co ma się zmieścić i jaki masz budżet." },
      { title: "Projekt 3D", text: "Pokazujemy wizualizację i podajemy cenę końcową." },
      { title: "Realizacja", text: "Produkcja w naszej pracowni, montaż bez bałaganu." },
    ],
    faq: [
      { q: "Ile kosztuje garderoba?", a: "System otwarty od ok. 4 tys. zł, pełna zabudowa z frontami zwykle 8–15 tys. zł." },
      { q: "Czy zaprojektujecie małą garderobę 2 m²?", a: "Tak — im mniejsza przestrzeń, tym ważniejszy dobry projekt." },
      { q: "Czy da się połączyć garderobę z pralnią?", a: "Tak, często robimy zabudowy z miejscem na pralkę i suszarkę." },
    ],
    priceNote: "Garderoby zwykle od 4 000 zł — bezpłatny pomiar i projekt.",
  },
  {
    slug: "meble-lazienkowe",
    name: "Meble łazienkowe",
    h1: "Meble łazienkowe na wymiar",
    subtitle:
      "Szafki podumywalkowe, słupki i lustra LED z materiałów odpornych na wilgoć.",
    image: galleryBathroom,
    imageAlt: "Meble łazienkowe na wymiar — szafka podumywalkowa i lustro LED",
    benefits: [
      "Materiały wodoodporne: MDF lakierowany, HPL, akryl",
      "Szafki podwieszane — łatwe sprzątanie",
      "Lustra z podświetleniem i podgrzewaniem",
      "Dopasowanie do nietypowych umywalek i blatów",
      "Montaż z uwzględnieniem instalacji",
    ],
    steps: [
      { title: "Zgłoszenie", text: "Wysyłasz zdjęcie łazienki lub dzwonisz — reagujemy od razu." },
      { title: "Pomiar", text: "Sprawdzamy podejścia wod-kan i wymiary. Proponujemy układ." },
      { title: "Montaż", text: "Dostarczamy i montujemy gotowe meble." },
    ],
    faq: [
      { q: "Ile kosztuje zabudowa łazienki?", a: "Najczęściej 2,5–7 tys. zł — zależnie od liczby szafek i frontów." },
      { q: "Czy meble wytrzymają wilgoć?", a: "Tak, używamy płyt wodoodpornych i lakierów przystosowanych do łazienek." },
      { q: "Czy robicie tylko szafkę pod umywalkę?", a: "Tak, przyjmujemy również małe, pojedyncze zlecenia." },
    ],
    priceNote: "Meble łazienkowe zwykle od 2 500 zł — wycena bezpłatna.",
  },
  {
    slug: "zabudowy-salonowe",
    name: "Zabudowy salonowe",
    h1: "Zabudowy salonowe i meble RTV",
    subtitle:
      "Pełna ściana z biblioteczką, szafkami i miejscem na TV — zaprojektowana pod Twój salon.",
    image: galleryShelves,
    imageAlt: "Zabudowa salonowa na wymiar z biblioteczką i szafkami push-to-open",
    benefits: [
      "Zabudowa od ściany do ściany, bez szczelin i przerw",
      "Fronty push-to-open bez uchwytów",
      "Ukryte prowadzenie kabli i zasilania pod TV",
      "Podświetlenie LED półek i wnęk",
      "Dopasowanie do koloru podłogi i drzwi",
    ],
    steps: [
      { title: "Kontakt", text: "Opowiadasz o pomyśle, my podpowiadamy rozwiązania." },
      { title: "Projekt i wycena", text: "Wizualizacja 3D oraz cena bez ukrytych kosztów." },
      { title: "Montaż", text: "Realizacja w 4–6 tygodni, montaż w jeden dzień." },
    ],
    faq: [
      { q: "Ile kosztuje zabudowa salonu?", a: "Zwykle 5–15 tys. zł, zależnie od szerokości ściany i rodzaju frontów." },
      { q: "Czy ukryjecie kable od TV?", a: "Tak, planujemy przepusty i kanały kablowe już na etapie projektu." },
      { q: "Czy dopasujecie kolor do podłogi?", a: "Tak, dobieramy dekory i lakiery pod istniejące wykończenia." },
    ],
    priceNote: "Zabudowy salonowe zwykle od 5 000 zł — pomiar gratis.",
  },
  {
    slug: "meble-biurowe",
    name: "Meble biurowe",
    h1: "Meble biurowe i gabinetowe na wymiar",
    subtitle:
      "Biurka, zabudowy gabinetów, recepcje i regały — dla firm i pracy zdalnej w domu.",
    image: heroKitchen2,
    imageAlt: "Meble biurowe na wymiar — biurko i zabudowa gabinetu",
    benefits: [
      "Biurka z przepustami i ukrytym zasilaniem",
      "Zabudowy gabinetów, recepcji i poczekalni",
      "Rozwiązania do domowego home office w małych metrażach",
      "Faktura VAT dla firm",
      "Terminy dopasowane do pracy biura",
    ],
    steps: [
      { title: "Zapytanie", text: "Telefon, WhatsApp lub e-mail — ustalamy zakres." },
      { title: "Pomiar i projekt", text: "Przyjeżdżamy na miejsce, projektujemy i wyceniamy." },
      { title: "Realizacja", text: "Montaż także poza godzinami pracy biura." },
    ],
    faq: [
      { q: "Czy wystawiacie fakturę VAT?", a: "Tak, obsługujemy firmy i wystawiamy faktury." },
      { q: "Czy zrobicie jedno biurko?", a: "Tak, realizujemy zarówno pojedyncze meble, jak i całe biura." },
      { q: "Jaki jest czas realizacji dla firm?", a: "Zwykle 3–6 tygodni, przy pilnych zleceniach ustalamy indywidualnie." },
    ],
    priceNote: "Meble biurowe zwykle od 2 000 zł — wycena bezpłatna, faktura VAT.",
  },
  {
    slug: "projektant-wnetrz",
    name: "Projektant wnętrz i meble",
    h1: "Projektant wnętrz i meble na wymiar",
    subtitle:
      "Projekt zabudowy całego domu lub mieszkania i wykonanie w jednym miejscu — bez pośredników między projektantem a stolarzem.",
    image: heroKitchen2,
    imageAlt: "Projekt wnętrza i zabudowa meblowa na wymiar — kuchnia, salon, garderoba",
    benefits: [
      "Projekt 3D wszystkich zabudów: kuchnia, szafy, garderoba, łazienka, salon",
      "Projektujemy i produkujemy sami — projekt jest od razu wykonalny i wyceniony",
      "Spójne materiały i kolory w całym domu",
      "Jedna osoba kontaktowa od pomiaru do montażu",
      "Pisemna gwarancja na meble i montaż",
    ],
    steps: [
      { title: "Rozmowa", text: "Opowiadasz o domu lub mieszkaniu, stylu i budżecie." },
      { title: "Pomiar i projekt 3D", text: "Projektujemy zabudowy dla wszystkich pomieszczeń i podajemy cenę." },
      { title: "Produkcja i montaż", text: "Wykonujemy w pracowni i montujemy etapami lub za jednym razem." },
    ],
    faq: [
      { q: "Czy muszę mieć osobnego architekta wnętrz?", a: "Nie. W zakresie zabudów meblowych projekt robimy sami i od razu go wykonujemy — oszczędzasz czas i koszt pośrednika." },
      { q: "Czy możecie wykonać projekt od mojego architekta?", a: "Tak, realizujemy też gotowe projekty wnętrz i pomagamy dopracować szczegóły techniczne." },
      { q: "Czy projekt jest płatny?", a: "Pomiar, projekt 3D i wycena zabudów są bezpłatne i niezobowiązujące." },
    ],
    priceNote: "Projekt zabudów gratis przy realizacji — wycena po bezpłatnym pomiarze.",
  },
  {
    slug: "zabudowa-meblowa-domu",
    name: "Zabudowa meblowa domu",
    h1: "Kompleksowa zabudowa meblowa domu",
    subtitle:
      "Kuchnia, szafy, garderoba, łazienka i salon w jednym zleceniu — jeden projekt, jedna wycena, jeden zespół.",
    image: heroKitchen,
    imageAlt: "Kompleksowa zabudowa meblowa domu na wymiar",
    benefits: [
      "Wszystkie meble w domu zaprojektowane spójnie",
      "Jedna umowa i harmonogram dla całego wnętrza",
      "Korzystniejsza cena przy większym zakresie",
      "Okucia Blum i Hettich w standardzie",
      "Montaż własną ekipą, bez podwykonawców",
    ],
    steps: [
      { title: "Kontakt", text: "Telefon lub WhatsApp — ustalamy zakres i termin pomiaru." },
      { title: "Projekt całości", text: "Projekt 3D wszystkich pomieszczeń i wycena bez ukrytych kosztów." },
      { title: "Realizacja", text: "Produkcja i montaż według ustalonego harmonogramu." },
    ],
    faq: [
      { q: "Ile kosztuje zabudowa całego domu?", a: "Zależy od liczby pomieszczeń i materiałów — dokładną cenę podajemy po bezpłatnym pomiarze." },
      { q: "Czy montaż może być etapami?", a: "Tak, dopasowujemy harmonogram do postępu wykończenia domu." },
      { q: "Czy pomożecie dobrać materiały?", a: "Tak, pokazujemy próbki i dobieramy dekory pod podłogi, drzwi i ściany." },
    ],
    priceNote: "Przy zabudowie kilku pomieszczeń — korzystniejsza wycena. Pomiar gratis.",
  },
];

export const getAdsService = (slug?: string) =>
  adsServices.find((s) => s.slug === slug);
