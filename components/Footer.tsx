import Link from "next/link";
import { company, provinces } from "@/data/company";

export function Footer() {
  return (
    <footer className="border-t border-line bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl tracking-[0.12em]">SOLAR TIME</p>
          <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-cream/55">
            Civile · Industriale · A terra
          </p>
          <p className="mt-3 text-sm text-cream/80">
            {company.legalName}
            <br />
            {company.address}
            <br />
            {company.cap} {company.city} ({company.province})
          </p>
          <p className="mt-3 text-sm text-cream/80">
            {company.phone}
            <br />
            {company.email}
          </p>
          <p className="mt-3 text-xs text-cream/55">Dati aziendali DEMO, sostituibili in seguito.</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider">Servizi</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li>
              <Link href="/fotovoltaico-residenziale">Civile</Link>
            </li>
            <li>
              <Link href="/fotovoltaico-industriale">Capannoni</Link>
            </li>
            <li>
              <Link href="/fotovoltaico-a-terra">A terra</Link>
            </li>
            <li>
              <Link href="/manutenzione-fotovoltaico">Manutenzione</Link>
            </li>
            <li>
              <Link href="/blog">Guide</Link>
            </li>
            <li>
              <Link href="/prodotti">Catalogo</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider">Aree</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            {provinces.map((province) => (
              <li key={province.slug}>
                <Link href={province.href}>{province.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider">Note</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/cookie">Cookie</Link>
            </li>
            <li>
              <Link href="/termini">Termini</Link>
            </li>
            <li>
              <Link href="/campagna">Campagna visiva</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
