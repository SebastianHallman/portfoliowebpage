/** Shared surface for blog and project cards. Matches the work-experience cards. */
export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent focus-visible:[outline-color:var(--color-accent)]";

/** One shell for the nav and every page, so the left edge lines up. */
export const pageShellClass = "mx-auto w-full max-w-6xl px-6";

/** Photos fill the frame. Logos and screenshots opt into contain. */
export function resolveImageFit(value) {
  return value === "contain" ? "contain" : "cover";
}

export function imageFitClass(value) {
  return resolveImageFit(value) === "contain" ? "object-contain" : "object-cover";
}

/** Letterbox color. The Vite wordmark is on white; other contained art sits on the card well. */
export function mediaFrameClass(src, value) {
  if (
    resolveImageFit(value) === "contain" &&
    typeof src === "string" &&
    src.includes("vite-to-nextjs")
  ) {
    return "bg-[#fff]";
  }
  return "bg-slate-900";
}

export const pageTitleClass = "text-left text-4xl font-bold sm:text-5xl";

export const surfaceCardClass = [
  "w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-left text-[#FAFDF6]",
  "transition duration-300 hover:-translate-y-0.5 hover:border-slate-600",
  focusRing,
  "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
].join(" ");

export const backLinkClass = [
  "mb-8 inline-block rounded-sm text-sm text-[#FAFDF6]/55 transition duration-300 hover:text-[#FAFDF6]",
  focusRing,
].join(" ");

export const tagChipClass =
  "inline-block whitespace-nowrap rounded-full bg-white/5 px-2 py-0.5 text-[11px] leading-4 text-[#FAFDF6]/75 ring-1 ring-inset ring-[#FAFDF6]/15";

export const accentButtonClass = [
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold",
  "bg-accent/10 text-[#FAFDF6] ring-1 ring-accent transition hover:bg-accent hover:text-black",
  focusRing,
].join(" ");

export const primaryButtonClass = [
  "inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 font-semibold text-black",
  "transition hover:brightness-110",
  focusRing,
].join(" ");
