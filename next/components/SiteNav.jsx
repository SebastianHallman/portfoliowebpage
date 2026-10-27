'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { focusRing, pageShellClass } from '@/lib/cardStyles'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function SiteNav() {
  const pathname = usePathname() || '/'
  const onHome = pathname === '/'
  const onBlog = pathname === '/blog' || pathname.startsWith('/blog/')
  const onProjects = pathname === '/projects' || pathname.startsWith('/projects/')
  const [open, setOpen] = useState(false)
  const [openPath, setOpenPath] = useState(pathname)
  const [visibleSection, setVisibleSection] = useState(null)
  const menuOpen = open && openPath === pathname
  const panelId = useId()
  const buttonRef = useRef(null)
  const firstLinkRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    firstLinkRef.current?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  useEffect(() => {
    if (!onHome) return undefined
    const sections = SECTIONS.map((item) => document.getElementById(item.id)).filter(Boolean)
    if (sections.length === 0) return undefined

    let frame = 0
    const update = () => {
      const hero = document.getElementById('start')
      const heroBottom = hero?.getBoundingClientRect().bottom ?? 0
      const atTop = window.scrollY < 24 || heroBottom > window.innerHeight * 0.55
      if (atTop) {
        setVisibleSection((current) => (current === null ? current : null))
        return
      }
      const marker = window.innerHeight * 0.28
      const active = sections.find((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top <= marker && rect.bottom > marker
      })
      const next = active?.id ?? null
      setVisibleSection((current) => (current === next ? current : next))
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [onHome])

  const currentId = onBlog ? 'blog' : onProjects ? 'projects' : onHome ? visibleSection : null

  const items = [
    ...SECTIONS.map((section) => ({
      id: section.id,
      label: section.label,
      href: `/#${section.id}`,
    })),
    { id: 'blog', label: 'Blog', href: '/blog' },
  ]

  const linkClass = (id) =>
    [
      'inline-flex min-h-12 items-center rounded-md px-3 text-base md:min-h-11 md:text-sm',
      'transition duration-300',
      focusRing,
      currentId === id
        ? 'text-[#FAFDF6] shadow-[inset_0_-2px_0_0_var(--color-accent)]'
        : 'text-[#FAFDF6]/80 hover:text-accent hover:shadow-[inset_0_-2px_0_0_var(--color-accent)]',
    ].join(' ')

  const onHomeMark = (event) => {
    setOpen(false)
    if (!onHome) return
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'auto' })
    if (window.location.hash) {
      window.history.pushState(null, '', '/')
    }
  }

  const renderLink = (item, index) => (
    <Link
      key={item.id}
      href={item.href}
      className={linkClass(item.id)}
      aria-current={currentId === item.id ? (item.id === 'blog' || onProjects ? 'page' : 'location') : undefined}
      onClick={() => setOpen(false)}
      ref={index === 0 ? firstLinkRef : undefined}
    >
      {item.label}
    </Link>
  )

  return (
    <header className="site-header sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav aria-label="Primary" className={`${pageShellClass} flex h-14 items-center gap-2`}>
        <Link
          href="/"
          aria-label="Home"
          aria-current={onHome && !visibleSection ? 'page' : undefined}
          onClick={onHomeMark}
          className={`inline-flex size-9 shrink-0 items-center justify-center rounded-md ${focusRing}`}
        >
          <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
            <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="6" fill="#000" stroke="#DDD92A" strokeWidth="1.5" />
            <text
              x="16"
              y="21.5"
              textAnchor="middle"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontSize="14"
              fontWeight="700"
              fill="#DDD92A"
            >
              SH
            </text>
          </svg>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <li key={item.id}>{renderLink(item)}</li>
          ))}
        </ul>
        <button
          ref={buttonRef}
          type="button"
          className={`ml-auto inline-flex min-h-12 min-w-12 items-center justify-center gap-2 rounded-md px-3 text-[#FAFDF6] md:hidden ${focusRing}`}
          aria-expanded={menuOpen}
          aria-controls={panelId}
          onClick={() => {
            if (menuOpen) {
              setOpen(false)
              return
            }
            setOpenPath(pathname)
            setOpen(true)
          }}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          <span className="text-sm font-medium">{menuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </nav>
      {menuOpen ? (
        <div id={panelId} className="border-t border-white/10 bg-black md:hidden">
          <div className={pageShellClass}>
          <ul className="-mx-3 flex flex-col py-2">
            {items.map((item, index) => (
              <li key={item.id}>{renderLink(item, index)}</li>
            ))}
          </ul>
          </div>
        </div>
      ) : null}
    </header>
  )
}
