"use client";

import { FormEvent, useMemo, useState } from "react";
import { CtaLink } from "./CtaLink";
import { estimate, type CalculatorInput } from "@/lib/calculator";

const initial: CalculatorInput = {
  province: "PD",
  annualKwh: 4200,
  monthlyBill: 140,
  roofM2: 40,
  orientation: "sud",
  tilt: 30,
  shading: "nessuno",
  heatPump: false,
  ev: false,
  pool: false,
  wantStorage: true,
};

export function Calculator() {
  const [input, setInput] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const result = useMemo(() => estimate(input), [input]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="calcolatore" className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-xs font-semibold tracking-[0.16em] text-amber">STIMA PRELIMINARE</p>
      <h2 className="mt-2 max-w-2xl text-3xl font-semibold text-navy">
        Quanta potenza serve, in ordine di grandezza
      </h2>
      <p className="mt-3 max-w-2xl text-muted">
        Non è un progetto tecnico. Il risultato usa fattori provinciali DEMO e i dati che inserisci. Per
        una simulazione personalizzata serve sopralluogo.
      </p>
      <form onSubmit={onSubmit} className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="grid gap-4">
          <label className="grid gap-1 text-sm">
            Provincia
            <select
              className="border border-line px-3 py-2"
              value={input.province}
              onChange={(e) => setInput({ ...input, province: e.target.value })}
            >
              <option value="PD">Padova</option>
              <option value="VI">Vicenza</option>
              <option value="VR">Verona</option>
              <option value="TV">Treviso</option>
              <option value="BL">Belluno</option>
              <option value="VE">Venezia</option>
              <option value="RO">Rovigo</option>
            </select>
          </label>
          <label className="grid gap-1 text-sm">
            Consumo annuale (kWh)
            <input
              type="number"
              min={0}
              className="border border-line px-3 py-2"
              value={input.annualKwh}
              onChange={(e) => setInput({ ...input, annualKwh: Number(e.target.value) })}
            />
          </label>
          <label className="grid gap-1 text-sm">
            Spesa media mensile (€)
            <input
              type="number"
              min={0}
              className="border border-line px-3 py-2"
              value={input.monthlyBill}
              onChange={(e) => setInput({ ...input, monthlyBill: Number(e.target.value) })}
            />
          </label>
          <label className="grid gap-1 text-sm">
            Superficie tetto (m²)
            <input
              type="number"
              min={0}
              className="border border-line px-3 py-2"
              value={input.roofM2}
              onChange={(e) => setInput({ ...input, roofM2: Number(e.target.value) })}
            />
          </label>
          <label className="grid gap-1 text-sm">
            Orientamento
            <select
              className="border border-line px-3 py-2"
              value={input.orientation}
              onChange={(e) =>
                setInput({ ...input, orientation: e.target.value as CalculatorInput["orientation"] })
              }
            >
              <option value="sud">Sud</option>
              <option value="sud-est">Sud-est</option>
              <option value="sud-ovest">Sud-ovest</option>
              <option value="est">Est</option>
              <option value="ovest">Ovest</option>
            </select>
          </label>
          <label className="grid gap-1 text-sm">
            Inclinazione (°)
            <input
              type="number"
              min={0}
              max={60}
              className="border border-line px-3 py-2"
              value={input.tilt}
              onChange={(e) => setInput({ ...input, tilt: Number(e.target.value) })}
            />
          </label>
          <label className="grid gap-1 text-sm">
            Ombreggiamenti
            <select
              className="border border-line px-3 py-2"
              value={input.shading}
              onChange={(e) =>
                setInput({ ...input, shading: e.target.value as CalculatorInput["shading"] })
              }
            >
              <option value="nessuno">Nessuno</option>
              <option value="parziale">Parziale</option>
              <option value="elevato">Elevato</option>
            </select>
          </label>
          <div className="flex flex-wrap gap-4 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={input.heatPump}
                onChange={(e) => setInput({ ...input, heatPump: e.target.checked })}
              />
              Pompa di calore
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={input.ev}
                onChange={(e) => setInput({ ...input, ev: e.target.checked })}
              />
              Auto elettrica
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={input.pool}
                onChange={(e) => setInput({ ...input, pool: e.target.checked })}
              />
              Piscina
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={input.wantStorage}
                onChange={(e) => setInput({ ...input, wantStorage: e.target.checked })}
              />
              Valuta accumulo
            </label>
          </div>
          <button type="submit" className="rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-white">
            Aggiorna la stima
          </button>
        </div>
        <div className="border border-line bg-paper p-6">
          <p className="text-xs font-semibold tracking-[0.14em] text-navy">RISULTATO — STIMA PRELIMINARE</p>
          <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-muted">Potenza indicativa</dt>
              <dd className="text-2xl font-semibold text-navy">{result.kwp} kWp</dd>
            </div>
            <div>
              <dt className="text-muted">Pannelli (440 W)</dt>
              <dd className="text-2xl font-semibold text-navy">{result.panels}</dd>
            </div>
            <div>
              <dt className="text-muted">Produzione annua stimata</dt>
              <dd className="text-xl font-semibold">{result.yearlyKwh} kWh</dd>
            </div>
            <div>
              <dt className="text-muted">Autoconsumo stimato</dt>
              <dd className="text-xl font-semibold">{result.selfConsumption} kWh</dd>
            </div>
            <div>
              <dt className="text-muted">Energia potenzialmente immessa</dt>
              <dd className="text-xl font-semibold">{result.exported} kWh</dd>
            </div>
            <div>
              <dt className="text-muted">Riduzione prelievi</dt>
              <dd className="text-xl font-semibold">{result.gridReduction}%</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-muted">Accumulo indicativo</dt>
              <dd className="text-xl font-semibold">
                {result.storageKwh ? `${result.storageKwh} kWh` : "Non richiesto in questa stima"}
              </dd>
            </div>
          </dl>
          <p className="mt-4 text-xs text-muted">
            I numeri non sono un progetto definitivo né un preventivo. Nessun lead viene salvato: non c&apos;è
            ancora un CRM.
          </p>
          {submitted ? (
            <div className="mt-6 border border-navy bg-white p-4 text-sm">
              Stima aggiornata in locale. Vuoi una simulazione personalizzata? Il form contatti è in
              modalità DEMO e non invia email.
            </div>
          ) : null}
          <div className="mt-6">
            <CtaLink href="/contatti">Richiedi simulazione</CtaLink>
          </div>
        </div>
      </form>
    </section>
  );
}
