import React from 'react'
import { socialLinks } from '../data/socialLinks'

export default function ChatContactCard() {
  return (
    <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.04] text-[#FAFDF6] px-3 py-2.5 space-y-2">
      <p className="text-xs font-semibold leading-tight">Get in touch and speak with Sebastian directly</p>
      <div className="flex flex-wrap gap-2">
        {socialLinks.map(({ id, label, href, Icon }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium bg-[rgba(221,217,42,0.1)] border border-[rgba(221,217,42,0.25)] text-[#DDD92A] hover:bg-[#DDD92A] hover:text-black transition-colors"
          >
            <Icon size={12} />
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}
