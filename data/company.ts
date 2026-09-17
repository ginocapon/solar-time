export const isDemo = process.env.NEXT_PUBLIC_DEMO !== "false";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

export const company = {
  name: "Solar Time",
  legalName: "Solar Time S.r.l.",
  tagline: "ENERGIA SUL TETTO.\nSUL CAPANNONE.\nA TERRA.",
  subtitle:
    "Progettiamo e realizziamo impianti fotovoltaici per edilizia civile, coperture industriali e campi a terra in Veneto. Produzione, accumulo e gestione dell'energia.",
  claim:
    "Fotovoltaico civile, industriale e a terra: sistemi per produrre, accumulare e gestire l'energia.",
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
  ctaCalc: "Calcolo impianto",
  ctaCalcHint: "Indicativo, non è il progetto",
} as const;

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const mainNav: NavItem[] = [
  { href: "/fotovoltaico-residenziale", label: "Civile" },
  {
    href: "/fotovoltaico-industriale",
    label: "Industriale",
    children: [
      { href: "/fotovoltaico-aziende", label: "Aziende e PMI" },
      { href: "/fotovoltaico-industriale", label: "Capannoni e industria" },
    ],
  },
  { href: "/fotovoltaico-a-terra", label: "A terra" },
  {
    href: "/#soluzioni",
    label: "Soluzioni",
    children: [
      { href: "/pannelli-fotovoltaici", label: "Pannelli" },
      { href: "/inverter", label: "Inverter" },
      { href: "/batterie-accumulo", label: "Batterie" },
      { href: "/wallbox", label: "Wallbox" },
      { href: "/monitoraggio-fotovoltaico", label: "Monitoraggio" },
      { href: "/manutenzione-fotovoltaico", label: "Manutenzione" },
      { href: "/prodotti", label: "Catalogo" },
    ],
  },
  { href: "/progetti", label: "Progetti" },
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
