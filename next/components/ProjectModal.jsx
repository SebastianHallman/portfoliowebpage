import React, { useEffect, useEffectEvent, useRef } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import SharedImage from './SharedImage'
import { accentButtonClass, focusRing, imageFitClass, mediaFrameClass } from '@/lib/cardStyles'

const FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'

function shellStyle(name, active) {
  return active ? { viewTransitionName: name } : undefined
}

export default function ProjectModal({
  project,
  onDismiss,
  writeupHref,
  imageTransitionName,
  shellNamed = false,
  onNavigate,
}) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const dismiss = useEffectEvent(() => {
    onDismiss?.()
  })

  useEffect(() => {
    if (!project) return undefined
    const dialog = dialogRef.current
    closeRef.current?.focus({ preventScroll: true })

    const onKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        dismiss()
        return
      }
      if (event.key !== 'Tab' || !dialog) return
      const items = [...dialog.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null || el === document.activeElement)
      if (items.length === 0) {
        event.preventDefault()
        dialog.focus()
        return
      }
      const first = items[0]
      const last = items[items.length - 1]
      const outside = !dialog.contains(document.activeElement)
      if (outside) {
        event.preventDefault()
        ;(event.shiftKey ? last : first).focus()
        return
      }
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [project])

  if (!project) return null

  const linkClassName = accentButtonClass

  return createPortal(
    <div
      className='fixed inset-0 z-[60] flex items-center justify-center overscroll-contain bg-black/70 p-4'
      style={shellStyle('modal-backdrop', shellNamed)}
      onClick={onDismiss}
    >
      <div
        ref={dialogRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby='project-modal-title'
        tabIndex={-1}
        className='relative flex max-h-[90vh] w-full max-w-3xl min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-[#FAFDF6] shadow-2xl outline-none'
        style={shellStyle('modal-panel', shellNamed)}
        onClick={(event) => event.stopPropagation()}
        onClickCapture={(event) => {
          if (!(event.target instanceof Element)) return
          const link = event.target.closest('a')
          if (!link) return
          if (shellNamed) {
            event.preventDefault()
            return
          }
          if (link.target !== '_blank') onNavigate?.()
        }}
      >
        <button
          ref={closeRef}
          type='button'
          onClick={onDismiss}
          className={`absolute top-3 right-3 z-10 grid h-10 w-10 place-items-center rounded-full text-2xl leading-none text-slate-300 transition hover:bg-white/5 hover:text-white ${focusRing}`}
          aria-label='Close project details'
        >
          X
        </button>

        {project.image && (
          <div className='shrink-0 px-4 pt-4'>
            <SharedImage name={imageTransitionName}>
              <div className={`aspect-video w-full overflow-hidden rounded-2xl ${mediaFrameClass(project.image, project.imageFit)}`}>
                <img
                  src={project.image}
                  alt={`${project.title} large preview`}
                  className={`h-full w-full ${imageFitClass(project.imageFit)}`}
                />
              </div>
            </SharedImage>
          </div>
        )}

        <div className='flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overscroll-contain p-6 pt-4'>
          <div>
            <div className='flex flex-wrap items-center gap-2'>
              <h3 id='project-modal-title' className='text-3xl font-bold'>
                {project.title}
              </h3>
              {project.badge && (
                <span className='rounded-full bg-accent px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-black'>
                  {project.badge}
                </span>
              )}
            </div>
            <p className='text-lg text-accent/80'>{project.subtitle}</p>
          </div>

          <p className='text-md leading-relaxed'>{project.descriptionLong}</p>

          <div className='flex flex-wrap gap-2'>
            {project.tech.map((tech, idx) => (
              <span key={idx} className='w-fit rounded-full bg-accent px-2 py-1 text-sm text-black'>
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
              <a href={project.links.demo} className={linkClassName} target='_blank' rel='noreferrer'>
                Demo
              </a>
            )}
            {project.links?.repo && (
              <a href={project.links.repo} className={linkClassName} target='_blank' rel='noreferrer'>
                Repo
              </a>
            )}
            {project.links?.article && (
              <a href={project.links.article} className={linkClassName} target='_blank' rel='noreferrer'>
                Article
              </a>
            )}
            {project.links?.site && (
              <a href={project.links.site} className={linkClassName} target='_blank' rel='noreferrer'>
                Project website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
