import React from 'react'
import { workExperienceData } from '../data/workExperienceData'

export default function WorkExperience() {
  return (
    <div
      id='work'
      className='h-screen w-[90%] text-[#FAFDF6] flex flex-col mx-auto items-center snap-start gap-6 overflow-hidden'
    >
      <div className='w-full'>
        <h1 className='text-4xl font-bold lg:text-[64px] text-center text-[#DDD92A] lg:text-left p-6'>
          Work Experience
        </h1>
      </div>

      <div className='w-full flex-1 min-h-0 px-6 pb-6 overflow-y-auto'>
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

