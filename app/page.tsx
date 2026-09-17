import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calculator } from "@/components/Calculator";
import { CtaLink } from "@/components/CtaLink";
import { Reveal } from "@/components/Reveal";
import { demoReviews, faqs, products, projects } from "@/data/catalog";
import { company } from "@/data/company";
import { posts } from "@/data/blog";
import { publicSrc } from "@/lib/asset";

export const metadata: Metadata = {
  title: {
    absolute: "Solar Time | Fotovoltaico civile, industriale e a terra",
  },
  description:
    "Impianti fotovoltaici in Veneto: tetti civili, coperture su capannoni e campi a terra. Stima preliminare. Azienda DEMO Padova.",
};

const lines = [
  {
    href: "/fotovoltaico-residenziale",
    title: "Civile",
    text: "Abitazioni e condomini: produzione, autoconsumo ed eventuale accumulo.",
    image: publicSrc("/images/line-civile.png"),
    alt: "Tetto residenziale in Veneto con pannelli fotovoltaici",
  },
  {
    href: "/fotovoltaico-industriale",
    title: "Capannoni e industria",
    text: "Coperture piane, struttura, connessione e consumi diurni di produzione.",
    image: publicSrc("/images/line-capannoni.png"),
    alt: "Capannone industriale con copertura fotovoltaica",
  },
  {
    href: "/fotovoltaico-a-terra",
    title: "Fotovoltaico a terra",
    text: "Campi, tavole, viabilità e iter di connessione. Superficie e rete prima dei moduli.",
    image: publicSrc("/images/line-fotovoltaico-a-terra.png"),
    alt: "Impianto fotovoltaico a terra con file di moduli in pianura",
  },
];

