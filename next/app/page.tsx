import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SideBar from "@/components/SideBar";
import { getProjects } from "@/lib/projects";

export default function Home() {
  const projectPageSlugs = getProjects().map((project) => project.slug);

  return (
    <main className="bg-black min-h-screen">
      <SideBar />
      <div className="lg:ml-[10%] h-screen overflow-y-auto pt-12 lg:pt-0 md:snap-y md:snap-proximity scroll-smooth scroll-pt-16 lg:scroll-pt-0">
        <Hero />
        <About />
        <WorkExperience />
        <Projects projectPageSlugs={projectPageSlugs} />
        <Contact />
        </div>
    </main>
  );
}
