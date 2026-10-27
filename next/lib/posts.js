import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPosts() {
  return readdirSync(postsDirectory, { withFileTypes: true })
    .filter((file) => file.isFile() && file.name.endsWith(".mdx"))
    .map((file) => {
      const source = readFileSync(
        path.join(postsDirectory, file.name),
        "utf8"
      );
      const { data, content } = matter(source);

      return {
        ...data,
        imageFit: data.imageFit === "contain" ? "contain" : "cover",
        slug: file.name.replace(/\.mdx$/, ""),
        date:
          data.date instanceof Date
            ? data.date.toISOString().slice(0, 10)
            : String(data.date ?? ""),
        content,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug) {
  return getPosts().find((post) => post.slug === slug);
}