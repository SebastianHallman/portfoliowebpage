import React from 'react'
import Link from 'next/link'

export default function ProjectCard({ project, onSelect, compact = false, href }) {
  const imagePosition = project.imagePosition || 'center'
  const imageScale = project.imageScale || 1
  const tech = compact ? project.tech.slice(0, 3) : project.tech
  const className = [
    'w-full bg-slate-900 drop-shadow-xl drop-shadow-black rounded-2xl text-left hover:-translate-y-1 hover:shadow-2xl transition transform focus:outline-none focus:ring-2 focus:ring-[#DDD92A]',
    compact ? 'p-3 flex gap-3 items-stretch' : 'p-4',
  ].join(' ')

  const content = (
    <>
      {project.image && (
        <div
          className={
            compact
              ? 'w-28 shrink-0 aspect-[16/10] overflow-hidden rounded-lg bg-slate-800'
              : 'w-full aspect-[16/9] overflow-hidden rounded-xl mb-3 bg-slate-800'
          }
        >
          <img
            src={project.image}
            alt={`${project.title} cover`}
            className='w-full h-full object-cover origin-center transition-transform duration-300'
            style={{
              objectPosition: imagePosition,
              transform: `scale(${imageScale})`,
            }}
          />
        </div>
      )}
      <div className='flex flex-col gap-2 min-w-0'>
        <div className='flex flex-wrap items-center gap-2'>
          <h3 className={compact ? 'text-lg font-bold' : 'text-2xl font-bold'}>{project.title}</h3>
          {project.badge && (
            <span className='text-xs font-semibold tracking-wide uppercase bg-[#DDD92A] text-black px-2 py-0.5 rounded-full'>
              {project.badge}
            </span>
          )}
        </div>
        <div className='flex flex-wrap gap-x-2 gap-y-2'>
          {tech.map((item) => (
            <span key={item} className='text-sm bg-[#DDD92A] text-black px-2 py-1 rounded-full w-fit'>
              {item}
            </span>
          ))}
        </div>
        {!compact && <p className='text-md'>{project.descriptionShort}</p>}
        {compact && (
          <p className='text-sm text-[#FAFDF6]/70 line-clamp-2'>{project.descriptionShort}</p>
        )}
      </div>
    </>
  )

  if (href) {
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
