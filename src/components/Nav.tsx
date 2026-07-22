"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/content";

const ITEMS = [
  { label: "Home", href: "/" },
  { label: "Publications", href: "/publications/" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-stone-200/70 bg-[#fafaf9]/85 backdrop-blur-md">
      <div
        className="mx-auto flex h-16 w-full max-w-[880px] items-center justify-between"
        style={{
          paddingLeft: "clamp(20px, 5vw, 28px)",
          paddingRight: "clamp(20px, 5vw, 28px)",
        }}
      >
        <Link
          href="/"
          className="text-[15px] font-bold tracking-tight text-stone-900"
        >
          {profile.name.toUpperCase()}
        </Link>

        <div className="flex items-center gap-1 text-sm">
          {ITEMS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 transition ${
                  active
                    ? "font-semibold text-stone-900"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          {profile.cv && (
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-3 py-1.5 text-stone-500 transition hover:text-stone-900"
            >
              CV
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
