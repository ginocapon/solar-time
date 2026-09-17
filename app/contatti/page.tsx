import { LeadForm } from "@/components/LeadForm";
import { company } from "@/data/company";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Contatti DEMO Solar Time Padova. Il form non invia email.",
};

export default function ContattiPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-semibold text-navy">Parla con un tecnico</h1>
        <p className="mt-4 text-muted">
          Telefono, WhatsApp ed email sono dati DEMO. Il form resta in pagina e non spedisce
          messaggi reali.
        </p>
        <ul className="mt-6 space-y-2 text-sm">
          <li>{company.address}, {company.cap} {company.city}</li>
          <li>
            <a href={company.phoneHref}>{company.phone}</a>
          </li>
          <li>
            <a href={company.whatsappHref}>WhatsApp {company.whatsapp}</a>
          </li>
          <li>{company.email}</li>
        </ul>
      </div>
      <LeadForm source="contatti" />
    </div>
  );
}
