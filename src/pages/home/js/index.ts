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

  let heroReady = false;
  setTimeout(() => {
    heroEls.forEach(([el]) => {
      el.style.animation = 'none';
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
    });
    heroReady = true;
  }, 1500);

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
