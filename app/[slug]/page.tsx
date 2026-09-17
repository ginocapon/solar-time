import { ContentPage } from "@/components/ContentPage";
import { allContentSlugs, findPage } from "@/data/pages";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allContentSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = findPage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
  };
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = findPage(slug);
  if (!page) notFound();
  return <ContentPage page={page} />;
}
