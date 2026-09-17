"use client";

import Link from "next/link";
import { useState } from "react";
import { company, mainNav } from "@/data/company";
import { CtaLink } from "./CtaLink";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-semibold tracking-[0.18em] text-navy">
          SOLAR TIME
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Principale">
          {mainNav.map((item) => (
            <div key={item.href} className="group relative">
              <Link href={item.href} className="text-sm font-medium text-ink hover:text-navy">
                {item.label}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full z-30 min-w-52 border border-line bg-white p-2 opacity-0 group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-3 py-2 text-sm text-ink hover:bg-paper"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <CtaLink href="/calcola">Calcola il tuo impianto</CtaLink>
        </div>
        <button
          type="button"
          className="lg:hidden rounded-sm border border-navy px-3 py-2 text-sm text-navy"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="text-navy" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a href={company.phoneHref} className="text-sm font-semibold text-navy">
              {company.phone}
            </a>
            <a href={company.whatsappHref} className="text-sm font-semibold text-navy">
              WhatsApp DEMO
            </a>
            <CtaLink href="/calcola">Calcola il tuo impianto</CtaLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
