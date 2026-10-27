import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { projectsData } from "@/data/projectsData";
import { getProjectLinkMap, getProjects, toHomepageCard } from "@/lib/projects";

export default function Home() {
  const projects = getProjects();
  const knownIds = new Set(projectsData.map((project) => project.id));

  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <About />
      <WorkExperience />
      <Projects
        projectLinks={getProjectLinkMap(projects)}
        extraFeatured={projects
          .filter((project) => project.featured && !knownIds.has(project.slug))
          .map(toHomepageCard)}
        extraArchive={projects
          .filter((project) => !project.featured && !knownIds.has(project.slug))
          .map(toHomepageCard)}
      />
      <Contact />
    </main>
  );
}
