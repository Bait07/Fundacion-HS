# Plan — Mejoras Landing Horizontes de Sabiduría

**Spec:** `mejoras-landing-horizontes.md` (raíz del repo) es la autoridad de requisitos.
Material de referencia de diseño: `mejoras/tokens-nuevo.css`, `mejoras/guia-de-color.md`, `mejoras/preview.html`.
Sistema de diseño existente: `DESIGN.md`, `src/styles/global.css`.

Este plan traduce los bloques numerados del spec en tareas ejecutables. El
spec sigue siendo la fuente de verdad para valores exactos (hex, timings,
copys) — este plan no los repite todos, apunta a dónde están.

## Contexto de arquitectura (ya existe, no reconstruir desde cero)

- Cada página vive en `src/pages/<page>/` con subcarpetas `sections/`,
  `data/`, `js/`, `styles/`. Seguir ese patrón para cualquier archivo nuevo.
- **Ya existe un sistema de scroll-reveal genérico**: `src/layouts/BaseLayout.astro`
  (líneas ~55-68) tiene un único `IntersectionObserver` (threshold 0.12) que
  observa todo `.reveal` en la página, agrega `.visible` y hace `unobserve`
  — ya cumple "un solo observer reutilizable que se desuscribe tras animar".
  Las clases `.reveal` / `.reveal.visible` y los delays `.reveal-delay-1..4`
  (80ms de paso) están en `src/styles/global.css` líneas 237-253. Hoy solo
  hace fade + `translateY(20px)→0`. Bloque 5 EXTIENDE este sistema con
  variantes direccionales, no crea uno nuevo.
- **El conteo ascendente de estadísticas ya existe**: `src/pages/home/js/index.ts`
  líneas 1-31, disparado por su propio `IntersectionObserver` (no por
  `onload`), con easing y stagger de 140ms. Bloque 6 solo necesita: separador
  de miles, y sincronizarlo visualmente con la entrada `.reveal` del
  contenedor (que ya existe vía `.stats__item.reveal`).
- **El hero ya tiene animación de entrada** pero es CSS+`setTimeout` fijo
  (`src/layouts/BaseLayout.astro` líneas 36-57 y `src/pages/home/js/index.ts`
  líneas 33-76), no `IntersectionObserver`. Bloque 3 debe migrar esto al
  observer compartido.
- **El navbar ya es sticky con sombra al hacer scroll** (`Navbar.astro`,
  clase `.scrolled` vía scroll listener). Bloque 2 agrega mega-menús y
  accesibilidad de los triggers; no reconstruir el sticky.
- Paleta actual en `src/styles/global.css` líneas 7-16. Reemplazar por la
  paleta de `mejoras/tokens-nuevo.css` es el bloque 1 — todo lo demás la
  consume por variable, así que debe ir primero.

## Global Constraints (aplican a TODAS las tareas — el reviewer las usa como lente)

1. **Contraste AA**: todo texto nuevo sobre color nuevo ≥ 4.5:1 (texto
   normal) o ≥ 3:1 (texto grande ≥18px o bold ≥14px). Usar los pares ya
   verificados en `mejoras/guia-de-color.md` y `mejoras/tokens-nuevo.css`;
   si se inventa una combinación no listada ahí, calcularla y dejar el
   resultado en un comentario CSS junto al uso.
2. **`prefers-reduced-motion: reduce`**: toda animación nueva (CSS o JS)
   debe desactivarse por completo bajo ese media query / `matchMedia`. Sin
   excepciones. El bloque `@media (prefers-reduced-motion: reduce)` en
   `global.css` (líneas 255-273) ya cubre `.reveal` y `.btn` — extenderlo,
   no duplicarlo en otro archivo.
3. **Cero dependencias nuevas**: el stack es Astro + Tailwind v4 + vanilla
   JS/TS, sin framework de animación (`package.json` no tiene Motion/Framer
   ni librería de iconos instalada). Todo con CSS/`IntersectionObserver`
   nativo. Excepción explícita del spec: Google Material Symbols vía
   `<link>` de Google Fonts (no es npm package, es una fuente icon vía CDN
   igual que ya se hace con Google Fonts en otras partes del proyecto).
