'use client';
import { useLayoutEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projectsData } from '../data/projectsData'
import { ChevronDown } from 'lucide-react'
import { focusRing } from '@/lib/cardStyles'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function canViewTransition() {
  return !prefersReducedMotion() && typeof document.startViewTransition === 'function'
}

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
  const [activeId, setActiveId] = useState(null)
  const [imageHost, setImageHost] = useState(null)
  const [shellNamed, setShellNamed] = useState(false)
  const [scrollLocked, setScrollLocked] = useState(false)
  const busy = useRef(false)
  const pendingClose = useRef(false)
  const returnFocus = useRef(null)
  const selectedRef = useRef(null)

  useLayoutEffect(() => {
    if (!scrollLocked) return undefined
    const root = document.documentElement
    const body = document.body
    const gap = window.innerWidth - root.clientWidth
    const previous = {
      rootOverflow: root.style.overflow,
      bodyOverflow: body.style.overflow,
      paddingRight: root.style.paddingRight,
      scrollY: window.scrollY,
    }
    root.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    if (gap > 0) root.style.paddingRight = `${gap}px`
    if (window.scrollY !== previous.scrollY) window.scrollTo(0, previous.scrollY)
    return () => {
      root.style.overflow = previous.rootOverflow
      body.style.overflow = previous.bodyOverflow
      root.style.paddingRight = previous.paddingRight
      if (window.scrollY !== previous.scrollY) window.scrollTo(0, previous.scrollY)
    }
  }, [scrollLocked])

  const cardImageName = (project) =>
    imageHost === 'card' && activeId === project.id ? `project-${project.id}` : undefined

  const closeProject = () => {
    if (!selectedRef.current) return
    if (busy.current) {
      pendingClose.current = true
      return
    }
    const restoreFocus = () => {
      const node = returnFocus.current
      if (node instanceof HTMLElement) node.focus({ preventScroll: true })
    }
    if (!canViewTransition()) {
      selectedRef.current = null
      setSelectedProject(null)
      setImageHost(null)
      setActiveId(null)
      setShellNamed(false)
      setScrollLocked(false)
      restoreFocus()
      return
    }
    busy.current = true
    flushSync(() => setShellNamed(true))
    document.documentElement.classList.add('modal-vt', 'modal-vt-close')
    let transition
    try {
      transition = document.startViewTransition(() => {
        flushSync(() => {
          selectedRef.current = null
          setSelectedProject(null)
          setImageHost('card')
          setShellNamed(false)
        })
        restoreFocus()
      })
    } catch {
      document.documentElement.classList.remove('modal-vt', 'modal-vt-close')
      setShellNamed(false)
      busy.current = false
      return
    }
    transition.finished.finally(() => {
      document.documentElement.classList.remove('modal-vt', 'modal-vt-close')
      setImageHost(null)
      setActiveId(null)
      setScrollLocked(false)
      busy.current = false
    })
  }

  const finishOpen = () => {
    document.documentElement.classList.remove('modal-vt', 'modal-vt-open')
    setShellNamed(false)
    busy.current = false
    if (pendingClose.current) {
      pendingClose.current = false
      closeProject()
    }
  }

  const openProject = (project) => {
    if (busy.current || selectedRef.current) return
    const opener = document.activeElement
    returnFocus.current = opener instanceof HTMLElement ? opener : null
    selectedRef.current = project
    if (!canViewTransition()) {
      setActiveId(project.id)
      setImageHost('modal')
      setShellNamed(false)
      setScrollLocked(true)
      setSelectedProject(project)
      return
    }
    busy.current = true
    flushSync(() => {
      setActiveId(project.id)
      setImageHost('card')
      setScrollLocked(true)
    })
    document.documentElement.classList.add('modal-vt', 'modal-vt-open')
    let transition
    try {
      transition = document.startViewTransition(() => {
        flushSync(() => {
          setSelectedProject(project)
          setImageHost('modal')
          setShellNamed(true)
        })
      })
    } catch {
      document.documentElement.classList.remove('modal-vt', 'modal-vt-open')
      setSelectedProject(project)
      setImageHost('modal')
      setShellNamed(false)
      busy.current = false
      return
    }
    transition.finished.finally(finishOpen)
  }

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={openProject}
            href={projectLinks[project.id]?.startsWith('/projects/') ? undefined : projectLinks[project.id]}
            imageTransitionName={cardImageName(project)}
          />
        ))}
      </div>

      {archiveProjects.length > 0 && (
        <div className='w-full pt-6'>
          <button
            type='button'
            onClick={() => setArchiveOpen((open) => !open)}
            className={`-mx-1 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-md px-1 py-1 text-left text-[#FAFDF6]/70 transition hover:text-[#FAFDF6] ${focusRing}`}
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
                  onSelect={openProject}
                  compact
                  href={projectLinks[project.id]?.startsWith('/projects/') ? undefined : projectLinks[project.id]}
                  imageTransitionName={cardImageName(project)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <ProjectModal
        project={selectedProject}
        shellNamed={shellNamed}
        writeupHref={selectedProject && projectLinks[selectedProject.id]?.startsWith('/projects/')
          ? projectLinks[selectedProject.id]
          : undefined}
        imageTransitionName={imageHost === 'modal' && selectedProject ? `project-${selectedProject.id}` : undefined}
        onDismiss={closeProject}
        onNavigate={() => {
          if (scrollLocked) flushSync(() => setScrollLocked(false))
        }}
      />
    </>
  )
}
