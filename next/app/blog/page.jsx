import Link from 'next/link'

import BlogCard from '@/components/BlogCard'
import { backLinkClass } from '@/lib/cardStyles'
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
    <div className='min-h-screen bg-black text-[#FAFDF6]'>
      <main className='mx-auto max-w-3xl px-6 pb-16 pt-10'>
        <Link href='/' className={backLinkClass}>
          ← Back to portfolio
        </Link>

        <h1 className='mb-4 text-5xl font-bold text-[#DDD92A]'>Blog</h1>
        <p className='mb-12 text-lg text-slate-400'>Just a space for me to dump my thoughts and knowledge that may be useful to others.</p>

        <div className='flex flex-col gap-6'>
          {posts.length === 0 && <p className='text-slate-500'>No posts yet. Check back later!</p>}
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </div>
  )
}
