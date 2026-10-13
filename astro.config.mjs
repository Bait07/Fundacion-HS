import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// ponytail: base hardcoded here because Astro's `redirects` targets aren't
// base-aware — revert to '' when this moves off the github.io/<repo> subpath
// onto the custom domain (base: '/').
const base = '/Fundacion-HS';

export default defineConfig({
  site: 'https://bait07.github.io',
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
    sitemap({
      // Task 12 (SEO audit): `src/pages/*/sections/*.astro` are internal
      // section components that live under `src/pages` for co-location
      // (pre-existing structure, out of scope to relocate here) — Astro's
      // file router still turns each one into a real, crawlable route.
      // Exclude them from the sitemap so search engines aren't pointed at
      // internal partials instead of the actual pages.
      filter: (page) => !page.includes('/sections/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
