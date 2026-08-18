---
target: src/pages/index.astro
total_score: 30
p0_count: 1
p1_count: 3
timestamp: 2026-06-06T16-32-33Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heurística | Punt. | Hallazgo clave |
|---|-----------|-------|-----------|
| 1 | Visibilidad del estado del sistema | 3 | Scroll cue claro; hover feedback en programs |
| 2 | Coincide con el mundo real | 4 | "Apadrina un sueño" inmediatamente legible |
| 3 | Control y libertad del usuario | 4 | Homepage estática — sin flujos de los que escapar |
| 4 | Consistencia y estándares | 3 | Stats heading rompe jerarquía con uppercase minúsculo |
| 5 | Prevención de errores | 2 | WA con XXXXXXXXXX; stats con "XX"; placeholder note en DOM |
| 6 | Reconocimiento en lugar de recuerdo | 4 | Programas visibles; CTAs claros |
| 7 | Flexibilidad y eficiencia de uso | 2 | Sin atajos (esperable); programs list scannable |
| 8 | Diseño estético y minimalista | 3 | Programs list y motion buenos; stats section incompleta |
| 9 | Recuperación de errores | 3 | Página estática — poco margen de error |
| 10 | Ayuda y documentación | 2 | Plan Padrino sin "cómo funciona" en homepage |
| **Total** | | **30/40** | **Bueno** |

## Priority Issues

**[P0] WhatsApp en contacto rápido enlaza a `wa.me/XXXXXXXXXX`** — CTA roto en alta visibilidad.

**[P1] Stats section — 3 fallas de contraste WCAG simultáneas**
- stats__heading: oklch(1 0 0 / 0.45) sobre fondo oscuro → ~2.1:1 (requiere 4.5:1)
- stats__label: oklch(1 0 0 / 0.62) → ~2.5:1
- stats__note: oklch(1 0 0 / 0.32) → ~1.8:1
Fix: subir opacidades a 0.70 / 0.80 / 0.65 respectivamente.

**[P1] Nota de placeholder de testimonios visible en DOM**
"Texto placeholder — la fundación completará con testimonios reales de familias."
Fix: eliminar o comentar este elemento del HTML.

**[P1] 5 pilares en grid 1fr 1fr — huérfano asimétrico en última fila**
Fix: repeat(auto-fit, minmax(140px, 1fr)) o centrar el quinto item.

**[P2] Em dash en stats__note** — banneado en reglas de copy.

**[P2] Hero e imagen padrino-cta son picsum aleatorios** — no representan a la FHS.

## Personas

Jordan: stats XX y nota placeholder invalidan credibilidad. WA roto cierra el canal.
Riley: No puede confirmar impacto real → rebota.
Camila (FHS): WA roto = imposible contactar desde homepage.
Eduardo: XX años experiencia → interpreta como "sin historia".

## Minor Observations
- CSS muerto: stats__grid y stats__card referenciados en media queries pero no existen.
- Em dash en stats__note ("La fundación está en sus primeros pasos — estos...").
- text-shadow en hero h1 — énfasis debe ser por peso, no sombra.
