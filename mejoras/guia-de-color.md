# Por qué se sentía "de velorio" y cómo lo arreglé

## El diagnóstico técnico
Miré las variables de color que ya tienes en tu `global.css` (buen sistema, por cierto — variables bien nombradas, con oklch, con tokens de espaciado y sombra separados; el problema no es la arquitectura, es la calibración de color):

```
--color-bg: oklch(0.92 0.022 95)        /* fondo */
--color-primary: oklch(0.67 0.065 155)  /* botón verde */
--color-accent: oklch(0.61 0.090 47)    /* botón "Donar" */
```

En oklch el segundo número es el **chroma** (qué tan saturado/vívido es el color) y va de 0 (gris puro) a ~0.4 (extremadamente saturado). Tu fondo tiene chroma **0.022** — prácticamente un gris con un pelo de amarillo, no un color cálido de verdad. Tu verde primario tiene chroma **0.065** — muy por debajo de lo que el ojo humano lee como "verde vivo" (ahí arrancan a verse los verdes ya como verdes reales, no como verde-gris). Eso combinado con el overlay oscuro semi-transparente sobre la foto del hero (que le baja aún más la saturación a todo lo que se ve encima) es lo que da esa sensación fría, apagada, "de velorio" que describes — es literalmente un problema de saturación insuficiente, no de qué colores elegiste.

## La solución: tu propio logo ya tiene la paleta vívida que te falta
En vez de inventar colores nuevos, extraje por muestreo de píxeles los colores reales de tu logo (no a ojo — leí los valores RGB exactos de la imagen):

| Color del logo | Hex real medido | Uso sugerido |
|---|---|---|
| Verde lima (hojas de arriba) | `#A9D415` | Detalles, tags, subrayados — en dosis pequeñas |
| Verde-esmeralda (hojas laterales) | `#04BC88` | Color secundario de marca |
| Verde medio (hojas) | `#42BE75` | Base del nuevo verde primario |
| Verde bosque (base/colina) | `#025C04` | Referencia para textos oscuros con tinte verde |
| Marrón (tronco) | `#98743A` | Referencia del acento cálido |
| Durazno (corazón) | `#E3BA9E` | Fondos de sección alternos, cálidos |
| Gris (texto del logotipo) | `#6B6B6B` | Ya estás cerca de esto en `--color-ink-muted` |

Con esos como referencia, subí el chroma donde hacía falta y verifiqué contraste WCAG AA (mínimo 4.5:1 para texto normal) en cada combinación texto/fondo antes de fijar el valor final, para no sacrificar legibilidad por vivir el color. Quedó así:

| Variable | Antes | Ahora | Contraste con blanco |
|---|---|---|---|
| `--color-bg` | oklch(0.92 0.022 95) beige apagado | oklch(0.97 0.015 85) blanco cálido | — |
| `--color-primary` | oklch(0.67 0.065 155) verde gris | oklch(0.55 0.155 154) verde vívido `#00884a` | 4.51:1 ✅ |
| `--color-accent` | oklch(0.61 0.090 47) terracota apagado | oklch(0.57 0.135 50) terracota vívido `#b45b1f` | 4.69:1 ✅ |

Y agregué 4 variables nuevas para darte más rango sin salirte de la familia de color del logo: `--color-secondary` (esmeralda), `--color-lime`, `--color-peach`, `--color-surface` renovado.

## Cómo usarlas en la práctica
- **`--color-primary`**: botones de acción principal ("Donar", "Conoce nuestros programas"). Ya tiene contraste AA con texto blanco, úsalo con confianza.
- **`--color-primary-light`**: fondos de badges/chips, estados hover — siempre con texto oscuro (`--color-ink`) encima, no blanco (a esa claridad el blanco no tiene contraste suficiente).
- **`--color-secondary`** (esmeralda): para diferenciar una segunda categoría de contenido (ej. "Programas" vs "Blog"), iconos, o el estado activo de un tab.
- **`--color-accent`**: el botón secundario/donación, enlaces destacados.
- **`--color-lime`**: en dosis muy pequeñas — un subrayado, un ícono, un punto de lista. Es el color más vívido de todos (chroma 0.196), así que en grandes superficies satura la vista; funciona mejor como acento puntual.
- **`--color-peach`**: como alternativa cálida a `--color-surface` para romper el patrón de secciones blanco/verde cada 2-3 bloques, le da variedad sin salirse de la paleta.
- **El overlay oscuro del hero**: si sigues poniendo texto blanco sobre una foto, prueba un overlay con `--color-ink` (que ahora tiene un tinte verde bosque) en vez de negro puro o el khaki actual — se sentirá parte de la misma familia de color en vez de "una capa gris encima de la foto".

## Archivos
- `tokens-nuevo.css` — el bloque `:root` completo, listo para pegar reemplazando el que tienes en `global.css`. Mismos nombres de variable donde ya existían (cero refactor), 4 nuevas opcionales.
- `preview.html` — comparación visual lado a lado de tu hero actual vs. con la paleta nueva, más las muestras de color con su hex, para que decidas si te convence antes de tocar el código real.
