import ProjectCatalog from "@/components/ProjectCatalog";
import { projectsData } from "@/data/projectsData";
import { pageShellClass, pageTitleClass } from "@/lib/cardStyles";
import { getProjectLinkMap, getProjects, toHomepageCard } from "@/lib/projects";
import { defaultOgImage } from "@/lib/seo";

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
    images: [defaultOgImage],
  },
};

const projects = getProjects();
const knownIds = new Set(projectsData.map((project) => project.id));

export default function ProjectsList() {
  return (
    <div className="bg-black min-h-screen text-[#FAFDF6]">
      <main className={`${pageShellClass} pb-16 pt-10`}>
        <h1 className={`${pageTitleClass} mb-4`}>Projects</h1>
        <p className="mb-12 text-lg text-slate-400">
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
      </main>
    </div>
  );
}
