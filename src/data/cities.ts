export type CitySection = {
  heading: string;
  paragraphs: string[];
};

export type City = {
  slug: string;
  name: string;
  nameLocative: string; // "w Gdyni"
  distanceKm: number;
  description: string;
  highlights: string[];
  neighborhoods: string[];
  sections: CitySection[];
  keywords: string[];
};

const commonServices = (city: string): CitySection => ({
  heading: `Co realizujemy ${city}`,
  paragraphs: [
    `Kuchnie na wymiar ${city} — od klasycznych zabudów z frontami frezowanymi po nowoczesne kuchnie bezuchwytowe z wyspą. Projektujemy w 3D, dobieramy okucia Blum i Hettich, montujemy blaty kamienne, spieki kwarcowe i laminowane.`,
    `Szafy wnękowe ${city} i garderoby — drzwi przesuwne, składane lub uchylne, oświetlenie LED, wysuwane wieszaki, szuflady cichego domyku. Wykorzystujemy każdy centymetr wnęki, także pod skosami.`,
    `Meble łazienkowe ${city} — szafki podumywalkowe, słupki, lustra z podświetleniem, fronty odporne na wilgoć. Dobieramy materiały wodoodporne (MDF lakierowany, HPL, akryl).`,
    `Zabudowy salonowe, biblioteczki, meble RTV i dziecięce — pełna zabudowa ściany lub pojedyncze elementy dopasowane do wnętrza.`,
  ],
});

const commonProcess = (city: string): CitySection => ({
  heading: `Jak wygląda współpraca — ${city}`,
  paragraphs: [
    `Umawiamy bezpłatny pomiar u Ciebie ${city}. Przyjeżdżamy w dogodnym terminie, mierzymy pomieszczenie, rozmawiamy o funkcji, stylu i budżecie.`,
    `Przygotowujemy projekt 3D z wizualizacją oraz szczegółową wycenę — bez ukrytych kosztów. Nanosimy poprawki do momentu pełnej akceptacji.`,
    `Produkcja odbywa się w naszej pracowni pod Gdynią. Standardowy czas realizacji to 4–6 tygodni od podpisania umowy. Montaż wykonujemy sami — bez podwykonawców.`,
  ],
});

const commonWhy = (city: string): CitySection => ({
  heading: `Dlaczego warto wybrać nas ${city}`,
  paragraphs: [
    `Jesteśmy pracownią rodzinną z Gdyni — każde zlecenie prowadzi jedna osoba od pomiaru po montaż. Nie zlecamy pracy na zewnątrz.`,
    `Używamy sprawdzonych materiałów: płyt Egger, Kronospan, Pfleiderer, okuć Blum, Hettich, GTV. Na każdą realizację dajemy pisemną gwarancję.`,
    `Znamy trójmiejskie budownictwo — od kamienic w Śródmieściu, przez PRL-owskie bloki, po nowe osiedla deweloperskie. Wiemy jak radzić sobie z krzywymi ścianami i nietypowymi wnękami.`,
  ],
});

