import { projects } from "@/data/catalog";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progetti realizzati DEMO",
  description: "Casi studio DEMO Solar Time in Veneto. Non sono impianti di clienti reali.",
};

export default function ProgettiPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-semibold text-navy">Progetti realizzati</h1>
      <p className="mt-3 text-muted">Esempi DEMO per SEO locale e collaudo schede. Non sono commesse reali.</p>
      <div className="deck mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.slug} href={`/progetti/${project.slug}`} className="card-3d block">
            <h2 className="text-xl font-semibold text-navy">{project.title}</h2>
            <p className="mt-2 text-sm text-muted">
              {project.kwp} · {project.city} ({project.province})
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
