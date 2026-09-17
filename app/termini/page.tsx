import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termini",
  robots: { index: false, follow: false },
};

export default function TerminiPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-4xl font-semibold text-navy">Termini</h1>
      <p className="mt-4 text-muted">
        Piattaforma DEMO. Calcolatore e catalogo non costituiscono offerta. Solar Time S.r.l. e i recapiti
        attuali sono fittizi.
      </p>
    </article>
  );
}
