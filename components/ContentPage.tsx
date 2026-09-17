import { CtaLink } from "./CtaLink";
import type { PageContent } from "@/data/pages";

export function ContentPage({ page }: { page: PageContent }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-semibold tracking-[0.16em] text-amber">CIVILE · INDUSTRIA · A TERRA</p>
      <h1 className="font-display mt-3 text-4xl text-ink">{page.h1}</h1>
      <p className="mt-4 text-lg text-muted">{page.summary}</p>
      <div className="mt-6">
        <CtaLink href={page.cta.href}>{page.cta.label}</CtaLink>
      </div>
      <div className="mt-10 grid gap-8">
        {page.sections.map((section) => (
          <section key={section.h2}>
            <h2 className="font-display text-2xl text-navy">{section.h2}</h2>
            <p className="mt-3 text-ink">{section.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
