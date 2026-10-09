import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-6 py-16 text-[#FAFDF6]">
      <div className="w-full max-w-xl text-center">
        <p
          aria-hidden="true"
          className="text-[clamp(7rem,25vw,12rem)] font-black leading-none tracking-tighter text-[#DDD92A]"
        >
          404
        </p>

        <div className="mx-auto my-8 h-px w-20 bg-[#DDD92A]/40" />

        <h1 className="text-3xl sm:text-4xl font-bold">
          Something does not seem right.
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-slate-400">
          This page may have moved, or the link might be incorrect.
          Let’s get you back on track.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-[#DDD92A] px-6 py-3 font-semibold text-black hover:bg-[#EAE151] transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DDD92A]"
          >
            Home
          </Link>

        </div>
      </div>
    </main>
  );
}