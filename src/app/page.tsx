import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Authors from "@/components/Authors";
import Socials from "@/components/Socials";
import {
  awards,
  education,
  news,
  profile,
  projects,
  publications,
} from "@/lib/content";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-xs font-semibold tracking-[0.14em] text-stone-400 uppercase">
      {children}
    </h2>
  );
}

export default function Home() {
  const selected = publications
    .filter((p) => p.selected !== false)
    .sort((a, b) => b.year - a.year);

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />

      <main
        className="mx-auto w-full max-w-[880px] flex-1 pt-14 pb-4"
        style={{
          paddingLeft: "clamp(20px, 5vw, 28px)",
          paddingRight: "clamp(20px, 5vw, 28px)",
        }}
      >
        {/* ---------- Hero ---------- */}
        <section className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-40 w-40 shrink-0 rounded-full object-cover ring-1 ring-stone-200"
          />

          <div className="flex-1">
            <h1 className="font-serif text-4xl text-stone-900 md:text-[2.75rem]">
              {profile.name}
            </h1>
            <p className="mt-1 text-lg text-stone-600">
              {profile.role} at{" "}
              {profile.affiliationUrl ? (
                <a
                  href={profile.affiliationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#c2410c] underline-offset-4 hover:underline"
                >
                  {profile.affiliation}
                </a>
              ) : (
                <span className="font-medium text-[#c2410c]">
                  {profile.affiliation}
                </span>
              )}
            </p>

            {profile.greeting && (
              <p className="mt-6 text-lg text-stone-800">{profile.greeting}</p>
            )}

            {profile.bio.split("\n\n").map((para, i) => (
              <p key={i} className="mt-3 leading-relaxed text-stone-600">
                {para}
              </p>
            ))}

            <Socials />
          </div>
        </section>

        {/* ---------- News ---------- */}
        {news.length > 0 && (
          <section className="mt-16">
            <SectionLabel>News</SectionLabel>
            <div className="flex flex-col gap-3.5">
              {news.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-0.5 sm:flex-row sm:gap-6"
                >
                  <span className="shrink-0 text-sm text-stone-400 sm:w-24 sm:pt-0.5">
                    {item.date}
                  </span>
                  <span className="text-[15px] leading-relaxed text-stone-700">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---------- Education ---------- */}
        {education.length > 0 && (
          <section className="mt-16">
            <SectionLabel>Education</SectionLabel>
            <div className="flex flex-col gap-6">
              {education.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <div>
                    <h3 className="font-semibold text-stone-900">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-stone-500">
                      {item.institution}
                      {item.detail ? ` · ${item.detail}` : ""}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm text-stone-400">
                    {item.period}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---------- Research interests ---------- */}
        {profile.researchInterests.length > 0 && (
          <section className="mt-16">
            <SectionLabel>Research Interests</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {profile.researchInterests.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-stone-200 bg-white px-4 py-1.5 text-sm text-stone-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* ---------- Selected publications ---------- */}
        {selected.length > 0 && (
          <section className="mt-16">
            <SectionLabel>Selected Publications</SectionLabel>
            <div className="flex flex-col gap-7">
              {selected.map((pub, i) => (
                <article key={i}>
                  <p className="text-xs font-semibold tracking-wide text-[#c2410c] uppercase">
                    {pub.venue}
                    {pub.date ? ` · ${pub.date}` : ` · ${pub.year}`}
                  </p>
                  <h3 className="mt-1.5 font-serif text-xl leading-snug text-stone-900">
                    {pub.title}
                  </h3>
                  <p className="mt-1 text-[15px] text-stone-600">
                    <Authors authors={pub.authors} />
                  </p>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2.5 inline-block rounded-md border border-stone-200 bg-white px-2.5 py-1 text-xs font-medium text-stone-600 transition hover:border-[#c2410c] hover:text-[#c2410c]"
                    >
                      Link
                    </a>
                  )}
                </article>
              ))}
            </div>
            <Link
              href="/publications/"
              className="mt-8 inline-block text-sm font-medium text-[#c2410c] underline-offset-4 hover:underline"
            >
              All Publications →
            </Link>
          </section>
        )}

        {/* ---------- Projects ---------- */}
        {projects.length > 0 && (
          <section className="mt-16">
            <SectionLabel>Projects</SectionLabel>
            <div className="flex flex-col gap-6">
              {projects.map((p, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-stone-900">{p.title}</h3>
                  <p className="mt-0.5 text-sm text-[#c2410c]">
                    {[p.role, p.organization, p.period]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                  {p.summary && (
                    <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">
                      {p.summary}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---------- Awards ---------- */}
        {awards.length > 0 && (
          <section className="mt-16">
            <SectionLabel>Awards &amp; Activities</SectionLabel>
            <div className="flex flex-col gap-3.5">
              {awards.map((a, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-0.5 sm:flex-row sm:gap-6"
                >
                  <span className="shrink-0 text-sm text-stone-400 sm:w-24 sm:pt-0.5">
                    {a.date}
                  </span>
                  <span className="text-[15px] leading-relaxed text-stone-700">
                    {a.title}
                    {a.organization && (
                      <span className="text-stone-400"> · {a.organization}</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
