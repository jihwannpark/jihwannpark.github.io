import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Authors from "@/components/Authors";
import { publications } from "@/lib/content";

export const metadata = {
  title: "Publications",
};

export default function PublicationsPage() {
  const byYear = [...publications].sort((a, b) => b.year - a.year);
  const years = [...new Set(byYear.map((p) => p.year))];

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
        <h1 className="text-4xl font-semibold text-[#26343a]">Publications</h1>
        <p className="mt-3 text-base text-[#4b3a24]/70">
          {publications.length} item{publications.length === 1 ? "" : "s"}
        </p>

        {years.map((year) => {
          const items = byYear.filter((p) => p.year === year);
          return (
            <section key={year} className="mt-12">
              <h2 className="mb-4 text-sm font-semibold tracking-[0.12em] text-[#9c5b33]">
                {year}
              </h2>
              <div className="divide-y divide-[#4b3a24]/10 border-y border-[#4b3a24]/10">
                {items.map((pub, i) => (
                  <article key={i} className="flex gap-5 py-6">
                    <span className="w-8 shrink-0 text-base font-semibold text-[#4b3a24]/25">
                      {items.length - i}
                    </span>
                    <div>
                      <p className="text-sm font-medium tracking-wide text-[#9c5b33]">
                        {pub.category}
                        {pub.date ? ` · ${pub.date}` : ""}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-[#26343a]">
                        {pub.title}
                      </h3>
                      <p className="mt-1 text-base text-[#4b3a24]/70">
                        <Authors authors={pub.authors} />
                      </p>
                      <p className="mt-1 text-sm italic text-[#4b3a24]/55">
                        {pub.venue}
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
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
}
