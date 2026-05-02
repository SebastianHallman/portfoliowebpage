import React, { useState } from 'react'
import BlogCard from './BlogCard'
import BlogModal from './BlogModal'

const modules = import.meta.glob('../posts/*.mdx', { eager: true })

const posts = Object.entries(modules)
  .map(([path, mod]) => ({
    id: path.split('/').pop().replace('.mdx', ''),
    Content: mod.default,
    ...mod.frontmatter,
  }))
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <div
      id='blog'
      className='min-h-screen lg:h-screen w-[90%] text-[#FAFDF6] flex justify-center mx-auto items-center flex-col snap-start relative py-16 lg:py-0'
    >
      <h1 className='text-4xl font-bold lg:text-[64px] text-center text-[#DDD92A] lg:text-left p-6'>
        Blog
      </h1>
      <p className='text-lg lg:text-xl font-medium lg:max-w-3xl p-6 text-center lg:text-left'>
        Thoughts, guides, and things I've learned along the way
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full'>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} onSelect={setSelectedPost} />
        ))}
      </div>

      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </div>
  )
}
