const form = document.getElementById('contactForm') as HTMLFormElement;
const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
const submitLabel = submitBtn.querySelector('.form-submit__label') as HTMLElement;
const status = document.getElementById('form-status') as HTMLElement;

function setSubmitState(state: 'idle' | 'loading' | 'success', label: string) {
  submitBtn.dataset.state = state;
  submitLabel.textContent = label;
}

function validateField(id: string, errorId: string, message: string): boolean {
  const field = document.getElementById(id) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
  const error = document.getElementById(errorId) as HTMLElement;
  if (!field.value.trim() || (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value))) {
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
};
const motivoParam = motivoSlugs[new URLSearchParams(location.search).get('motivo') ?? ''];
const motivoSelect = document.getElementById('motivo') as HTMLSelectElement | null;
if (motivoParam && motivoSelect) motivoSelect.value = motivoParam;

const blurMessages: Record<string, string> = {
  nombre:  'Por favor ingresa tu nombre completo.',
  email:   'Por favor ingresa un correo electrónico válido.',
  motivo:  'Por favor selecciona un motivo de contacto.',
  mensaje: 'Por favor escribe tu mensaje.',
};

['nombre', 'email', 'motivo', 'mensaje'].forEach((id) => {
  const el = document.getElementById(id) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
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

  // TODO: Integrar EmailJS cuando la FHS provea las credenciales
  // emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
  await new Promise(r => setTimeout(r, 1200));

  status.className = 'form-status success';
  status.textContent = '¡Mensaje enviado! Te responderemos pronto.';
  form.reset();
  setSubmitState('success', '¡Enviado!');

  setTimeout(() => {
    setSubmitState('idle', 'Enviar mensaje');
    submitBtn.disabled = false;
  }, 1400);
});
