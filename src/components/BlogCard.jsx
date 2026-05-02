import React from 'react'

export default function BlogCard({ post, onSelect }) {
  return (
    <button
      type='button'
      onClick={() => onSelect?.(post)}
      className='p-4 w-full bg-slate-900 drop-shadow-xl drop-shadow-black rounded-2xl text-left hover:-translate-y-1 hover:shadow-2xl transition transform focus:outline-none focus:ring-2 focus:ring-[#DDD92A]'
    >
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between gap-2'>
          <span className='text-xs bg-[#DDD92A] text-black px-2 py-1 rounded-full font-semibold'>
            {post.category}
          </span>
          <span className='text-xs text-slate-400'>{post.date}</span>
        </div>
        <h3 className='text-2xl font-bold'>{post.title}</h3>
        <p className='text-sm text-[#EAE151] opacity-80'>{post.subtitle}</p>
        <p className='text-md'>{post.excerpt}</p>
      </div>
    </button>
  )
}
