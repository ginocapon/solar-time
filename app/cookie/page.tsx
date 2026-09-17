import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie",
  robots: { index: false, follow: false },
};

export default function CookiePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-4xl font-semibold text-navy">Cookie</h1>
      <p className="mt-4 text-muted">
        In questa fase non è attivo tracking reale. Banner e Consent Mode arriveranno con ID DEMO
        configurabili, non con codici di altri progetti.
      </p>
    </article>
  );
}
