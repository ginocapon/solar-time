import type { Metadata } from "next";
import { Calculator } from "@/components/Calculator";
import { CtaLink } from "@/components/CtaLink";
import { demoReviews, faqs, products, projects } from "@/data/catalog";
import { company } from "@/data/company";
import { posts } from "@/data/blog";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Solar Time | La tua energia, il tuo risparmio",
  },
  description:
    "Impianti fotovoltaici, accumulo e gestione energia in Veneto. Calcola una stima preliminare. Azienda DEMO Padova.",
};

const solutions = [
  { href: "/fotovoltaico-residenziale", title: "Residenziale", text: "Casa, bolletta, eventuale batteria." },
  { href: "/fotovoltaico-aziende", title: "Aziende", text: "Consumi diurni e tetto produttivo." },
  { href: "/fotovoltaico-industriale", title: "Industriale", text: "Tetti piani, connessione, turni." },
  { href: "/fotovoltaico-con-accumulo", title: "Accumulo", text: "Spostare l'energia alle ore di prelievo." },
  { href: "/wallbox", title: "Wallbox", text: "Ricarica coordinata con il tetto." },
  { href: "/pompe-di-calore", title: "Pompe di calore", text: "Il carico che cambia il dimensionamento." },
  { href: "/monitoraggio-fotovoltaico", title: "Monitoraggio", text: "Capire se l'impianto sta lavorando." },
  { href: "/manutenzione-fotovoltaico", title: "Manutenzione", text: "Assistenza dopo l'allaccio." },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-navy px-4 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.2em] text-white/70">SOLAR TIME · PADOVA · DEMO</p>
          <h1 className="mt-4 max-w-3xl whitespace-pre-line text-4xl font-semibold leading-tight md:text-6xl">
            {company.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{company.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="/calcola" className="!bg-white !text-navy hover:!bg-paper">
              Calcola il tuo impianto
            </CtaLink>
            <CtaLink href="/contatti" variant="secondary" className="!border-white !bg-transparent !text-white">
              Richiedi un sopralluogo
            </CtaLink>
            <CtaLink href="/contatti" variant="ghost" className="!text-white">
              Parla con un tecnico
            </CtaLink>
          </div>
        </div>
      </section>

      <Calculator />

      <section className="bg-paper px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-navy">Perché Solar Time</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Progettazione, installazione, pratiche, monitoraggio e assistenza. Nessun numero di impianti
            o recensioni reali: questa è un&apos;azienda DEMO.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Progettazione", "Si parte da consumi e tetto, non da un kit da catalogo."],
              ["Sistema completo", "Produzione, accumulo, wallbox e gestione dei prelievi."],
              ["Presenza locale", "Veneto: sette province, pagine locali con contenuto proprio."],
            ].map(([title, text]) => (
              <div key={title} className="border border-line bg-white p-5">
                <h3 className="font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="soluzioni" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold text-navy">Soluzioni</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item) => (
            <Link key={item.href} href={item.href} className="border border-line p-5 hover:bg-paper">
              <h3 className="font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navy px-4 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-semibold">Residenziale</h2>
            <p className="mt-3 text-white/75">Autoconsumo, bolletta, eventuale batteria serale.</p>
            <CtaLink href="/fotovoltaico-residenziale" className="mt-5 !bg-white !text-navy">
              Casa
            </CtaLink>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Aziende</h2>
            <p className="mt-3 text-white/75">Cosa valutare prima: curve orarie e tetto.</p>
            <CtaLink href="/fotovoltaico-aziende" className="mt-5 !bg-white !text-navy">
              PMI
            </CtaLink>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Industriale</h2>
            <p className="mt-3 text-white/75">Struttura, connessione, turni. Prima dei moduli.</p>
            <CtaLink href="/fotovoltaico-industriale" className="mt-5 !bg-white !text-navy">
              Industria
            </CtaLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold text-navy">Progetti realizzati (DEMO)</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.slug} href={`/progetti/${project.slug}`} className="border border-line p-5 hover:bg-paper">
              <p className="text-xs tracking-wide text-amber">{project.type}</p>
              <h3 className="mt-2 font-semibold text-navy">{project.title}</h3>
              <p className="mt-2 text-sm text-muted">
                {project.kwp} · {project.city}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-paper px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-navy">Catalogo (estratto DEMO)</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <div key={product.code} className="border border-line bg-white p-4">
                <p className="text-xs text-muted">{product.brand}</p>
                <h3 className="font-semibold text-navy">{product.model}</h3>
                <p className="mt-2 text-sm text-muted">{product.short}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <CtaLink href="/prodotti" variant="secondary">
              Tutto il catalogo DEMO
            </CtaLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold text-navy">Recensioni DEMO</h2>
        <p className="mt-2 text-sm text-muted">Non sono recensioni di clienti reali.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {demoReviews.map((review) => (
            <blockquote key={review.name} className="border border-line p-5">
              <p className="text-sm">{review.text}</p>
              <footer className="mt-3 text-xs text-muted">
                {review.name} · {review.place}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="bg-paper px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold text-navy">Domande frequenti</h2>
          <div className="mt-8 grid gap-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold text-navy">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold text-navy">Guide</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="border border-line p-5 hover:bg-paper">
              <h3 className="font-semibold text-navy">{post.title}</h3>
              <p className="mt-2 text-sm text-muted">{post.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navy px-4 py-16 text-center text-white">
        <h2 className="text-3xl font-semibold">Vuoi una simulazione sul tuo tetto?</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/75">
          Parti dal calcolatore. Il preventivo arriverà quando ci saranno dati CRM: oggi GitHub ospita
          solo il sito DEMO.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <CtaLink href="/calcola" className="!bg-white !text-navy">
            Calcola il tuo impianto
          </CtaLink>
          <CtaLink href="/contatti" variant="secondary" className="!border-white !bg-transparent !text-white">
            Richiedi un sopralluogo
          </CtaLink>
        </div>
      </section>
    </>
  );
}
