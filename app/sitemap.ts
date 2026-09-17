import { posts } from "@/data/blog";
import { projects } from "@/data/catalog";
import { provinces, siteUrl } from "@/data/company";
import { allContentSlugs } from "@/data/pages";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/calcola",
    "/contatti",
    "/prodotti",
    "/progetti",
    "/blog",
    "/campagna",
    ...allContentSlugs.map((slug) => `/${slug}`),
    ...projects.map((project) => `/progetti/${project.slug}`),
    ...posts.map((post) => `/blog/${post.slug}`),
    ...provinces.map((province) => province.href),
  ];
  const unique = [...new Set(paths)];
  return unique.map((path) => ({
    url: `${siteUrl}${path === "" ? "/" : path}`,
    lastModified: new Date("2026-09-17"),
  }));
}
