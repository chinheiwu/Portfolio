"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
  { href: "/viewers", label: "Viewers" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing with DOM class set by the pre-hydration theme script
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <aside className="sticky top-0 z-50 flex h-auto w-full shrink-0 flex-col border-b border-surface-border bg-background md:h-screen md:w-56 md:border-b-0 md:border-r">
      <div className="flex items-center justify-between px-6 py-4 md:block md:py-6">
        <Link href="/" className="font-mono text-sm font-bold tracking-tight">
          CHIN HEI WU
          <span className="text-accent">.</span>
        </Link>
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-foreground/70 transition-colors hover:text-foreground md:hidden"
        >
          {isDark ? "☀" : "🌙"}
        </button>
      </div>

      <nav className="overflow-x-auto md:flex-1 md:overflow-visible">
        <ul className="flex gap-1 px-3 pb-3 md:flex-col md:px-3 md:pb-0">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href} className="shrink-0">
                <Link
                  href={link.href}
                  className={`block whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-surface text-foreground"
                      : "text-foreground/60 hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="hidden px-6 py-6 md:block">
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-foreground/70 transition-colors hover:text-foreground"
        >
          {isDark ? "☀" : "🌙"}
        </button>
      </div>
    </aside>
  );
}
