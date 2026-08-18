# Mejoras Landing — Fundación Horizontes de Sabiduría

## Contexto para Claude Code

Proyecto en **Astro**, con sistema de tokens de color en `oklch` ya armado en `global.css`. El problema diagnosticado no es la arquitectura del CSS (está bien hecha), es la **calibración de color** (chroma demasiado bajo → sensación apagada/"de velorio") y que la página se siente **plana**: sin jerarquía visual, sin animaciones de entrada, y con un header/estructura muy básicos comparados con referencias del sector (fundaciones/ONGs bien resueltas).

Este documento está dividido en bloques independientes. Marca cada casilla `- [ ]` → `- [x]` a medida que completes cada punto, y deja un commit por bloque si es posible para poder revisar en partes.

**Paleta de marca ya extraída del logo real** (no inventar colores nuevos, usar estos):
- Verde lima `#A9D415` — acentos puntuales, nunca fondos grandes
- Verde esmeralda `#04BC88` — color secundario de marca
- Verde medio `#42BE75` — base del verde primario
- Verde bosque `#025C04` — referencia para textos oscuros con tinte verde
- Marrón tronco `#98743A` — acento cálido alternativo
- Durazno `#E3BA9E` — fondos de sección alternos, cálidos

---

## 1. Sistema de color (prioridad alta — hacer primero)

- [ ] Reemplazar el bloque `:root` completo de `global.css` por el contenido de `tokens-nuevo.css` (mismos nombres de variable, cero refactor necesario en el resto del código)
- [ ] Agregar fallback en hex antes de cada línea `oklch()`, por compatibilidad con navegadores/WebViews viejos:
  ```css
  --color-primary: #00884a; /* fallback */
  --color-primary: oklch(0.55 0.155 154);
  ```
- [ ] Cambiar el overlay oscuro del hero: de negro puro / khaki actual a un overlay basado en `--color-ink` (que ya tiene tinte verde bosque), para que se sienta parte de la misma familia de color en vez de "una capa gris encima de la foto"
- [ ] Verificar visualmente en un monitor sRGB estándar (no P3) que los verdes de mayor chroma (`--color-lime`, `--color-primary`) no se vean "quemados" o distintos a como aparecen en el preview
- [ ] Confirmar contraste AA (mínimo 4.5:1) en cada combinación texto/fondo que se use en componentes nuevos, no solo en las que ya vienen calculadas
- [ ] Usar `--color-lime` únicamente en dosis pequeñas (subrayados, iconos, puntos de lista) — nunca como fondo de sección grande
- [ ] Usar `--color-peach` como alternativa cálida a `--color-surface` para romper el patrón "blanco/verde" cada 2-3 secciones y dar variedad

---

## 2. Header / Navegación

- [ ] Convertir los ítems de navegación principales en **mega-menús desplegables**: cada uno con un título de sección, una descripción corta (1 línea) y una lista de enlaces internos — no links sueltos
- [ ] Agregar atributos de accesibilidad a cada trigger de menú: `aria-expanded`, `aria-controls`, y label descriptivo tipo "Abrir menú X" / "Cerrar menú X" (fundamental para lectores de pantalla)
- [ ] Implementar header **sticky** al hacer scroll, con transición suave de altura/sombra al fijarse
- [ ] Revisar el menú mobile: debe ser un acordeón claro (no una lista plana larga), con submenús colapsables
- [ ] Si la fundación tiene o planea tener presencia en más de una ciudad/sede, dejar un selector de sede/territorio visible cerca del header (patrón visto en referencias del sector)

---

## 3. Hero principal

- [ ] Aplicar la nueva paleta al fondo/gradiente del hero (usar `--color-secondary` → `--color-primary` en gradiente diagonal, o similar a lo mostrado en `preview.html`)
- [ ] Agregar animación de entrada al contenido del hero: `fadeInDown` con `animation-delay: .1s`, usando `IntersectionObserver` (no CSS puro, así se dispara también si el hero no es lo primero en cargar)
- [ ] Sustituir overlay oscuro plano por el ajuste del punto 1 (overlay con `--color-ink`)
- [ ] Si hay foto de personas, evaluar reemplazarla o complementarla con una ilustración temática ligada al mensaje específico de la campaña vigente (no foto de stock genérica) — usar los colores del árbol del logo como referencia de paleta para esa ilustración

---

## 4. Barra de accesos rápidos flotante

- [ ] Crear una barra blanca redondeada que "monte" sobre el borde inferior del hero usando `margin-top` negativo (aprox. `-48px` a `-56px`, ajustar a la altura real del hero)
- [ ] Incluir 3-4 accesos directos con ícono + texto: por ejemplo **Donar**, **Sé voluntario**, **Nuestros programas**, **Contacto**
- [ ] Usar `box-shadow` suave (`0 20px 40px rgba(0,0,0,.08)`) para que se sienta "flotando", no pegada
- [ ] Iconos vía Google Material Symbols (gratis, `fonts.google.com/icons`) en color `--color-secondary` o `--color-primary`

---

## 5. Animaciones de scroll (entrada de secciones)

