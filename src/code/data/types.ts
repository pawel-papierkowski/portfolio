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
  key: string; // Key for this article group. Used as identificator.
  showProd: boolean; // If false, will not be visible on production, but still visible on dev.
  groupingPresent: boolean; // If false, articles will be shown visually ungrouped.
  articles: ArticleEntry[]; // Articles for this group.
};

/** Article entry. */
export type ArticleEntry = {
  key: string; // Key for this article entry. Used as identificator and part of path for article picture.
  showProd: boolean; // If false, will not be visible on production, but still visible on dev.
  techStack: string; // Information about tech stack.
  date: string; // Information about date of finishing.
  webpage: string|null; // If null, webpage is not present.
  repository: string|null; // If null, repository is not present.
};
