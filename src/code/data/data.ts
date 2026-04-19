import type { ArticleGroup, ArticleEntry } from '@/code/data/types';

/** List of article entries for general group. */
export const articlesGeneral: ArticleEntry[] = [
  {
    key: 'portfolio',
    showProd: true,
    techStack: 'HTML, CSS, JavaScript/TypeScript, Vue v3.5.27',
    date: '2026-04',
    webpage: 'https://pawel-papierkowski.github.io/portfolio',
    repository: 'https://github.com/pawel-papierkowski/portfolio',
  },
  {
    key: 'ptasks',
    showProd: true,
    techStack: 'JavaScript',
    date: '2026-04',
    webpage: null, // this project do not have webpage
    repository: 'https://github.com/pawel-papierkowski/ptasks',
  },
  {
    key: 'tictactoe',
    showProd: true,
    techStack: 'HTML, CSS, JavaScript/TypeScript, Vue v3.5.27',
    date: '2026-02',
    webpage: 'https://pawel-papierkowski.github.io/tic-tac-toe',
    repository: 'https://github.com/pawel-papierkowski/tic-tac-toe',
  },
  {
    key: 'reversi',
    showProd: true,
    techStack: 'HTML, CSS, JavaScript/TypeScript, Angular v21',
    date: '2026-04',
    webpage: 'https://pawel-papierkowski.github.io/reversi',
    repository: 'https://github.com/pawel-papierkowski/reversi',
  }
];

/** List of article entries for UserLand group. */
export const articlesUserLand: ArticleEntry[] = [
  {
    key: 'userland-backend-java',
    showProd: true,
    techStack: 'Java 25, Spring Boot 4.0.5, PostgreSQL 17.9',
    date: '2026',
    webpage: null,
    repository: 'https://github.com/pawel-papierkowski/userland-backend-java',
  },
  {
    key: 'testProject2',
    showProd: false,
    techStack: 'ble ble',
    date: '2026',
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
    key: 'userland',
    showProd: true,
    groupingPresent: true,
    articles: articlesUserLand,
  }
];
