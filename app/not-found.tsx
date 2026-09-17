import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-4xl font-semibold text-navy">Pagina non trovata</h1>
      <p className="mt-4 text-muted">L&apos;indirizzo non esiste su Solar Time.</p>
      <Link href="/" className="mt-6 inline-block font-semibold text-navy">
        Torna alla home
      </Link>
    </div>
  );
}