4. **Mismos nombres de variable CSS** — no renombrar tokens existentes que
   otros componentes ya consumen (`--color-primary`, `--color-accent`, etc.
   se quedan; se pueden AGREGAR `--color-secondary`, `--color-lime`,
   `--color-peach` como nuevos).
5. **Mobile-first**, breakpoints ya establecidos: 768px (tablet), 1024px
   (desktop) — ver uso real en `Navbar.astro` (`max-width: 1023px`).
6. **No tocar copy/contenido textual** salvo que la tarea lo pida
   explícitamente (ej. nombres de accesos rápidos).
7. Un commit por tarea completada.
8. Cada tarea corre `npm run build` antes de reportar DONE — el sitio es
   Astro estático, un error de build es un bloqueante, no una nota.

---

## Task 1: Sistema de color

Bloque 1 del spec (`mejoras-landing-horizontes.md` sección "1. Sistema de
color").

1. Reemplazar el bloque `:root` de `src/styles/global.css` (líneas 7-16)
   por el contenido de `mejoras/tokens-nuevo.css`. Mismos nombres de
   variable ya usados + las 4 nuevas (`--color-secondary`, `--color-lime`,
   `--color-peach`, `--color-surface` renovado). No tocar el resto del
   archivo (tipografía, spacing, radii, shadows, easing, z-index quedan
   igual).
2. Agregar fallback hex antes de cada `oklch()` en el nuevo bloque `:root`,
   usando los valores hex que ya vienen documentados en los comentarios de
   `mejoras/tokens-nuevo.css` (ej. `#00884a` para `--color-primary`).
   Formato exacto:
   ```css
   --color-primary: #00884a; /* fallback */
   --color-primary: oklch(0.55 0.155 154);
   ```
3. Buscar todo overlay oscuro del hero (`.hero__overlay` en
   `src/pages/home/sections/Hero.astro` + su CSS, y cualquier overlay
   equivalente en otros heroes de página bajo `src/pages/*/sections/PageHeader.astro`)
   y cambiarlo de negro/khaki a un overlay basado en `--color-ink` (que ya
   trae tinte verde bosque tras el paso 1), manteniendo contraste suficiente
   para el texto blanco encima.
4. Revisar cada componente que usa `--color-primary`/`--color-accent` como
   fondo con texto encima (botones `.btn-primary`, `.btn-accent` en
   `global.css`, badges, tags) y confirmar contraste AA con los valores
   nuevos — documentado en `mejoras/guia-de-color.md`. Si algo queda por
   debajo de 4.5:1 (texto normal) o 3:1 (texto grande), ajustar el color de
   texto (nunca bajar el chroma del token).
5. `--color-lime` solo en usos puntuales (subrayados, íconos, puntos de
   lista) — grep el código nuevo que se agregue en tareas futuras no aplica
   aquí, esta tarea es solo sobre el archivo de tokens y los overlays
   existentes.
6. No hace falta verificación manual en monitor P3 (no disponible en este
   entorno) — dejar nota en el reporte si algo del preview (`mejoras/preview.html`)
   sugiere ajuste, pero no bloquear la tarea por eso.

**Acceptance:** `npm run build` pasa, el sitio completo usa la paleta
nueva vía variables (nada hardcodeado), overlays del hero recalibrados,
contraste verificado en botones/badges existentes.

---

## Task 2: Header / Navegación

Bloque 2 del spec. Archivo principal: `src/components/Navbar.astro`.

1. Convertir los ítems de navegación en mega-menús desplegables: cada
   trigger con título de sección + descripción de 1 línea + lista de
   enlaces internos. Usar la información ya disponible en cada página
   (ej. "Programas" despliega los 5 programas de `FHS_website_spec.md`
   sección 3; "Nosotros" despliega Historia/Misión y Visión/Equipo/Aliados).
   No inventar enlaces que no existan como rutas reales del sitio (ver
   `src/pages/` para las rutas válidas).
2. Cada trigger de mega-menú necesita `aria-expanded`, `aria-controls`, y
   `aria-label` descriptivo ("Abrir menú Programas" / "Cerrar menú
   Programas") — seguir el mismo patrón ya usado en el botón hamburguesa
   (`menuToggle` en este archivo, líneas 356-377) para el manejo de estado.
3. El sticky ya existe (`.scrolled` class vía scroll listener) — no
   reconstruir, solo asegurar que la transición de sombra/altura siga
   siendo suave con el nuevo header más alto (si los mega-menús cambian la
   altura del header).
4. Menú mobile: convertir la lista plana actual (`.mobile-menu__list`) en
   acordeón con submenús colapsables para los ítems que tienen mega-menú en
   desktop (Programas, Nosotros). Los ítems sin submenú (Inicio, Plan
   Padrino, Blog, Contacto) quedan como enlace directo.
5. Bloque 2 del spec también menciona selector de sede — **ya resuelto por
   ruling**: la FHS opera una sola sede en Bogotá, omitir ese punto.

**Acceptance:** navegable 100% por teclado (Tab entre triggers, Enter/Space
abre, Escape cierra y devuelve foco al trigger), `npm run build` pasa,
mega-menús no rompen el layout en 768px/1024px.

---

## Task 3: Hero principal

Bloque 3 del spec. Archivo: `src/pages/home/sections/Hero.astro` +
`src/pages/home/js/index.ts` + `src/layouts/BaseLayout.astro`.

1. Aplicar la paleta nueva (Task 1 ya debe estar mergeada) al
   fondo/gradiente del hero: gradiente diagonal `--color-secondary` →
   `--color-primary`, como referencia visual `mejoras/preview.html` (busca
   `.hero.after` en ese archivo — es solo referencia de dirección/colores,
   no copiar su HTML).
2. Migrar la animación de entrada del contenido del hero
   (`.hero__title`, `.hero__subtitle`, `.hero__actions`) de el mecanismo
   actual (CSS animation + `setTimeout(1500)` en `home/js/index.ts` líneas
   33-76) a `fadeInDown` disparado por `IntersectionObserver`. Reutilizar
   el observer compartido de `BaseLayout.astro` (agregar `data-anim="fadeInDown"`
   o clase equivalente al contenedor `.hero__text` y que ese observer
   sepa aplicar la animación correcta — ver Task 5 para las keyframes
   nuevas, que debe completarse su infraestructura de clases antes de que
   esta tarea la consuma; si Task 5 aún no corrió, implementar aquí un
   `fadeInDown` mínimo con el MISMO observer de `BaseLayout.astro` y dejar
   nota en el reporte para que Task 5 lo consolide sin duplicar observers).
   Mantener el parallax de scroll del fondo (`heroImg` translateY) tal
   cual está, eso no es parte de este bloque.
3. Reemplazar el overlay oscuro plano restante del hero por el ajuste de
   Task 1 (`--color-ink` based) si no quedó ya cubierto ahí.
4. El punto de reemplazar la foto por ilustración es **opcional y de
   diseño/contenido, no de código** — la FHS aún no ha entregado fotos
   reales (ver `PROGRESO.md`, pendiente "Fotografías reales"). Dejar el
   `<img>` actual (`picsum.photos` placeholder) intacto; NO generar ni
   encargar ilustraciones en esta tarea. Anotar en el reporte que este
   punto queda pendiente de assets reales de la fundación.

**Acceptance:** hero usa gradiente de marca nuevo, entrada de contenido vía
IntersectionObserver (no `setTimeout` fijo), `prefers-reduced-motion`
respetado, `npm run build` pasa.

---

## Task 4: Barra de accesos rápidos flotante

Bloque 4 del spec. Nuevo componente, sugerido:
`src/pages/home/sections/QuickAccess.astro` (seguir el patrón de carpeta
existente), insertado entre `Hero.astro` y `About.astro` en
`src/pages/home/index.astro`.

1. Barra blanca redondeada que monta sobre el borde inferior del hero con
   `margin-top` negativo (medir la altura real del hero renderizado y
   ajustar entre -48px y -56px — no un valor a ciegas).
2. 3-4 accesos: Donar (`/donaciones`), Sé voluntario (si no existe ruta de
   voluntariado, usar `/contacto` con el motivo preseleccionado — ver
   `src/pages/contacto/data/index.ts` para las opciones de motivo ya
   definidas), Nuestros programas (`/programas`), Contacto (`/contacto`).
   No inventar una ruta `/voluntariado` que no existe en el sitemap del
   spec.
3. `box-shadow: 0 20px 40px rgba(0,0,0,.08)`.
4. Iconos vía Google Material Symbols — ver Task 12 para la integración
   del `<link>` de la fuente; si Task 12 no ha corrido aún, esta tarea
   agrega el `<link>` en `BaseLayout.astro` (una sola vez, cabeza del
   documento) y Task 12 la reutiliza sin duplicar.

**Acceptance:** visualmente "flota" sobre el hero en desktop y mobile sin
solaparse mal con el contenido siguiente, accesos funcionan, `npm run
build` pasa.

---

## Task 5: Animaciones de scroll (entrada de secciones)

Bloque 5 del spec. Archivos: `src/layouts/BaseLayout.astro` (observer
compartido) + `src/styles/global.css` (keyframes).

1. Extender (no reemplazar) el observer ya existente en
   `BaseLayout.astro` (líneas 55-68) para soportar un atributo
   `data-anim="fadeInDown|fadeInUp|fadeInLeft|slideInUp|zoomIn"` además de
   la clase `.reveal` genérica que ya existe — al entrar en viewport
   (threshold ~0.2, el spec pide 0.2, el existente usa 0.12: subir a 0.2
   para alinear con el spec de este bloque, es una constante trivial de
   ajustar) agrega `animated <nombre-animación>` y hace `unobserve`.
2. Definir los 5 keyframes en `global.css` junto a la sección `Scroll
   Reveal` ya existente (líneas 237-253).
3. Aplicar `fadeInLeft` a tarjetas de programas (`src/pages/home/sections/Programs.astro`,
   ya tienen `.reveal reveal-delay-N` — agregar/ajustar a `data-anim="fadeInLeft"`
   conservando el stagger) y a las tarjetas de áreas de trabajo en las
   sub-páginas de programas (`src/pages/programas/*.astro`).
4. Aplicar `slideInUp` a `.stats__item` en `Stats.astro` (coordina con
   Task 6).
5. `fadeInDown` reservado para el hero únicamente (Task 3) — no aplicarlo
   en otras secciones.
6. `@media (prefers-reduced-motion: reduce)`: las nuevas keyframes se
   desactivan igual que `.reveal` ya lo hace (revisar que el bloque
   existente en `global.css` líneas 255-273, que ya tiene
   `animation-duration: 0.01ms !important` genérico para `*`, cubra
   también estas nuevas — debería, pero confirmarlo explícitamente en el
   reporte).
7. Delay escalonado `.15s`, `.3s`, `.45s...` para grupos que usen las
   nuevas animaciones direccionales — el sistema de delays existente
   (`.reveal-delay-1..4` a 80ms) se queda como está para `.reveal` genérico;
   esta tarea puede agregar `.anim-delay-1..N` a 150ms de paso para el
   nuevo sistema, o reutilizar el mismo patrón de nombre si el reviewer
   prefiere consistencia — decisión del implementador, documentar cuál se
   eligió.

**Acceptance:** un solo observer en toda la app maneja `.reveal` Y
`data-anim`, sin duplicados; keyframes con reduced-motion cubierto;
`npm run build` pasa.

---

## Task 6: Contadores animados de impacto

Bloque 6 del spec. Archivo: `src/pages/home/js/index.ts` (líneas 1-31) +
`src/pages/home/sections/Stats.astro`.

1. El conteo ascendente y el disparo por `IntersectionObserver` YA
   EXISTEN — no reconstruir. Solo agregar formateo de miles: cambiar
   `el.textContent = String(Math.round(ease(t) * n))` por una versión con
   `.toLocaleString('es-CO')` (o `es`) para separador de miles coherente
   con el resto del sitio en español.
2. Sincronizar visualmente con la entrada `slideInUp` de Task 5: el
   contenedor `.stats__item` ya tiene `.reveal reveal-delay-N`; si Task 5
   migra estas tarjetas a `data-anim="slideInUp"`, el conteo debe empezar
   cuando la tarjeta ya es visible (mismo observer/timing, no dos disparos
   independientes desincronizados). Si Task 5 aún no corrió, dejar el
   conteo disparado por su observer actual y anotar en el reporte que
   falta la sincronización visual pendiente de Task 5.

**Acceptance:** números grandes muestran separador de miles en español,
conteo y entrada visual sienten un solo efecto (no dos animaciones que
compiten), `npm run build` pasa.

---

## Task 7: Grid de tarjetas de programas + mascota ilustrada

Bloque 7 del spec. Archivo: `src/pages/home/sections/Programs.astro` +
su CSS asociado.

1. Rediseñar `.prog-card`: contenedor de ícono "squircle" (`border-radius`
   ~20-24px, no círculo — revisar el CSS actual del ícono en este
   componente y su hoja de estilos asociada) + título + botón pill
   ("Conoce más" en vez de solo el link de flecha actual `.prog-card__more`).
2. Fondos alternados `--color-surface` / `--color-peach` entre tarjetas
   (usar `:nth-child` o alternar en el `.map()` de Astro) — variedad sin
   salirse de paleta.
3. Mascota/ilustración de personaje o comunidad al lado de la grilla:
   **este punto requiere un asset visual**. No hay generador de imágenes
   custom en este stack ni brief de marca para encargarlo en código. Usar
   un SVG lineal simple (coherente con el estilo "orgánico, no geométrico"
   ya definido en `DESIGN.md` iconografía) como placeholder marcado
   claramente, del mismo espíritu que el placeholder de logo que ya existe
   en `Navbar.astro` (líneas 18-31) — no bloquear la tarea por falta de
   ilustración final, placeholder + nota en el reporte.

**Acceptance:** tarjetas rediseñadas con squircle + pill button, fondos
alternados, placeholder de ilustración presente y marcado, `npm run build`
pasa.

---

## Task 8: Banner CTA con patrón de marca

Bloque 8 del spec. Nuevo componente sugerido:
`src/pages/home/sections/BrandBanner.astro`, insertado antes de
`PadrinoCta.astro` o reemplazando su fondo actual — decidir según cuál CTA
es "la acción más importante del momento" (spec dice que es para la
campaña de donación o Plan Padrino; `PadrinoCta.astro` ya existe con ese
propósito, evaluar si este bloque ES ese componente rediseñado en vez de
uno nuevo duplicado — preferir rediseñar `PadrinoCta.astro` in-place si su
propósito coincide, para no tener dos CTAs de donación compitiendo).

1. Bloque de ancho completo, fondo `--color-primary` sólido.
2. Isotipo del logo (árbol/hojas) repetido como patrón de fondo vía
   `background-repeat`, baja opacidad — usar un SVG inline simple del
   árbol (mismo path que ya existe en el placeholder de logo de
   `Navbar.astro`) convertido a `background-image: url("data:image/svg+xml,...")`
   con `background-repeat: repeat`.
3. Botón outline: borde blanco, fondo transparente, para el CTA principal.

**Acceptance:** patrón de marca visible pero sutil (no compite con el
texto), contraste AA del texto/botón sobre `--color-primary` sólido
verificado, `npm run build` pasa.

---

## Task 9: Lista numerada de diferenciales

Bloque 9 del spec. Archivo: `src/pages/nosotros/sections/PorQueElegirnos.astro`
(ya existe con "6 cards con border-left acento" según `PROGRESO.md` —
esta tarea lo convierte al formato pedido).

1. Convertir de grid de cards a lista vertical con badges numerados
   circulares (`#1`...`#6`) + ícono + título + descripción corta.
2. Badge: número en `--color-primary`, fondo `--color-primary-light` con
   texto OSCURO encima (`--color-ink`, no blanco — `--color-primary-light`
   no tiene contraste AA suficiente con blanco, confirmado en
   `mejoras/guia-de-color.md`).

**Acceptance:** lista numerada reemplaza el grid de cards, contraste AA en
el badge verificado, `npm run build` pasa.

---

## Task 10: Carrusel de aliados / reconocimientos

Bloque 10 del spec. Archivo: `src/pages/nosotros/sections/Aliados.astro`
(ya existe con "5 logos placeholder" según `PROGRESO.md`).

1. Convertir el layout actual a carrusel horizontal de badges/logos
   (scroll horizontal nativo con `scroll-snap`, sin librería — mantiene
   Global Constraint #3 de cero dependencias nuevas).
2. Insignias circulares con `box-shadow: 0 50px 30px -42px rgba(0,0,0,.1)`.
3. La fundación aún no tiene aliados reales (`PROGRESO.md` pendiente
   "Aliados y logos") — mantener placeholders claramente marcados, no
   inventar nombres/logos reales.

**Acceptance:** carrusel funciona por scroll táctil y con teclado (si es
`overflow-x: auto` con elementos focusables, ya es accesible por Tab),
`npm run build` pasa.

---

## Task 11: Iconografía (Material Symbols + iconos custom)

Bloque 12 del spec (numeración del plan corrida por el skip del bloque 11
de sedes — ver Global Ruling en el ledger).

1. Integrar Google Material Symbols vía `<link>` en `BaseLayout.astro`
   (una sola vez — si Task 4 ya lo agregó, no duplicar el `<link>`) para
   iconos utilitarios genéricos: navegación, formularios, redes sociales.
2. Los íconos ya custom-inline SVG existentes (programas, stats — ver
   `Programs.astro` y `Stats.astro` líneas con `icons`/`statIcons`) ya
   cumplen "6-8 iconos custom a 2 colores para las secciones más
   importantes" en espíritu — no hace falta un set nuevo desde cero, pero
   sí ajustar su paleta a los 2 colores de marca nuevos si aún usan
   `currentColor` genérico (confirmar que heredan `--color-primary` /
   `--color-accent` correctamente tras Task 1).
3. Iconos sociales (Footer, redes): un solo set consistente — usar
   Material Symbols para estos en vez de mezclar con los SVG custom de
   programas.

**Acceptance:** un solo `<link>` de Material Symbols en todo el sitio,
iconos custom existentes confirmados en paleta nueva, `npm run build`
pasa.

---

## Task 12: SEO — verificación (bloque 14 del spec)

La mayoría de esto ya está implementado según `PROGRESO.md` Fase 6. Esta
tarea es una AUDITORÍA + fix de gaps, no una implementación desde cero.

1. Confirmar meta title/description únicos por página — comparar contra
   `FHS_website_spec.md` sección 6.3 (tiene los valores exactos ya
   definidos) vs. lo que realmente renderiza cada `.astro` vía
   `SEOHead.astro`.
2. Confirmar Open Graph (`og:title`, `og:description`, `og:image`) en
   todas las páginas — no solo Home.
3. Confirmar `sitemap.xml` y `robots.txt` se generan en `npm run build`
   (revisar `dist/` tras el build).
4. Confirmar Schema.org `NGO` JSON-LD en Home (`PROGRESO.md` dice que ya
   está).
5. Nombres de archivo de imágenes: los placeholders actuales son URLs de
   `picsum.photos` (no archivos locales `IMG_1234.jpg`) — este punto no
   aplica hasta que la FHS entregue fotos reales, dejar nota en el reporte.

**Acceptance:** reporte explícito de qué ya cumplía vs. qué se corrigió,
`npm run build` pasa.

---

## Nota — Bloques no dispatcheados como tareas separadas

- **Bloque 11 (explorador de sedes)**: omitido por ruling — una sola sede
  en Bogotá, confirmado con el usuario.
- **Bloque 13 (accesibilidad y performance)**: no es una tarea aparte, es
  el criterio de revisión de CADA tarea (ver Global Constraints #1 y #2) y
  además el foco del review final de todo el branch.
- **Bloque 15 (QA final)**: se ejecuta como el Final Review de este plan
  (whole-branch review) + verificación manual del usuario para "mobile
  real" y Lighthouse, que un subagente sin dispositivo físico no puede
  certificar por sí mismo — el reporte final debe dejar explícito qué se
  verificó por código/build y qué requiere confirmación humana.
