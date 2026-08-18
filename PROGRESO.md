# Progreso — Sitio Web FHS
> Fundación Horizontes de Sabiduría · Bogotá, Colombia

**Iniciado:** 2026-06-05  
**Stack:** Astro 5 + Tailwind v4 + Vanilla JS  
**Build:** 14 páginas compiladas exitosamente

---

## Fase 1: Fundación
### Setup
- [x] Proyecto Astro 5 inicializado y funcionando
- [x] Tailwind v4 configurado (`@tailwindcss/vite`)
- [x] Tipografías auto-hospedadas (`@fontsource-variable/montserrat` + `@fontsource/lato`)
- [x] Tokens de diseño en CSS (`src/styles/global.css`) — colores OKLCH, tipografía, espaciado, botones, utilidades
- [x] Layout base con metadatos SEO (`src/layouts/BaseLayout.astro`)
- [x] `robots.txt` y `sitemap.xml` (via `@astrojs/sitemap`)

### Componentes globales
- [x] `Navbar.astro` — sticky, backdrop blur, hamburger mobile, accesible
- [x] `Footer.astro` — columnas de navegación y contacto
- [x] `WhatsAppFAB.astro` — botón flotante con pulso animado
- [x] `SEOHead.astro` — meta tags reutilizables (OG, Twitter, canonical)
- [x] `Breadcrumbs.astro` — Schema.org BreadcrumbList

---

## Fase 2: Home (`/`)
- [x] Hero — pantalla completa, imagen con overlay, H1, 2 CTAs
- [x] Quiénes somos — split grid con imagen + pilares de valores
- [x] Cifras de impacto — 4 stats con placeholder `XX`
- [x] Nuestros programas — 4 cards con íconos SVG orgánicos
- [x] Historias reales / Testimonios — 3 testimonios placeholder
- [x] Plan Padrino CTA — sección emocional split layout
- [x] Contacto rápido / pre-footer con WhatsApp + botón mensaje
- [x] Schema.org JSON-LD (NGO) embebido

---

## Fase 3: Nosotros (`/nosotros`)
- [x] Historia institucional — texto completo
- [x] Misión y Visión — 2 cards con iconos
- [x] Nuestro enfoque — grid de 7 pilares
- [x] Por qué elegirnos — 6 cards con border-left acento
- [x] Equipo — 4 tarjetas placeholder
- [x] Aliados — 5 logos placeholder
- [x] CTA final

---

## Fase 4: Programas

### Index (`/programas`)
- [x] 5 programas en layout zigzag alternado con imágenes
- [x] Badge "Programa estrella" en Plan Padrino
- [x] Tags de áreas por programa
- [x] CTA donaciones al final

### Sub-páginas
- [x] `/programas/ninez` — 8 talleres en grid, áreas de trabajo, CTA
- [x] `/programas/jovenes` — 8 talleres en grid, pills de áreas
- [x] `/programas/adultos` — 5 talleres, border-left primario
- [x] `/programas/servicios` — 3 cards con header tipográfico (Psicología, Fonoaudiología, T. Ocupacional)
- [x] `/programas/plan-padrino` — header hero, 4 modalidades, CTA final

---

## Fase 5: Páginas secundarias
- [x] Donaciones (`/donaciones`) — cómo donar, destinos con barras, transparencia
- [x] Blog index (`/blog`) — grid de tarjetas + categorías
- [x] 3 artículos blog en Markdown — discapacidad cognitiva, inclusión educativa, Plan Padrino
- [x] Contacto (`/contacto`) — formulario accesible + info lateral sticky + EmailJS placeholder

---

## Fase 6: SEO y rendimiento
- [x] Meta tags únicos por página (title, description)
- [x] Open Graph tags en todas las páginas
- [x] Schema.org JSON-LD (NGO) en Home
- [x] `sitemap.xml` — generado por `@astrojs/sitemap`
- [x] `robots.txt`
- [x] Alt text descriptivo en español en las imágenes
- [ ] Imágenes WebP reales (por ahora Picsum placeholders)
- [ ] Lighthouse audit post-deploy

---

## Pendientes técnicos
- [ ] Reemplazar `Astro.glob` deprecado en blog ✓ (corregido a `import.meta.glob`)
- [ ] Integrar EmailJS con credenciales reales de la FHS
- [ ] Reemplazar número de WhatsApp placeholder `XXXXXXXXXX`
- [ ] Reemplazar `site` en `astro.config.mjs` con dominio definitivo
- [ ] Imágenes reales (la FHS debe proveerlas)

---

## Pendientes de la FHS (antes del lanzamiento)
- [ ] Logo SVG/PNG (fondo transparente, variantes)
- [ ] Fotografías reales de programas y beneficiarios
- [ ] Misión y visión aprobadas por la junta
- [ ] Dirección física exacta en Bogotá
- [ ] Teléfono y número de WhatsApp institucional
- [ ] Correo electrónico institucional
- [ ] Links a redes sociales (Instagram, Facebook)
- [ ] Datos bancarios o pasarela de pago para donaciones
- [ ] Cifras de impacto reales (reemplazar XX en stats)
- [ ] Testimonios reales de familias (con autorización)
- [ ] Dominio definitivo (actualizar `astro.config.mjs`)
- [ ] Integrantes del equipo (nombre, cargo, foto)
- [ ] Aliados y logos

---

## Comandos útiles
```bash
npm run dev      # Servidor de desarrollo en localhost:4321
npm run build    # Compilar para producción → dist/
npm run preview  # Previsualizar build de producción
```
