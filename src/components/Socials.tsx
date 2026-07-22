import { profile } from "@/lib/content";

/** Small circular icon buttons for email + external profile links. */

function iconFor(label: string) {
  const l = label.toLowerCase();
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (l.includes("mail") || l.includes("email"))
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  if (l.includes("github"))
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.11.39-2.02 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.74 0 3.92-2.34 4.78-4.57 5.03.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  if (l.includes("scholar"))
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Z" />
        <path d="M5 13.18v3.5L12 20l7-3.32v-3.5L12 16.5 5 13.18Z" />
      </svg>
    );
  if (l.includes("linkedin"))
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.22c0-1.25-.02-2.85-1.9-2.85-1.9 0-2.2 1.36-2.2 2.76V21h-4V9Z" />
      </svg>
    );
  if (l === "x" || l.includes("twitter"))
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.24 2H21.5l-7.13 8.15L22.75 22h-6.56l-5.14-6.72L5.17 22H1.9l7.62-8.71L1.25 2h6.72l4.65 6.15L18.24 2Zm-1.15 18h1.81L7.01 3.9H5.06L17.09 20Z" />
      </svg>
    );
  return <span className="text-[11px] font-semibold">{label.slice(0, 2)}</span>;
}

export default function Socials() {
  const links = profile.links.filter((l) => l.url);

  return (
    <div className="mt-6 flex flex-wrap items-center gap-2.5">
      <a
        href={`mailto:${profile.email}`}
        aria-label="Email"
        title={profile.email}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition hover:border-[#c2410c] hover:text-[#c2410c]"
      >
        {iconFor("email")}
      </a>

      {links.map((l) => (
        <a
          key={l.label}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          title={l.label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition hover:border-[#c2410c] hover:text-[#c2410c]"
        >
          {iconFor(l.label)}
        </a>
      ))}

      {profile.cv && (
        <a
          href={profile.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 items-center rounded-full border border-stone-300 px-4 text-sm font-medium text-stone-600 transition hover:border-[#c2410c] hover:text-[#c2410c]"
        >
          CV
        </a>
      )}
    </div>
  );
}
