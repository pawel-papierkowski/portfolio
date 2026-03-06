import type { ProjectProp,  ArticleEntry } from '@/code/data/types';

export const projectProp: ProjectProp = {
  title: 'Portfolio',
  author: 'Paweł Papierkowski',
  dateRange: '2026',
  version: import.meta.env.VITE_APP_VERSION, // from package.json, defined in vite.config.ts
  build: import.meta.env.DEV ? 'DEV' : 'PROD',
};

/** Theme list. */
export const themes: string[] = [
  'light','neumorphic', 'whitenblack', 'dark', 'neon', 'code'
];

/** Default theme. Must be key from themes. */
export const defaultTheme = 'light';

/** Fallback language. */
export const fallbackLang = 'en';

/** Language list. */
export const languages: string[] = [
  'en',
  'pl',
];

/** List of article entries. */
export const articleEntries: ArticleEntry[] = [
  {
    key: 'portfolio',
    techStack: 'Vue',
    webpage: 'https://pawel-papierkowski.github.io/portfolio',
    repository: 'https://github.com/pawel-papierkowski/portfolio'
  },
  {
    key: 'tictactoe',
    techStack: 'Vue',
    webpage: 'https://pawel-papierkowski.github.io/tic-tac-toe',
    repository: 'https://github.com/pawel-papierkowski/tic-tac-toe'
  },
  {
    key: 'reversi',
    techStack: 'Angular',
    webpage: 'https://pawel-papierkowski.github.io/reversi',
    repository: 'https://github.com/pawel-papierkowski/reversi'
  }
];
