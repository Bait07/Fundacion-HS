// Equipo y aliados de la FHS — fuente única para Nosotros y el Inicio.
//
// Para agregar una persona: copia su foto a public/images/equipo/ y añade
//   { nombre: 'Ana Pérez', cargo: 'Psicóloga', foto: '/images/equipo/ana-perez.jpg' }
// Para agregar un aliado: copia su logo a public/images/aliados/ y añade
//   { nombre: 'Empresa X', logo: '/images/aliados/empresa-x.png', url: 'https://…' }
//
// Mientras haya pocos, las secciones rellenan con espacios provisionales
// (ver EQUIPO_MINIMO / ALIADOS_MINIMO).

export interface Persona {
  nombre: string;
  cargo: string;
  foto?: string; // sin foto se muestra la silueta
}

export interface Aliado {
  nombre: string;
  logo: string;
  logoNosotros?: string; // versión alternativa para la sección verde de Nosotros
  url?: string;
}

export const equipo: Persona[] = [];

export const aliados: Aliado[] = [
  {
    nombre: 'Colegio Gimnasio Colombo Andino',
    logo: '/images/aliados/colombo-andino.jpeg',
    logoNosotros: '/images/aliados/colombo-andino-amarillo.jpeg',
  },
];

// ponytail: espacios provisionales hasta recibir los datos reales;
// poner en 0 antes de publicar si no llegan.
export const EQUIPO_MINIMO = 4;
export const ALIADOS_MINIMO = 4;

export const huecos = (n: number, minimo: number) => Array.from({ length: Math.max(0, minimo - n) });
