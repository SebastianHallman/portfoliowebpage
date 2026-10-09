import Link from "next/link";
import { notFound } from "next/navigation";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getPosts, getPost } from "@/lib/posts";
import "highlight.js/styles/github-dark.css";
import { components } from "@/mdx-components";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = getPost(slug);
  
    if (!post) notFound();
  
    const title = `${post.title} — Sebastian Hällman`;
    const description = post.subtitle || post.excerpt || "";
    const images = post.image ? [post.image] : [];
  
    return {
      title: post.title,
      description,
      alternates: {
        canonical: `/blog/${post.slug}`,
      },
      openGraph: {
        title,
        description,
        type: "article",
        url: `/blog/${post.slug}`,
        images,
      },
      twitter: {
        card: post.image ? "summary_large_image" : "summary",
        title,
        description,
        images,
      },
    };
  }

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const { default: Content } = await evaluate(post.content, {
    ...runtime,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  });

  return (
    <main className="max-w-2xl mx-auto px-6 py-16 text-[#FAFDF6]">
      <Link
        href="/blog"
        className="text-sm text-[#EAE151] opacity-60 hover:opacity-100 transition mb-10 inline-block"
      >
        ← All posts
      </Link>
  
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-2xl shadow-lg shadow-black/40 mb-8"
          loading="eager"
        />
      )}
  
      <div className="flex items-center gap-3 mb-4">
        {post.category && (
          <span className="text-xs bg-[#DDD92A] text-black px-2 py-1 rounded-full font-semibold">
            {post.category}
          </span>
        )}
        <time dateTime={post.date} className="text-xs text-slate-500">
          {post.date}
        </time>
      </div>
  
      <h1 className="text-4xl text-[#EAE151] font-bold mb-2">
        {post.title}
      </h1>
      <p className="text-lg text-[#EAE151] opacity-70 mb-10">
        {post.subtitle}
      </p>
  
      <hr className="border-slate-800 mb-10" />
  
      <article>
        <Content components={components} />
      </article>
    </main>
  );
}