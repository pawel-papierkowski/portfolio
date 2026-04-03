import type { ProjectProp } from '@/code/data/types';

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
