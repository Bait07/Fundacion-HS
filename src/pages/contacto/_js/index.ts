const form = document.getElementById('contactForm') as HTMLFormElement;
const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
const submitLabel = submitBtn.querySelector('.form-submit__label') as HTMLElement;
const status = document.getElementById('form-status') as HTMLElement;

const SENT_KEY = 'fhs-contacto-enviado';
const SENT_LOCK_MS = 4 * 60 * 60 * 1000; // 4 horas

function setSubmitState(state: 'idle' | 'loading' | 'success', label: string) {
  submitBtn.dataset.state = state;
  submitLabel.textContent = label;
}

function validateField(id: string, errorId: string, message: string): boolean {
  const field = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement;
  const error = document.getElementById(errorId) as HTMLElement;
  // El motivo es un grupo de radios dentro de un <fieldset id="motivo">
  const value = id === 'motivo'
    ? form.querySelector<HTMLInputElement>('input[name="motivo"]:checked')?.value ?? ''
    : field.value;
  if (!value.trim() || (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
    field.classList.add('error');
    error.textContent = message;
    return false;
  }
  field.classList.remove('error');
  error.textContent = '';
  return true;
}

// Preselecciona el motivo desde ?motivo=<slug> (enlaces de Programas y Plan Padrino)
const motivoSlugs: Record<string, string> = {
  'plan-padrino': 'Quiero ser padrino',
  'informacion-programas': 'Quiero información sobre programas',
  'voluntariado': 'Quiero ser voluntario',
};
const motivoParam = motivoSlugs[new URLSearchParams(location.search).get('motivo') ?? ''];
const motivoRadio = [...form.querySelectorAll<HTMLInputElement>('input[name="motivo"]')].find(r => r.value === motivoParam);
if (motivoRadio) motivoRadio.checked = true;

form.querySelectorAll('input[name="motivo"]').forEach(r =>
  r.addEventListener('change', () => validateField('motivo', 'motivo-error', blurMessages.motivo)));

const blurMessages: Record<string, string> = {
  nombre:  'Por favor ingresa tu nombre completo.',
  email:   'Por favor ingresa un correo electrónico válido.',
  motivo:  'Por favor selecciona un motivo de contacto.',
  mensaje: 'Por favor escribe tu mensaje.',
};

['nombre', 'email', 'mensaje'].forEach((id) => {
  const el = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null;
  if (!el) return;

  el.addEventListener('blur', () => {
    validateField(id, `${id}-error`, blurMessages[id]);
  });

  el.addEventListener('input', () => {
    if (el.classList.contains('error') && el.value.trim()) {
      el.classList.remove('error');
      const errEl = document.getElementById(`${id}-error`);
      if (errEl) errEl.textContent = '';
    }
  });
});

form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const isValid = ['nombre', 'email', 'motivo', 'mensaje']
    .map(id => validateField(id, `${id}-error`, blurMessages[id]))
    .every(Boolean);

  if (!isValid) return;

  submitBtn.disabled = true;
  setSubmitState('loading', 'Enviando...');

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message);
  } catch {
    status.className = 'form-status error';
    status.textContent = 'No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.';
    setSubmitState('idle', 'Enviar mensaje');
    submitBtn.disabled = false;
    return;
  }

  try { localStorage.setItem(SENT_KEY, String(Date.now())); } catch {}
  setSubmitState('success', '¡Enviado!');
  form.reset();
  setTimeout(() => showSent(true), 600);
});

// ── Estado "enviado" ─────────────────────────────────────────────
// ponytail: freno del lado del navegador para reenvíos ansiosos, no seguridad
// (se salta con incógnito); el antispam real es botcheck + rate limit de Web3Forms.
function showSent(animate: boolean) {
  const wrap = form.closest('.contacto-form-wrap') as HTMLElement;
  const sent = document.getElementById('contactSent') as HTMLElement;
  const swap = () => {
    wrap.dataset.sent = '';
    sent.hidden = false;
    // Se crea al mostrarse para que la animación arranque desde el inicio
    document.getElementById('contactSentLottie')!.innerHTML =
      `<dotlottie-wc src="${import.meta.env.BASE_URL}send.lottie" autoplay></dotlottie-wc>`;
    if (animate) sent.focus();
  };
  if (!animate || matchMedia('(prefers-reduced-motion: reduce)').matches) return swap();
  wrap.classList.add('is-leaving');
  setTimeout(swap, 350);
}

try {
  if (Date.now() - Number(localStorage.getItem(SENT_KEY) ?? 0) < SENT_LOCK_MS) showSent(false);
} catch {}
