import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const modules = import.meta.glob('../posts/*.mdx', { eager: true })

const posts = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [
    path.split('/').pop().replace('.mdx', ''),
    { Content: mod.default, ...mod.frontmatter },
  ])
)

const mdxComponents = {
  h1: (props) => <h1 className='text-3xl font-bold mt-8 mb-3 text-[#DDD92A]' {...props} />,
  h2: (props) => <h2 className='text-2xl font-bold mt-8 mb-2 text-[#EAE151]' {...props} />,
  h3: (props) => <h3 className='text-xl font-semibold mt-6 mb-2 text-[#EAE151]' {...props} />,
  p: (props) => <p className='mb-4 leading-relaxed text-slate-200' {...props} />,
  ul: (props) => <ul className='list-disc list-inside mb-4 space-y-1 text-slate-200' {...props} />,
  ol: (props) => <ol className='list-decimal list-inside mb-4 space-y-1 text-slate-200' {...props} />,
  li: (props) => <li className='ml-2' {...props} />,
  code: (props) => <code className='bg-slate-800 text-[#DDD92A] px-1.5 py-0.5 rounded text-sm font-mono' {...props} />,
  pre: (props) => <pre className='bg-slate-800 rounded-xl p-4 mb-4 overflow-x-auto text-sm font-mono text-slate-200' {...props} />,
  a: (props) => <a className='text-[#DDD92A] underline hover:opacity-80 transition' target='_blank' rel='noreferrer' {...props} />,
  blockquote: (props) => <blockquote className='border-l-4 border-[#DDD92A] pl-4 italic text-slate-400 mb-4' {...props} />,
  hr: () => <hr className='border-slate-700 my-8' />,
  strong: (props) => <strong className='font-bold text-[#FAFDF6]' {...props} />,
  img: ({ src, alt }) => (
    <figure className='my-8'>
      <img src={src} alt={alt} className='w-full rounded-xl object-cover shadow-lg shadow-black/40' loading='lazy' />
      {alt && <figcaption className='text-center text-sm text-slate-500 mt-2'>{alt}</figcaption>}
    </figure>
  ),
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts[slug]

  if (!post) return <Navigate to='/blog' replace />

  const { Content, title, subtitle, date, category, image } = post

  return (
    <div className='bg-black min-h-screen text-[#FAFDF6]'>
      <Helmet>
        <title>{title} — Sebastian Hällman</title>
        <meta name='description' content={subtitle} />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={subtitle} />
        <meta property='og:url' content={`https://sebastianhallman.com/blog/${slug}`} />
        {image && <meta property='og:image' content={`https://sebastianhallman.com${image}`} />}
        <meta name='twitter:card' content={image ? 'summary_large_image' : 'summary'} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={subtitle} />
        {image && <meta name='twitter:image' content={`https://sebastianhallman.com${image}`} />}
      </Helmet>
      <div className='max-w-2xl mx-auto px-6 py-16'>
        <Link to='/blog' className='text-sm text-[#EAE151] opacity-60 hover:opacity-100 transition mb-10 inline-block'>
          ← All posts
        </Link>

        {image && (
          <img
            src={image}
            alt={title}
            className='w-full rounded-2xl object-cover max-h-72 shadow-lg shadow-black/40 mb-8'
            loading='eager'
          />
        )}

        <div className='flex items-center gap-3 mb-4'>
          {category && (
            <span className='text-xs bg-[#DDD92A] text-black px-2 py-1 rounded-full font-semibold'>
              {category}
            </span>
          )}
          <span className='text-xs text-slate-500'>{date}</span>
        </div>

        <h1 className='text-4xl text-[#EAE151] font-bold mb-2'>{title}</h1>
        <p className='text-lg text-[#EAE151] opacity-70 mb-10'>{subtitle}</p>

        <hr className='border-slate-800 mb-10' />

        <article>
          <Content components={mdxComponents} />
        </article>
      </div>
    </div>
  )
}
