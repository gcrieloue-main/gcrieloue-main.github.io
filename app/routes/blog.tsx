import type { Route } from "./+types/blog";
import { getArticles } from "~/api";
import { Link, useSearchParams, useLoaderData } from "react-router";
import { useStore } from "~/api";
import { useEffect } from "react";
import { BookOpen } from "lucide-react";
import Title from "~/components/ui/Title";
import { HeaderTitle } from "~/components/ui/HeaderTitle";
import { Footer } from "~/components/ui/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gilles CRIELOUE - Blog" },
    {
      name: "description",
      content: "Articles et publications de Gilles CRIELOUE",
    },
  ];
}

function getSnippet(html: string, maxLength: number = 220): string {
  const temp = html.replace(/<[^>]*>/g, " ");
  return temp.length > maxLength
    ? temp.slice(0, maxLength).trim() + "..."
    : temp;
}

export default function Blog() {
  const { articles, loading, fetchArticles } = useStore();
  const [searchParams, setSearchParams] = useSearchParams();

  const pageStr = searchParams.get("page") || "1";
  const page = parseInt(pageStr, 10) || 1;

  useEffect(() => {
    void fetchArticles(page, 10);
  }, [page, fetchArticles]);

  const handlePrev = () => {
    if (page > 1) {
      setSearchParams({ page: (page - 1).toString() });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (articles.length === 10) {
      setSearchParams({ page: (page + 1).toString() });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-background min-h-screen text-zinc-100">
      <div className="grain"></div>
      <HeaderTitle
        activeTab="blog"
        badgeText="ARCHIVES"
        bracketText="[ ARTICLE_FEED_TELEM ]"
        specLine1="TRANSMISSION: DIRECT_FEED"
        specLine2="STATUS: ONLINE_CONNECTED"
        specBold="KNOWLEDGE BASE"
      />

      <div className="hazard-bar-inverted"></div>

      <main className="pattern-dense-grid min-h-[60vh] py-14">
        <section className="container mx-auto px-5 max-md:px-2">
          <Title
            level="h2"
            icon={<BookOpen />}
            subtitle="SECTION_02_ARTICLES"
            decorationText={`ACTIVE_PAGE: ${page}`}
            decorationTextSecondary="DATABASE: RETRIEVED"
          >
            Articles
          </Title>

          {loading ? (
            <div className="flex h-64 flex-col items-center justify-center space-y-4">
              <span className="mono h-8 w-8 animate-spin rounded-full border-4 border-zinc-700 border-t-white"></span>
              <p className="mono animate-pulse text-xs text-zinc-400">
                RETRIEVING_DATA_STREAM...
              </p>
            </div>
          ) : articles.length === 0 ? (
            <div className="clip-corner flex h-64 flex-col items-center justify-center border border-dashed border-zinc-700 bg-zinc-900/50 p-6 text-center">
              <p className="mono text-sm text-zinc-400">
                NO_RECORDS_FOUND_ON_PAGE: {page}
              </p>
              {page > 1 && (
                <button
                  onClick={() => setSearchParams({ page: "1" })}
                  className="mono mt-4 cursor-pointer border border-zinc-400 px-3 py-1.5 text-xs font-bold text-zinc-300 transition-colors hover:bg-white hover:text-black"
                >
                  [ RETURN_TO_PAGE_1 ]
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-12">
              <div className="grid gap-6 md:grid-cols-2">
                {articles.map((article) => (
                  <article
                    key={article.sys.id}
                    className="group clip-corner-sm relative border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-900/90"
                  >
                    <div className="pat-micro-grid absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20"></div>

                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div>
                        <div className="mb-4 flex items-center justify-between border-b border-zinc-800 pb-3">
                          <span className="mono bg-zinc-800 px-2 py-0.5 text-[9px] font-bold tracking-widest text-zinc-400">
                            ID: {article.sys.id.slice(0, 8).toUpperCase()}
                          </span>
                          <span className="mono text-[9px] font-bold text-zinc-500">
                            {article.date}
                          </span>
                        </div>

                        <h3
                          style={{
                            viewTransitionName: `blog-title-${article.slug}`,
                          }}
                          className="mb-3 text-xl font-extrabold tracking-tight text-zinc-300 uppercase transition-colors group-hover:text-white"
                        >
                          <Link
                            to={`/blog/${article.slug}`}
                            state={{ article }}
                            viewTransition
                            className="transition-colors hover:text-white"
                          >
                            {article.title}
                          </Link>
                        </h3>

                        <p className="mb-6 font-sans text-sm leading-relaxed text-zinc-400">
                          {getSnippet(article.content)}
                        </p>
                      </div>

                      <div className="border-zinc-850 flex items-end justify-between border-t pt-4">
                        <Link
                          to={`/blog/${article.slug}`}
                          state={{ article }}
                          viewTransition
                          className="mono flex items-center gap-2 text-xs font-black tracking-widest text-zinc-300 uppercase transition-transform group-hover:translate-x-1 hover:text-white"
                        >
                          [ READ_POST ] <span className="text-sm">→</span>
                        </Link>
                        <span className="kojima-barcode-white opacity-10 transition-opacity group-hover:opacity-25"></span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="mt-14 flex items-center justify-between border-t border-zinc-800 pt-8">
                <button
                  onClick={handlePrev}
                  disabled={page === 1}
                  className="mono cursor-pointer border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-[10px] font-extrabold tracking-widest text-zinc-300 transition-all hover:border-white hover:text-white disabled:pointer-events-none disabled:opacity-20"
                >
                  [ PREVIOUS_PAGE ]
                </button>

                <span className="mono text-xs font-bold text-zinc-500">
                  PAGE // {page.toString().padStart(2, "0")}
                </span>

                <button
                  onClick={handleNext}
                  disabled={articles.length < 10}
                  className="mono cursor-pointer border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-[10px] font-extrabold tracking-widest text-zinc-300 transition-all hover:border-white hover:text-white disabled:pointer-events-none disabled:opacity-20"
                >
                  [ NEXT_PAGE ]
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      <div className="hazard-bar"></div>

      <Footer />
    </div>
  );
}
