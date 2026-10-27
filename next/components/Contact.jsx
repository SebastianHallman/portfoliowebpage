import React from 'react'
import SocialLinks from './SocialLinks'
import { pageShellClass, pageTitleClass } from '@/lib/cardStyles'

export default function Contact() {
  return (
    <div id='contact' className={`${pageShellClass} flex min-h-[calc(100dvh-3.5rem)] flex-col items-start justify-center py-16 text-[#FAFDF6]`}>
      <h2 className={pageTitleClass}>Let&apos;s connect</h2>
      <p className='mt-4 max-w-2xl text-left text-lg text-slate-400'>
        Open to frontend and fullstack roles. Reach me on LinkedIn, or browse the work on GitHub.
      </p>
      <SocialLinks className='mt-6 flex items-center justify-start gap-4' />
    </div>
  )
}
