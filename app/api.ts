import * as showdown from 'showdown';
import * as contentful from 'contentful';
import type { Entry, EntryFieldTypes } from 'contentful';
import { create } from 'zustand';
import { codeToHtml } from "shiki";

const client = contentful.createClient({
  space: 'oamir411dfuu',
  accessToken:
    'fe844e41216f12522cc40b8a179e7c81c8a0f17b797503155ba949afbb6aca96',
});

const converter = new showdown.Converter({
  headerLevelStart: 4,
  simpleLineBreaks: true,
  tables: true,
});

// Skeletons for Contentful content types
export type ArticleSkeleton = {
  contentTypeId: 'article',
  fields: {
    title: EntryFieldTypes.Symbol,
    content: EntryFieldTypes.Text,
    date: EntryFieldTypes.Date,
    slug: EntryFieldTypes.Symbol,
  }
}

export type WorkExperienceSkeleton = {
  contentTypeId: 'workExperience',
  fields: {
    periodBegin: EntryFieldTypes.Date,
    periodEnd: EntryFieldTypes.Date,
    description: EntryFieldTypes.Text,
    company: EntryFieldTypes.Symbol,
    jobTitle: EntryFieldTypes.Symbol,
  }
}

export type CvParagraphSkeleton = {
  contentTypeId: 'paragraph',
  fields: {
    text: EntryFieldTypes.Text,
  }
}

// Processed Types for UI
export interface ProcessedArticle {
  sys: Entry['sys'];
  title: string;
  content: string;
  date: string;
  slug: string;
}

export interface ProcessedWorkExperience {
  sys: Entry['sys'];
  begin: string;
  end: string;
  description: string;
  company: string;
  jobTitle: string;
}

export interface ProcessedCvParagraph {
  sys: Entry['sys'];
  text: string;
}

/**
 * Replace ascii smileys with utf-8 smileys
 */
function replaceSmileys(text: string): string {
  return text
    .replace(/:\)/g, '😃')
    .replace(/;\)/g, '😉')
    .replace(/:\(/g, '😩')
    .replace(/:D/g, '😄');
}

const formatDate = (date: Date): string =>
  ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();

async function highlightCodeBlocks(html: string): Promise<string> {
  const regex = /<pre>\s*<code([^>]*)>([\s\S]*?)<\/code>\s*<\/pre>/g;
  const matches = [...html.matchAll(regex)];
  if (matches.length === 0) return html;

  let result = html;
  for (const match of matches) {
    const fullMatch = match[0];
    const attrs = match[1];
    const rawCode = match[2];

    let lang = "text";
    const classMatch = attrs.match(/class="([^"]+)"/);
    if (classMatch) {
      const classes = classMatch[1].split(/\s+/);
      const langClass = classes.find((c) => c.startsWith("language-"));
      if (langClass) {
        lang = langClass.replace("language-", "");
      } else if (classes.length > 0) {
        lang = classes[0];
      }
    }

    const decodedCode = rawCode
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&#x27;/g, "'")
      .replace(/&amp;/g, "&"); // &amp; must be decoded last!

    try {
      const highlighted = await codeToHtml(decodedCode, {
        lang: lang,
        theme: "github-dark",
        colorReplacements: {
          '#24292e': 'transparent',
        }
      });
      const wrapped = `<div class="not-prose my-4">${highlighted}</div>`;
      result = result.replace(fullMatch, wrapped);
    } catch (e) {
      console.error("Shiki highlighting failed for lang:", lang, e);
    }
  }
  return result;
}

// Processing functions
function processArticle(element: Entry<ArticleSkeleton>): ProcessedArticle {
  const date = new Date(element.fields.date as string);
  const formatedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
  const formatedDay = ('0' + date.getDate()).slice(-2);
  return {
    sys: element.sys,
    title: replaceSmileys(element.fields.title as string),
    content: converter.makeHtml(replaceSmileys(element.fields.content as string)),
    date: `${formatedDay}/${formatedMonth}`,
    slug: element.fields.slug as string,
  };
}

