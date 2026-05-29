import type { ArticleGroup, ArticleEntry } from '@/code/data/types';

/** List of article entries for general group. */
export const articlesGeneral: ArticleEntry[] = [
  {
    key: 'ptasks',
    showProd: true,
    techStack: 'JavaScript',
    date: '2026-02',
    webpage: null, // this project do not have webpage
    repository: 'https://github.com/pawel-papierkowski/ptasks',
  },
  {
    key: 'tictactoe',
    showProd: true,
    techStack: 'HTML, CSS, JavaScript/TypeScript, Vue 3.5.27',
    date: '2026-02',
    webpage: 'https://pawelpapierkowski.net.pl/tic-tac-toe',
    repository: 'https://github.com/pawel-papierkowski/tic-tac-toe',
  },
  {
    key: 'portfolio',
    showProd: true,
    techStack: 'HTML, CSS, JavaScript/TypeScript, Vue 3.5.27',
    date: '2026-03',
    webpage: 'https://pawelpapierkowski.net.pl/portfolio',
    repository: 'https://github.com/pawel-papierkowski/portfolio',
  },
  {
    key: 'reversi',
    showProd: true,
    techStack: 'HTML, CSS, JavaScript/TypeScript, Angular 21',
    date: '2026-04',
    webpage: 'https://pawelpapierkowski.net.pl/reversi',
    repository: 'https://github.com/pawel-papierkowski/reversi',
  }
];

/** List of article entries for UserLand group. */
export const articlesUserLand: ArticleEntry[] = [
  {
    key: 'userland-backend-java',
    showProd: true,
    techStack: 'Java 25, Spring Boot 4.0.5, PostgreSQL 17.9',
    date: '2026-04',
    webpage: 'https://userland-backend-java-299988087135.europe-central2.run.app/swagger-ui.html',
    repository: 'https://github.com/pawel-papierkowski/userland-backend-java',
  },
  {
    key: 'userland-frontend-vue',
    showProd: true,
    techStack: 'HTML, CSS, JavaScript/TypeScript, Vue 3.22.3',
    date: '2026-05',
    webpage: 'https://pawelpapierkowski.net.pl/userland-frontend-vue',
    repository: 'https://github.com/pawel-papierkowski/userland-frontend-vue',
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
