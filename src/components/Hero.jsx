import React from 'react'
import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'
import { socialLinks } from '../data/socialLinks'

const linkedInHref = socialLinks.find((link) => link.id === 'linkedin')?.href

export default function Hero() {
  return (
    <div
      id='start'
      className='flex flex-col lg:flex-row items-center justify-center min-h-screen snap-start w-full gap-4 lg:gap-6 px-4 py-16 lg:py-0'
    >
      <div className='text-[#FAFDF6] p-6 w-full max-w-xl'>
        <h1 className='text-4xl font-bold lg:text-[64px] text-center lg:text-left'>
          Hi! I&apos;m <span className='text-[#DDD92A]'>{'Sebastian H\u00E4llman'}</span>
        </h1>
        <h2 className='text-2xl font-bold lg:text-[32px] text-[#EAE151] text-center lg:text-left'>
          M.Sc. in Media Technology
        </h2>
        <p className='mt-4 text-base lg:text-lg text-[#FAFDF6]/80 text-center lg:text-left leading-relaxed'>
          Recently graduated from KTH. Looking for frontend and fullstack roles with a strong UX and accessibility focus.
        </p>
        <div className='flex flex-wrap gap-3 mt-5 mx-auto lg:mx-0 w-fit justify-center lg:justify-start'>
          <a
            href='#contact'
            className='block bg-[#DDD92A] rounded-full px-5 py-2.5 w-fit text-black font-semibold hover:bg-[#EAE151] transition duration-300'
          >
            Contact me
          </a>
          <a
            href={linkedInHref}
            target='_blank'
            rel='noreferrer'
            className='block bg-transparent rounded-full ring ring-[#EAE151] px-5 py-2.5 w-fit text-[#EAE151] hover:bg-[#EAE151]/10 transition duration-300'
          >
            LinkedIn
          </a>
          <Link
            to='/blog'
            className='block bg-transparent rounded-full ring ring-[#FAFDF6]/30 px-5 py-2.5 w-fit text-[#FAFDF6]/80 hover:ring-[#FAFDF6] hover:text-[#FAFDF6] transition duration-300'
          >
            Read blog
          </Link>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-full lg:w-1/2 px-4'>
        <div className='relative w-full max-w-[9.5rem] sm:max-w-xs md:max-w-md lg:max-w-xl'>
          <img
            className='w-full h-auto max-h-36 sm:max-h-none object-cover object-top block rounded-xl shadow-lg shadow-black/30'
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
