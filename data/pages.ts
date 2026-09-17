export type PageContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  sections: { h2: string; body: string }[];
  cta: { label: string; href: string };
};

export const servicePages: PageContent[] = [
  {
    slug: "fotovoltaico",
    title: "Fotovoltaico",
    metaTitle: "Fotovoltaico Veneto",
    metaDescription:
      "Impianti fotovoltaici in Veneto: produzione, accumulo e gestione energia. Stima preliminare e sopralluogo Solar Time DEMO.",
    h1: "Fotovoltaico per produrre e gestire la tua energia",
    summary:
      "Solar Time progetta impianti fotovoltaici residenziali, aziendali e industriali in Veneto. Non vendiamo un kit: partiamo da consumi, tetto e obiettivo di indipendenza.",
    sections: [
      {
        h2: "Cosa valuta un impianto fatto bene?",
        body: "Consumo annuo e curva oraria, superficie e orientamento, ombre, eventuale pompa di calore o auto elettrica, e se serve accumulo. Senza questi dati la potenza in kWp è solo un numero.",
      },
      {
        h2: "Quanto produce un impianto da 6 kWp?",
        body: "In Veneto una prima stima si colloca spesso tra circa 6.500 e 8.000 kWh/anno, al netto di ombre e inclinazione. È un intervallo preliminare, non un dato di targa del tuo tetto.",
      },
      {
        h2: "Come si richiede un sopralluogo?",
        body: "Completi la stima o il form. In modalità DEMO la richiesta non genera email reale: serve a collaudare il funnel. A dati reali, il sopralluogo verifica struttura, inverter e connessione.",
      },
    ],
    cta: { label: "Calcola il tuo impianto", href: "/calcola" },
  },
  {
    slug: "fotovoltaico-residenziale",
    title: "Fotovoltaico residenziale",
    metaTitle: "Fotovoltaico residenziale",
    metaDescription:
      "Fotovoltaico per casa in Veneto: autoconsumo, batteria e riduzione dei prelievi. Stima preliminare Solar Time, dati DEMO.",
    h1: "Fotovoltaico residenziale: dalla bolletta al tetto",
    summary:
      "Per una casa il tema non è il numero di pannelli. È quante kWh smetti di prelevare, soprattutto di sera, e se ti serve una batteria.",
    sections: [
      {
        h2: "Quanta batteria serve realmente?",
        body: "La batteria copre i consumi quando l'impianto non produce. Si dimensiona sul notturno e sui grandi carichi, non sul massimo kWh vendibile a listino. Una stima 5–15 kWh è frequente, da verificare sui tuoi prelievi.",
      },
      {
        h2: "Come cambia l'autoconsumo con una batteria?",
        body: "Senza accumulo l'energia di mezzogiorno può eccedere. Con batteria una quota si sposta alla sera. La percentuale esatta dipende da famiglia, PdC e ricarica auto: il calcolatore dà solo un ordine di grandezza.",
      },
    ],
    cta: { label: "Verifica il risparmio", href: "/calcola" },
  },
  {
    slug: "fotovoltaico-aziende",
    title: "Fotovoltaico aziende",
    metaTitle: "Fotovoltaico per aziende Veneto",
    metaDescription:
      "Fotovoltaico per PMI in Veneto: consumi diurni, tettoia e monitoraggio. Progettazione Solar Time, contenuti DEMO.",
    h1: "Fotovoltaico per aziende: cosa valutare prima",
    summary:
      "In azienda il valore sta nei consumi diurni. Se la produzione coincide con i turni, l'autoconsumo sale senza dover inseguire l'indipendenza totale.",
    sections: [
      {
        h2: "Cosa guardare prima dell'investimento?",
        body: "Potenza impegnata, curve orarie, vincoli del tetto, distanze inverter, ferie e stagionalità. Un capannone vuoto ad agosto non si dimensiona come un laboratorio su due turni.",
      },
      {
        h2: "Serve sempre l'accumulo in PMI?",
        body: "Spesso no, se i carichi sono diurni. L'accumulo entra quando ci sono picchi serali, ricarica flotta o backup. La scelta va sul profilo, non sul catalogo.",
      },
    ],
    cta: { label: "Richiedi una simulazione", href: "/contatti" },
  },
  {
    slug: "fotovoltaico-industriale",
    title: "Fotovoltaico industriale",
    metaTitle: "Fotovoltaico industriale",
    metaDescription:
      "Impianti fotovoltaici industriali in Veneto: tetti piani, connessione e monitoraggio. Solar Time DEMO.",
    h1: "Fotovoltaico industriale: tetto, rete e produzione",
    summary:
      "Su scala industriale pesano struttura, connessione alla rete, ombreggiamenti da impianti tecnici e il profilo dei turni. Non si parte dal modulo.",
    sections: [
      {
        h2: "Quali vincoli tecnici arrivano prima dei pannelli?",
        body: "Portata della copertura, linee esistenti, cabina, iter di connessione e accessi per la manutenzione. Un layout bello sul render può essere sbagliato sul tetto vero.",
      },
    ],
    cta: { label: "Parla con un tecnico", href: "/contatti" },
  },
  {
    slug: "fotovoltaico-con-accumulo",
    title: "Fotovoltaico con accumulo",
    metaTitle: "Fotovoltaico con accumulo",
    metaDescription:
      "Fotovoltaico e batteria: autoconsumo serale e riduzione prelievi. Stima preliminare Solar Time DEMO.",
    h1: "Fotovoltaico con accumulo: produrre e usare dopo",
    summary:
      "L'accumulo sposta l'energia dal picco solare alle ore in cui prelevi. Serve se hai consumi serali, pompa di calore o auto, non come default su ogni tetto.",
    sections: [
      {
        h2: "Come si dimensiona l'accumulo?",
        body: "Si parte dai kWh prelevati quando l'impianto è fermo. Poi si verifica inverter ibrido, profondità di scarica e obiettivo (bolletta, backup, ricarica). Il calcolatore indica una fascia, non un modello.",
      },
    ],
    cta: { label: "Calcola il tuo impianto", href: "/calcola" },
  },
  {
    slug: "batterie-accumulo",
    title: "Batterie di accumulo",
    metaTitle: "Batterie accumulo fotovoltaico",
    metaDescription:
      "Batterie per fotovoltaico: capacità, inverter ibrido e uso serale. Catalogo DEMO Solar Time.",
    h1: "Batterie di accumulo: capacità utile, non etichetta",
    summary:
      "La capacità nominale non è l'energia che userai ogni sera. Contano profondità di scarica, rendimenti e i tuoi prelievi reali.",
    sections: [
      {
        h2: "10 kWh sono pochi o troppi?",
        body: "Per una coppia senza PdC possono bastare. Con pompa di calore e auto spesso servono più kWh o una strategia di ricarica diversa. Senza curva dei consumi è marketing, non progetto.",
      },
    ],
    cta: { label: "Vedi i modelli DEMO", href: "/prodotti" },
  },
  {
    slug: "inverter",
    title: "Inverter",
    metaTitle: "Inverter fotovoltaici",
    metaDescription:
      "Inverter ibridi e di stringa per impianti Veneto. Solar Time spiega il ruolo nel sistema, catalogo DEMO.",
    h1: "Inverter: il cervello che gestisce l'energia",
    summary:
      "L'inverter converte, limita, dialoga con batteria e rete. La scelta segue potenza, monofase/trifase e obiettivo di accumulo.",
    sections: [
      {
        h2: "Ibrido o di stringa?",
        body: "Ibrido se prevedi batteria ora o a breve. Stringa se l'obiettivo è solo produzione diurna. Cambiare dopo costa più che sceglierlo nel progetto.",
      },
    ],
    cta: { label: "Catalogo inverter DEMO", href: "/prodotti" },
  },
  {
    slug: "pannelli-fotovoltaici",
    title: "Pannelli fotovoltaici",
    metaTitle: "Pannelli fotovoltaici",
    metaDescription:
      "Pannelli fotovoltaici per tetti residenziali e aziendali in Veneto. Specifiche DEMO Solar Time, niente listini pubblici.",
    h1: "Pannelli fotovoltaici: potenza sul tetto che hai",
    summary:
      "Il modulo si sceglie su spazio, ombre e obiettivo kWp. Un 440 W su falda piccola può battere un 575 W che non ci sta in layout pulito.",
    sections: [
      {
        h2: "Quanti pannelli per 6 kWp?",
        body: "Con moduli da 440 W servono circa 14 pannelli. È aritmetica di catalogo: ombre, bordo tetto e vincoli estetici possono cambiare il numero.",
      },
    ],
    cta: { label: "Apri il catalogo", href: "/prodotti" },
  },
  {
    slug: "wallbox",
    title: "Wallbox",
    metaTitle: "Wallbox e fotovoltaico",
    metaDescription:
      "Wallbox abbinata al fotovoltaico: ricarica casa e gestione dei prelievi. Solar Time DEMO.",
    h1: "Wallbox: ricaricare senza sparare i prelievi",
    summary:
      "La wallbox va coordinata con inverter e, se c'è, batteria. Ricaricare a 11 kW di notte sulla rete è un altro progetto rispetto a usare il surplus solare.",
    sections: [
      {
        h2: "Quando ha senso con il fotovoltaico?",
        body: "Se l'auto sta in cortile di giorno, il surplus può coprire parte della ricarica. Se torna solo la sera, servono batteria, potenza impegnata e abitudini di viaggio.",
      },
    ],
    cta: { label: "Calcola casa + auto", href: "/calcola" },
  },
  {
    slug: "pompe-di-calore",
    title: "Pompe di calore",
    metaTitle: "Pompe di calore e fotovoltaico",
    metaDescription:
      "Pompa di calore abbinata al fotovoltaico in Veneto: consumi invernali e dimensionamento. Solar Time DEMO.",
    h1: "Pompe di calore: il carico che cambia l'impianto",
    summary:
      "Una PdC alza i kWh invernali, quando il tetto produce meno. L'impianto si dimensiona su entrambi, non solo sulla bolletta estiva.",
    sections: [
      {
        h2: "Si sovradimensiona il fotovoltaico?",
        body: "A volte sì, entro tetto e connessione. Altre volte si lavora su accumulo e programmazione della PdC. La risposta esce dal profilo mensile, non da uno slogan.",
      },
    ],
    cta: { label: "Richiedi un sopralluogo", href: "/contatti" },
  },
  {
    slug: "monitoraggio-fotovoltaico",
    title: "Monitoraggio fotovoltaico",
    metaTitle: "Monitoraggio fotovoltaico",
    metaDescription:
      "Monitoraggio produzione, prelievi e accumulo. Solar Time spiega a cosa serve dopo l'installazione. DEMO.",
    h1: "Monitoraggio: sapere se l'impianto sta lavorando",
    summary:
      "Senza dati non c'è assistenza vera. Il monitoraggio mostra produzione, autoconsumo, prelievi e stato batteria.",
    sections: [
      {
        h2: "Cosa deve vedere il cliente?",
        body: "kWh prodotti, prelevati, immessi e, se c'è, carica della batteria. Allarmi su inverter spenti o stringhe anomale. I grafici DEMO del sito non sono telemetrie reali.",
      },
    ],
    cta: { label: "Parla con un tecnico", href: "/contatti" },
  },
  {
    slug: "manutenzione-fotovoltaico",
    title: "Manutenzione fotovoltaico",
    metaTitle: "Manutenzione impianti fotovoltaici",
    metaDescription:
      "Manutenzione e controllo impianti fotovoltaici in Veneto. Assistenza nel tempo, contenuti DEMO Solar Time.",
    h1: "Manutenzione: l'impianto dopo il giorno dell'allaccio",
    summary:
      "Polvere, inverter, connessioni e aggiornamenti firmware. Un impianto non è finito alla firma del collaudo.",
    sections: [
      {
        h2: "Ogni quanto va controllato?",
        body: "Almeno un controllo visivo e di produzione su base annuale è una pratica seria, più frequente su industriale o tetti difficili. Il piano vero si scrive sul progetto, non su una media internet.",
      },
    ],
    cta: { label: "Richiedi assistenza", href: "/assistenza-fotovoltaico" },
  },
  {
    slug: "pratiche-fotovoltaico",
    title: "Pratiche fotovoltaico",
    metaTitle: "Pratiche e allaccio fotovoltaico",
    metaDescription:
      "Pratiche di connessione e iter amministrativi per il fotovoltaico in Veneto. Informativa DEMO Solar Time.",
    h1: "Pratiche fotovoltaico: allaccio e documenti",
    summary:
      "Connessione, eventuali titoli edilizi, variantine e documentazione impianto. Solar Time le tratta come parte del servizio, non come extra sorpresa.",
    sections: [
      {
        h2: "Quali iter dipendono dal Comune?",
        body: "Vincoli paesaggistici, condominio e tipo di intervento cambiano i passaggi. Non pubblichiamo tempi o bonus come se fossero certi: vanno verificati sul caso e sulla norma vigente.",
      },
    ],
    cta: { label: "Richiedi un sopralluogo", href: "/contatti" },
  },
  {
    slug: "assistenza-fotovoltaico",
    title: "Assistenza fotovoltaico",
    metaTitle: "Assistenza impianti fotovoltaici",
    metaDescription:
      "Assistenza post-installazione e supporto tecnico Solar Time in Veneto. Flusso DEMO, nessuna ticket reale.",
    h1: "Assistenza: dal monitoraggio all'intervento",
    summary:
      "Dopo l'installazione restano produzione, eventuali guasti e domande su autoconsumo. Il canale DEMO del sito non apre ticket reali.",
    sections: [
      {
        h2: "Come si segnala un problema?",
        body: "In produzione: telefono, WhatsApp o area clienti. Oggi il form registra solo una simulazione locale per collaudare UX e copy.",
      },
    ],
    cta: { label: "Contatta un tecnico", href: "/contatti" },
  },
  {
    slug: "chi-siamo",
    title: "Perché Solar Time",
    metaTitle: "Chi è Solar Time | Azienda DEMO Padova",
    metaDescription:
      "Solar Time è un'azienda DEMO di Padova: progettazione, installazione e assistenza fotovoltaico. Dati fittizi, sostituibili da admin.",
    h1: "Progettazione, posa e assistenza nel tempo",
    summary:
      "Solar Time S.r.l. è un soggetto DEMO con sede a Padova. Serve a costruire la piattaforma: identità, testi e recensioni reali arriveranno dai dati veri, non da claim inventati.",
    sections: [
      {
        h2: "Chi è Solar Time?",
        body: "Azienda DEMO per vendita, progettazione e gestione di impianti fotovoltaici. Email, telefono e P.IVA attuali sono fittizi e pensati per essere sostituiti senza riscrivere il sito.",
      },
      {
        h2: "Cosa fa, in pratica?",
        body: "Analisi dei consumi, sopralluogo, simulazione, fornitura componenti, installazione, pratiche, monitoraggio e manutenzione. Il CRM e i preventivi arriveranno quando ci saranno dati da gestire: oggi il sito vive su GitHub.",
      },
    ],
    cta: { label: "Parla con un tecnico", href: "/contatti" },
  },
];

