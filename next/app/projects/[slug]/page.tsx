import Link from "next/link";
import { notFound } from "next/navigation";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getProject, getProjects } from "@/lib/projects";
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

  if (!project) notFound();

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
  const slugs = getProjects().map((project) => ({ slug: project.slug }));
  // Cache Components requires at least one param so the route can prerender.
  // The placeholder 404s via getProject() and is never listed or sitemapped.
  return slugs.length > 0 ? slugs : [{ slug: "__placeholder__" }];
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const { default: Content } = await evaluate(project.content, {
    ...runtime,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  });

  const links = Object.entries(project.links).filter(([, href]) => href);

  return (
    <main className="max-w-2xl mx-auto px-6 py-16 text-[#FAFDF6]">
      <Link
        href="/projects"
        className="text-sm text-[#EAE151] opacity-60 hover:opacity-100 transition mb-10 inline-block"
      >
        ← All projects
      </Link>

      {project.cover && (
        <img
          src={project.cover}
          alt={project.title}
          className="w-full rounded-2xl shadow-lg shadow-black/40 mb-8"
          loading="eager"
        />
      )}

      <div className="flex items-center gap-3 mb-4">
        {project.date && (
          <time dateTime={project.date} className="text-xs text-slate-500">
            {project.date}
          </time>
        )}
      </div>

      <h1 className="text-4xl text-[#EAE151] font-bold mb-2">{project.title}</h1>
      <p className="text-lg text-[#EAE151] opacity-70 mb-6">{project.summary}</p>

      {project.stack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((item) => (
            <span
              key={item}
              className="text-xs bg-[#DDD92A] text-black px-2 py-1 rounded-full font-semibold"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {links.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-10">
          {links.map(([key, href]) => (
            <a
              key={key}
              href={href}
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-[#DDD92A] bg-[#DDD92A]/10 text-[#FAFDF6] hover:bg-[#DDD92A] hover:text-black transition"
              target="_blank"
              rel="noreferrer"
            >
              {linkLabel(key)}
            </a>
          ))}
        </div>
      )}

      <hr className="border-slate-800 mb-10" />

      <article>
        <Content components={components} />
      </article>
    </main>
  );
}
