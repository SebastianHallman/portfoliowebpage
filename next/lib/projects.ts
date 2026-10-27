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
  imageFit: "cover" | "contain";
  featured: boolean;
  date: string;
  content: string;
  hasWriteup: boolean;
};

const EXTERNAL_LINK_KEYS = ["live", "play", "github"] as const;

function isPublishedProjectFile(name: string) {
  return name.endsWith(".mdx") && !name.startsWith("_");
}

export function hasProjectWriteup(content: string) {
  return content.trim().length > 0;
}

export function getExternalProjectHref(project: Pick<Project, "links">) {
  for (const key of EXTERNAL_LINK_KEYS) {
    const href = project.links[key];
    if (href) return href;
  }

  return Object.values(project.links).find((href) => href);
}

export function getProjectCardHref(project: Project) {
  if (project.hasWriteup) {
    return `/projects/${project.slug}`;
  }

  return getExternalProjectHref(project);
}

export function getProjectLinkMap(projects: Project[]) {
  return Object.fromEntries(
    projects.flatMap((project) => {
      const href = getProjectCardHref(project);
      return href ? [[project.slug, href]] : [];
    })
  );
}

export function toHomepageCard(project: Project) {
  return {
    id: project.slug,
    title: project.title,
    tech: project.stack,
    descriptionShort: project.summary,
    descriptionLong: project.summary,
    links: {
      demo: project.links.live,
      site: project.links.play,
      repo: project.links.github,
    },
    image: project.cover,
    imageFit: project.imageFit,
    featured: project.featured,
  };
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
      const imageFit: "cover" | "contain" = data.imageFit === "contain" ? "contain" : "cover";

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
        imageFit,
        featured: Boolean(data.featured),
        date:
          data.date instanceof Date
            ? data.date.toISOString().slice(0, 10)
            : String(data.date ?? ""),
        content,
        hasWriteup: hasProjectWriteup(content),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getProject(slug: string) {
  return getProjects().find((project) => project.slug === slug);
}
