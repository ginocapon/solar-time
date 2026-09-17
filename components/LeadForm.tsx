"use client";

import { FormEvent, useState } from "react";

export function LeadForm({ source }: { source: string }) {
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!data.get("gdpr")) return;
    setDone(true);
  }

  if (done) {
    return (
      <div className="border border-navy bg-paper p-6 text-sm">
        Richiesta registrata solo in questa pagina. Modalità DEMO: nessuna email, SMS o WhatsApp è
        partita. Provenienza: {source}. Quando ci sarà un CRM, questo form scriverà un lead.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3" noValidate>
      <input type="hidden" name="provenienza" value={source} />
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label className="grid gap-1 text-sm">
        Nome
        <input required name="nome" className="border border-line px-3 py-2" />
      </label>
      <label className="grid gap-1 text-sm">
        Cognome
        <input required name="cognome" className="border border-line px-3 py-2" />
      </label>
      <label className="grid gap-1 text-sm">
        Telefono
        <input required name="telefono" className="border border-line px-3 py-2" />
      </label>
      <label className="grid gap-1 text-sm">
        Email
        <input required type="email" name="email" className="border border-line px-3 py-2" />
      </label>
      <label className="grid gap-1 text-sm">
        Comune
        <input required name="comune" className="border border-line px-3 py-2" />
      </label>
      <label className="flex items-start gap-2 text-sm">
        <input required type="checkbox" name="gdpr" className="mt-1" />
        Acconsento al trattamento dei dati per essere ricontattato. Informativa DEMO, da verificare
        con un legale prima della pubblicazione.
      </label>
      <button type="submit" className="rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-white">
        Invia richiesta DEMO
      </button>
    </form>
  );
}
