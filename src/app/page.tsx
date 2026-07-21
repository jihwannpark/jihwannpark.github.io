import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Authors from "@/components/Authors";
import {
  awards,
  education,
  news,
  profile,
  projects,
  publications,
} from "@/lib/content";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-2xl font-semibold text-[#26343a]">{children}</h2>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-20">
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
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
        className="mx-auto w-full max-w-[1080px] flex-1 pt-16 pb-4"
        style={{
          paddingLeft: "clamp(20px, 5vw, 32px)",
          paddingRight: "clamp(20px, 5vw, 32px)",
        }}
      >
        {/* ---------- Hero ---------- */}
        <section className="flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-44 w-44 shrink-0 rounded-3xl object-cover md:h-56 md:w-56"
          />

          <div className="flex-1">
            <h1 className="text-4xl font-semibold text-[#26343a] md:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg text-[#4b3a24]/80">
              {profile.role} at{" "}
              {profile.affiliationUrl ? (
                <a
                  href={profile.affiliationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#9c5b33] underline-offset-4 hover:underline"
                >
                  {profile.affiliation}
                </a>
              ) : (
                <span className="font-medium text-[#9c5b33]">
                  {profile.affiliation}
                </span>
              )}
            </p>

            {profile.greeting && (
              <p className="mt-6 text-xl text-[#26343a]">{profile.greeting}</p>
            )}

            {profile.bio.split("\n\n").map((para, i) => (
              <p key={i} className="mt-3 text-base text-[#4b3a24]/75">
                {para}
              </p>
            ))}

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-[#4b3a24]/20 px-4 py-1.5 text-sm font-medium text-[#4b3a24]/80 transition hover:border-[#9c5b33] hover:text-[#9c5b33]"
              >
                {profile.email}
              </a>
              {profile.links
                .filter((l) => l.url)
                .map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#4b3a24]/20 px-4 py-1.5 text-sm font-medium text-[#4b3a24]/80 transition hover:border-[#9c5b33] hover:text-[#9c5b33]"
                  >
                    {l.label}
                  </a>
                ))}
              {profile.cv && (
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#4b3a24] px-4 py-1.5 text-sm font-medium text-white transition hover:bg-[#9c5b33]"
                >
                  CV
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ---------- News ---------- */}
        {news.length > 0 && (
          <Section id="news" title="News">
            <div className="divide-y divide-[#4b3a24]/10 border-y border-[#4b3a24]/10">
              {news.map((item, i) => (
                <div key={i} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-8">
                  <span className="shrink-0 text-sm font-medium tracking-wide text-[#9c5b33] sm:w-28">
                    {item.date}
                  </span>
                  <span className="text-base text-[#4b3a24]/80">{item.text}</span>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* ---------- Research interests ---------- */}
        {profile.researchInterests.length > 0 && (
          <Section id="interests" title="Research Interests">
            <div className="flex flex-wrap gap-2">
              {profile.researchInterests.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#4b3a24]/5 px-4 py-2 text-sm font-medium text-[#4b3a24]/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* ---------- Education ---------- */}
        {education.length > 0 && (
          <Section id="education" title="Education">
            <div className="divide-y divide-[#4b3a24]/10 border-y border-[#4b3a24]/10">
              {education.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <div>
                    <h3 className="text-base font-semibold text-[#26343a]">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-[#4b3a24]/70">
                      {item.institution}
                      {item.detail ? ` · ${item.detail}` : ""}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-[#9c5b33]">
                    {item.period}
                  </span>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* ---------- Selected publications ---------- */}
        {selected.length > 0 && (
          <Section id="publications" title="Selected Publications">
            <div className="divide-y divide-[#4b3a24]/10 border-y border-[#4b3a24]/10">
              {selected.map((pub, i) => (
                <article key={i} className="py-6">
                  <p className="text-sm font-medium tracking-wide text-[#9c5b33]">
                    {pub.venue}
                    {pub.date ? ` · ${pub.date}` : ` · ${pub.year}`}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[#26343a]">
                    {pub.title}
                  </h3>
                  <p className="mt-1 text-base text-[#4b3a24]/70">
                    <Authors authors={pub.authors} />
                  </p>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block rounded-full border border-[#4b3a24]/20 px-3 py-1 text-xs font-medium text-[#4b3a24]/70 transition hover:border-[#9c5b33] hover:text-[#9c5b33]"
                    >
                      Link
                    </a>
                  )}
                </article>
              ))}
            </div>
            <Link
              href="/publications/"
              className="mt-6 inline-block rounded-full bg-[#4b3a24] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#9c5b33]"
            >
              All Publications
            </Link>
          </Section>
        )}

        {/* ---------- Projects ---------- */}
        {projects.length > 0 && (
          <Section id="projects" title="Projects">
            <div className="grid gap-4">
              {projects.map((p, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[#4b3a24]/10 bg-white p-6"
                >
                  <h3 className="text-base font-semibold text-[#26343a]">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#9c5b33]">
                    {[p.role, p.organization, p.period]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                  {p.summary && (
                    <p className="mt-2 text-sm text-[#4b3a24]/75">{p.summary}</p>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* ---------- Awards ---------- */}
        {awards.length > 0 && (
          <Section id="awards" title="Awards & Activities">
            <div className="divide-y divide-[#4b3a24]/10 border-y border-[#4b3a24]/10">
              {awards.map((a, i) => (
                <div key={i} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-8">
                  <span className="shrink-0 text-sm font-medium tracking-wide text-[#9c5b33] sm:w-28">
                    {a.date}
                  </span>
                  <span className="text-base text-[#4b3a24]/80">
                    {a.title}
                    {a.organization && (
                      <span className="text-[#4b3a24]/55"> · {a.organization}</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </Section>
        )}
      </main>

      <Footer />
    </div>
  );
}
