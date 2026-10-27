import React from 'react'
import { socialLinks } from '../data/socialLinks'
import { focusRing } from '@/lib/cardStyles'

export default function SocialLinks({
  className = 'flex items-center justify-center gap-4',
  linkClassName = `inline-flex h-12 w-12 items-center justify-center rounded-full text-accent opacity-70 ring-1 ring-accent transition hover:bg-accent/10 hover:opacity-100 ${focusRing}`,
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

