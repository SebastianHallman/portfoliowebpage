import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { projectsData } from "@/data/projectsData";
import { getProjectLinkMap, getProjects, toHomepageCard } from "@/lib/projects";
import { defaultOgImage } from "@/lib/seo";

const title = "Sebastian Hällman — Portfolio";
const description =
  "Sebastian Hällman, M.Sc. in Media Technology from KTH. Frontend and fullstack developer focused on UX and accessibility. Builds Mitt Schack and myMathBook.";

export const metadata: Metadata = {
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    type: "website",
    siteName: "Sebastian Hällman",
    locale: "en_US",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [defaultOgImage],
  },
};

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
