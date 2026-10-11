'use client';
import ProjectCatalog from './ProjectCatalog'

/**
 * @param {{ projectLinks?: Record<string, string>, extraFeatured?: object[], extraArchive?: object[] }} props
 */
export default function Projects({
  projectLinks = {},
  extraFeatured = [],
  extraArchive = [],
}) {
  return (
    <div
      id="projects"
      className='min-h-screen w-[90%] text-[#FAFDF6] flex justify-center mx-auto items-center flex-col snap-start relative py-16 lg:py-8'
    >
      <h2 className='text-4xl font-bold lg:text-[64px] text-center text-[#DDD92A] lg:text-left p-6'>
        Projects
      </h2>
      <p className='text-lg lg:text-xl font-medium lg:max-w-3xl p-6 text-center lg:text-left'>
        Look at my proudest work so far.
      </p>
      <div className='w-full px-6 pb-6 flex flex-col'>
        <ProjectCatalog
          projectLinks={projectLinks}
          extraFeatured={extraFeatured}
          extraArchive={extraArchive}
        />
      </div>
    </div>
  )
}
