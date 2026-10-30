import Link from "next/link";

import SharedImage from "@/components/SharedImage";
import TagRow from "@/components/TagRow";
import { imageFitClass, mediaFrameClass, surfaceCardClass } from "@/lib/cardStyles";

export default function BlogCard({ post }) {
  const hasImage = Boolean(post.image);

  return (
    <Link href={`/blog/${post.slug}`} className={`${surfaceCardClass} flex h-full flex-col`}>
      {hasImage && (
        <SharedImage name={`blog-${post.slug}`}>
          <div className={`aspect-video w-full overflow-hidden ${mediaFrameClass(post.image, post.imageFit)}`}>
            <img
              src={post.image}
              alt=""
              className={`h-full w-full ${imageFitClass(post.imageFit)}`}
              loading="lazy"
            />
          </div>
        </SharedImage>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex min-w-0 items-center gap-3">
          {post.category ? <TagRow tags={[post.category]} limit={1} /> : null}
          {post.date ? (
            <span className="shrink-0 text-xs text-slate-500">{post.date}</span>
          ) : null}
        </div>
        <h2 className="accent-title text-xl font-bold">{post.title}</h2>
        {post.subtitle ? (
          <p className="mt-1 line-clamp-2 text-sm text-[#FAFDF6]/60">{post.subtitle}</p>
        ) : null}
        {post.excerpt ? (
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>
        ) : null}
      </div>
    </Link>
  );
}
