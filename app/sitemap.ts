import { posts } from "@/data/blog";
import { projects } from "@/data/catalog";
import { provinces } from "@/data/company";
import { allContentSlugs } from "@/data/pages";
import type { MetadataRoute } from "next";

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
    url: `https://solartime.it${path}`,
    lastModified: new Date("2026-09-17"),
  }));
}