export const cities: City[] = [
  {
    slug: "gdynia",
    name: "Gdynia",
    nameLocative: "w Gdyni",
    distanceKm: 0,
    description:
      "Nasza pracownia stolarska działa w Gdyni. Projektujemy i wykonujemy meble na wymiar dla mieszkań na Chwarznie, Witominie, Karwinach, Redłowie, Orłowie oraz w centrum miasta.",
    highlights: [
      "Bezpłatny pomiar i wycena na terenie całej Gdyni",
      "Realizacje w mieszkaniach deweloperskich i kamienicach",
      "Zabudowy pod skosy na poddaszach domów jednorodzinnych",
    ],
    neighborhoods: [
      "Chwarzno", "Witomino", "Karwiny", "Dąbrowa", "Redłowo", "Orłowo",
      "Śródmieście", "Wzgórze Św. Maksymiliana", "Mały Kack", "Wielki Kack", "Cisowa", "Pogórze",
    ],
    keywords: [
      "meble na wymiar Gdynia", "kuchnie na wymiar Gdynia", "szafy wnękowe Gdynia",
      "stolarz Gdynia", "garderoby Gdynia", "zabudowa meblowa Gdynia",
    ],
    sections: [
      commonServices("w Gdyni"),
      {
        heading: "Meble na wymiar dla mieszkań deweloperskich w Gdyni",
        paragraphs: [
          "W Gdyni najczęściej pracujemy w nowych mieszkaniach na Chwarznie-Wiczlinie, Dąbrowie i Karwinach. Znamy standardy deweloperskie i wiemy, jak zaprojektować kuchnię na wymiar Gdynia, która ukryje piony, wentylację i puszki elektryczne.",
          "W kamienicach w Śródmieściu i na Wzgórzu Św. Maksymiliana radzimy sobie z wysokimi sufitami, krzywymi ścianami i drewnianymi stropami. Zabudowy meblowe robimy tak, aby wpasowały się w charakter przedwojennej architektury.",
        ],
      },
      commonProcess("w Gdyni"),
      commonWhy("w Gdyni"),
    ],
  },
  {
    slug: "sopot",
    name: "Sopot",
    nameLocative: "w Sopocie",
    distanceKm: 8,
    description:
      "Realizujemy meble na wymiar w Sopocie — od Kamiennego Potoku, przez Górny Sopot, po Dolny Sopot i okolice mola. Dojeżdżamy z bezpłatnym pomiarem.",
    highlights: [
      "Meble do apartamentów i mieszkań w Sopocie",
      "Zabudowy do kamienic i przedwojennych willi",
      "Wysokiej klasy fronty lakierowane i fornirowane",
    ],
    neighborhoods: [
      "Dolny Sopot", "Górny Sopot", "Kamienny Potok", "Brodwino", "Przylesie", "Świemirowo",
    ],
    keywords: [
      "meble na wymiar Sopot", "kuchnie na wymiar Sopot", "szafy wnękowe Sopot",
      "stolarz Sopot", "zabudowa apartamentu Sopot",
    ],
    sections: [
      commonServices("w Sopocie"),
      {
        heading: "Meble do apartamentów i willi w Sopocie",
        paragraphs: [
          "Sopot to specyficzny rynek — apartamenty inwestycyjne przy Monte Cassino, przedwojenne kamienice na Górnym Sopocie i nowoczesne budownictwo na Brodwinie. Do każdego wnętrza dobieramy inne rozwiązania.",
          "W apartamentach premium stawiamy na fronty lakierowane matowe, forniry naturalne (dąb, orzech) i systemy bezuchwytowe. Meble na wymiar w Sopocie robimy z materiałów, które wytrzymają nadmorski klimat.",
        ],
      },
      commonProcess("w Sopocie"),
      commonWhy("w Sopocie"),
    ],
  },
  {
    slug: "gdansk",
    name: "Gdańsk",
    nameLocative: "w Gdańsku",
    distanceKm: 22,
    description:
      "Obsługujemy klientów na terenie całego Gdańska — Wrzeszcz, Oliwa, Przymorze, Zaspa, Śródmieście, Morena, Jasień, Chełm, Ujeścisko. Bezpłatny dojazd z pomiarem i projektem.",
    highlights: [
      "Kuchnie na wymiar w mieszkaniach deweloperskich",
      "Szafy wnękowe i garderoby w Oliwie i Wrzeszczu",
      "Zabudowy łazienkowe odporne na wilgoć",
    ],
    neighborhoods: [
      "Wrzeszcz", "Oliwa", "Przymorze", "Zaspa", "Śródmieście", "Morena",
      "Jasień", "Chełm", "Ujeścisko", "Piecki-Migowo", "Brzeźno", "Suchanino",
    ],
    keywords: [
      "meble na wymiar Gdańsk", "kuchnie na wymiar Gdańsk", "szafy wnękowe Gdańsk",
      "stolarz Gdańsk", "garderoby Gdańsk Oliwa", "zabudowa meblowa Gdańsk",
    ],
    sections: [
      commonServices("w Gdańsku"),
      {
        heading: "Meble na wymiar dla mieszkań w Gdańsku",
        paragraphs: [
          "W Gdańsku realizujemy mnóstwo kuchni na wymiar na Jasieniu, Ujeścisku i Morenie — dzielnicach z nową zabudową deweloperską. Znamy standardy Robyga, Inpro, Euro Stylu i Moderna Development.",
          "W Oliwie i Wrzeszczu specjalizujemy się w szafach wnękowych i garderobach do mieszkań w kamienicach oraz PRL-owskich blokach. Radzimy sobie z każdym typem wnęki i skosem.",
          "W Śródmieściu i na Głównym Mieście robimy zabudowy dopasowane do historycznego charakteru wnętrz — z detalami, listwami i frontami frezowanymi.",
        ],
      },
      commonProcess("w Gdańsku"),
      commonWhy("w Gdańsku"),
    ],
  },
  {
    slug: "rumia",
    name: "Rumia",
    nameLocative: "w Rumi",
    distanceKm: 10,
    description:
      "Meble na wymiar w Rumi — projektujemy i montujemy kuchnie, szafy oraz garderoby w domach jednorodzinnych i mieszkaniach na terenie całego miasta.",
    highlights: [
      "Kompleksowe zabudowy dla domów w Rumi",
      "Meble łazienkowe i pralnie",
      "Terminowa realizacja i montaż",
    ],
    neighborhoods: ["Janowo", "Zagórze", "Szmelta", "Biała Rzeka", "Lotnisko", "Centrum"],
    keywords: [
      "meble na wymiar Rumia", "kuchnie na wymiar Rumia", "szafy wnękowe Rumia",
      "stolarz Rumia", "zabudowa domu Rumia",
    ],
    sections: [
      commonServices("w Rumi"),
      {
        heading: "Meble dla domów jednorodzinnych w Rumi",
        paragraphs: [
          "Rumia to głównie zabudowa jednorodzinna — Janowo, Zagórze, Biała Rzeka. Robimy tam kompleksowe zabudowy: kuchnia, spiżarnia, pralnia, garderoby w każdej sypialni, meble do gabinetu i przedpokoju.",
          "Do domów w Rumi projektujemy również meble na skosy poddaszy oraz pomieszczenia gospodarcze z zabudową na całą wysokość.",
        ],
      },
      commonProcess("w Rumi"),
      commonWhy("w Rumi"),
    ],
  },
  {
    slug: "reda",
    name: "Reda",
    nameLocative: "w Redzie",
    distanceKm: 15,
    description:
      "Dojeżdżamy do Redy z bezpłatnym pomiarem i projektem. Wykonujemy meble na wymiar do nowych osiedli oraz starszej zabudowy jednorodzinnej.",
    highlights: [
      "Kuchnie i wyspy kuchenne w Redzie",
      "Garderoby i szafy przesuwne",
      "Zabudowy pod skosy poddasza",
    ],
    neighborhoods: ["Ciechocino", "Rekowo Górne", "Pieleszewo", "Centrum", "Betlejem"],
    keywords: [
      "meble na wymiar Reda", "kuchnie na wymiar Reda", "szafy wnękowe Reda",
      "stolarz Reda", "zabudowa poddasza Reda",
    ],
    sections: [
      commonServices("w Redzie"),
      {
        heading: "Meble na wymiar dla domów w Redzie",
        paragraphs: [
          "Reda dynamicznie się rozbudowuje — powstają nowe osiedla domów jednorodzinnych i szeregowych. Projektujemy tam kuchnie z wyspą, spiżarnie oraz kompleksowe garderoby.",
          "Częsty temat w Redzie to zabudowa poddasza pod skosami — sypialnie, garderoby, gabinety. Robimy meble milimetrowo dopasowane do kąta połaci dachu.",
        ],
      },
      commonProcess("w Redzie"),
      commonWhy("w Redzie"),
    ],
  },
  {
    slug: "wejherowo",
    name: "Wejherowo",
    nameLocative: "w Wejherowie",
    distanceKm: 22,
    description:
      "Realizujemy meble na wymiar w Wejherowie — dojazd z Gdyni bezpłatny w ramach obszaru obsługi 30 km. Współpracujemy z klientami indywidualnymi.",
    highlights: [
      "Kuchnie na wymiar dla mieszkań i domów",
      "Nowoczesne fronty bezuchwytowe",
      "Solidne okucia Blum i Hettich",
    ],
    neighborhoods: ["Śmiechowo", "Nanice", "Fenikowo", "Centrum", "Kaszubska"],
    keywords: [
      "meble na wymiar Wejherowo", "kuchnie na wymiar Wejherowo", "szafy wnękowe Wejherowo",
      "stolarz Wejherowo", "garderoby Wejherowo",
    ],
    sections: [
      commonServices("w Wejherowie"),
      {
        heading: "Meble na wymiar dla mieszkań w Wejherowie",
        paragraphs: [
          "W Wejherowie realizujemy zarówno mieszkania w blokach na Śmiechowie i Nanicach, jak i domy jednorodzinne w okolicy. Kuchnia na wymiar Wejherowo to najczęściej zamawiana u nas usługa.",
          "Stawiamy na nowoczesne fronty bezuchwytowe, kolory matowe (kaszmir, antracyt, khaki) oraz blaty ze spieku kwarcowego imitującego marmur.",
        ],
      },
      commonProcess("w Wejherowie"),
      commonWhy("w Wejherowie"),
    ],
  },
  {
    slug: "kosakowo",
    name: "Kosakowo",
    nameLocative: "w Kosakowie",
    distanceKm: 13,
    description:
      "Meble na wymiar dla mieszkańców gminy Kosakowo — Kosakowo, Pierwoszyno, Mosty, Mechelinki, Rewa, Pogórze. Dojazd, pomiar i wycena bez opłat.",
    highlights: [
      "Zabudowy dla nowych domów jednorodzinnych",
      "Kuchnie z wyspą i spiżarniami",
      "Meble łazienkowe pod wymiar",
    ],
    neighborhoods: ["Kosakowo", "Pierwoszyno", "Mosty", "Mechelinki", "Rewa", "Pogórze", "Dębogórze"],
    keywords: [
      "meble na wymiar Kosakowo", "kuchnie na wymiar Kosakowo", "szafy wnękowe Kosakowo",
      "stolarz Kosakowo", "zabudowa domu Mechelinki",
    ],
    sections: [
      commonServices("w Kosakowie"),
      {
        heading: "Meble dla domów w gminie Kosakowo",
        paragraphs: [
          "Gmina Kosakowo to głównie nowa zabudowa jednorodzinna — Mosty, Pierwoszyno, Mechelinki. Robimy tam pełne zabudowy: kuchnie otwarte z wyspą, spiżarnie, pralnie i garderoby.",
          "W miejscowościach nadmorskich (Rewa, Mechelinki) dobieramy materiały odporne na wilgoć i słony klimat.",
        ],
      },
      commonProcess("w Kosakowie"),
      commonWhy("w Kosakowie"),
    ],
  },
  {
    slug: "puck",
    name: "Puck",
    nameLocative: "w Pucku",
    distanceKm: 28,
    description:
      "Obsługujemy klientów z Pucka i okolicznych miejscowości. Meble na wymiar projektujemy i produkujemy w naszej pracowni pod Gdynią.",
    highlights: [
      "Dojazd z pomiarem w cenie zlecenia",
      "Meble do domów letniskowych i całorocznych",
      "Trwałe materiały odporne na wilgoć nadmorską",
    ],
    neighborhoods: ["Centrum Pucka", "Osiedle Nad Zatoką", "Osiedle Wschód", "Gnieżdżewo", "Swarzewo"],
    keywords: [
      "meble na wymiar Puck", "kuchnie na wymiar Puck", "szafy wnękowe Puck",
      "stolarz Puck", "meble do domu letniskowego Puck",
    ],
    sections: [
      commonServices("w Pucku"),
      {
        heading: "Meble na wymiar dla domów nad zatoką",
        paragraphs: [
          "Puck i okolice to zarówno domy całoroczne, jak i domy letniskowe nad Zatoką Pucką. Dla każdej z tych realizacji dobieramy inny standard materiałów.",
          "Do domów letniskowych proponujemy zabudowy z materiałów odpornych na wahania wilgotności, z okuciami zabezpieczonymi antykorozyjnie.",
        ],
      },
      commonProcess("w Pucku"),
      commonWhy("w Pucku"),
    ],
  },
  {
    slug: "zukowo",
    name: "Żukowo",
    nameLocative: "w Żukowie",
    distanceKm: 25,
    description:
      "Wykonujemy meble na wymiar w Żukowie i sąsiednich miejscowościach gminy. Kompleksowa realizacja — od projektu po montaż.",
    highlights: [
      "Kuchnie na wymiar w domach jednorodzinnych",
      "Garderoby przesuwne i wnękowe",
      "Zabudowy salonowe i biblioteczki",
    ],
    neighborhoods: ["Żukowo", "Banino", "Chwaszczyno", "Miszewo", "Tuchom", "Rębiechowo"],
    keywords: [
      "meble na wymiar Żukowo", "kuchnie na wymiar Żukowo", "szafy wnękowe Żukowo",
      "stolarz Żukowo", "meble Banino Chwaszczyno",
    ],
    sections: [
      commonServices("w Żukowie"),
      {
        heading: "Meble dla domów w gminie Żukowo",
        paragraphs: [
          "Gmina Żukowo, a szczególnie Banino i Chwaszczyno, przeżywa boom budowlany. Realizujemy tam pełne wyposażenie meblowe nowych domów jednorodzinnych.",
          "Najczęściej projektujemy duże kuchnie otwarte z wyspą, zabudowy salonowe z kominkiem oraz garderoby w sypialniach master.",
        ],
      },
      commonProcess("w Żukowie"),
      commonWhy("w Żukowie"),
    ],
  },
];
