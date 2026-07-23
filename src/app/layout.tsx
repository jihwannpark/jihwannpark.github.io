import type { Metadata } from "next";
import { profile } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: `${profile.name} — ${profile.role} at ${profile.affiliation}. Research on ${profile.researchInterests
    .slice(0, 3)
    .join(", ")}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
