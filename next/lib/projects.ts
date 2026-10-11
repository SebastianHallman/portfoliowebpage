import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export type ProjectLinks = {
  github?: string;
  live?: string;
  play?: string;
  [key: string]: string | undefined;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  links: ProjectLinks;
  cover?: string;
  featured: boolean;
  date: string;
  content: string;
};

function isPublishedProjectFile(name: string) {
  return name.endsWith(".mdx") && !name.startsWith("_");
}

export function getProjects(): Project[] {
  if (!existsSync(projectsDirectory)) {
    return [];
  }

  return readdirSync(projectsDirectory, { withFileTypes: true })
    .filter((file) => file.isFile() && isPublishedProjectFile(file.name))
    .map((file) => {
      const source = readFileSync(
        path.join(projectsDirectory, file.name),
        "utf8"
      );
      const { data, content } = matter(source);

      return {
        slug: file.name.replace(/\.mdx$/, ""),
        title: String(data.title ?? ""),
        summary: String(data.summary ?? ""),
        stack: Array.isArray(data.stack) ? data.stack.map(String) : [],
        links:
          data.links && typeof data.links === "object" && !Array.isArray(data.links)
            ? Object.fromEntries(
                Object.entries(data.links).filter(
                  (entry): entry is [string, string] => typeof entry[1] === "string"
                )
              )
            : {},
        cover: data.cover ? String(data.cover) : undefined,
        featured: Boolean(data.featured),
        date:
          data.date instanceof Date
            ? data.date.toISOString().slice(0, 10)
            : String(data.date ?? ""),
        content,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getProject(slug: string) {
  return getProjects().find((project) => project.slug === slug);
}