const solutions = [
  { href: "/fotovoltaico-residenziale", title: "Civile", text: "Casa, condominio, bolletta e batteria." },
  { href: "/fotovoltaico-aziende", title: "Aziende", text: "Consumi diurni e tetto produttivo." },
  { href: "/fotovoltaico-industriale", title: "Capannoni", text: "Copertura, struttura, turni e cabina." },
  { href: "/fotovoltaico-a-terra", title: "A terra", text: "Campi fotovoltaici e connessione." },
  { href: "/fotovoltaico-con-accumulo", title: "Accumulo", text: "Spostare l'energia alle ore di prelievo." },
  { href: "/wallbox", title: "Wallbox", text: "Ricarica coordinata con produzione e flotta." },
  { href: "/monitoraggio-fotovoltaico", title: "Monitoraggio", text: "Capire se l'impianto sta lavorando." },
  { href: "/manutenzione-fotovoltaico", title: "Manutenzione", text: "Assistenza dopo l'allaccio." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-shell">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber">
              Veneto · civile · industria · a terra
            </p>
            <h1 className="font-display mt-4 max-w-xl text-4xl leading-[1.08] text-cream md:text-6xl">
              Fotovoltaico civile,
              <br />
              industriale
              <br />
              e a terra.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">{company.subtitle}</p>
            <div className="mt-8 flex flex-wrap items-start gap-3">
              <div>
                <CtaLink href="/calcola">{company.ctaCalc}</CtaLink>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-cream/55">
                  {company.ctaCalcHint}
                </p>
              </div>
              <CtaLink href="/fotovoltaico-industriale" variant="secondary">
                Coperture industriali
              </CtaLink>
              <Link href="/fotovoltaico-a-terra" className="btn-3d btn-3d-ghost">
                Impianti a terra
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-frame">
              <div className="slo-mo">
                <Image
                  src={publicSrc("/images/hero-fotovoltaico-civile-industriale-terra.png")}
                  alt="Paesaggio veneto con fotovoltaico civile sul tetto, copertura di un capannone e impianto a terra in campo"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="slo-mo-media"
                />
              </div>
            </div>
            <p className="hero-caption">
              Tetto residenziale, copertura di capannone e campo fotovoltaico a terra.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-16">
        <Reveal className="mx-auto max-w-6xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber">Ambiti di intervento</p>
          <h2 className="font-display mt-2 max-w-3xl text-4xl text-navy">
            Residenziale, industria e impianti a terra
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Un tetto civile, una copertura di capannone e un campo a terra si progettano con criteri
            diversi: struttura, connessione alla rete e profilo dei consumi. Solar Time interviene su
            tutti e tre gli ambiti.
          </p>
          <div className="deck mt-8 grid gap-4 md:grid-cols-3">
            {lines.map((item) => (
              <Link key={item.href} href={item.href} className="card-3d photo-card block">
                <div className="slo-mo">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="slo-mo-media"
                  />
                </div>
                <div className="pad">
                  <h3 className="font-display text-xl leading-snug text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <Calculator />

      <section className="bg-sand px-4 py-16">
        <Reveal className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl text-navy">Perché Solar Time</h2>
          <p className="mt-3 max-w-2xl text-muted">
            La progettazione parte da consumi, struttura disponibile e allaccio. Azienda DEMO: i valori
            numerici del sito sono illustrativi.
          </p>
          <div className="deck mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Struttura e sito", "Si verifica prima cosa regge l'impianto e come si allaccia: falda, copertura piana o tavole a terra."],
              ["Profilo dei prelievi", "I consumi di una abitazione, di un laboratorio e di un campo in immissione non si dimensionano allo stesso modo."],
              ["Area Veneto", "Sette province, con pagine locali su tetti, capannoni e campi del territorio."],
            ].map(([title, text]) => (
              <div key={title} className="card-3d">
                <h3 className="font-display text-xl leading-snug text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="soluzioni" className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <h2 className="font-display text-4xl text-navy">Soluzioni</h2>
          <div className="deck mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item) => (
              <Link key={item.href} href={item.href} className="card-3d block">
                <h3 className="font-display text-xl leading-snug text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-navy px-4 py-16 text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-display text-3xl">Civile</h2>
            <p className="mt-3 text-cream/75">Autoconsumo, bolletta, eventuale batteria serale.</p>
            <CtaLink href="/fotovoltaico-residenziale" className="mt-5">
              Residenziale
            </CtaLink>
          </div>
          <div>
            <h2 className="font-display text-3xl">Industriale</h2>
            <p className="mt-3 text-cream/75">Capannoni, tetti piani, turni e connessione.</p>
            <CtaLink href="/fotovoltaico-industriale" className="mt-5">
              Capannoni
            </CtaLink>
          </div>
          <div>
            <h2 className="font-display text-3xl">A terra</h2>
            <p className="mt-3 text-cream/75">Campi, tavole, viabilità e potenza in immissione.</p>
            <CtaLink href="/fotovoltaico-a-terra" className="mt-5">
              Campi FV
            </CtaLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <h2 className="font-display text-4xl text-navy">Progetti realizzati (DEMO)</h2>
          <div className="deck mt-8 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <Link key={project.slug} href={`/progetti/${project.slug}`} className="card-3d block">
                <p className="text-xs font-extrabold uppercase tracking-wider text-amber">{project.type}</p>
                <h3 className="font-display mt-2 text-xl leading-snug text-navy">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.kwp} · {project.city}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-sand px-4 py-16">
        <Reveal className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl text-navy">Catalogo (estratto DEMO)</h2>
          <div className="deck mt-8 grid gap-4 md:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <div key={product.code} className="card-3d">
                <p className="text-xs text-muted">{product.brand}</p>
                <h3 className="font-display text-xl text-navy">{product.model}</h3>
                <p className="mt-2 text-sm text-muted">{product.short}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <CtaLink href="/prodotti" variant="secondary">
              Tutto il catalogo DEMO
            </CtaLink>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-4xl text-navy">Recensioni DEMO</h2>
        <p className="mt-2 text-sm text-muted">Non sono recensioni di clienti reali.</p>
        <div className="deck mt-8 grid gap-4 md:grid-cols-3">
          {demoReviews.map((review) => (
            <blockquote key={review.name} className="card-3d">
              <p className="text-sm">{review.text}</p>
              <footer className="mt-3 text-xs text-muted">
                {review.name} · {review.place}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="bg-sand px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl text-navy">Domande frequenti</h2>
          <div className="deck mt-8 grid gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="card-3d">
                <h3 className="font-display text-xl leading-snug text-navy">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-4xl text-navy">Guide</h2>
          <div className="deck mt-8 grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card-3d block">
                <p className="text-xs font-extrabold uppercase tracking-wider text-amber">{post.date}</p>
                <h3 className="font-display mt-2 text-xl leading-snug text-navy">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{post.summary}</p>
              </Link>
            ))}
          </div>
      </section>

      <section className="bg-navy px-4 py-16 text-center text-cream">
        <h2 className="font-display text-4xl">Richiesta di valutazione</h2>
        <p className="mx-auto mt-3 max-w-xl text-cream/75">
          Il calcolo online fornisce un ordine di grandezza. Il dimensionamento definitivo richiede
          sopralluogo. L&apos;assistente, dopo cinque risposte, propone il contatto.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CtaLink href="/calcola">{company.ctaCalc}</CtaLink>
          <CtaLink href="/contatti" variant="secondary">
            Richiedi un sopralluogo
          </CtaLink>
        </div>
      </section>
    </>
  );
}
