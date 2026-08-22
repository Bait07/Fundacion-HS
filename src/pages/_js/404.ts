// Se fija ANTES de que cargue el custom element (script deferred en
// 404.astro por ser type="module"): Lit recoge propiedades puestas en el
// elemento antes de "upgradearlo". Sin esto, dotlottie-wc usa un
// devicePixelRatio tope de 1.75 por defecto (rendimiento) en vez del real
// de la pantalla, y el canvas queda borroso al agrandarlo en monitores
// Retina/alta densidad. autoResize además re-sincroniza si el tamaño CSS
// cambia después del montaje inicial (responsive).
type DotLottieEl = HTMLElement & {
  renderConfig?: { autoResize?: boolean; devicePixelRatio?: number };
  pause?: () => void;
};

const player = document.getElementById('notFoundLottie') as DotLottieEl | null;

if (player) {
  player.renderConfig = {
    autoResize: true,
    devicePixelRatio: window.devicePixelRatio || 1,
  };
}

// Autoplay va por defecto en el HTML. Si el usuario pidió reducir
// movimiento, se detiene y se deja fija en el primer frame.
const noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (noMotion) {
  player?.removeAttribute('autoplay');
  player?.pause?.();
}
