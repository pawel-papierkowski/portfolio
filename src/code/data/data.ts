import type { ArticleGroup, ArticleEntry } from '@/code/data/types';

/** List of article entries for general group. */
export const articlesGeneral: ArticleEntry[] = [
  {
    key: 'portfolio',
    showProd: true,
    techStack: 'HTML, CSS, JavaScript/TypeScript, Vue v3.5.27',
    webpage: 'https://pawel-papierkowski.github.io/portfolio',
    repository: 'https://github.com/pawel-papierkowski/portfolio',
  },
  {
    key: 'ptasks',
    showProd: true,
    techStack: 'JavaScript',
    webpage: null, // this project do not have webpage
    repository: 'https://github.com/pawel-papierkowski/ptasks',
  },
  {
    key: 'tictactoe',
    showProd: true,
    techStack: 'HTML, CSS, JavaScript/TypeScript, Vue v3.5.27',
    webpage: 'https://pawel-papierkowski.github.io/tic-tac-toe',
    repository: 'https://github.com/pawel-papierkowski/tic-tac-toe',
  },
  {
    key: 'reversi',
    showProd: true,
    techStack: 'HTML, CSS, JavaScript/TypeScript, Angular v21',
    webpage: 'https://pawel-papierkowski.github.io/reversi',
    repository: 'https://github.com/pawel-papierkowski/reversi',
  }
];

/** List of article entries for test group. */
export const articlesTest: ArticleEntry[] = [
  {
    key: 'testProject1',
    showProd: false,
    techStack: 'bla bla',
    webpage: null,
    repository: null,
  },
  {
    key: 'testProject2',
    showProd: false,
    techStack: 'ble ble',
    webpage: null,
    repository: null,
  }
];

/** List of article groups. */
export const articleGroups: ArticleGroup[] = [
  {
    key: 'general',
    showProd: true,
    groupingPresent: false,
    articles: articlesGeneral,
  },
  {
    key: 'test',
    showProd: false,
    groupingPresent: true,
    articles: articlesTest,
  }
];
