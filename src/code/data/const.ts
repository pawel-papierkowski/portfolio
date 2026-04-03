import type { ProjectProp, ArticleEntry } from '@/code/data/types';

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
    techStack: 'HTML, CSS, JavaScript/TypeScript, Vue v3.5.27',
    webpage: 'https://pawel-papierkowski.github.io/portfolio',
    repository: 'https://github.com/pawel-papierkowski/portfolio'
  },
  {
    key: 'ptasks',
    techStack: 'JavaScript',
    webpage: null, // this project do not have webpage
    repository: 'https://github.com/pawel-papierkowski/ptasks'
  },
  {
    key: 'tictactoe',
    techStack: 'HTML, CSS, JavaScript/TypeScript, Vue v3.5.27',
    webpage: 'https://pawel-papierkowski.github.io/tic-tac-toe',
    repository: 'https://github.com/pawel-papierkowski/tic-tac-toe'
  },
  {
    key: 'reversi',
    techStack: 'HTML, CSS, JavaScript/TypeScript, Angular v21',
    webpage: 'https://pawel-papierkowski.github.io/reversi',
    repository: 'https://github.com/pawel-papierkowski/reversi'
  }
];
