export const seo = {
  title: 'Fundación Horizontes de Sabiduría | Inclusión educativa y social en Bogotá',
  description: 'Somos una fundación en Bogotá que acompaña a niños, jóvenes y adultos con discapacidad cognitiva e intelectual. Programas de inclusión, terapias y Plan Padrino. ¡Conoce cómo puedes ayudar!',
};

export const programs = [
  {
    title: 'Programa de Niñez',
    short: 'Niñez',
    lottie: '/lottie/ninos.lottie',
    desc: 'Acompañamos a niños en su camino hacia la inclusión escolar y el desarrollo de habilidades fundamentales.',
    href: '/programas#ninez',
    color: 'var(--color-primary)',
  },
  {
    title: 'Programa de Jóvenes',
    short: 'Jóvenes',
    lottie: '/lottie/family.lottie',
    desc: 'Fortalecemos habilidades para la vida, la autonomía y la participación social de adolescentes y jóvenes.',
    href: '/programas#jovenes',
    color: 'var(--color-primary)',
  },
  {
    title: 'Programa de Adultos',
    short: 'Adultos',
    lottie: '/lottie/adult.lottie',
    desc: 'Promovemos la autonomía funcional, el bienestar emocional y la inclusión comunitaria de adultos.',
    href: '/programas#adultos',
    color: 'var(--color-primary)',
  },
  {
    title: 'Servicios Profesionales',
    short: 'Servicios',
    lottie: '/lottie/servicios.lottie',
    desc: 'Atención interdisciplinaria que fortalece el desarrollo integral y la inclusión educativa y social.',
    href: '/programas#servicios',
    color: 'var(--color-primary)',
  },
  {
    title: 'Plan Padrino',
    short: 'Plan Padrino',
    lottie: '/lottie/heart-hi.lottie',
    destacado: true,
    desc: 'Apadrina un sueño: apoya económicamente a una familia con un niño en proceso de inclusión educativa.',
    href: '/plan-padrino',
    color: 'var(--color-primary)',
  },
];

export const stats = [
  { value: '150+', label: 'Familias acompañadas', unit: '' },
  { value: '5',  label: 'Programas activos',    unit: '' },
  { value: '80+', label: 'Talleres realizados',  unit: '' },
  { value: '10+', label: 'Años de experiencia',  unit: '' },
];

// Videos en public/videos/. El primero es vertical y ocupa la columna izquierda.
export const testimonials = [
  { video: 'videos/testimonio-madre.mp4', role: 'Mamá de una niña de la fundación', vertical: true },
  { video: 'videos/testimonio-madre-joven.mp4', role: 'Mamá de un joven de la fundación' },
  { video: 'videos/testimonio-abuela-joven.mp4', role: 'Abuela de un joven de la fundación' },
];

export const pillars = [
  { label: 'Naturaleza', desc: 'Conexión con la vida' },
  { label: 'Educación', desc: 'Formación integral' },
  { label: 'Sabiduría', desc: 'Conocimiento con propósito' },
  { label: 'Comunidad', desc: 'Crecimiento colectivo' },
  { label: 'Esperanza', desc: 'Futuro con sentido' },
];
