"use client";

import { FormEvent, useMemo, useState } from "react";
import { CtaLink } from "./CtaLink";
import { estimate, type CalculatorInput, type CalculatorProfile } from "@/lib/calculator";

const presets: Record<CalculatorProfile, CalculatorInput> = {
  civile: {
    profile: "civile",
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
  },
  capannone: {
    profile: "capannone",
    province: "PD",
    annualKwh: 85000,
    monthlyBill: 2800,
    roofM2: 1200,
    orientation: "sud",
    tilt: 10,
    shading: "nessuno",
    heatPump: false,
    ev: false,
    pool: false,
    wantStorage: false,
  },
  terra: {
    profile: "terra",
    province: "RO",
    annualKwh: 250000,
    monthlyBill: 0,
    roofM2: 8000,
    orientation: "sud",
    tilt: 25,
    shading: "nessuno",
    heatPump: false,
    ev: false,
    pool: false,
    wantStorage: false,
  },
};

export function Calculator() {
  const [input, setInput] = useState<CalculatorInput>(presets.civile);
  const [submitted, setSubmitted] = useState(false);
  const result = useMemo(() => estimate(input), [input]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  const surfaceLabel =
    input.profile === "terra"
      ? "Superficie disponibile (m²)"
      : input.profile === "capannone"
        ? "Superficie copertura (m²)"
        : "Superficie tetto (m²)";

  return (
    <section id="calcolatore" className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber">
        Calcolo impianto · indicativo
      </p>
      <h2 className="font-display mt-2 max-w-2xl text-4xl text-navy">
        Un ordine di grandezza, non il progetto
      </h2>
      <p className="mt-3 max-w-2xl text-muted">
        Ombre, struttura, rete, consumi reali: le variabili sono troppe per un numero chiuso dal sito.
        Qui ottieni una fascia. Il valore è orientarti e poi parlare con un tecnico.
      </p>
      <div className="seg-3d mt-6 flex flex-wrap">
        {(
          [
            ["civile", "Civile"],
            ["capannone", "Capannone"],
            ["terra", "A terra"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={input.profile === id ? "is-on" : ""}
            onClick={() => {
              setInput(presets[id]);
              setSubmitted(false);
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <form onSubmit={onSubmit} className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="grid gap-4">
          <label className="grid gap-1 text-sm">
            Provincia
            <select
              className="field"
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
            {input.profile === "terra" ? "Energia obiettivo (kWh/anno)" : "Consumo annuale (kWh)"}
            <input
              type="number"
              min={0}
              className="field"
              value={input.annualKwh}
              onChange={(e) => setInput({ ...input, annualKwh: Number(e.target.value) })}
            />
          </label>
          {input.profile !== "terra" ? (
            <label className="grid gap-1 text-sm">
              Spesa media mensile (€)
              <input
                type="number"
                min={0}
                className="field"
                value={input.monthlyBill}
                onChange={(e) => setInput({ ...input, monthlyBill: Number(e.target.value) })}
              />
            </label>
          ) : null}
          <label className="grid gap-1 text-sm">
            {surfaceLabel}
            <input
              type="number"
              min={0}
              className="field"
              value={input.roofM2}
              onChange={(e) => setInput({ ...input, roofM2: Number(e.target.value) })}
            />
          </label>
          <label className="grid gap-1 text-sm">
            Orientamento
            <select
              className="field"
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
              className="field"
              value={input.tilt}
              onChange={(e) => setInput({ ...input, tilt: Number(e.target.value) })}
            />
          </label>
          <label className="grid gap-1 text-sm">
            Ombreggiamenti
            <select
              className="field"
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
            {input.profile === "civile" ? (
              <>
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
              </>
            ) : (
              <>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={input.ev}
                    onChange={(e) => setInput({ ...input, ev: e.target.checked })}
                  />
                  Flotta / ricarica
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={input.pool}
                    onChange={(e) => setInput({ ...input, pool: e.target.checked })}
                  />
                  Carichi oltre il diurno
                </label>
              </>
            )}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={input.wantStorage}
                onChange={(e) => setInput({ ...input, wantStorage: e.target.checked })}
              />
              Valuta accumulo
            </label>
          </div>
          <button type="submit" className="btn-3d btn-3d-sun">
            Aggiorna la stima
          </button>
        </div>
        <div className="card-3d bg-sand">
          <p className="text-xs font-semibold tracking-[0.14em] text-navy">RISULTATO — INDICATIVO</p>
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
              <dt className="text-muted">
                {input.profile === "terra" ? "Quota usata in sito (stima)" : "Autoconsumo stimato"}
              </dt>
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
            Non è un preventivo né un dimensionamento. Serve a farti un&apos;idea e a prepararci la
            chiacchierata. Il numero sul tuo tetto, capannone o campo esce dal sopralluogo.
          </p>
          {submitted ? (
            <div className="mt-6 border border-navy bg-white p-4 text-sm">
              Calcolo aggiornato in locale. Per chiudere le variabili: contatti. In DEMO il form non invia
              email.
            </div>
          ) : null}
          <div className="mt-6">
            <CtaLink href="/contatti">Parla con un tecnico</CtaLink>
          </div>
        </div>
      </form>
    </section>
  );
}
