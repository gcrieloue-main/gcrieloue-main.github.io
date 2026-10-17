import type { Route } from "./+types/blog-post";
import { useStore } from "~/api";
import { useEffect } from "react";
import { Link, useParams, useLocation } from "react-router";
import { HeaderTitle } from "~/components/ui/HeaderTitle";
import { Footer } from "~/components/ui/Footer";
import { ArrowLeft } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Article — Gilles CRIELOUE` },
    { name: "description", content: "Lecture d'un article de Gilles CRIELOUE" },
  ];
}

export default function BlogPost() {
  const { slug } = useParams();
  const { article, loading, fetchArticle } = useStore();
  const location = useLocation();
  const currentTitle = loading
    ? location.state?.article?.title
    : article?.title;
  const currentDate = loading ? location.state?.article?.date : article?.date;

  useEffect(() => {
    if (slug) {
      void fetchArticle(slug);
    }
  }, [slug, fetchArticle]);

  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa]">
      <HeaderTitle
        activeTab="blog"
        subtitleText="Retours d'expérience, réflexions sur l'architecture et veille technique"
      />

      <main className="flex-1 py-12 md:py-20">
        <article className="container mx-auto max-w-4xl px-6">
          {/* Back button */}
          <div className="mb-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-950"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Retour à la liste des articles</span>
            </Link>
          </div>

          {loading && !article ? (
            <div className="flex h-64 flex-col items-center justify-center space-y-3">
              <span className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900"></span>
              <p className="font-mono text-xs text-zinc-500">
                Chargement du contenu...
              </p>
            </div>
          ) : !article ? (
            <div className="card-minimal mx-auto max-w-md space-y-4 p-12 text-center">
              <p className="text-sm text-zinc-600">
                Cet article est introuvable ou a été déplacé.
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Retour aux articles
              </Link>
            </div>
          ) : (
            <div className="card-minimal p-8 sm:p-12 md:p-16">
              <header className="mb-10 space-y-4 border-b border-zinc-200/80 pb-8">
                {currentDate && (
                  <time className="block font-mono text-xs font-medium text-zinc-500">
                    Publié le {currentDate}
                  </time>
                )}

                <h1
                  style={{ viewTransitionName: `blog-title-${slug}` }}
                  className="text-3xl leading-tight font-semibold tracking-tight text-zinc-950 sm:text-4xl md:text-5xl"
                >
                  {currentTitle}
                </h1>
              </header>

              <div className="prose prose-zinc prose-base sm:prose-lg prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-zinc-950 prose-p:leading-relaxed prose-p:text-zinc-700 prose-a:text-zinc-950 prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-zinc-600 prose-strong:text-zinc-950 prose-code:font-mono prose-code:text-zinc-800 prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>

              <footer className="mt-16 flex items-center justify-between border-t border-zinc-200/80 pt-8">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-900 underline-offset-4 hover:underline"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Tous les articles</span>
                </Link>
              </footer>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
