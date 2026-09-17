import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Campagna visiva Missione indipendenza",
  description:
    "Visual DEMO Solar Time: fotovoltaico, accumulo e claim di indipendenza. Non è la hero LCP del sito.",
};

export default function CampagnaPage() {
  return (
    <article className="mx-auto max-w-5xl px-4 py-14">
      <h1 className="text-4xl font-semibold text-navy">Missione indipendenza</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Visual di campagna DEMO. Non è la foto principale della homepage: resta su questa pagina per non
        pesare sul Largest Contentful Paint.
      </p>
      <Image
        src="/images/solar-time-hero-luna-bionda.png"
        alt="Visual campagna Solar Time: impianto fotovoltaico e accumulo su scenario lunare, bandiera con il claim di indipendenza energetica"
        width={1600}
        height={900}
        className="mt-8 h-auto w-full border border-line"
        priority
      />
    </article>
  );
}
