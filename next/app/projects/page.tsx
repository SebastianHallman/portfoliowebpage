import Link from "next/link";

import ProjectCatalog from "@/components/ProjectCatalog";
import { projectsData } from "@/data/projectsData";
import { getProjectLinkMap, getProjects, toHomepageCard } from "@/lib/projects";

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
const knownIds = new Set(projectsData.map((project) => project.id));

export default function ProjectsList() {
  return (
    <div className="bg-black min-h-screen text-[#FAFDF6]">
      <div className="w-[90%] max-w-6xl mx-auto py-16">
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

        <ProjectCatalog
          projectLinks={getProjectLinkMap(projects)}
          extraFeatured={projects
            .filter((project) => project.featured && !knownIds.has(project.slug))
            .map(toHomepageCard)}
          extraArchive={projects
            .filter((project) => !project.featured && !knownIds.has(project.slug))
            .map(toHomepageCard)}
        />
      </div>
    </div>
  );
}
