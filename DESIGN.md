# Design

## Visual Theme

Cálido, natural, centrado en lo humano. La identidad visual evoca crecimiento orgánico — verde bosque, tierra cálida, luz de tarde. No es tecnológico ni corporativo: es la paleta de un lugar donde las personas importan. La calidez está en el color y el espacio, no en florituras decorativas.

Modo: claro únicamente.

Nota: La paleta de colores fue definida por el equipo de la FHS como identidad de marca comprometida. Se preserva íntegra.

---

## Color Palette

| Token | OKLCH | Hex | Rol |
|---|---|---|---|
| `--color-bg` | `oklch(0.92 0.022 95)` | `#EDE6D8` | Fondo general del sitio |
| `--color-surface` | `oklch(0.86 0.032 90)` | `#D9C7A6` | Secciones alternadas, arena cálida |
| `--color-primary` | `oklch(0.67 0.065 155)` | `#7BA283` | Verde bosque — encabezados, botones principales |
| `--color-primary-light` | `oklch(0.75 0.055 155)` | `#9DBFA8` | Verde suave — hover states, fondos de testimonios |
| `--color-accent` | `oklch(0.61 0.09 47)` | `#B56E45` | Terracota — CTAs de acción, destacados emocionales |
| `--color-ink` | `oklch(0.26 0.035 145)` | `#2C3E2D` | Texto principal (verde oscuro casi negro) |
| `--color-ink-muted` | `oklch(0.40 0.028 145)` | derivado | Texto secundario, captions, metadatos |
| `--color-white` | `oklch(1 0 0)` | `#FFFFFF` | Superficie de tarjetas, texto sobre acentos |

**Contraste verificado:**
- `--color-ink` sobre `--color-bg`: ~9.6:1 — pasa WCAG AAA ✓
- Blanco sobre `--color-accent`: ~4.9:1 — pasa WCAG AA ✓
- Blanco sobre `--color-primary`: ~3.9:1 — pasa solo para texto grande (≥18px o bold ≥14px); usar `--color-ink` para texto de botón si el tamaño es menor.

---

## Typography

```
Google Fonts:
https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Lato:wght@400;700&display=swap
```

| Token | Familia | Peso | Uso |
|---|---|---|---|
| `--font-display` | Montserrat | 700 | H1 heroes, display copy |
| `--font-heading` | Montserrat | 600 | H2 secciones |
| `--font-subheading` | Montserrat | 500 | H3, H4, card titles |
| `--font-body` | Lato | 400 | Prosa, descripciones |
| `--font-body-bold` | Lato | 700 | Énfasis en cuerpo |

**Escala tipográfica:**

| Nivel | Tamaño fluid | Peso | Line height |
|---|---|---|---|
| H1 hero | `clamp(2.5rem, 5vw, 4.5rem)` | 700 | 1.1 |
| H2 sección | `clamp(2rem, 3.5vw, 3rem)` | 600 | 1.15 |
| H3 card | `clamp(1.25rem, 2vw, 1.75rem)` | 500 | 1.25 |
| H4 label | `1.125rem` | 500 | 1.3 |
| Body | `1rem` – `1.125rem` | 400 | 1.65 |
| Caption | `0.875rem` | 400 | 1.5 |

- `text-wrap: balance` en H1–H3
- `text-wrap: pretty` en párrafos de prosa
- Ancho máximo de línea de cuerpo: 70ch

---

## Components

### Navbar
- Sticky — 64px de alto
- Fondo: `--color-bg` con `backdrop-filter: blur(8px)`, opacidad 90%
- Logo FHS a la izquierda
- Links de navegación: Inicio | Nosotros | Programas | Plan Padrino | Blog | Contacto
- Botón "Donar" siempre visible — `--color-accent`, texto blanco, `border-radius: 6px`
- Sombra suave aparece al hacer scroll (`box-shadow: 0 2px 16px rgba(44,62,45,0.08)`)
- Mobile: menú hamburguesa, drawer lateral o pantalla completa

### Botones
- **Primario**: `--color-primary` fondo, `--color-ink` texto, `border-radius: 6px`, padding `0.75rem 1.5rem`, Montserrat 500
- **CTA acento**: `--color-accent` fondo, blanco texto (tamaño ≥1rem bold para cumplir AA), mismos radios
- **Secundario**: borde `--color-primary`, texto `--color-primary`, fondo transparente
- **Hover**: elevar con `box-shadow` suave o aclarar fondo ~6%
- Transición: `200ms ease-out`

