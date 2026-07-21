import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="w-full font-sans">
      <div className="mx-auto mt-24 w-full rounded-t-[32px] bg-neutral-100 py-12 md:rounded-t-[48px]">
        <div
          className="mx-auto flex w-full max-w-[1080px] flex-col justify-between gap-6 text-sm text-neutral-500 md:flex-row"
          style={{
            paddingLeft: "clamp(20px, 5vw, 32px)",
            paddingRight: "clamp(20px, 5vw, 32px)",
          }}
        >
          <div>
            <p className="mb-2 text-xl font-semibold text-neutral-700">
              {profile.name}
            </p>
            <p>
              {profile.role} · {profile.affiliation}
            </p>
          </div>

          <div className="text-left md:text-right">
            <a
              href={`mailto:${profile.email}`}
              className="transition hover:text-[#9c5b33]"
            >
              {profile.email}
            </a>
            <p className="mt-3 text-neutral-400">
              © {new Date().getFullYear()} {profile.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
