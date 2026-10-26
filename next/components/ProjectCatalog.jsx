'use client';
import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projectsData } from '../data/projectsData'
import { ChevronDown } from 'lucide-react'

/**
 * @param {{
 *   projectLinks?: Record<string, string>,
 *   extraFeatured?: object[],
 *   extraArchive?: object[],
 * }} props
 */
export default function ProjectCatalog({
  projectLinks = {},
  extraFeatured = [],
  extraArchive = [],
}) {
  const featuredProjects = [
    ...projectsData.filter((project) => project.featured),
    ...extraFeatured,
  ]
  const archiveProjects = [
    ...projectsData.filter((project) => !project.featured),
    ...extraArchive,
  ]
  const [selectedProject, setSelectedProject] = useState(null)
  const [archiveOpen, setArchiveOpen] = useState(false)

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
            href={projectLinks[project.id]?.startsWith('/projects/') ? undefined : projectLinks[project.id]}
          />
        ))}
      </div>

      {archiveProjects.length > 0 && (
        <div className='w-full pt-6'>
          <button
            type='button'
            onClick={() => setArchiveOpen((open) => !open)}
            className='flex items-center gap-2 text-[#EAE151] hover:text-[#DDD92A] transition focus:outline-none focus:ring-2 focus:ring-[#DDD92A] rounded-md px-1 py-1'
            aria-expanded={archiveOpen}
          >
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${archiveOpen ? 'rotate-180' : ''}`}
              aria-hidden='true'
            />
            <span className='text-sm uppercase tracking-[0.18em]'>Archive</span>
            <span className='text-sm text-[#FAFDF6]/50 normal-case tracking-normal'>
              More projects that are less polished and more experimental
            </span>
          </button>

          {archiveOpen && (
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
              {archiveProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                  compact
                  href={projectLinks[project.id]?.startsWith('/projects/') ? undefined : projectLinks[project.id]}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <ProjectModal
        project={selectedProject}
        writeupHref={selectedProject && projectLinks[selectedProject.id]?.startsWith('/projects/')
          ? projectLinks[selectedProject.id]
          : undefined}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}
