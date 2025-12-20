import React from 'react'

export default function ProjectCard(props) {
  return (
    <button
      type='button'
      onClick={() => props.onSelect?.(props.project)}
      className='p-4 w-full bg-slate-900 drop-shadow-xl drop-shadow-black rounded-2xl text-left hover:-translate-y-1 hover:shadow-2xl transition transform focus:outline-none focus:ring-2 focus:ring-[#DDD92A]'
    >
        {props.project.image && (
          <div className='w-full h-48 overflow-hidden rounded-xl mb-3'>
            <img
              src={props.project.image}
              alt={`${props.project.title} cover`}
              className='w-full h-full object-cover'
            />
          </div>
        )}
        <div className='flex flex-col gap-3'>
            <h3 className='text-2xl font-bold'>{props.project.title}</h3>
            <div className='flex flex-wrap '>
            {props.project.tech.map((tech, index) => (
                <span key={index} className='text-sm bg-[#DDD92A] text-black px-2 py-1 rounded-full mr-2 w-fit'>{tech}</span>
            ))}
            </div>


            <p className='text-md'>{props.project.descriptionShort}</p>


        </div>
    </button>
  )
}
