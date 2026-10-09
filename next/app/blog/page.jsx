import Link from 'next/link'

import { getPosts } from '@/lib/posts'

export const metadata = {
  title: "Blog",
  description:
    "Thoughts and knowledge shared by Sebastian Hällman.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — Sebastian Hällman",
    description:
      "Thoughts and knowledge shared by Sebastian Hällman.",
    url: "/blog",
    type: "website",
  },
};

const posts = getPosts()

export default function BlogList() {
  return (
    <div className='bg-black min-h-screen text-[#FAFDF6]'>
      <div className='max-w-3xl mx-auto px-6 py-16'>
        <Link href='/' className='text-sm text-[#EAE151] opacity-60 hover:opacity-100 transition mb-10 inline-block'>
          ← Back to portfolio
        </Link>

        <h1 className='text-5xl font-bold text-[#DDD92A] mb-4'>Blog</h1>
        <p className='text-lg text-slate-400 mb-12'>Just a space for me to dump my thoughts and knowledge that may be useful to others.</p>

        <div className='flex flex-col gap-8'>
          {posts.length === 0 && <p className='text-slate-500'>No posts yet. Check back later!</p>}
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className='group block border border-slate-800 rounded-2xl overflow-hidden hover:border-[#DDD92A] transition duration-300'>
              {post.image && <img src={post.image} alt={post.title} className='w-full h-48 object-cover' loading='lazy' />}
              <div className='p-6'>
                <div className='flex items-center gap-3 mb-3'>
                  {post.category && (
                    <span className='text-xs bg-[#DDD92A] text-black px-2 py-1 rounded-full font-semibold'>
                      {post.category}
                    </span>
                  )}
                  <span className='text-xs text-slate-500'>{post.date}</span>
                </div>
                <h2 className='text-2xl font-bold group-hover:text-[#DDD92A] transition duration-300 mb-1'>
                  {post.title}
                </h2>
                <p className='text-sm text-[#EAE151] opacity-70 mb-3'>{post.subtitle}</p>
                <p className='text-slate-400 leading-relaxed'>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
