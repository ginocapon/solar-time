import { projects } from "@/data/catalog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.description.slice(0, 155) };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs tracking-[0.16em] text-amber">PROGETTO DEMO</p>
      <h1 className="mt-3 text-4xl font-semibold text-navy">{project.title}</h1>
      <p className="mt-4 text-muted">{project.description}</p>
      <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-muted">Località</dt>
          <dd>
            {project.city} ({project.province})
          </dd>
        </div>
        <div>
          <dt className="text-muted">Potenza</dt>
          <dd>{project.kwp}</dd>
        </div>
        <div>
          <dt className="text-muted">Pannelli</dt>
          <dd>{project.panels}</dd>
        </div>
        <div>
          <dt className="text-muted">Inverter</dt>
          <dd>{project.inverter}</dd>
        </div>
        {project.storage ? (
          <div>
            <dt className="text-muted">Accumulo</dt>
            <dd>{project.storage}</dd>
          </div>
        ) : null}
        {project.wallbox ? (
          <div>
            <dt className="text-muted">Wallbox</dt>
            <dd>{project.wallbox}</dd>
          </div>
        ) : null}
        <div className="col-span-2">
          <dt className="text-muted">Produzione</dt>
          <dd>{project.production}</dd>
        </div>
      </dl>
    </article>
  );
}
