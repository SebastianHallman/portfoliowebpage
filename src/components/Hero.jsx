import React from 'react'
import SocialLinks from './SocialLinks'

export default function Hero() {
  return (
    <div
      id='start'
      className='flex flex-col-reverse lg:flex-row items-center justify-center h-screen snap-start w-full gap-6 px-4'
    >
      <div className='text-[#FAFDF6] p-6 w-full max-w-xl'>
        <h1 className='text-4xl font-bold lg:text-[64px] text-center lg:text-left'>
          Hi! I&apos;m <span className='text-[#DDD92A]'>{'Sebastian H\u00E4llman'}</span>
        </h1>
        <h2 className='text-2xl font-bold lg:text-[32px] text-[#EAE151] opacity-50 text-center lg:text-left'>
          M.Sc. in Media Technology
        </h2>
        <br />
        <a
          href='#projects'
          className='block bg-transparent rounded-full ring ring-[#EAE151] mt-4 px-5 py-2.5 w-fit text-[#EAE151] mx-auto lg:mx-0 opacity-50 hover:opacity-100 transition duration-300'
        >
          View projects
        </a>
      </div>
      <div className='flex flex-col justify-center items-center w-full lg:w-1/2 px-4'>
        <div className='relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl'>
          <img
            className='w-full h-auto object-cover block rounded-xl shadow-lg shadow-black/30'
            src='/img/photo.jpg'
            alt='Portrait'
          />
          <div className='absolute inset-0 pointer-events-none bg-gradient-to-t from-black to-transparent rounded-xl'></div>
        </div>
        <SocialLinks className='flex items-center justify-center gap-4 mt-5' />
      </div>
    </div>
  )
}
