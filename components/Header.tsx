"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { company, mainNav } from "@/data/company";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-[rgba(247,245,240,0.96)]">
      <div className="mx-auto flex h-[74px] max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex flex-col justify-center leading-none">
          <span className="font-display text-xl tracking-[0.12em] text-navy">SOLAR TIME</span>
          <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
            Civile · Industriale · A terra
          </span>
        </Link>
        <nav className="nav-desktop hidden items-center gap-5 lg:flex" aria-label="Principale">
          {mainNav.map((item) => (
            <div key={item.href} className="group relative">
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full z-30 min-w-52 rounded-xl border border-line bg-cream p-2 opacity-0 shadow-[0_18px_40px_rgba(11,31,51,0.12)] group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-sand"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="nav-desktop hidden items-center gap-3 lg:flex">
          <Link href="/calcola" className="btn-3d btn-3d-sun" title={company.ctaCalcHint}>
            {company.ctaCalc}
          </Link>
        </div>
        <button
          type="button"
          className={`nav-burger lg:hidden ${open ? "open" : ""}`}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`nav-mobile lg:hidden ${open ? "open" : ""}`}>
        {mainNav.map((item) => (
          <Link key={item.href} href={item.href} className="menu-item" onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <a href={company.phoneHref} className="menu-item" onClick={() => setOpen(false)}>
          {company.phone}
        </a>
        <Link href="/calcola" className="btn-3d btn-3d-sun mt-6" onClick={() => setOpen(false)}>
          {company.ctaCalc}
        </Link>
        <p className="mt-2 text-xs text-muted">{company.ctaCalcHint}</p>
      </div>
    </header>
  );
}
