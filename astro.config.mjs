import { defineConfig } from 'astro/config';

// Detecta automáticamente la URL de GitHub Pages.
// - Repo de usuario (usuario.github.io): base "/"
// - Repo de proyecto (usuario.github.io/mi-repo): base "/mi-repo/"
// Puedes sobrescribirlo con las variables SITE_URL y BASE_PATH.
const repository = process.env.GITHUB_REPOSITORY;
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repo = repository?.split('/')[1];
const isUserSite = repo?.toLowerCase().endsWith('.github.io');

const base =
  process.env.BASE_PATH || (repo ? (isUserSite ? '/' : `/${repo}/`) : '/');
const site =
  process.env.SITE_URL ||
  (owner ? `https://${owner}.github.io` : 'http://localhost:4321');

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
