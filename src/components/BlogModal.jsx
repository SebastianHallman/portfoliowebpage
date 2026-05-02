import React, { useEffect } from 'react'

const mdxComponents = {
  h1: (props) => <h1 className='text-3xl font-bold mt-6 mb-3 text-[#DDD92A]' {...props} />,
  h2: (props) => <h2 className='text-2xl font-bold mt-6 mb-2 text-[#EAE151]' {...props} />,
  h3: (props) => <h3 className='text-xl font-semibold mt-4 mb-2 text-[#EAE151]' {...props} />,
  p: (props) => <p className='mb-4 leading-relaxed' {...props} />,
  ul: (props) => <ul className='list-disc list-inside mb-4 space-y-1' {...props} />,
  ol: (props) => <ol className='list-decimal list-inside mb-4 space-y-1' {...props} />,
  li: (props) => <li className='ml-2' {...props} />,
  code: (props) => <code className='bg-slate-800 text-[#DDD92A] px-1.5 py-0.5 rounded text-sm font-mono' {...props} />,
  pre: (props) => <pre className='bg-slate-800 rounded-xl p-4 mb-4 overflow-x-auto text-sm font-mono' {...props} />,
  a: (props) => <a className='text-[#DDD92A] underline hover:opacity-80 transition' target='_blank' rel='noreferrer' {...props} />,
  blockquote: (props) => <blockquote className='border-l-4 border-[#DDD92A] pl-4 italic text-slate-300 mb-4' {...props} />,
  hr: () => <hr className='border-slate-700 my-6' />,
  strong: (props) => <strong className='font-bold text-[#FAFDF6]' {...props} />,
}

export default function BlogModal({ post, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  if (!post) return null

  const { Content } = post

  return (
    <div
      className='fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-labelledby='blog-modal-title'
    >
      <div
        className='bg-slate-950 text-[#FAFDF6] rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-800 relative max-h-[90vh] overflow-hidden flex flex-col min-h-0'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className='absolute top-3 right-3 text-slate-300 hover:text-white transition text-2xl leading-none w-10 h-10 grid place-items-center rounded-full hover:bg-white/5'
          aria-label='Close blog post'
        >
          X
        </button>

        <div className='p-6 flex flex-col gap-4 flex-1 overflow-y-auto min-h-0'>
          <div className='flex items-center gap-2'>
            <span className='text-xs bg-[#DDD92A] text-black px-2 py-1 rounded-full font-semibold'>
              {post.category}
            </span>
            <span className='text-xs text-slate-400'>{post.date}</span>
          </div>

          <div>
            <h2 id='blog-modal-title' className='text-3xl font-bold'>
              {post.title}
            </h2>
            <p className='text-lg text-[#EAE151] opacity-80'>{post.subtitle}</p>
          </div>

          <div className='text-md'>
            {Content && <Content components={mdxComponents} />}
          </div>
        </div>
      </div>
    </div>
  )
}
