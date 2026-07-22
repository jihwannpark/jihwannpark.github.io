import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer
      className="mx-auto mt-24 w-full max-w-[880px] border-t border-stone-200 py-10"
      style={{
        paddingLeft: "clamp(20px, 5vw, 28px)",
        paddingRight: "clamp(20px, 5vw, 28px)",
      }}
    >
      <div className="flex flex-col justify-between gap-4 text-sm text-stone-500 sm:flex-row">
        <div>
          <p className="font-serif text-lg text-stone-800">{profile.name}</p>
          <p className="mt-0.5">
            {profile.role} · {profile.affiliation}
          </p>
        </div>
        <div className="text-left sm:text-right">
          <a
            href={`mailto:${profile.email}`}
            className="transition hover:text-[#c2410c]"
          >
            {profile.email}
          </a>
          <p className="mt-2 text-stone-400">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
