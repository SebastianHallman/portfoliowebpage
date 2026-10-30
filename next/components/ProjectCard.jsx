import React from 'react'
import Link from 'next/link'
import TagRow from './TagRow'
import SharedImage from './SharedImage'
import { imageFitClass, mediaFrameClass, surfaceCardClass, tagChipClass } from '@/lib/cardStyles'

export default function ProjectCard({ project, onSelect, compact = false, href, imageTransitionName }) {
  const tech = project.tech || []
  const className = [
    surfaceCardClass,
    compact ? 'p-3 flex gap-3 items-stretch' : '',
  ].join(' ')

  const content = (
    <>
      {project.image && (
        <SharedImage name={imageTransitionName}>
          <div
            className={
              compact
                ? `aspect-video w-28 shrink-0 overflow-hidden rounded-lg ${mediaFrameClass(project.image, project.imageFit)}`
                : `aspect-video w-full overflow-hidden ${mediaFrameClass(project.image, project.imageFit)}`
            }
          >
            <img
              src={project.image}
              alt=""
              className={`h-full w-full ${imageFitClass(project.imageFit)}`}
            />
          </div>
        </SharedImage>
      )}
      <div className={compact ? 'flex min-w-0 flex-col gap-2' : 'flex min-w-0 flex-col gap-2 p-4'}>
        <div className='flex flex-wrap items-center gap-2'>
          <h3 className={compact ? 'accent-title text-lg font-bold' : 'accent-title text-2xl font-bold'}>{project.title}</h3>
          {project.badge && (
            <span className={`${tagChipClass} max-w-[9rem] uppercase tracking-wide`}>
              {project.badge}
            </span>
          )}
        </div>
        <TagRow tags={tech} limit={4} />
        {!compact && <p className='text-md'>{project.descriptionShort}</p>}
        {compact && (
          <p className='text-sm text-[#FAFDF6]/70 line-clamp-2'>{project.descriptionShort}</p>
        )}
      </div>
    </>
  )

  if (href) {
    if (/^https?:\/\//.test(href)) {
      return (
        <a href={href} target="_blank" rel="noreferrer" className={className}>
          {content}
        </a>
      )
    }

    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type='button'
      onClick={() => onSelect?.(project)}
      className={className}
    >
      {content}
    </button>
  )
}
