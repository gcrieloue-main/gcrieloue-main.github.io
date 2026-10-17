import type { Route } from "./+types/blog";
import { Link, useSearchParams } from "react-router";
import { useStore } from "~/api";
import { useEffect, useState, useRef } from "react";
import { BookOpen, ArrowRight, ArrowLeft, Search, X } from "lucide-react";
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
  const { articles, loading, fetchArticles, searchArticles } = useStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pageStr = searchParams.get("page") || "1";
  const page = parseInt(pageStr, 10) || 1;

  // Initial fetch and page navigation when not in active search
  useEffect(() => {
    if (!isSearching) {
      void fetchArticles(page, 10);
    }
  }, [page, isSearching, fetchArticles]);

  // Handle search with debounce
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (value.trim().length > 1) {
      setIsSearching(true);
      searchTimeoutRef.current = setTimeout(() => {
        void searchArticles(value.trim());
      }, 300);
    } else if (value.trim().length === 0) {
      handleClearSearch();
    }
  };

  const handleClearSearch = () => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    setSearchQuery("");
    setIsSearching(false);
    void fetchArticles(page, 10);
  };

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
          <Title
            level="h2"
            icon={<BookOpen />}
            subtitle="Publications"
            action={
              <div className="relative w-full sm:w-72">
                <Search className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Rechercher par mot-clé..."
                  className="w-full rounded-md border border-zinc-200/90 bg-zinc-50/80 py-1.5 pr-8 pl-8.5 text-xs text-zinc-900 shadow-2xs transition-all placeholder:text-zinc-400 hover:bg-white focus:border-zinc-900 focus:bg-white focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded p-0.5 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
                    title="Effacer la recherche"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            }
          >
            Articles
          </Title>

          {/* Active Search status pill */}
          {isSearching && (
            <div className="mb-8 rounded-lg border border-zinc-200/60 bg-zinc-100/80 p-3 text-xs text-zinc-700">
              {loading ? (
                "Recherche en cours..."
              ) : (
                <span>
                  {articles.length} article{articles.length > 1 ? "s" : ""}{" "}
                  trouvé{articles.length > 1 ? "s" : ""} pour{" "}
                  <strong className="font-medium whitespace-nowrap text-zinc-900">
                    «&nbsp;{searchQuery}&nbsp;»
                  </strong>
                </span>
              )}
            </div>
          )}

          {loading ? (
            <div className="flex h-64 flex-col items-center justify-center space-y-3">
              <span className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900"></span>
              <p className="font-mono text-xs text-zinc-500">
                {isSearching
                  ? "Recherche dans les publications..."
                  : "Chargement des articles..."}
              </p>
            </div>
          ) : articles.length === 0 ? (
            <div className="card-minimal mx-auto max-w-lg space-y-4 p-10 text-center sm:p-12">
              <p className="text-sm leading-relaxed [text-wrap:balance] text-zinc-600">
                {isSearching ? (
                  <span>
                    Aucun article ne correspond à votre recherche{" "}
                    <strong className="font-medium whitespace-nowrap text-zinc-900">
                      «&nbsp;{searchQuery}&nbsp;»
                    </strong>
                    .
                  </span>
                ) : (
                  "Aucun article trouvé sur cette page."
                )}
              </p>
              {isSearching ? (
                <button
                  onClick={handleClearSearch}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Voir tous les articles
                </button>
              ) : (
                page > 1 && (
                  <button
                    onClick={() => setSearchParams({ page: "1" })}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" /> Retour à la première
                    page
                  </button>
                )
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

              {/* Minimal Pagination - only show when not in active search */}
              {!isSearching && (
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
              )}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