// API functions
export function getArticles(page: number = 1, nbArticles: number): Promise<ProcessedArticle[]> {
  return client
    .getEntries<ArticleSkeleton>({
      content_type: "article",
      order: ["-fields.date"],
      skip: (page - 1) * nbArticles,
      limit: nbArticles,
    })
    .then(({ items }) => {
      const processed = items.map(processArticle);
      return Promise.all(
        processed.map(async (art) => ({
          ...art,
          content: await highlightCodeBlocks(art.content),
        })),
      );
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getArticle(slug: string): Promise<ProcessedArticle> {
  const getBySlug = client
    .getEntries<ArticleSkeleton>({
      content_type: 'article',
      'fields.slug': slug,
      limit: 1
    })
    .then((entries) => {
      if (entries.items.length === 0) {
        return Promise.reject(new Error('no article found with slug ' + slug));
      }
      return entries.items[0];
    });

  return getBySlug
    .catch(() => {
      return client.getEntry<ArticleSkeleton>(slug);
    })
    .then(processArticle)
    .then(async (art) => ({
      ...art,
      content: await highlightCodeBlocks(art.content),
    }))
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function searchArticles(text: string): Promise<ProcessedArticle[]> {
  const nbArticles = 10;
  return client
    .getEntries<ArticleSkeleton>({
      content_type: "article",
      order: ["-fields.date"],
      limit: nbArticles,
      "fields.content[match]": text,
    })
    .then(({ items }) => {
      const processed = items.map(processArticle);
      return Promise.all(
        processed.map(async (art) => ({
          ...art,
          content: await highlightCodeBlocks(art.content),
        })),
      );
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getWorkExperiences(lang: string): Promise<ProcessedWorkExperience[]> {
  return client
    .getEntries<WorkExperienceSkeleton>({
      content_type: 'workExperience',
      order: ['-fields.periodBegin'],
      locale: lang,
    })
    .then(({ items }) =>
      items.map((element) => {
        const begin = new Date(element.fields.periodBegin);
        const end = new Date(element.fields.periodEnd);
        const beginDate = formatDate(begin);
        const endDate = end >= new Date() ? "Aujourd'hui" : formatDate(end);
        return {
            sys: element.sys,
            begin: beginDate,
            end: endDate,
            description: converter.makeHtml(element.fields.description),
            company: element.fields.company,
            jobTitle: element.fields.jobTitle,
        };
      })
    )
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getCvParagraphs(): Promise<ProcessedCvParagraph[]> {
  return client
    .getEntries<CvParagraphSkeleton>({
      content_type: 'paragraph',
      order: ['sys.createdAt'],
    })
    .then(({ items }) =>
      items.map((element) => ({
        sys: element.sys,
        text: converter.makeHtml(element.fields.text),
      }))
    )
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export interface AppState {
  articles: ProcessedArticle[];
  article: ProcessedArticle | null;
  workExperiences: ProcessedWorkExperience[];
  cvParagraphs: ProcessedCvParagraph[];
  loading: boolean;
  fetchArticles: (page?: number, nbArticles?: number) => Promise<void>;
  fetchArticle: (slug: string) => Promise<void>;
  searchArticles: (text: string) => Promise<void>;
  fetchWorkExperiences: (lang: string) => Promise<void>;
  fetchCvParagraphs: () => Promise<void>;
}

export const useStore = create<AppState>((set) => ({
  articles: [],
  article: null,
  workExperiences: [],
  cvParagraphs: [],
  loading: false,
  fetchArticles: async (page = 1, nbArticles = 10) => {
    set({ loading: true });
    const articles = await getArticles(page, nbArticles);
    set({ articles, loading: false });
  },
  fetchArticle: async (slug) => {
    set({ loading: true });
    try {
      const article = await getArticle(slug);
      set({ article, loading: false });
    } catch (error) {
      console.error(error);
      set({ article: null, loading: false });
    }
  },
  searchArticles: async (text) => {
    set({ loading: true });
    const articles = await searchArticles(text);
    set({ articles, loading: false });
  },
  fetchWorkExperiences: async (lang) => {
    set({ loading: true });
    const workExperiences = await getWorkExperiences(lang);
    set({ workExperiences, loading: false });
  },
  fetchCvParagraphs: async () => {
    set({ loading: true });
    const cvParagraphs = await getCvParagraphs();
    set({ cvParagraphs, loading: false });
  },
}));

