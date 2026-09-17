import { posts } from "@/data/blog";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog e guide",
  description: "Guide su produzione, batteria e fotovoltaico aziendale. Contenuti DEMO Solar Time.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-display text-4xl text-navy">Guide</h1>
      <p className="mt-3 text-muted">Articoli operativi, non slogan. Dati numerici solo come ordine di grandezza.</p>
      <div className="mt-8 grid gap-4">
        {posts.map((post) => (
          <article key={post.slug} className="card-3d">
            <p className="text-xs font-extrabold uppercase tracking-wider text-amber">{post.date}</p>
            <h2 className="font-display mt-2 text-2xl leading-snug text-navy">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{post.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
