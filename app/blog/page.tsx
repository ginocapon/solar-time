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
      <h1 className="text-4xl font-semibold text-navy">Guide</h1>
      <p className="mt-3 text-muted">Articoli operativi, non slogan. Dati numerici solo come ordine di grandezza.</p>
      <div className="mt-8 grid gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-line pb-6">
            <p className="text-xs text-muted">{post.date}</p>
            <h2 className="mt-1 text-2xl font-semibold text-navy">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mt-2 text-muted">{post.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
