import { create } from "zustand";
import {
  getArticles,
  getArticle,
  searchArticles,
  getWorkExperiences,
  getCvParagraphs,
  type ProcessedArticle,
  type ProcessedWorkExperience,
  type ProcessedCvParagraph,
} from "./api";

interface AppState {
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
    const article = await getArticle(slug);
    set({ article, loading: false });
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
