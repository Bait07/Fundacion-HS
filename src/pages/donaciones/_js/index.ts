const fills = document.querySelectorAll<HTMLElement>('.destino-bar__fill');
fills.forEach(fill => {
  fill.dataset.target = fill.style.width;
  fill.style.width = '0%';
});

const io = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target as HTMLElement;
        fill.style.width = fill.dataset.target ?? '0%';
        io.unobserve(fill);
      }
    });
  },
  { threshold: 0.15 }
);

fills.forEach(fill => io.observe(fill));
