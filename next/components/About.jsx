import React from 'react'
import { pageShellClass, pageTitleClass } from '@/lib/cardStyles'

const skillGroups = [
  {
    name: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Vue', 'Three.js'],
  },
  {
    name: 'Backend & CMS',
    items: ['Node.js', 'Python', 'PHP', 'Django', 'MySQL', 'Firebase', 'WordPress'],
  },
  {
    name: 'Hardware',
    items: ['Flutter', 'Arduino'],
  },
  {
    name: 'AI tools',
    items: ['Cursor', 'Codex', 'Claude'],
  },
]

export default function About() {
  return (
    <div
      id="about"
      className={`${pageShellClass} min-h-[calc(100dvh-3.5rem)] flex flex-col items-start justify-center overflow-visible py-24 text-[#FAFDF6] lg:py-32`}
    >
      <h2 className={pageTitleClass}>About Me</h2>
      <p className='mt-8 max-w-2xl text-left text-lg font-medium leading-relaxed text-[#FAFDF6]/85 lg:text-xl'>
        I&apos;m Sebastian, a recently graduated media technologist from KTH. I build accessible web products and like unfamiliar problems — collaborative editors, wearables, and 3D on the web — with a background in HCI.
      </p>

      <h2 className={`${pageTitleClass} mt-20 lg:mt-24`}>Skills</h2>
      <div className='mt-12 flex w-full flex-col gap-10 lg:gap-12'>
        {skillGroups.map((group) => (
          <div key={group.name} className='flex flex-col items-start gap-4'>
            <p className='text-sm uppercase tracking-[0.22em] text-accent'>{group.name}</p>
            <ul className='flex flex-wrap justify-start gap-3'>
              {group.items.map((item) => (
                <li
                  key={item}
                  className='text-sm text-[#FAFDF6] px-4 py-1.5 rounded-full ring-1 ring-[#FAFDF6]/15 bg-white/5'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
