import type { MDXComponents } from "mdx/types";

export const components: MDXComponents = {
    h1: (props) => <h1 className='text-3xl font-bold mt-8 mb-3 text-accent' {...props} />,
  h2: (props) => <h2 className='text-2xl font-bold mt-8 mb-2 text-accent' {...props} />,
  h3: (props) => <h3 className='text-xl font-semibold mt-6 mb-2 text-accent' {...props} />,
  h4: (props) => <h4 className='text-lg font-semibold mt-5 mb-2 text-accent' {...props} />,
  h5: (props) => <h5 className='text-base font-semibold mt-4 mb-2 text-accent' {...props} />,
  h6: (props) => <h6 className='text-sm font-semibold uppercase mt-4 mb-2 text-accent' {...props} />,
  p: (props) => <p className='mb-4 leading-[1.7] text-slate-200' {...props} />,
  ul: (props) => <ul className='list-disc list-inside mb-4 space-y-1 leading-[1.7] text-slate-200' {...props} />,
  ol: (props) => <ol className='list-decimal list-inside mb-4 space-y-1 leading-[1.7] text-slate-200' {...props} />,
  li: (props) => <li className='ml-2' {...props} />,
  code: ({ className, ...props }) =>
    className
      ? <code className={`font-mono ${className}`} {...props} />
      : <code className='bg-slate-800 text-accent px-1.5 py-0.5 rounded text-sm font-mono' {...props} />,
  pre: (props) => <pre className='rounded-xl mb-4 overflow-x-auto text-sm font-mono' {...props} />,
  a: (props) => <a className='text-accent underline hover:opacity-80 transition' target='_blank' rel='noreferrer' {...props} />,
  blockquote: (props) => <blockquote className='border-l-4 border-accent pl-4 italic text-slate-400 mb-4' {...props} />,
  hr: () => <hr className='border-slate-700 my-8' />,
  strong: (props) => <strong className='font-bold text-[#FAFDF6]' {...props} />,
  img: ({ src, alt }) => (
    <span className="block my-8">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-xl bg-slate-900 object-contain shadow-lg shadow-black/40"
        loading="lazy"
      />
      {alt && (
        <span className="block text-center text-sm text-slate-500 mt-2">
          {alt}
        </span>
      )}
    </span>
  ),
  
};