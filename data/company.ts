export const isDemo = process.env.NEXT_PUBLIC_DEMO !== "false";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

export const company = {
  name: "Solar Time",
  legalName: "Solar Time S.r.l.",
  tagline: "LA TUA ENERGIA.\nIL TUO RISPARMIO.\nLA TUA INDIPENDENZA.",
  subtitle:
    "Progettiamo e realizziamo impianti fotovoltaici, sistemi di accumulo e soluzioni intelligenti per la gestione dell'energia.",
  claim:
    "Progettiamo e realizziamo sistemi completi per produrre, accumulare e gestire la tua energia.",
  email: "info@solartime.it",
  commercialEmail: "commerciale@solartime.it",
  quotesEmail: "preventivi@solartime.it",
  adminEmail: "amministrazione@solartime.it",
  pec: "solartime@pec.it",
  phone: "+39 049 000 0000",
  phoneHref: "tel:+390490000000",
  whatsapp: "+39 350 000 0000",
  whatsappHref: "https://wa.me/393500000000",
  address: "Via dell'Energia 25",
  cap: "35100",
  city: "Padova",
  province: "PD",
  country: "Italia",
  vat: "00000000000",
  taxCode: "00000000000",
  area: "Veneto: Padova, Vicenza, Verona, Treviso, Belluno, Venezia, Rovigo",
} as const;

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const mainNav: NavItem[] = [
  {
    href: "/fotovoltaico",
    label: "Fotovoltaico",
    children: [
      { href: "/fotovoltaico-residenziale", label: "Residenziale" },
      { href: "/fotovoltaico-aziende", label: "Aziende" },
      { href: "/fotovoltaico-industriale", label: "Industriale" },
      { href: "/fotovoltaico-con-accumulo", label: "Con accumulo" },
    ],
  },
  {
    href: "/#soluzioni",
    label: "Soluzioni",
    children: [
      { href: "/pannelli-fotovoltaici", label: "Pannelli" },
      { href: "/inverter", label: "Inverter" },
      { href: "/batterie-accumulo", label: "Batterie" },
      { href: "/wallbox", label: "Wallbox" },
      { href: "/pompe-di-calore", label: "Pompe di calore" },
      { href: "/monitoraggio-fotovoltaico", label: "Monitoraggio" },
      { href: "/manutenzione-fotovoltaico", label: "Manutenzione" },
    ],
  },
  { href: "/prodotti", label: "Prodotti" },
  { href: "/progetti", label: "Progetti" },
  { href: "/fotovoltaico-aziende", label: "Aziende" },
  { href: "/blog", label: "Blog" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/contatti", label: "Contatti" },
];

export const provinces = [
  { slug: "padova", name: "Padova", href: "/fotovoltaico-padova" },
  { slug: "vicenza", name: "Vicenza", href: "/fotovoltaico-vicenza" },
  { slug: "verona", name: "Verona", href: "/fotovoltaico-verona" },
  { slug: "treviso", name: "Treviso", href: "/fotovoltaico-treviso" },
  { slug: "belluno", name: "Belluno", href: "/fotovoltaico-belluno" },
  { slug: "venezia", name: "Venezia", href: "/fotovoltaico-venezia" },
  { slug: "rovigo", name: "Rovigo", href: "/fotovoltaico-rovigo" },
] as const;
