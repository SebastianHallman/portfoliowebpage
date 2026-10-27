/** Shared surface for blog and project cards. Matches the work-experience cards. */
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD92A] focus-visible:[outline-color:#DDD92A]";

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
