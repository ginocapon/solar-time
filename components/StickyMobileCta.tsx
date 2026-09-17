import Link from "next/link";
import { company } from "@/data/company";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-cream lg:hidden">
      <a href={company.phoneHref} className="py-3 text-center text-[11px] font-extrabold uppercase tracking-wider text-ink">
        Telefono
      </a>
      <a href={company.whatsappHref} className="py-3 text-center text-[11px] font-extrabold uppercase tracking-wider text-ink">
        WhatsApp
      </a>
      <Link href="/calcola" className="bg-[linear-gradient(180deg,#ffd27a,#e39b24)] py-3 text-center text-[11px] font-extrabold uppercase tracking-wider text-ink">
        Calcolo
      </Link>
    </div>
  );
}
