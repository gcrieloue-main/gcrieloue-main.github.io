import type { Route } from "./+types/blog";
import { Link, useSearchParams } from "react-router";
import { useStore } from "~/api";
import { useEffect } from "react";
import { BookOpen, ArrowRight, ArrowLeft } from "lucide-react";
import Title from "~/components/ui/Title";
import { HeaderTitle } from "~/components/ui/HeaderTitle";
import { Footer } from "~/components/ui/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Articles & Publications — Gilles CRIELOUE" },
    {
      name: "description",
      content:
        "Retours d'expérience, réflexions et partages techniques de Gilles CRIELOUE autour du développement web, de l'architecture logicielle et de l'IA.",
    },
  ];
}

function getSnippet(html: string, maxLength: number = 200): string {
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
    <div className="flex min-h-screen flex-col bg-[#fafafa]">
      <HeaderTitle
        activeTab="blog"
        subtitleText="Retours d'expérience, réflexions sur l'architecture et veille technique"
      />

      <main className="flex-1 py-12 md:py-20">
        <section className="container mx-auto max-w-6xl px-6">
          <Title level="h2" icon={<BookOpen />} subtitle="Publications">
            Articles
          </Title>

          {loading ? (
            <div className="flex h-64 flex-col items-center justify-center space-y-3">
              <span className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900"></span>
              <p className="font-mono text-xs text-zinc-500">
                Chargement des articles...
              </p>
            </div>
          ) : articles.length === 0 ? (
            <div className="card-minimal mx-auto max-w-md space-y-4 p-12 text-center">
              <p className="text-sm text-zinc-600">
                Aucun article trouvé sur cette page.
              </p>
              {page > 1 && (
                <button
                  onClick={() => setSearchParams({ page: "1" })}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Retour à la première
                  page
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-12">
              <div className="grid gap-6 md:grid-cols-2">
                {articles.map((article) => (
                  <article
                    key={article.sys.id}
                    className="card-minimal group flex flex-col justify-between p-6 transition-all duration-300 hover:border-zinc-400 sm:p-8"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-zinc-500">
                          {article.date}
                        </span>
                      </div>

                      <h3
                        style={{
                          viewTransitionName: `blog-title-${article.slug}`,
                        }}
                        className="text-xl font-semibold tracking-tight text-zinc-950 transition-colors group-hover:text-zinc-700 sm:text-2xl"
                      >
                        <Link
                          to={`/blog/${article.slug}`}
                          state={{ article }}
                          viewTransition
                        >
                          {article.title}
                        </Link>
                      </h3>

                      <p className="line-clamp-3 text-sm leading-relaxed text-zinc-600">
                        {getSnippet(article.content)}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-zinc-100 pt-6">
                      <Link
                        to={`/blog/${article.slug}`}
                        state={{ article }}
                        viewTransition
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 transition-all group-hover:gap-2.5"
                      >
                        <span>Lire l'article</span>
                        <ArrowRight className="h-3.5 w-3.5 text-zinc-600" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Minimal Pagination */}
              <div className="flex items-center justify-between border-t border-zinc-200/80 pt-8">
                <button
                  onClick={handlePrev}
                  disabled={page === 1}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-950 disabled:pointer-events-none disabled:opacity-30"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Page précédente
                </button>

                <span className="font-mono text-xs font-medium text-zinc-500">
                  Page {page.toString().padStart(2, "0")}
                </span>

                <button
                  onClick={handleNext}
                  disabled={articles.length < 10}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-950 disabled:pointer-events-none disabled:opacity-30"
                >
                  Page suivante <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
