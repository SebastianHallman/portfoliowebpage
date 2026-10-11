import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SideBar from "@/components/SideBar";
import { projectsData } from "@/data/projectsData";
import { getProjectCardHref, getProjects } from "@/lib/projects";

function toHomepageCard(project: ReturnType<typeof getProjects>[number]) {
  return {
    id: project.slug,
    title: project.title,
    tech: project.stack,
    descriptionShort: project.summary,
    image: project.cover,
    featured: project.featured,
  };
}

export default function Home() {
  const projects = getProjects();
  const projectLinks = Object.fromEntries(
    projects.flatMap((project) => {
      const href = getProjectCardHref(project);
      return href ? [[project.slug, href]] : [];
    })
  );
  const knownIds = new Set(projectsData.map((project) => project.id));
  const extraFeatured = projects
    .filter((project) => project.featured && !knownIds.has(project.slug))
    .map(toHomepageCard);

  return (
    <main className="bg-black min-h-screen">
      <SideBar />
      <div className="lg:ml-[10%] h-screen overflow-y-auto pt-12 lg:pt-0 md:snap-y md:snap-proximity scroll-smooth scroll-pt-16 lg:scroll-pt-0">
        <Hero />
        <About />
        <WorkExperience />
        <Projects projectLinks={projectLinks} extraFeatured={extraFeatured} />
        <Contact />
        </div>
    </main>
  );
}