export const localPages: PageContent[] = [
  {
    slug: "fotovoltaico-padova",
    title: "Fotovoltaico Padova",
    metaTitle: "Fotovoltaico Padova",
    metaDescription:
      "Fotovoltaico a Padova e hinterland: villette, tetti in coppi, PMI. Stima preliminare Solar Time DEMO.",
    h1: "Fotovoltaico a Padova: villette, coppi e consumi della pianura",
    summary:
      "A Padova convivono case in coppi, schiere degli anni 70-90 e capannoni sulla tangenziale. L'impianto segue il tetto e la bolletta, non un kit da listino.",
    sections: [
      {
        h2: "Che tetti si incontrano in provincia di Padova?",
        body: "Falde in coppi o laterizio, tettoie su laboratori, condomini con lastrici. Ombre da camini e palazzi vicini sono frequenti in centro; in hinterland conta più l'orientamento della falda.",
      },
      {
        h2: "Quali esigenze energetiche sono tipiche?",
        body: "Famiglie con PdC in sostituzione caldaia, PMI con carichi diurni, ricarica auto in cortile. Il calcolatore usa un fattore provinciale DEMO, da validare in sopralluogo.",
      },
    ],
    cta: { label: "Calcola l'impianto a Padova", href: "/calcola" },
  },
  {
    slug: "fotovoltaico-vicenza",
    title: "Fotovoltaico Vicenza",
    metaTitle: "Fotovoltaico Vicenza",
    metaDescription:
      "Fotovoltaico a Vicenza: artigianato, ville e capannoni. Contenuti locali DEMO Solar Time.",
    h1: "Fotovoltaico a Vicenza: laboratori e tetti artigianali",
    summary:
      "Vicenza ha un tessuto di laboratori e ville fuori città. Il dimensionamento parte dai turni di lavoro e dalla falda disponibile, spesso su capannone basso.",
    sections: [
      {
        h2: "Perché il profilo artigianale cambia l'impianto?",
        body: "Molti consumi sono diurni: l'autoconsumo può essere alto anche senza batteria. Se il laboratorio chiude il pomeriggio, la stima va ricalcolata.",
      },
    ],
    cta: { label: "Simulazione Vicenza", href: "/calcola" },
  },
  {
    slug: "fotovoltaico-verona",
    title: "Fotovoltaico Verona",
    metaTitle: "Fotovoltaico Verona",
    metaDescription:
      "Fotovoltaico a Verona e area gardesana: industriale e residenziale. Solar Time DEMO.",
    h1: "Fotovoltaico a Verona: industria e residenziale",
    summary:
      "Tra tessile, logistica e residenziale a ovest, i tetti piani industriali convivono con falde residenziali. Connessione e struttura arrivano prima del modulo.",
    sections: [
      {
        h2: "Cosa cambia rispetto a Padova?",
        body: "Più mix industriale e vincoli diversi su alcune fasce. Non usiamo lo stesso testo cambiando città: qui il tema è tetto piano, turni e cabina.",
      },
    ],
    cta: { label: "Richiedi sopralluogo", href: "/contatti" },
  },
  {
    slug: "fotovoltaico-treviso",
    title: "Fotovoltaico Treviso",
    metaTitle: "Fotovoltaico Treviso",
    metaDescription:
      "Fotovoltaico a Treviso: residenziale, PdC e auto. Pagina locale DEMO Solar Time.",
    h1: "Fotovoltaico a Treviso: case con pompa di calore",
    summary:
      "Nell'area trevigiana è frequente l'abbinamento casa-PdC. L'impianto va letto sui mesi invernali, non solo sulla produzione estiva.",
    sections: [
      {
        h2: "Come si ragiona con PdC e tetto residenziale?",
        body: "Si incrociano bolletta elettrica, eventuale gas residuo e spazio falda. Una batteria entra se i prelievi serali restano alti dopo il FV.",
      },
    ],
    cta: { label: "Calcola casa + PdC", href: "/calcola" },
  },
  {
    slug: "fotovoltaico-belluno",
    title: "Fotovoltaico Belluno",
    metaTitle: "Fotovoltaico Belluno",
    metaDescription:
      "Fotovoltaico in provincia di Belluno: neve, inclinazione e vincoli. Solar Time DEMO.",
    h1: "Fotovoltaico a Belluno: inclinazione, neve e vincoli",
    summary:
      "In montagna pesano inclinazione, carico neve e ombre da versanti. Copiare un layout di pianura è un errore di progetto.",
    sections: [
      {
        h2: "Perché non si usa lo stesso layout di Padova?",
        body: "Produzione invernale, accessi per manutenzione e regolamenti locali cambiano staffe, inclinazione e a volte la potenza installabile.",
      },
    ],
    cta: { label: "Parla con un tecnico", href: "/contatti" },
  },
  {
    slug: "fotovoltaico-venezia",
    title: "Fotovoltaico Venezia",
    metaTitle: "Fotovoltaico Venezia e terraferma",
    metaDescription:
      "Fotovoltaico a Venezia, Mestre e terraferma: vincoli e tetti. Solar Time DEMO.",
    h1: "Fotovoltaico a Venezia: terraferma e vincoli",
    summary:
      "Tra Mestre, hinterland e casi in centro storico i vincoli non sono gli stessi. In terraferma si ragiona come in altre città venete; in centro ogni tetto è un caso.",
    sections: [
      {
        h2: "Dove ha senso partire?",
        body: "Terraferma e comuni di cintura: villette e capannoni. Per il centro storico serve verifica vincoli prima di qualsiasi stima di moduli.",
      },
    ],
    cta: { label: "Richiedi verifica", href: "/contatti" },
  },
  {
    slug: "fotovoltaico-rovigo",
    title: "Fotovoltaico Rovigo",
    metaTitle: "Fotovoltaico Rovigo",
    metaDescription:
      "Fotovoltaico a Rovigo: tetti agricoli e residenziale di pianura. Solar Time DEMO.",
    h1: "Fotovoltaico a Rovigo: pianura, tetti ampi, carichi agricoli",
    summary:
      "In Polesine tetti agricoli e residenziale basso possono offrire superficie. Il nodo è il profilo di consumo, spesso diverso da una PMI di Vicenza.",
    sections: [
      {
        h2: "Tetto grande significa impianto grande?",
        body: "No. Si dimensiona sui kWh e sulla connessione. Un tetto agricolo ampio può restare parzialmente vuoto se i prelievi sono bassi.",
      },
    ],
    cta: { label: "Calcola l'impianto", href: "/calcola" },
  },
];

export function findPage(slug: string) {
  return [...servicePages, ...localPages].find((page) => page.slug === slug);
}

export const allContentSlugs = [...servicePages, ...localPages].map((page) => page.slug);
