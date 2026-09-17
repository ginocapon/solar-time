import { posts } from "@/data/blog";
import { LeadForm } from "@/components/LeadForm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.metaTitle, description: post.metaDescription };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs text-muted">{post.date} · DEMO</p>
      <h1 className="mt-3 text-4xl font-semibold text-navy">{post.title}</h1>
      <p className="mt-4 text-lg text-muted">{post.summary}</p>
      <div className="mt-8 grid gap-8">
        {post.h2.map((block) => (
          <section key={block.q}>
            <h2 className="text-2xl font-semibold text-navy">{block.q}</h2>
            <p className="mt-3">{block.a}</p>
          </section>
        ))}
      </div>
      <div className="mt-12 border border-line p-6">
        <h2 className="text-xl font-semibold text-navy">Vuoi una simulazione personalizzata?</h2>
        <p className="mt-2 text-sm text-muted">Form in pagina, modalità DEMO, nessuna email reale.</p>
        <div className="mt-4">
          <LeadForm source={`blog-${post.slug}`} />
        </div>
      </div>
    </article>
  );
}
