import React from 'react'

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
      className='min-h-[calc(100dvh-3.5rem)] w-[90%] max-w-4xl scroll-mt-14 text-[#FAFDF6] flex flex-col mx-auto items-center justify-center snap-start overflow-visible py-24 lg:py-32'
    >
      <h2 className='text-4xl font-bold lg:text-[64px] text-center text-[#DDD92A]'>About Me</h2>
      <p className='mt-8 text-lg lg:text-xl font-medium max-w-2xl text-center leading-relaxed text-[#FAFDF6]/85'>
        I&apos;m Sebastian, a recently graduated media technologist from KTH. I build accessible web products and like unfamiliar problems — collaborative editors, wearables, and 3D on the web — with a background in HCI.
      </p>

      <h2 className='mt-20 lg:mt-24 text-4xl font-bold lg:text-[64px] text-center text-[#DDD92A]'>Skills</h2>
      <div className='mt-12 w-full flex flex-col gap-10 lg:gap-12'>
        {skillGroups.map((group) => (
          <div key={group.name} className='flex flex-col items-center gap-4'>
            <p className='text-sm uppercase tracking-[0.22em] text-[#EAE151]'>{group.name}</p>
            <ul className='flex flex-wrap justify-center gap-3'>
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
