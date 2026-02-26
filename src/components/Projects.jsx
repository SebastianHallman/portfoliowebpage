import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projectsData } from '../data/projectsData'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleSelect = (project) => {
    setSelectedProject(project)
  }

  const handleClose = () => setSelectedProject(null)

  return (
    <div
      id="projects"
      className='min-h-screen lg:h-screen w-[90%] text-[#FAFDF6] flex justify-center mx-auto items-center flex-col snap-start relative py-16 lg:py-0'
    >
      <h1 className='text-4xl font-bold lg:text-[64px] text-center text-[#DDD92A] lg:text-left p-6'>
        Projects
      </h1>
      <p className='text-lg lg:text-xl font-medium lg:max-w-3xl p-6 text-center lg:text-left'>
        Take a look at what I have done previously
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full'>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={handleSelect} />
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={handleClose} />
    </div>
  )
}
