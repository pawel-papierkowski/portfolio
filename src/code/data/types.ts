/** Fundamental project properties. More or less constant. */
export type ProjectProp = {
  title: string;
  author: string;
  dateRange: string;
  version: string;
  build: string;
};

/** Article group. For multiple related articles (like projects for same system). */
export type ArticleGroup = {
  key: string;
  articles: ArticleEntry[];
};

/** Article entry. */
export type ArticleEntry = {
  key: string;
  techStack: string;
  webpage: string|null; // if null, webpage is not present
  repository: string;
};
