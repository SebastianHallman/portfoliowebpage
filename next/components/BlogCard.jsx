import Link from "next/link";

import SharedImage from "@/components/SharedImage";
import TagRow from "@/components/TagRow";
import { surfaceCardClass } from "@/lib/cardStyles";

export default function BlogCard({ post }) {
  const hasImage = Boolean(post.image);

  return (
    <Link href={`/blog/${post.slug}`} className={`${surfaceCardClass} block`}>
      {hasImage && (
        <SharedImage name={`blog-${post.slug}`}>
          <div className="aspect-video w-full overflow-hidden bg-slate-900">
            <img
              src={post.image}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </SharedImage>
      )}
      <div className={hasImage ? "p-5 sm:p-6" : "px-5 py-4 sm:px-6"}>
        <div className="mb-2 flex min-w-0 items-center gap-3">
          {post.category ? <TagRow tags={[post.category]} limit={1} /> : null}
          {post.date ? (
            <span className="shrink-0 text-xs text-slate-500">{post.date}</span>
          ) : null}
        </div>
        <h2 className={hasImage ? "text-2xl font-bold" : "text-xl font-bold"}>
          {post.title}
        </h2>
        {post.subtitle ? (
          <p className="mt-1 text-sm text-[#FAFDF6]/60">{post.subtitle}</p>
        ) : null}
        {post.excerpt ? (
          <p
            className={
              hasImage
                ? "mt-3 leading-relaxed text-slate-400"
                : "mt-2 text-sm leading-relaxed text-slate-400"
            }
          >
            {post.excerpt}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
