import React from 'react'
import SocialLinks from './SocialLinks'
import { socialLinks } from '../data/socialLinks'

const linkedInHref = socialLinks.find((link) => link.id === 'linkedin')?.href

export default function Contact() {
  return (
    <div id='contact' className='min-h-screen w-[90%] text-[#FAFDF6] flex flex-col mx-auto items-center justify-center snap-start py-16 lg:py-8'>
      <h1 className='text-4xl font-bold lg:text-[64px] text-center text-[#DDD92A]'>Let&apos;s connect</h1>
      <p className='text-lg lg:text-xl font-medium lg:max-w-3xl p-6 text-center'>
        Open to frontend and fullstack roles. Reach me on LinkedIn, or browse the work on GitHub.
      </p>
      <a
        href={linkedInHref}
        target='_blank'
        rel='noreferrer'
        className='mb-6 bg-[#DDD92A] rounded-full px-6 py-2.5 text-black font-semibold hover:bg-[#EAE151] transition duration-300'
      >
        LinkedIn
      </a>
      <SocialLinks className='flex items-center justify-center gap-4 mt-2' />
    </div>
  )
}
