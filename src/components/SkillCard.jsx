import React from 'react'

export default function SkillCard({ skill, Icon }) {
  return (
    <div className='p-4 w-full bg-slate-900 drop-shadow-xl drop-shadow-black rounded-2xl'>
      <div className='flex items-center gap-3'>
        {Icon && <Icon size={22} aria-hidden='true' />}
        <p>{skill}</p>
      </div>
    </div>
  )
}
