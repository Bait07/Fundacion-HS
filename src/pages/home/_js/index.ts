const NO_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── STATS COUNT-UP ─────────────────────────────────────────────────── */
if (!NO_MOTION) {
  const strip = document.querySelector('.stats__strip');
  if (strip) {
    const ease = (t: number) => 1 - (1 - t) ** 4;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      document.querySelectorAll<HTMLElement>('.stats__value').forEach((el, i) => {
        const n = parseInt((el.textContent ?? '').replace(/\D/g, ''), 10);
        if (!isNaN(n) && n > 0) {
          const delay = i * 140;
          const duration = 1800;
          let startTime: number | null = null;
          const tick = (ts: number) => {
            if (startTime === null) startTime = ts;
            const elapsed = ts - startTime - delay;
            if (elapsed < 0) { requestAnimationFrame(tick); return; }
            const t = Math.min(1, elapsed / duration);
            el.textContent = String(Math.round(ease(t) * n));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(strip);
  }
}

/* ── HERO TEXT PARALLAX ─────────────────────────────────────────────── */
const IS_MOBILE = window.matchMedia('(max-width: 1023px)').matches;

if (!NO_MOTION && !IS_MOBILE) {
  const heroSection = document.querySelector<HTMLElement>('.hero');
  const heroH = heroSection?.offsetHeight ?? window.innerHeight;

  const heroLayerDefs: [string, number][] = [
    ['.hero__title',    -28],
    ['.hero__subtitle', -17],
    ['.hero__actions',  - 9],
  ];
  const heroEls = heroLayerDefs
    .map(([sel, px]) => [document.querySelector<HTMLElement>(sel), px] as [HTMLElement | null, number])
    .filter((pair): pair is [HTMLElement, number] => pair[0] !== null);

  // La entrada (fadeInDown) ya no la dispara este archivo: la controla el
  // IntersectionObserver compartido de BaseLayout.astro, que agrega
  // `.visible` a `.hero__text` (ver home/styles/index.css → "HERO
  // ENTRANCE"). Acá solo esperamos el `animationend` del último elemento
  // en animar (`.hero__actions`) para soltar la animación CSS —si no, el
  // cascade de animaciones sigue "ganando" sobre el `transform` inline de
  // abajo— y recién ahí habilitar el parallax de scroll. Si por lo que
  // sea nunca dispara (ej. el observer nunca intersecta), el parallax
  // simplemente queda inactivo en vez de romper algo.
  let heroReady = false;
  const lastEl = heroEls[heroEls.length - 1]?.[0];
  if (lastEl) {
    lastEl.addEventListener('animationend', () => {
      heroEls.forEach(([el]) => { el.style.animation = 'none'; });
      heroReady = true;
    }, { once: true });
  }

  let rafPending = false;
  const tick = () => {
    if (heroReady) {
      const scrollY = window.scrollY;
      if (scrollY < heroH * 1.5) {
        const t = Math.min(1, scrollY / heroH);
        heroEls.forEach(([el, px]) => {
          el.style.transform = `translateY(${t * px}px)`;
        });
      }
    }
    rafPending = false;
  };

  window.addEventListener('scroll', () => {
    if (!rafPending) { rafPending = true; requestAnimationFrame(tick); }
  }, { passive: true });
}
