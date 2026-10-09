import React from 'react'
import SocialLinks from './SocialLinks'
import { socialLinks } from '../data/socialLinks'

const linkedInHref = socialLinks.find((link) => link.id === 'linkedin')?.href

export default function Contact() {
  return (
    <div id='contact' className='min-h-screen w-[90%] text-[#FAFDF6] flex flex-col mx-auto items-center justify-center snap-start py-16 lg:py-8'>
      <h2 className='text-4xl font-bold lg:text-[64px] text-center text-[#DDD92A]'>Let&apos;s connect</h2>
      <p className='text-lg lg:text-xl font-medium lg:max-w-3xl p-6 text-center'>
        Open to frontend and fullstack roles. Reach me on LinkedIn, or browse the work on GitHub.
      </p>
      <SocialLinks className='flex items-center justify-center gap-4 mt-2' />
    </div>
  )
}
