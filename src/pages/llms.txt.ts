// Resumen del sitio en Markdown para buscadores de IA (ChatGPT, Perplexity, Claude…).
// Estándar llms.txt: https://llmstxt.org
import type { APIRoute } from 'astro';
import { programs } from './home/_data/index';
import { cuentaBancaria as c } from '@/data/organizacion';

export const GET: APIRoute = ({ site }) => {
  const url = (p: string) => new URL(`${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`, site).href;
  return new Response(
    `# Fundación Horizontes de Sabiduría

> Fundación sin ánimo de lucro de Bogotá, Colombia (NIT ${c.nit}) que acompaña a niños, jóvenes y adultos con discapacidad cognitiva e intelectual, y a sus familias, con programas de inclusión educativa y social, atención interdisciplinaria y el Plan Padrino.

- Dirección: Calle 43B Sur # 72U-08, Bogotá D.C., Colombia
- Correo: contacto@fundhorizontesdesabiduria.org
- WhatsApp: +57 317 375 9920
- Aliado educativo: Colegio Gimnasio Colombo Andino

## Programas

${programs.map((p) => `- [${p.title}](${url(p.href)}): ${p.desc}`).join('\n')}

## Plan Padrino

Permite apadrinar la educación inclusiva de un niño o joven con discapacidad cognitiva o neurodivergencia, en alianza con el Colegio Gimnasio Colombo Andino. El costo anual por estudiante es de $6.430.000 COP (tarifas 2026, año escolar de febrero a noviembre); también se puede apadrinar el 25 %, 50 % o 75 % del costo.

- [Plan Padrino](${url('/plan-padrino')})

## Cómo donar

Por ahora las donaciones se reciben por transferencia a la ${c.tipo.toLowerCase()} del ${c.banco} N.° ${c.numero} a nombre de ${c.titular} (NIT ${c.nit}). El comprobante se envía por WhatsApp.

- [Donaciones](${url('/donaciones')})

## Páginas

- [Inicio](${url('/')})
- [Quiénes somos](${url('/nosotros')}): historia, misión, visión y equipo
- [Programas](${url('/programas')})
- [Blog](${url('/blog')}): artículos sobre inclusión educativa y discapacidad cognitiva
- [Contacto](${url('/contacto')})
`,
    { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } },
  );
};
