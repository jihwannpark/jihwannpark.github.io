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
    <nav className="sticky top-0 z-50 w-full border-b border-[#4b3a24]/10 bg-white/85 backdrop-blur-md">
      <div
        className="mx-auto flex h-16 w-full max-w-[1080px] items-center justify-between"
        style={{
          paddingLeft: "clamp(20px, 5vw, 32px)",
          paddingRight: "clamp(20px, 5vw, 32px)",
        }}
      >
        <Link
          href="/"
          className="font-nav text-base font-bold tracking-tight text-[#4b3a24]"
        >
          {profile.name.toUpperCase()}
        </Link>

        <div className="flex items-center gap-1 font-nav text-sm">
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
                    ? "bg-[#4b3a24]/8 font-semibold text-[#4b3a24]"
                    : "text-[#4b3a24]/60 hover:text-[#4b3a24]"
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
              className="rounded-full px-3 py-1.5 text-[#4b3a24]/60 transition hover:text-[#4b3a24]"
            >
              CV
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
