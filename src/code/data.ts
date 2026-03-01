/** Fundamental project properties. More or less constant. */
type ProjectProp = {
  title: string;
  author: string;
  dateRange: string;
  version: string;
  build: string;
};

export const projectProp: ProjectProp = {
  title: "Portfolio",
  author: "Paweł Papierkowski",
  dateRange: "2026",
  version: import.meta.env.VITE_APP_VERSION, // from package.json, defined in vite.config.ts
  build: import.meta.env.DEV ? "DEV" : "PROD",
}
