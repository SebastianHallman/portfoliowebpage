import React from 'react'
import { workExperienceData } from '../data/workExperienceData'
import { pageShellClass, pageTitleClass } from '@/lib/cardStyles'

export default function WorkExperience() {
  return (
    <div
      id='work'
      className={`${pageShellClass} flex flex-col items-start gap-6 overflow-visible py-16 text-[#FAFDF6] lg:py-20`}
    >
      <h2 className={pageTitleClass}>
        Work Experience
      </h2>

      <div className='w-full'>
        <div className='flex flex-col gap-6'>
          {workExperienceData.map((job) => (
            <div
              key={job.id}
              className='bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl shadow-black/40 p-6'
            >
              <h2 className='text-2xl font-semibold'>
                {job.company} - <span className='font-normal'>{job.role}</span>
              </h2>
              <p className='text-sm text-slate-300 mt-2'>{job.dates}</p>
              <p className='text-base text-slate-200 mt-3 leading-relaxed'>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
