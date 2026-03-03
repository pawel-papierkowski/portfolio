/** Fundamental project properties. More or less constant. */
export type ProjectProp = {
  title: string;
  author: string;
  dateRange: string;
  version: string;
  build: string;
};

/** Article entry. */
export type ArticleEntry = {
  key: string;
  techStack: string;
  webpage: string;
  repository: string;
};
