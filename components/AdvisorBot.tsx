"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { botQuestions } from "@/data/bot-questions";
import { company } from "@/data/company";

type Line = { from: "bot" | "you"; text: string };

const CONTACT_AFTER = 5;

export function AdvisorBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [index, setIndex] = useState(0);
  const [asked, setAsked] = useState<string[]>([]);
  const [lines, setLines] = useState<Line[]>([
    {
      from: "bot",
      text: "Buongiorno, sono Luca, installatore Solar Time. Posso aiutarla su un impianto residenziale, una copertura industriale o un campo a terra. I valori online sono indicativi; il progetto si chiude con il sopralluogo. Dopo cinque risposte le proporrò il contatto.",
    },
  ]);

  const question = botQuestions[index];
  const showContact = step >= CONTACT_AFTER;

  const progress = useMemo(() => Math.min(step, CONTACT_AFTER), [step]);

  function answer(label: string) {
    if (!question) return;
    const nextStep = step + 1;
    const used = [...asked, question.id];
    const next = botQuestions.find((item) => !used.includes(item.id)) ?? question;

    setLines((current) => {
      const nextLines: Line[] = [...current, { from: "you", text: label }];
      if (nextStep === CONTACT_AFTER) {
        nextLines.push({
          from: "bot",
          text: "Quinta risposta. Ombre, struttura, rete e consumi effettivi si verificano in sopralluogo. Può continuare a rispondere; per un impianto il passo successivo è il contatto.",
        });
      }
      return nextLines;
    });
    setAsked(used);
    setIndex(botQuestions.findIndex((item) => item.id === next.id));
    setStep(nextStep);
  }

  return (
    <>
      <button
        type="button"
        className={`bot-fab ${open ? "is-open" : ""}`}
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Chiudi chat con l'installatore" : "Apri chat con l'installatore"}
      >
        <Image
          src="/images/bot-installatore.png"
          alt=""
          width={128}
          height={128}
          className="bot-fab-photo"
        />
        {open ? <span className="bot-fab-x">×</span> : null}
      </button>
      {open ? (
        <section className="bot-panel" aria-label="Installatore Solar Time">
          <header className="flex items-center gap-3 bg-navy px-4 py-3 text-cream">
            <Image
              src="/images/bot-installatore.png"
              alt="Luca, installatore Solar Time"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-amber"
              style={{ objectPosition: "50% 32%" }}
            />
            <div className="min-w-0 flex-1">
              <p className="font-display text-lg leading-tight">Luca · installatore</p>
              <p className="text-[11px] uppercase tracking-wider text-cream/70">
                Ordine di grandezza · poi il sopralluogo
              </p>
            </div>
            <span className="text-xs font-bold">
              {progress}/{CONTACT_AFTER}
            </span>
          </header>
          <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
            {lines.map((line, i) => (
              <div
                key={`${line.text}-${i}`}
                className={line.from === "bot" ? "flex items-end gap-2" : "block"}
              >
                {line.from === "bot" ? (
                  <Image
                    src="/images/bot-installatore.png"
                    alt=""
                    width={28}
                    height={28}
                    className="mb-0.5 h-7 w-7 shrink-0 rounded-full object-cover"
                    style={{ objectPosition: "50% 32%" }}
                  />
                ) : null}
                <p
                  className={
                    line.from === "bot"
                      ? "max-w-[88%] rounded-2xl bg-sand px-3 py-2 text-ink"
                      : "ml-auto max-w-[92%] rounded-2xl bg-[linear-gradient(180deg,#ffd27a,#e39b24)] px-3 py-2 font-semibold text-ink"
                  }
                >
                  {line.text}
                </p>
              </div>
            ))}
            {showContact ? (
              <div className="rounded-2xl border border-line bg-white p-3">
                <p className="font-display text-base text-ink">Richiesta di contatto</p>
                <p className="mt-1 text-xs text-muted">
                  Il calcolo sul sito è indicativo. Il dimensionamento sul sito reale lo fa un tecnico.
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  <a href={company.phoneHref} className="btn-3d btn-3d-sun">
                    Telefono DEMO
                  </a>
                  <a href={company.whatsappHref} className="btn-3d btn-3d-ink">
                    WhatsApp DEMO
                  </a>
                  <Link href="/contatti" className="btn-3d btn-3d-ink" onClick={() => setOpen(false)}>
                    Form contatti
                  </Link>
                  <Link href="/calcola" className="btn-3d btn-3d-line" onClick={() => setOpen(false)}>
                    {company.ctaCalc}
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
          {question ? (
            <div className="grid gap-2 border-t border-line bg-paper p-3">
              <p className="font-display text-sm text-ink">{question.q}</p>
              {question.answers.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="rounded-xl border border-line bg-white px-3 py-2 text-left text-sm font-semibold text-ink shadow-[0_3px_0_#c5d0dc] active:translate-y-px"
                  onClick={() => answer(item.label)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}
    </>
  );
}
