import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projectsData } from '../data/projectsData'
import { ChevronDown } from 'lucide-react'

const featuredProjects = projectsData.filter((project) => project.featured)
const archiveProjects = projectsData.filter((project) => !project.featured)

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [archiveOpen, setArchiveOpen] = useState(false)

  const handleSelect = (project) => {
    setSelectedProject(project)
  }

  const handleClose = () => setSelectedProject(null)

  return (
    <div
      id="projects"
      className='min-h-screen w-[90%] text-[#FAFDF6] flex justify-center mx-auto items-center flex-col snap-start relative py-16 lg:py-8'
    >
      <h1 className='text-4xl font-bold lg:text-[64px] text-center text-[#DDD92A] lg:text-left p-6'>
        Projects
      </h1>
      <p className='text-lg lg:text-xl font-medium lg:max-w-3xl p-6 text-center lg:text-left'>
        Look at my proudest work so far.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6 w-full'>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={handleSelect} />
        ))}
      </div>

      <div className='w-full px-6 pb-6'>
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
                onSelect={handleSelect}
                compact
              />
            ))}
          </div>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={handleClose} />
    </div>
  )
}
