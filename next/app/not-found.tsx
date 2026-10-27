import Link from "next/link";
import { pageShellClass, primaryButtonClass } from "@/lib/cardStyles";

export default function NotFound() {
  return (
    <main className={`${pageShellClass} flex min-h-screen items-center justify-center bg-black py-16 text-[#FAFDF6]`}>
      <div className="w-full max-w-xl text-center">
        <p
          aria-hidden="true"
          className="text-[clamp(7rem,25vw,12rem)] font-black leading-none tracking-tighter text-accent"
        >
          404
        </p>

        <div className="mx-auto my-8 h-px w-20 bg-accent/40" />

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
            className={`${primaryButtonClass} px-6 py-3`}
          >
            Home
          </Link>

        </div>
      </div>
    </main>
  );
}