import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fundacionhorizontes.org',
  redirects: {
    '/home': '/',
    '/programas/ninez': '/programas#ninez',
    '/programas/jovenes': '/programas#jovenes',
    '/programas/adultos': '/programas#adultos',
    '/programas/servicios': '/programas#servicios',
    '/programas/plan-padrino': '/programas#plan-padrino',
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
