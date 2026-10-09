import type { MetadataRoute } from "next";

import { getPosts } from "@/lib/posts";

const siteUrl = "https://sebastianhallman.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();

  return [
    { url: siteUrl },
    { url: `${siteUrl}/blog` },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.date,
    })),
  ];
}
