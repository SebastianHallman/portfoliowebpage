import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home", id: "home" },
  { href: "/projects", label: "Projects", id: "projects" },
  { href: "/blog", label: "Blog", id: "blog" },
];

export default function SiteNav({ current }) {
  return (
    <header className="site-header sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-12 max-w-6xl items-center gap-1 px-3 sm:px-6"
      >
        {LINKS.map((link) => {
          const active = link.id === current;
          return (
            <Link
              key={link.id}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={[
                "inline-flex h-11 items-center rounded-md px-3 text-sm transition duration-300",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD92A]",
                active
                  ? "text-[#FAFDF6] shadow-[inset_0_-2px_0_0_#DDD92A]"
                  : "text-[#FAFDF6]/80 hover:text-[#DDD92A]",
              ].join(" ")}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
