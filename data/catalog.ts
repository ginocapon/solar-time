export type Product = {
  code: string;
  brand: string;
  model: string;
  category: string;
  type: string;
  short: string;
  power?: string;
  capacity?: string;
  efficiency?: string;
  warranty?: string;
};

export const products: Product[] = [
  {
    code: "ST-PNL-440-DEMO",
    brand: "HelioLine",
    model: "HL-440M",
    category: "Fotovoltaico",
    type: "Pannelli",
    short: "Modulo monocristallino da 440 W per coperture residenziali.",
    power: "440 W",
    efficiency: "22,5%",
    warranty: "25 anni prestazione (DEMO)",
  },
  {
    code: "ST-PNL-575-DEMO",
    brand: "HelioLine",
    model: "HL-575B",
    category: "Fotovoltaico",
    type: "Pannelli",
    short: "Modulo 575 W per tetti aziendali e tettoie.",
    power: "575 W",
    efficiency: "22,8%",
    warranty: "25 anni prestazione (DEMO)",
  },
  {
    code: "ST-INV-6-DEMO",
    brand: "VoltNest",
    model: "VN-HY6",
    category: "Fotovoltaico",
    type: "Inverter",
    short: "Inverter ibrido 6 kW per abitazioni con accumulo.",
    power: "6 kW",
    warranty: "10 anni (DEMO)",
  },
  {
    code: "ST-INV-15-DEMO",
    brand: "VoltNest",
    model: "VN-HY15",
    category: "Fotovoltaico",
    type: "Inverter",
    short: "Inverter ibrido 15 kW per PMI e capannoni piccoli.",
    power: "15 kW",
    warranty: "10 anni (DEMO)",
  },
  {
    code: "ST-BAT-10-DEMO",
    brand: "StoreAxis",
    model: "SA-10",
    category: "Accumulo",
    type: "Batterie",
    short: "Batteria 10 kWh per aumentare l'autoconsumo serale.",
    capacity: "10 kWh",
    warranty: "10 anni (DEMO)",
  },
  {
    code: "ST-BAT-15-DEMO",
    brand: "StoreAxis",
    model: "SA-15",
    category: "Accumulo",
    type: "Batterie",
    short: "Batteria 15 kWh per famiglie con pompa di calore o auto.",
    capacity: "15 kWh",
    warranty: "10 anni (DEMO)",
  },
  {
    code: "ST-WB-11-DEMO",
    brand: "ChargeBay",
    model: "CB-11",
    category: "Wallbox",
    type: "Wallbox",
    short: "Wallbox 11 kW monofase/trifase per ricarica domestica.",
    power: "11 kW",
    warranty: "3 anni (DEMO)",
  },
  {
    code: "ST-PDC-12-DEMO",
    brand: "ThermaFlow",
    model: "TF-12",
    category: "Pompe di calore",
    type: "Pompe di calore",
    short: "Pompa di calore aria-acqua 12 kW, pensata per abbinamento FV.",
    power: "12 kW",
    warranty: "5 anni (DEMO)",
  },
];

