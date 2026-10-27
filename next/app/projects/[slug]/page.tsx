import Link from "next/link";
import { notFound } from "next/navigation";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getProject, getProjects } from "@/lib/projects";
import SharedImage from "@/components/SharedImage";
import { accentButtonClass, backLinkClass, imageFitClass, mediaFrameClass, pageShellClass, pageTitleClass, readingClass, tagChipClass } from "@/lib/cardStyles";
import "highlight.js/styles/github-dark.css";
import { components } from "@/mdx-components";

const LINK_LABELS: Record<string, string> = {
  github: "GitHub",
  live: "Live",
  play: "Play",
};

function linkLabel(key: string) {
  return LINK_LABELS[key] ?? key.charAt(0).toUpperCase() + key.slice(1);
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project?.hasWriteup) notFound();

  const title = `${project.title} — Sebastian Hällman`;
  const description = project.summary;
  const images = project.cover ? [project.cover] : [];

  return {
    title: project.title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/projects/${project.slug}`,
      images,
    },
    twitter: {
      card: project.cover ? "summary_large_image" : "summary",
      title,
      description,
      images,
    },
  };
}

export function generateStaticParams() {
  const slugs = getProjects()
    .filter((project) => project.hasWriteup)
    .map((project) => ({ slug: project.slug }));
  // Cache Components requires at least one param so the route can prerender.
  // The placeholder 404s via getProject() and is never listed or sitemapped.
  return slugs.length > 0 ? slugs : [{ slug: "__placeholder__" }];
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project?.hasWriteup) notFound();

  const { default: Content } = await evaluate(project.content, {
    ...runtime,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  });

  const links = Object.entries(project.links).filter(([, href]) => href);

  return (
    <div className="min-h-screen bg-black text-[#FAFDF6]">
    <main className={`${pageShellClass} pt-10 pb-16`}>
      <Link
        href="/projects"
        className={backLinkClass}
      >
        ← All projects
      </Link>

      {project.cover && (
        <SharedImage name={`project-${project.slug}`}>
          <div className={`mb-8 aspect-video overflow-hidden rounded-2xl shadow-lg shadow-black/40 ${mediaFrameClass(project.cover, project.imageFit)}`}>
            <img
              src={project.cover}
              alt={project.title}
              className={`h-full w-full ${imageFitClass(project.imageFit)}`}
              loading="eager"
            />
          </div>
        </SharedImage>
      )}

      <div className="flex items-center gap-3 mb-4">
        {project.date && (
          <time dateTime={project.date} className="text-xs text-slate-500">
            {project.date}
          </time>
        )}
      </div>

      <h1 className={`${pageTitleClass} mb-2`}>{project.title}</h1>
      <p className={`${readingClass} text-lg text-[#FAFDF6]/65 mb-6`}>{project.summary}</p>

      {project.stack.length > 0 && (
        <ul className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map((item) => (
            <li key={item} className={`${tagChipClass} max-w-none`}>
              {item}
            </li>
          ))}
        </ul>
      )}

      {links.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-10">
          {links.map(([key, href]) => (
            <a
              key={key}
              href={href}
              className={accentButtonClass}
              target="_blank"
              rel="noreferrer"
            >
              {linkLabel(key)}
            </a>
          ))}
        </div>
      )}

      <hr className={`${readingClass} border-slate-800 mb-10`} />

      <article className={readingClass}>
        <Content components={components} />
      </article>
    </main>
    </div>
  );
}
