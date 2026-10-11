import type { MetadataRoute } from "next";

import { getPosts } from "@/lib/posts";
import { getProjects } from "@/lib/projects";

const siteUrl = "https://sebastianhallman.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  const projects = getProjects();

  return [
    { url: siteUrl },
    { url: `${siteUrl}/blog` },
    { url: `${siteUrl}/projects` },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.date,
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: project.date,
    })),
  ];
}
