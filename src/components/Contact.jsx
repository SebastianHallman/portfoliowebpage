import React from 'react'
import SocialLinks from './SocialLinks'

export default function Contact() {
  return (
    <div id='contact' className='h-screen w-[90%] text-[#FAFDF6] flex flex-col mx-auto items-center justify-center snap-start'>
      <h1 className='text-4xl font-bold lg:text-[64px] text-center text-[#DDD92A]'>Let's connect!</h1>
      <p className='text-lg lg:text-xl font-medium lg:max-w-3xl p-6 text-center'>
        Do you think I fit in your team or have an exciting project? Let's get in touch!
      </p>

      <SocialLinks className='flex items-center justify-center gap-4 mt-2' />
    </div>
  )
}
