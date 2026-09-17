import Link from "next/link";
import { company } from "@/data/company";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-white lg:hidden">
      <a href={company.phoneHref} className="py-3 text-center text-xs font-semibold text-navy">
        Telefono
      </a>
      <a href={company.whatsappHref} className="py-3 text-center text-xs font-semibold text-navy">
        WhatsApp
      </a>
      <Link href="/calcola" className="bg-navy py-3 text-center text-xs font-semibold text-white">
        Calcola
      </Link>
    </div>
  );
}
