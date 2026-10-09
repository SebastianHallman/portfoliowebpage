import React from 'react'
import { ExternalLink, GitBranch, Globe, FileText } from 'lucide-react'

function linkIcon(key) {
  if (key === 'repo') return <GitBranch size={11} />
  if (key === 'article') return <FileText size={11} />
  return <Globe size={11} />
}

export default function ProjectMiniCard({ project, onOpen }) {
  const links = Object.entries(project.links || {}).filter(([, v]) => v)

  return (
    <div
      className="mt-2 rounded-xl overflow-hidden border border-white/10 bg-white/[0.04] text-[#FAFDF6] cursor-pointer hover:border-[rgba(221,217,42,0.35)] transition-colors"
      onClick={onOpen}
    >
      {project.image && (
        <div className="h-24 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{
              objectPosition: project.imagePosition || 'center',
              transform: project.imageScale ? `scale(${project.imageScale})` : undefined,
              transformOrigin: 'center',
            }}
          />
        </div>
      )}
      <div className="px-3 py-2.5 space-y-1.5">
        <div>
          <p className="text-xs font-semibold leading-tight">{project.title}</p>
          {project.subtitle && (
            <p className="text-[10px] text-white/45 leading-tight">{project.subtitle}</p>
          )}
        </div>
        <p className="text-[11px] text-white/60 leading-snug">{project.descriptionShort}</p>
        {project.tech?.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {project.tech.slice(0, 5).map(t => (
              <span
                key={t}
                className="text-[9px] px-1.5 py-0.5 rounded-full bg-[rgba(221,217,42,0.12)] text-[#DDD92A] border border-[rgba(221,217,42,0.2)]"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        {links.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {links.map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[10px] text-[#DDD92A] hover:text-[#EAE151] transition-colors"
                onClick={e => e.stopPropagation()}
              >
                {linkIcon(key)}
                <span className="capitalize">{key}</span>
                <ExternalLink size={9} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}