import Link from "next/link";
import { company, provinces } from "@/data/company";

export function Footer() {
  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <p className="tracking-[0.18em]">SOLAR TIME</p>
          <p className="mt-3 text-sm text-white/80">
            {company.legalName}
            <br />
            {company.address}
            <br />
            {company.cap} {company.city} ({company.province})
          </p>
          <p className="mt-3 text-sm text-white/80">
            {company.phone}
            <br />
            {company.email}
          </p>
          <p className="mt-3 text-xs text-white/60">Dati aziendali DEMO, sostituibili in seguito.</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Servizi</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/fotovoltaico-residenziale">Residenziale</Link>
            </li>
            <li>
              <Link href="/fotovoltaico-aziende">Aziende</Link>
            </li>
            <li>
              <Link href="/fotovoltaico-con-accumulo">Accumulo</Link>
            </li>
            <li>
              <Link href="/manutenzione-fotovoltaico">Manutenzione</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Aree</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {provinces.map((province) => (
              <li key={province.slug}>
                <Link href={province.href}>{province.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Note</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
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
