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
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setVisibleSection(visible.target.id)
      },
      { rootMargin: '-8% 0% -55% 0%', threshold: [0.15, 0.4] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
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
        : 'text-[#FAFDF6]/80 hover:text-accent',
    ].join(' ')

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
      <nav aria-label="Primary" className={`${pageShellClass} flex h-14 items-center justify-between gap-2`}>
        <ul className="-mx-3 hidden items-center gap-1 md:flex">
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
