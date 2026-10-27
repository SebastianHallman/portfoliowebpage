import Link from "next/link";
import { notFound } from "next/navigation";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getPosts, getPost } from "@/lib/posts";
import SharedImage from "@/components/SharedImage";
import { backLinkClass, tagChipClass } from "@/lib/cardStyles";
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
    <div className="min-h-screen bg-black text-[#FAFDF6]">
    <main className="max-w-2xl mx-auto px-6 pt-10 pb-16">
      <Link
        href="/blog"
        className={backLinkClass}
      >
        ← All posts
      </Link>
  
      {post.image && (
        <SharedImage name={`blog-${post.slug}`}>
          <div className="mb-8 aspect-video overflow-hidden rounded-2xl bg-slate-900 shadow-lg shadow-black/40">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </SharedImage>
      )}
  
      <div className="flex items-center gap-3 mb-4">
        {post.category && (
          <span className={tagChipClass}>{post.category}</span>
        )}
        <time dateTime={post.date} className="text-xs text-slate-500">
          {post.date}
        </time>
      </div>
  
      <h1 className="text-4xl text-[#EAE151] font-bold mb-2">
        {post.title}
      </h1>
      <p className="text-lg text-[#FAFDF6]/65 mb-10">
        {post.subtitle}
      </p>
  
      <hr className="border-slate-800 mb-10" />
  
      <article>
        <Content components={components} />
      </article>
    </main>
    </div>
  );
}