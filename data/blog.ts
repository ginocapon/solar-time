export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  summary: string;
  h2: { q: string; a: string }[];
};

export const posts: BlogPost[] = [
  {
    slug: "quanta-energia-produce-un-impianto-da-6-kwp",
    title: "Quanta energia produce un impianto da 6 kWp?",
    metaTitle: "Produzione impianto 6 kWp",
    metaDescription:
      "Ordine di grandezza della produzione di un 6 kWp in Veneto. Stima preliminare, non progetto. Guida DEMO Solar Time.",
    date: "2026-09-10",
    summary:
      "Un 6 kWp in Veneto si colloca spesso intorno a 6.500–8.000 kWh/anno. Ombre, falda e inverter spostano il numero. Non è un dato contrattuale.",
    h2: [
      {
        q: "Da cosa dipende la produzione?",
        a: "Irraggiamento locale, inclinazione, orientamento, ombre, perdite di sistema. Il calcolatore usa un fattore provinciale DEMO per un ordine di grandezza.",
      },
      {
        q: "6 kWp quante lastre sono?",
        a: "Con moduli da 440 W circa 14. Il layout reale può scendere o salire per bordi tetto e ombre.",
      },
    ],
  },
  {
    slug: "quanta-batteria-serve-realmente",
    title: "Quanta batteria serve realmente?",
    metaTitle: "Dimensionamento batteria fotovoltaico",
    metaDescription:
      "Come stimare l'accumulo dai prelievi serali, non dal listino. Articolo DEMO Solar Time.",
    date: "2026-09-12",
    summary:
      "La batteria si legge sui kWh che prelevi quando il tetto non produce. Il kWh di catalogo è il punto di partenza, non la risposta.",
    h2: [
      {
        q: "Come si stima una fascia di capacità?",
        a: "Prelievi notturni × giorni di autonomia desiderata, corretti con profondità di scarica e rendimenti. Poi si verifica inverter e obiettivo (bolletta vs backup).",
      },
    ],
  },
  {
    slug: "fotovoltaico-aziende-cosa-valutare",
    title: "Fotovoltaico per aziende: cosa valutare prima dell'investimento",
    metaTitle: "Fotovoltaico aziende cosa valutare",
    metaDescription:
      "Curve orarie, tetto e connessione: la checklist prima di un impianto PMI. Guida DEMO Solar Time.",
    date: "2026-09-15",
    summary:
      "In azienda il fotovoltaico funziona se produce mentre consumi. Senza curva oraria si compra potenza, non risparmio.",
    h2: [
      {
        q: "Quali documenti servono in una prima analisi?",
        a: "Bollette 12 mesi, potenza impegnata, foto tetto, orari di lavoro. Il sopralluogo arriva dopo, non al posto di questi dati.",
      },
    ],
  },
];
