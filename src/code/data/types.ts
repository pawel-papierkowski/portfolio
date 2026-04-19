/** Fundamental project properties. More or less constant. */
export type ProjectProp = {
  title: string;
  author: string;
  dateRange: string;
  version: string;
  build: string; // PROD or DEV
};

//

/** Article group. For multiple related articles (like projects for same system). */
export type ArticleGroup = {
  key: string;
  showProd: boolean; // If false, will not be visible on production, but still visible on dev.
  groupingPresent: boolean; // If false, articles will be shown visually ungrouped.
  articles: ArticleEntry[];
};

/** Article entry. */
export type ArticleEntry = {
  key: string;
  showProd: boolean; // If false, will not be visible on production, but still visible on dev.
  techStack: string;
  date: string;
  webpage: string|null; // if null, webpage is not present
  repository: string|null; // if null, repository is not present
};
