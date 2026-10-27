import Link from 'next/link'
import SocialLinks from './SocialLinks'
import { focusRing, pageShellClass, primaryButtonClass } from '@/lib/cardStyles'

export default function Hero() {
  return (
    <div
      id='start'
      className={`${pageShellClass} flex min-h-[calc(100dvh-3.5rem)] flex-col items-center justify-center gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-0`}
    >
      <div className='w-full max-w-xl text-left text-[#FAFDF6]'>
        <h1 className='text-left text-4xl font-bold lg:text-[64px]'>
          Hi! I&apos;m <span className='text-accent'>{'Sebastian H\u00E4llman'}</span>
        </h1>
        <h2 className='text-left text-2xl font-bold text-accent lg:text-[32px]'>
          M.Sc. in Media Technology
        </h2>
        <p className='mt-4 text-left text-base leading-relaxed text-[#FAFDF6]/80 lg:text-lg'>
          Recently graduated from KTH. Looking for frontend and fullstack roles with a strong UX and accessibility focus.
        </p>
        <div className='mt-5 flex flex-wrap justify-start gap-3'>
          <a
            href='#contact'
            className={primaryButtonClass}
          >
            Contact me
          </a>
          <Link
            href='/blog'
            className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold text-[#FAFDF6]/80 ring-1 ring-[#FAFDF6]/30 transition duration-300 hover:text-[#FAFDF6] hover:ring-[#FAFDF6] ${focusRing}`}
          >
            Read blog
          </Link>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-full lg:w-1/2 px-4'>
        <div className='relative w-full max-w-[15rem] sm:max-w-xs lg:max-w-sm'>
          <img
            className='w-full h-auto max-h-[48svh] lg:max-h-[78svh] object-contain object-bottom block'
            style={{
              maskImage: 'linear-gradient(to bottom, black 48%, rgba(0, 0, 0, 0.65) 64%, rgba(0, 0, 0, 0.15) 82%, transparent 96%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 48%, rgba(0, 0, 0, 0.65) 64%, rgba(0, 0, 0, 0.15) 82%, transparent 96%)',
            }}
            src='/img/sebastian-outside-cutout.png'
            alt='Sebastian Hällman wearing a suit, seated in his wheelchair'
            width='852'
            height='1846'
            fetchPriority='high'
          />
          <div
            aria-hidden='true'
            className='absolute bottom-0 right-0 h-[46%] w-[42%] pointer-events-none bg-gradient-to-l from-black via-black/80 to-transparent'
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black 32%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 32%)',
            }}
          />
        </div>
        <SocialLinks className='flex items-center justify-center gap-4 mt-5' />
      </div>
    </div>
  )
}