- [ ] Implementar un único observer reutilizable con `IntersectionObserver` (threshold ~0.2) que agregue clases `animated <nombre-animación>` a elementos con `data-anim`, y se desuscriba tras animar (evitar re-animar en cada scroll)
- [ ] Definir keyframes reutilizables: `fadeInDown`, `fadeInUp`, `fadeInLeft`, `slideInUp`, `zoomIn`
- [ ] Aplicar `fadeInLeft` a las tarjetas de programas/áreas de trabajo
- [ ] Aplicar `slideInUp` a la sección de contadores/estadísticas de impacto
- [ ] Aplicar `fadeInDown` solo al hero (no abusar de esta hacia abajo en el resto de la página, se ve mejor variar la dirección por sección)
- [ ] **Obligatorio**: envolver todas las animaciones en `@media (prefers-reduced-motion: reduce)` para desactivarlas (transition-duration: 0s) — accesibilidad no negociable
- [ ] Escalonar el delay entre elementos del mismo grupo (`.15s`, `.3s`, `.45s`...) para que no aparezcan todos a la vez

---

## 6. Contadores animados de impacto

- [ ] Implementar conteo ascendente (0 → valor real) disparado por el mismo `IntersectionObserver`, no por `onload`
- [ ] Sincronizar el conteo con la animación `slideInUp` del contenedor para que no se sientan como dos efectos separados
- [ ] Formatear números grandes con separador de miles

---

## 7. Grid de tarjetas de programas + mascota ilustrada

- [ ] Rediseñar la grilla de programas/áreas de trabajo con: ícono en contenedor "squircle" (`border-radius` ~20-24px, no círculo perfecto) + título + botón pill "Conoce más"
- [ ] Agregar al lado de la grilla una ilustración de personaje/comunidad (puede ser encargada o generada) que le dé calidez humana — coherente con el árbol del logo, no un ícono más
- [ ] Usar `--color-surface` (tinte menta) y `--color-peach` alternados como fondo de las tarjetas para variedad sin salirse de la paleta

---

## 8. Banner CTA con patrón de marca

- [ ] Crear un bloque de ancho completo, fondo `--color-primary` sólido, con el **isotipo del logo (el árbol o las hojas) repetido como patrón de fondo** vía `background-repeat` a baja opacidad — esto es gratis en CSS y da un salto grande en identidad de marca
- [ ] Botón outline (borde blanco, fondo transparente) para el CTA principal de esa sección
- [ ] Usar para la campaña de donación o la acción más importante del momento

---

## 9. Lista numerada de diferenciales

- [ ] Convertir el bloque de "por qué somos diferentes" / misión en una lista vertical con badges numerados circulares (`#1`, `#2`, `#3`...) + ícono + título + descripción corta
- [ ] Usar `--color-primary` para el número y `--color-primary-light` (con texto oscuro encima, no blanco) como fondo del badge

---

## 10. Carrusel de aliados / reconocimientos

- [ ] Si la fundación tiene aliados, menciones de prensa o reconocimientos, mostrarlos en un carrusel horizontal de badges/logos en vez de enterrarlos en texto — esto es puro trust-building y comunica credibilidad en un vistazo
- [ ] Insignias circulares con sombra suave (`--fsfb-sombra-card` como referencia: `0 50px 30px -42px rgba(0,0,0,.1)`)

---

## 11. Explorador de sedes/programas (solo si aplica)

- [ ] Si hay más de una sede/territorio de trabajo: pestañas tipo pill arriba (por región) → lista lateral de opciones → panel de detalle a la derecha con descripción + mapa embebido
- [ ] Si solo hay una sede, omitir este bloque — no forzar un componente que no aporta

---

## 12. Iconografía

- [ ] Integrar **Google Material Symbols** vía CDN para todos los iconos utilitarios genéricos (navegación, formularios, redes sociales)
- [ ] Diseñar o encargar **6-8 iconos custom a 2 colores** (usando la paleta del logo) solo para las secciones más importantes (las áreas/programas principales) — no hace falta un set completo custom
- [ ] Iconos sociales: usar un set consistente (Material Symbols o SvgRepo), no mezclar estilos de distintas fuentes

---

## 13. Accesibilidad y performance (revisar al final de cada bloque, no al final del proyecto)

- [ ] Contraste AA verificado en todo texto sobre color nuevo (no solo en los tokens base)
- [ ] `prefers-reduced-motion` respetado en TODAS las animaciones, no solo en las nuevas
- [ ] Imágenes con `loading="lazy"` excepto la del hero (que debe cargar eager/priority)
- [ ] Todo `<img>` con `alt` descriptivo; iconos decorativos con `aria-hidden="true"`
- [ ] Verificar que los menús mega-dropdown sean navegables por teclado (Tab, Escape para cerrar)

---

## 14. SEO básico (si no está resuelto aún)

- [ ] Meta title/description únicos y descriptivos por página
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`) para que se vea bien al compartir en redes
- [ ] `sitemap.xml` y `robots.txt` generados
- [ ] Datos estructurados tipo `Organization` o `NGO` (schema.org) en el home
- [ ] Verificar que las imágenes tengan nombres de archivo descriptivos, no `IMG_1234.jpg`

---

## 15. QA final

- [ ] Probar el sitio completo con `prefers-reduced-motion` activado — nada debe animarse
- [ ] Probar en mobile real (no solo devtools) que el header/menú funcionen bien al tacto
- [ ] Lighthouse: revisar performance, accesibilidad y SEO antes de dar por cerrado el trabajo
- [ ] Confirmar que ningún color nuevo rompe contraste en modo mobile con fondos distintos
