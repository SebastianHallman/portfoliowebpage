import React from 'react'
import { socialLinks } from '../data/socialLinks'

export default function SocialLinks({
  className = 'flex items-center justify-center gap-4',
  linkClassName = 'inline-flex items-center justify-center w-12 h-12 rounded-full ring-1 ring-[#DDD92A] text-[#EAE151] opacity-70 hover:opacity-100 hover:bg-[#DDD92A]/10 transition focus:outline-none focus:ring-2 focus:ring-[#DDD92A] focus:ring-offset-2 focus:ring-offset-black',
  iconSize = 22,
}) {
  return (
    <div className={className}>
      {socialLinks.map(({ id, label, href, Icon }) => (
        <a
          key={id}
          href={href}
          target='_blank'
          rel='noreferrer'
          aria-label={label}
          title={label}
          className={linkClassName}
        >
          <Icon size={iconSize} aria-hidden='true' />
        </a>
      ))}
    </div>
  )
}