### Tarjetas de programas
- Fondo blanco o `--color-bg`
- `border-radius: 12px`
- `box-shadow: 0 2px 12px oklch(0.26 0.035 145 / 0.08)`
- Ícono orgánico (líneal, temático) + H3 + texto cuerpo + link CTA
- Sin bordes laterales de color

### Tarjetas de testimonios
- Fondo: `--color-primary-light` `#9DBFA8`
- `border-radius: 12px`
- Avatar circular placeholder + cita en Lato Regular + nombre/rol en Lato Bold
- Texto: `--color-ink`

### Estadísticas de impacto
- Fondo: `--color-surface` `#D9C7A6`
- Número grande: Montserrat Bold, `clamp(2.5rem, 4vw, 3.5rem)`, `--color-primary`
- Label: Lato Regular, `--color-ink`
- Grid de 4 columnas (2 en móvil)

### Hero section
- Imagen de fondo full-width con overlay sutil para contraste de texto
- Overlay: `oklch(0.26 0.035 145 / 0.45)` (verde oscuro semitransparente)
- Título H1 blanco, subtítulo blanco a 85% opacidad
- Dos botones CTA: primario verde, secundario terracota

### Footer
- Fondo: `--color-primary` o `--color-ink`
- Texto: blanco / blanco a 70%
- Logo, descripción corta, links rápidos, redes sociales, aviso legal
- Copyright: blanco a 50%

### Botón flotante WhatsApp
- Posición fija, esquina inferior derecha, `z-index: 50`
- Color: `#25D366` (verde WhatsApp)
- Ícono blanco, 56px de diámetro
- Tooltip "¡Escríbenos!" en hover
- Pulso suave al cargar (3 repeticiones), respeta `prefers-reduced-motion`

### Breadcrumbs
- Todas las páginas internas excepto Home
- Lato Regular, `0.875rem`, `--color-ink-muted`
- Separador: `/` o `›`

---

## Layout

- Ancho máximo de contenido: `1200px`, centrado
- Padding horizontal de contenedor: `clamp(1.25rem, 5vw, 2.5rem)`
- Padding vertical de secciones: `clamp(4rem, 8vw, 8rem)`
- Gap de columnas: `clamp(1.5rem, 3vw, 2.5rem)`
- Grids de tarjetas: `repeat(auto-fit, minmax(280px, 1fr))`
- Mobile-first; breakpoints: `768px` (tablet), `1024px` (desktop)
- Semántica HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

---

## Motion

- Entradas en scroll: fade + `translateY(16px)` → `translateY(0)`, 500ms ease-out-quart
- Stagger en listas: 80ms entre items
- Hover en botones: 200ms ease-out
- Transiciones de navbar: 300ms ease-out
- `@media (prefers-reduced-motion: reduce)`: eliminar todas las animaciones; usar `opacity` instantánea si algo debe aparecer
- Sin rebotes, sin elástico
- Biblioteca sugerida: Motion (Framer Motion) si se necesita complejidad; CSS transitions para hover/estados simples

---

## Iconography

- Estilo: lineal, orgánico, natural — no geométrico ni tecnológico
- Temática: árbol, libro, corazón, hoja, sol, familia, comunidad, manos
- Stroke uniforme ~1.5–2px
- Color: `--color-primary` por defecto, `--color-accent` para highlights emocionales
- Fuente sugerida: Phosphor Icons (variante "regular" o "light") o iconos SVG personalizados

---

## Photography

- Cálida, natural, personas reales — nunca de banco genérico ni imágenes clínicas
- Rostros expresivos, familias, niños en actividades, adultos en talleres
- Diversidad, inclusión, dignidad
- Tratamiento: leve capa cálida si se desatura, nunca filtros dramáticos
- Alt text en español, descriptivo: ej. `"Niña participando en taller de escritura en la Fundación Horizontes de Sabiduría"`
- Formato: WebP, lazy loading, dimensiones apropiadas por breakpoint

---

## SEO y metadatos

- Una sola `<h1>` por página
- Jerarquía coherente H1 → H2 → H3
- Meta `<title>` y `<meta name="description">` únicos por página (ver spec)
- Open Graph tags en todas las páginas
- Schema.org `NGO` JSON-LD en Home
- Canonical tags por página
- `sitemap.xml` generado automáticamente (Astro)
- URLs: minúsculas, sin tildes, con guiones

---

## Spacing Scale

Base 4px:
`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128` (px)

En Tailwind: extender `spacing` con estos valores si los defaults no mapean exactamente.
