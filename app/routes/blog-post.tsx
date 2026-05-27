import type { Route } from "./+types/blog-post";
import { useStore } from "~/api";
import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { FileText } from "lucide-react";
import Title from "~/components/ui/Title";
import { HeaderTitle } from "~/components/ui/HeaderTitle";
import { Footer } from "~/components/ui/Footer";

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: `Gilles CRIELOUE - Article` },
    { name: "description", content: "Lecture d'un article de Gilles CRIELOUE" },
  ];
}

export default function BlogPost() {
  const { slug } = useParams();
  const { article, loading, fetchArticle } = useStore();

  useEffect(() => {
    if (slug) {
      void fetchArticle(slug);
    }
  }, [slug, fetchArticle]);

  return (
    <div className="bg-background min-h-screen text-zinc-100">
      <div className="grain"></div>
      <HeaderTitle
        activeTab="blog"
        badgeText="ARTICLE"
        bracketText="[ READING_STREAM ]"
        specLine1="DECRYPT: COMPLETE"
        specLine2="OUTPUT: SECURE_VIEW"
        specBold="SINGLE RECORD"
      />

      <div className="hazard-bar-inverted"></div>

      <main className="pattern-dense-grid min-h-[60vh] py-14">
        <section className="container mx-auto max-w-4xl px-5 max-md:px-2">
          <div className="mb-10">
            <Link
              to="/blog"
              className="mono group flex w-fit items-center gap-2 text-xs font-black tracking-widest text-zinc-400 uppercase hover:text-white"
            >
              <span className="text-sm transition-transform group-hover:-translate-x-1">
                ←
              </span>{" "}
              [ BACK_TO_BLOG ]
            </Link>
          </div>

          {loading ? (
            <div className="flex h-64 flex-col items-center justify-center space-y-4">
              <span className="mono h-8 w-8 animate-spin rounded-full border-4 border-zinc-700 border-t-white"></span>
              <p className="mono animate-pulse text-xs text-zinc-400">
                RETRIEVING_ARTICLE_DATA...
              </p>
            </div>
          ) : !article ? (
            <div className="clip-corner flex h-64 flex-col items-center justify-center border border-dashed border-zinc-700 bg-zinc-900/50 p-6 text-center">
              <p className="mono text-sm text-zinc-400">
                ERROR: ARTICLE_NOT_FOUND (SLUG: {slug})
              </p>
              <Link
                to="/blog"
                className="mono mt-4 cursor-pointer border border-zinc-400 px-3 py-1.5 text-xs font-bold text-zinc-300 transition-colors hover:bg-white hover:text-black"
              >
                [ RETURN_TO_BLOG ]
              </Link>
            </div>
          ) : (
            <article className="clip-corner relative border border-zinc-800 bg-zinc-900/40 p-8 md:p-12">
              <div className="pat-micro-grid absolute inset-0 opacity-10"></div>

              <div className="relative z-10">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="mono border border-white/20 bg-white/10 px-2 py-0.5 text-[9px] font-bold tracking-widest text-white">
                    PUBLISHED // {article.date}
                  </span>
                  <span className="mono text-[9px] font-bold text-zinc-500 select-none">
                    REF: {article.sys.id.toUpperCase()}
                  </span>
                </div>

                <h1 className="mb-8 border-b border-zinc-800 pb-6 text-3xl leading-tight font-black tracking-tighter text-white uppercase md:text-5xl">
                  {article.title}
                </h1>

                <div className="prose prose-invert prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-white prose-h4:text-zinc-200 prose-h5:text-zinc-300 prose-h6:text-zinc-400 prose-a:text-white prose-a:underline hover:prose-a:text-zinc-300 prose-a:transition-colors prose-strong:text-white prose-strong:font-bold prose-code:text-white prose-code:bg-zinc-800/40 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-zinc-950/80 prose-pre:border prose-pre:border-zinc-850 prose-pre:p-4 prose-pre:rounded-md prose-img:rounded-md prose-img:border prose-img:border-zinc-800 prose-hr:border-zinc-800 max-w-none font-sans leading-relaxed text-zinc-300">
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>

                <div className="mt-14 flex items-center justify-between border-t border-zinc-800 pt-8 select-none">
                  <div className="mono text-[9px] leading-tight text-zinc-600">
                    <div>DATA STREAM SECURED // VALUABLE RECORD</div>
                    <div>NEURAL-TEK DECRYPTER v1.0.4</div>
                  </div>
                  <div className="kojima-barcode-white opacity-20"></div>
                </div>
              </div>
            </article>
          )}
        </section>
      </main>

      <div className="hazard-bar"></div>

      <Footer rightLabel="SYSTEM VERSION: B.02 // COMPILED: 2026" />
    </div>
  );
}
