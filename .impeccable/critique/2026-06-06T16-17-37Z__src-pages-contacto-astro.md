---
target: src/pages/contacto.astro
total_score: 27
p0_count: 2
p1_count: 3
timestamp: 2026-06-06T16-17-37Z
slug: src-pages-contacto-astro
---
## Design Health Score

| # | Heurística | Punt. | Hallazgo clave |
|---|-----------|-------|-----------|
| 1 | Visibilidad del estado del sistema | 3 | Falta indicar cuándo/quién responde tras enviar |
| 2 | Coincide con el mundo real | 4 | Español humano, sin jerga, tono correcto |
| 3 | Control y libertad del usuario | 3 | Botón de WhatsApp actualmente roto |
| 4 | Consistencia y estándares | 3 | El h2 del formulario es 25% menor que el global |
| 5 | Prevención de errores | 2 | Validación solo al enviar; no hay feedback en blur |
| 6 | Reconocimiento en lugar de recuerdo | 3 | Etiquetas y placeholders visibles; campos opcionales marcados |
| 7 | Flexibilidad y eficiencia de uso | 2 | Sin atajos (esperable en un formulario de contacto) |
| 8 | Diseño estético y minimalista | 3 | Limpio; los "Por confirmar" son ruido visual |
| 9 | Recuperación de errores | 2 | Errores específicos, pero todos aparecen juntos al enviar |
| 10 | Ayuda y documentación | 2 | Sin tiempo de respuesta estimado ni orientación post-envío |
| **Total** | | **27/40** | **Aceptable** |

## Anti-Patterns Verdict

**LLM assessment:** La página no dispara alarmas de slop — no hay gradientes de texto, métricas con números grandes, ni tarjetas en grid repetido. El layout formulario+panel es válido. La debilidad es de temperatura emocional: funcional cuando la FHS necesita que se sienta acogedora.

**Deterministic scan:** 0 hallazgos del detector automatizado.

## Priority Issues

**[P0] WhatsApp roto — `wa.me/XXXXXXXXXX`**
Fix: número real o botón oculto. No dejar placeholder roto en producción.

**[P0] Formulario simula envío con setTimeout — nada llega a la FHS**
Fix: integrar EmailJS antes de producción o mostrar claramente que no está activo.

**[P1] `.reveal` oculta el formulario completo al 100% de opacidad**
Viola el principio: revelar nunca debe gatear visibilidad de contenido principal.
Fix: no aplicar `.reveal` al `.contacto-form-wrap` ni `.contacto-info`.

**[P1] Placeholder text falla contraste WCAG AA (~2:1, requiere 4.5:1)**
`--color-ink-muted` al 60% de opacidad sobre blanco.
Fix: eliminar `opacity:0.6`, usar color sólido con contraste suficiente.

**[P1] Validación solo al enviar — todos los errores de golpe**
Fix: validación `on blur` por campo.

## Persona Red Flags

**Camila (Madre en crisis):** WA roto = canal cerrado. Formulario simula envío = silencio sin respuesta.

**Jordan (Primera visita):** "Por confirmar" en dirección/teléfono/correo destroza credibilidad. Sin tiempo de respuesta.

**Sam (Accesibilidad):** Focus no se mueve al status de éxito tras envío — mejorar con focus() explícito.

## Minor Observations
- submitBtn.textContent borra el SVG ícono en estado de carga.
- h2 del formulario sobreescrito a tamaño menor que global; creates jerarquía plana.
- Ninguna imagen en toda la página; la personalidad "humana y cercana" de FHS no se siente.
