import Link from "next/link";

import { getProjectCardHref, getProjects, type Project } from "@/lib/projects";

export const metadata = {
  title: "Projects",
  description: "Selected work by Sebastian Hällman.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects — Sebastian Hällman",
    description: "Selected work by Sebastian Hällman.",
    url: "/projects",
    type: "website",
  },
};

const projects = getProjects();
const cardClassName =
  "group block border border-slate-800 rounded-2xl overflow-hidden hover:border-[#DDD92A] transition duration-300";

function ProjectListCard({ project }: { project: Project }) {
  const href = getProjectCardHref(project);
  const inner = (
    <>
      {project.cover && (
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs text-slate-500">{project.date}</span>
        </div>
        <h2 className="text-2xl font-bold group-hover:text-[#DDD92A] transition duration-300 mb-1">
          {project.title}
        </h2>
        <p className="text-slate-400 leading-relaxed">{project.summary}</p>
        {project.stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
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
      </div>
    </>
  );

  if (href && project.hasWriteup) {
    return (
      <Link href={href} className={cardClassName}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cardClassName}>
        {inner}
      </a>
    );
  }

  return <div className={cardClassName}>{inner}</div>;
}

export default function ProjectsList() {
  return (
    <div className="bg-black min-h-screen text-[#FAFDF6]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-sm text-[#EAE151] opacity-60 hover:opacity-100 transition mb-10 inline-block"
        >
          ← Back to portfolio
        </Link>

        <h1 className="text-5xl font-bold text-[#DDD92A] mb-4">Projects</h1>
        <p className="text-lg text-slate-400 mb-12">
          Selected work. More coming soon.
        </p>

        <div className="flex flex-col gap-8">
          {projects.length === 0 && (
            <p className="text-slate-500">No projects yet. Check back later!</p>
          )}
          {projects.map((project) => (
            <ProjectListCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
