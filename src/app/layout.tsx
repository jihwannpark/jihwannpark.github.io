import type { Metadata } from "next";
import { Instrument_Sans, Raleway } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

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
    <html
      lang="en"
      className={`${instrumentSans.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}
