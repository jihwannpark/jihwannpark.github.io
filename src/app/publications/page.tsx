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
        className="mx-auto w-full max-w-[880px] flex-1 pt-14 pb-4"
        style={{
          paddingLeft: "clamp(20px, 5vw, 28px)",
          paddingRight: "clamp(20px, 5vw, 28px)",
        }}
      >
        <h1 className="text-4xl font-semibold tracking-tight text-slate-800">
          Publications
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          {publications.length} item{publications.length === 1 ? "" : "s"}
        </p>

        {years.map((year) => {
          const items = byYear.filter((p) => p.year === year);
          return (
            <section key={year} className="mt-12">
              <h2 className="mb-5 text-xs font-semibold tracking-[0.16em] text-slate-400 uppercase">
                {year}
              </h2>
              <div className="flex flex-col gap-7">
                {items.map((pub, i) => (
                  <article key={i} className="flex gap-5">
                    <span className="w-6 shrink-0 pt-0.5 text-sm text-slate-300">
                      {items.length - i}
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                        {pub.category}
                        {pub.date ? ` · ${pub.date}` : ""}
                      </p>
                      <h3 className="mt-1.5 text-lg leading-snug font-semibold text-slate-800">
                        {pub.title}
                      </h3>
                      <p className="mt-1 text-[15px] text-slate-600">
                        <Authors authors={pub.authors} />
                      </p>
                      <p className="mt-0.5 text-sm text-slate-400 italic">
                        {pub.venue}
                      </p>
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2.5 inline-block rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 transition hover:border-slate-400 hover:text-slate-900"
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
