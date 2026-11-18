import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// ponytail: Vercel (cuenta de la fundación) sirve en la raíz; GitHub Pages
// (cuenta personal) en /Fundacion-HS. Los `redirects` no aplican base solos.
const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const base = vercel ? '' : '/Fundacion-HS';

export default defineConfig({
  // ponytail: dominio fijo; VERCEL_PROJECT_PRODUCTION_URL daría el apex, que redirige a www
  site: vercel ? 'https://www.fundhorizontesdesabiduria.org' : 'https://bait07.github.io',
  base: `${base}/`,
  redirects: {
    '/home': `${base}/`,
    '/programas/ninez': `${base}/programas#ninez`,
    '/programas/jovenes': `${base}/programas#jovenes`,
    '/programas/adultos': `${base}/programas#adultos`,
    '/programas/servicios': `${base}/programas#servicios`,
    '/programas/plan-padrino': `${base}/plan-padrino`,
  },
  server: {
    allowedHosts: true,
  },
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