export type Project = {
  slug: string;
  title: string;
  city: string;
  province: string;
  type: string;
  kwp: string;
  panels: number;
  inverter: string;
  storage?: string;
  wallbox?: string;
  production: string;
  goal: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "residenziale-padova-demo",
    title: "Impianto fotovoltaico residenziale a Padova",
    city: "Padova",
    province: "PD",
    type: "Residenziale",
    kwp: "6,2 kWp",
    panels: 14,
    inverter: "VoltNest VN-HY6",
    storage: "StoreAxis SA-10",
    production: "stima preliminare ~7.400 kWh/anno",
    goal: "Ridurre i prelievi serali con accumulo.",
    description:
      "Progetto DEMO su villetta a Padova: tetto a falda sud-est, integrazione batteria e monitoraggio da app. I valori sono illustrativi e non rappresentano un impianto reale.",
  },
  {
    slug: "pmi-vicenza-demo",
    title: "Fotovoltaico per laboratorio artigianale a Vicenza",
    city: "Vicenza",
    province: "VI",
    type: "Aziende",
    kwp: "20 kWp",
    panels: 35,
    inverter: "VoltNest VN-HY15",
    production: "stima preliminare ~24.000 kWh/anno",
    goal: "Coprire i consumi diurni del laboratorio.",
    description:
      "Progetto DEMO su capannone artigianale: profilo di consumo concentato al mattino. Nessun dato reale di cliente.",
  },
  {
    slug: "industriale-verona-demo",
    title: "Copertura industriale a Verona",
    city: "Verona",
    province: "VR",
    type: "Industriale",
    kwp: "80 kWp",
    panels: 140,
    inverter: "VoltNest industriale (DEMO)",
    production: "stima preliminare in funzione del profilo turni",
    goal: "Ridurre il prelievo nelle ore di produzione.",
    description:
      "Progetto DEMO su tetto piano industriale. Serve sempre un sopralluogo per vincoli strutturali, ombre e connessione.",
  },
  {
    slug: "terra-rovigo-demo",
    title: "Campo fotovoltaico a terra in Polesine",
    city: "Rovigo",
    province: "RO",
    type: "A terra",
    kwp: "500 kWp",
    panels: 1140,
    inverter: "VoltNest centrali (DEMO)",
    production: "stima preliminare su irraggiamento di pianura",
    goal: "Produzione a terra e verifica di connessione.",
    description:
      "Progetto DEMO su campo in pianura: file di tavole, viabilità e cabina. Non è un tetto residenziale ridimensionato. I valori sono illustrativi.",
  },
  {
    slug: "accumulo-treviso-demo",
    title: "Fotovoltaico con accumulo a Treviso",
    city: "Treviso",
    province: "TV",
    type: "Residenziale + accumulo",
    kwp: "8,8 kWp",
    panels: 20,
    inverter: "VoltNest VN-HY6",
    storage: "StoreAxis SA-15",
    wallbox: "ChargeBay CB-11",
    production: "stima preliminare con auto elettrica",
    goal: "Casa, pompa di calore e ricarica auto.",
    description:
      "Progetto DEMO per nucleo familiare con PdC e wallbox. La batteria è dimensionata sul consumo notturno dichiarato, non su un dato reale.",
  },
];

export type Faq = { q: string; a: string; topic: string };

export const faqs: Faq[] = [
  {
    topic: "calcolatore",
    q: "Il calcolatore online sostituisce il progetto?",
    a: "No. Il risultato è una stima preliminare. Il dimensionamento definitivo richiede sopralluogo, bollette o curva dei prelievi, vincoli di tetto/campo e verifica di connessione.",
  },
  {
    topic: "servizio",
    q: "Lavorate solo sul residenziale?",
    a: "No. Solar Time progetta impianti residenziali, coperture di capannoni e campi a terra. Ciascun ambito ha vincoli di struttura, connessione e profilo dei prelievi propri.",
  },
  {
    topic: "calcolatore",
    q: "Quanto tempo serve per una simulazione personalizzata?",
    a: "Dopo la richiesta DEMO il flusso prevede contatto, eventuale sopralluogo e simulazione. In produzione i tempi verranno impostati da Solar Time con dati reali.",
  },
  {
    topic: "servizio",
    q: "Solar Time vende solo i pannelli?",
    a: "No. L'offerta è un sistema: produzione, accumulo, gestione dei prelievi, wallbox e assistenza nel tempo. I pannelli sono un componente, non il prodotto.",
  },
  {
    topic: "servizio",
    q: "Lavorate solo a Padova?",
    a: "L'area DEMO copre le sette province venete. Ogni pagina locale avrà contenuti specifici su territorio e tipologie di tetto, non un copia-incolla del nome comune.",
  },
  {
    topic: "prodotto",
    q: "Posso vedere prezzi di listino sul sito?",
    a: "Il catalogo mostra modelli e caratteristiche. I prezzi cliente escono da un preventivo personalizzato. Costi interni e margini non sono mai pubblici.",
  },
  {
    topic: "locale",
    q: "Perché una pagina per provincia e non una lista di comuni?",
    a: "Una pagina utile parla di clima, tetti, consumi e casi del territorio. Duplicare lo stesso testo cambiando solo il Comune danneggia utenti e ricerca.",
  },
];

export const demoReviews = [
  {
    name: "Marco B. (DEMO)",
    place: "Padova",
    text: "Recensione DEMO: percorso chiaro da stima preliminare a sopralluogo. Non è una recensione di un cliente reale.",
    date: "2026-06-12",
  },
  {
    name: "Elena R. (DEMO)",
    place: "Vicenza",
    text: "Recensione DEMO: spiegato autoconsumo e batteria senza vendere un kit standard. Contenuto fittizio per il collaudo del sito.",
    date: "2026-07-03",
  },
  {
    name: "Officina Nord (DEMO)",
    place: "Verona",
    text: "Recensione DEMO su capannone: valutata la copertura dei consumi diurni e la portata del tetto. Non utilizzare questo testo come prova sociale reale.",
    date: "2026-08-21",
  },
];
