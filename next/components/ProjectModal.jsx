import React, { useEffect } from 'react'
import Link from 'next/link'

export default function ProjectModal({ project, onClose, writeupHref }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  if (!project) return null

  const linkClassName =
    'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-[#DDD92A] bg-[#DDD92A]/10 text-[#FAFDF6] hover:bg-[#DDD92A] hover:text-black transition focus:outline-none focus:ring-2 focus:ring-[#DDD92A] focus:ring-offset-2 focus:ring-offset-slate-950'

  return (
    <div
      className='fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-labelledby='project-modal-title'
    >
      <div
        className='bg-slate-950 text-[#FAFDF6] rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-800 relative max-h-[90vh] overflow-hidden flex flex-col min-h-0'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className='absolute top-3 right-3 text-slate-300 hover:text-white transition text-2xl leading-none w-10 h-10 grid place-items-center rounded-full hover:bg-white/5'
          aria-label='Close project details'
        >
          X
        </button>

        {project.image && (
          <div className='px-4 pt-4 shrink-0'>
            <div className='w-full h-56 sm:h-72 md:h-80 overflow-hidden rounded-2xl'>
              <img
                src={project.image}
                alt={`${project.title} large preview`}
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        )}

        <div className='p-6 pt-4 flex flex-col gap-4 flex-1 overflow-y-auto min-h-0'>
          <div>
            <div className='flex flex-wrap items-center gap-2'>
              <h3 id='project-modal-title' className='text-3xl font-bold'>
                {project.title}
              </h3>
              {project.badge && (
                <span className='text-xs font-semibold tracking-wide uppercase bg-[#DDD92A] text-black px-2 py-0.5 rounded-full'>
                  {project.badge}
                </span>
              )}
            </div>
            <p className='text-lg text-[#EAE151] opacity-80'>{project.subtitle}</p>
          </div>

          <p className='text-md leading-relaxed'>{project.descriptionLong}</p>

          <div className='flex flex-wrap gap-2'>
            {project.tech.map((tech, idx) => (
              <span key={idx} className='text-sm bg-[#DDD92A] text-black px-2 py-1 rounded-full w-fit'>
                {tech}
              </span>
            ))}
          </div>

          {project.collaborators?.length > 0 && (
            <div>
              <p className='text-sm uppercase tracking-wide text-slate-300 mb-1'>Collaborators</p>
              <ul className='list-none list-inside text-sm text-slate-200 space-y-1'>
                {project.collaborators.map((person) => (
                  <li key={person}>{person}</li>
                ))}
              </ul>
            </div>
          )}

          {project.dates && (
            <p className='text-sm text-slate-300'>
              {project.dates.start} - {project.dates.end || 'Ongoing'}
            </p>
          )}

          <div className='flex flex-wrap gap-3 pt-2'>
            {writeupHref && (
              <Link href={writeupHref} className={linkClassName}>
                Read more
              </Link>
            )}
            {project.links?.demo && (
              <a
                href={project.links.demo}
                className={linkClassName}
                target='_blank'
                rel='noreferrer'
              >
                Demo
              </a>
            )}
            {project.links?.repo && (
              <a
                href={project.links.repo}
                className={linkClassName}
                target='_blank'
                rel='noreferrer'
              >
                Repo
              </a>
            )}
            {project.links?.article && (
              <a
                href={project.links.article}
                className={linkClassName}
                target='_blank'
                rel='noreferrer'
              >
                Article
              </a>
            )}
            {project.links?.site && (
              <a
                href={project.links.site}
                className={linkClassName}
                target='_blank'
                rel='noreferrer'
              >
                Project website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
