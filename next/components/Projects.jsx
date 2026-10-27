'use client';
import ProjectCatalog from './ProjectCatalog'
import { pageShellClass, pageTitleClass } from '@/lib/cardStyles'

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
      className={`${pageShellClass} scroll-mt-14 snap-start relative flex flex-col items-start py-16 text-[#FAFDF6] lg:py-20`}
    >
      <h2 className={pageTitleClass}>
        Projects
      </h2>
      <p className='mb-8 mt-4 text-left text-lg text-slate-400'>
        Look at my proudest work so far.
      </p>
      <div className='flex w-full flex-col'>
        <ProjectCatalog
          projectLinks={projectLinks}
          extraFeatured={extraFeatured}
          extraArchive={extraArchive}
        />
      </div>
    </div>
  )
}
