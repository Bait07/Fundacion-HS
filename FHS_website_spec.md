# Especificación Completa — Sitio Web
# Fundación Horizontes de Sabiduría (FHS)

> **Documento para Claude Code.** Este archivo contiene toda la información necesaria para construir el sitio web institucional de la FHS: identidad de marca, arquitectura de contenido, textos propuestos, estrategia SEO y directrices técnicas. Leer completo antes de generar cualquier código.

---

## 1. INFORMACIÓN GENERAL DE LA FUNDACIÓN

**Nombre oficial:** Fundación Horizontes de Sabiduría (FHS)  
**Sigla:** FHS  
**Ciudad:** Bogotá D.C., Colombia  
**Dominio:** Por definir — contendrá la palabra "fundacion" + nombre relacionado (ej: `fundacionhorizontes.org` o `fundacionhorizontesdesabiduria.org`)  
**Idioma del sitio:** Español (Colombia)  
**Tipo de organización:** Entidad sin ánimo de lucro

**Población que atiende:**  
Niños, niñas, adolescentes, jóvenes y adultos con **discapacidad cognitiva e intelectual**, en condición de vulnerabilidad socioeconómica, en Bogotá D.C.

---

## 2. IDENTIDAD DE MARCA

### 2.1 Tono de voz
La FHS habla de manera:
- **Humana** — nunca clínica ni fría
- **Esperanzadora** — siempre hay un horizonte posible
- **Profesional** — inspira confianza institucional
- **Cercana** — le habla a la familia, no al expediente
- **Inspiradora** — cada historia importa, cada logro vale

**Frase identitaria:**  
> *"Comunicar con propósito es sembrar conciencia y cosechar transformación."*

### 2.2 Valores pilares (para usar como ejes temáticos en contenido)
| Pilar | Significado |
|---|---|
| Naturaleza | Conexión con la vida |
| Educación | Formación integral y transformadora |
| Sabiduría | Conocimiento con propósito |
| Comunidad | Crecimiento colectivo |
| Esperanza | Futuro con sentido |

### 2.3 Paleta de colores

| Nombre | HEX | Uso principal |
|---|---|---|
| Verde bosque | `#7BA283` | Color primario, encabezados, botones principales |
| Verde suave | `#9DBFA8` | Fondos secundarios, hover states |
| Arena cálida | `#D9C7A6` | Fondos de secciones alternadas |
| Crema | `#EDE6D8` | Fondo general del sitio |
| Terracota | `#B56E45` | Acentos, CTAs secundarios, destacados emocionales |

**Fondo general del sitio:** `#EDE6D8` (crema)  
**Color de texto principal:** `#2C3E2D` (verde oscuro casi negro)

### 2.4 Tipografía

| Uso | Fuente | Variante |
|---|---|---|
| Títulos (H1, H2) | Montserrat | SemiBold (600) |
| Subtítulos (H3, H4) | Montserrat | Medium (500) |
| Cuerpo de texto | Lato o Open Sans | Regular (400) |
| Énfasis en cuerpo | Lato o Open Sans | Bold (700) |

**Fuente Google Fonts:** `https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Lato:wght@400;700&display=swap`

### 2.5 Logo
- El logo es circular, con un árbol que nace de un libro abierto, con un corazón en el centro.
- Existe en variantes: fondo claro, fondo de color, blanco y negro, versión horizontal.
- El borde del círculo es en terracota (`#B56E45`).
- El texto del logo usa Montserrat SemiBold.
- **El archivo del logo debe ser provisto por el equipo de la FHS** antes del desarrollo. Usar placeholder durante el build.

### 2.6 Recursos visuales e iconografía
- Estilo de iconos: **lineal, orgánico, natural** (no geométrico ni tecnológico)
- Íconos temáticos relacionados a: árbol, libro, corazón, hoja, sol, familia, comunidad
- Imágenes fotográficas: cálidas, naturales, que muestren **personas reales** — rostros expresivos, familias, niños en actividades, adultos en talleres
- **Nunca usar imágenes de banco genéricas de hospitales o clínicas**
- Fotografías deben reflejar diversidad, inclusión y respeto
- Composiciones cercanas y humanas

---

## 3. ARQUITECTURA DEL SITIO (SITEMAP)

```
/ (Home)
├── /nosotros
│   ├── Historia
│   ├── Misión y Visión
│   ├── Equipo
│   └── Aliados
├── /programas
│   ├── /programas/ninez         (Primeros Pasos hacia la Inclusión Escolar)
│   ├── /programas/jovenes       (Habilidades para la Vida y la Inclusión Social)
│   ├── /programas/adultos       (Autonomía, Participación y Calidad de Vida)
│   ├── /programas/servicios     (Apoyo Integral para la Inclusión) 
│   └── /programas/plan-padrino  (Apadrina un Sueño, Transforma una Vida)
├── /donaciones
├── /blog
└── /contacto
```

**Navegación principal (navbar):**  
`Inicio` | `Nosotros` | `Programas` | `Plan Padrino` | `Blog` | `Contacto` | `[Botón: Donar]`

El botón **Donar** es un CTA de color terracota (`#B56E45`) siempre visible en la navbar.

---

## 4. CONTENIDO POR PÁGINA

### 4.1 HOME — La página más emocional del sitio

**Objetivo:** Capturar emocionalmente al visitante en los primeros 5 segundos. Generar confianza. Llevar al usuario a Programas o Donaciones.

---

#### SECCIÓN 1 — Hero (pantalla completa)

**Imagen de fondo:** Fotografía grande, cálida y humana. Idealmente un niño o joven sonriendo, en un momento de aprendizaje o conexión. *[Placeholder: imagen de alta resolución que proveerá la FHS]*

**Título principal (H1):**
> *Transformamos vidas a través de la educación, el amor y la inclusión.*

**Subtítulo:**
> *Acompañamos a niños, jóvenes y adultos con discapacidad cognitiva en Bogotá a descubrir sus horizontes.*

**Botones CTA:**
- Botón primario (verde `#7BA283`): **"Conoce nuestros programas"** → `/programas`
- Botón secundario (terracota `#B56E45`): **"Quiero donar"** → `/donaciones`

---

#### SECCIÓN 2 — Quiénes somos (breve)

**Título:** *Somos Horizontes de Sabiduría*

**Texto:**
> En la Fundación Horizontes de Sabiduría creemos que cada persona, sin importar su condición, tiene el derecho de aprender, crecer y participar plenamente en su comunidad. Trabajamos en Bogotá con niños, jóvenes y adultos con discapacidad cognitiva e intelectual, acompañándolos con programas especializados, atención interdisciplinaria y el compromiso de transformar vidas desde el respeto y la esperanza.

**CTA:** "Conocer nuestra historia" → `/nosotros`

---

#### SECCIÓN 3 — Cifras de impacto

> ⚠️ **Nota para Claude Code:** La fundación es nueva y aún no tiene cifras reales. Usar **placeholders visuales** con estructura lista para reemplazar. Mostrar los números como `[XX]` o en un componente editable. Sugerencia de métricas a mostrar cuando las tengan:

| Métrica | Placeholder |
|---|---|
| Familias acompañadas | `XX familias` |
| Programas activos | `5 programas` |
| Talleres realizados | `XX talleres` |
| Años de experiencia | `XX años` |

**Diseño sugerido:** 4 tarjetas con número grande en Montserrat Bold y descripción en Lato. Fondo arena `#D9C7A6`.

---

#### SECCIÓN 4 — Nuestros programas (resumen)

**Título:** *Lo que hacemos*

Mostrar 4 tarjetas/cards con ícono + título + descripción corta + enlace:

| Card | Título | Descripción corta | Enlace |
|---|---|---|---|
| 1 | Programa de Niñez | Acompañamos a niños en su camino hacia la inclusión escolar y el desarrollo de habilidades fundamentales. | `/programas/ninez` |
| 2 | Programa de Jóvenes | Fortalecemos habilidades para la vida, la autonomía y la participación social de adolescentes y jóvenes. | `/programas/jovenes` |
| 3 | Programa de Adultos | Promovemos la autonomía funcional, el bienestar emocional y la inclusión comunitaria de adultos. | `/programas/adultos` |
| 4 | Plan Padrino | Apadrina un sueño: apoya económicamente a una familia con un niño en proceso de inclusión educativa. | `/programas/plan-padrino` |

**CTA sección:** "Ver todos los programas" → `/programas`

---

#### SECCIÓN 5 — Historias reales / Testimonios

**Título:** *Horizontes que hemos construido juntos*

**Nota para Claude Code:** Crear estructura de testimonios con 2–3 tarjetas tipo carrusel o grid. Usar **texto placeholder** hasta que la fundación provea historias reales. Estructura por tarjeta:

```
[Foto de perfil — placeholder]
"[Testimonio de la familia o beneficiario]"
— Nombre, rol (ej: Mamá de Juan, 12 años)
```

**Diseño:** Fondo verde suave `#9DBFA8`, texto oscuro, estilo cálido y cercano.

---

#### SECCIÓN 6 — Plan Padrino (CTA emocional)

**Título:** *Apadrina un sueño, transforma una vida*

**Texto:**
> Muchas familias en Bogotá no pueden costear la educación especializada que sus hijos necesitan. Con tu apoyo como padrino, un niño o joven con discapacidad cognitiva puede acceder a programas de inclusión educativa que cambiarán su vida.

**CTA:** Botón terracota — "Quiero ser padrino" → `/programas/plan-padrino`

---

#### SECCIÓN 7 — Contacto rápido / Footer CTA

**Título:** *¿Tienes preguntas? Estamos aquí.*

- Botón: "Escríbenos por WhatsApp" (ícono WhatsApp + link)
- Botón: "Enviar un mensaje" → `/contacto`

---

### 4.2 NOSOTROS

#### Quiénes somos

**Texto propuesto:**
> La Fundación Horizontes de Sabiduría nació del convencimiento de que la discapacidad no define los límites de una persona: define el punto de partida de un camino que, con el acompañamiento adecuado, puede llegar lejos.
>
> Somos una fundación bogotana comprometida con la inclusión educativa y social de niños, niñas, adolescentes, jóvenes y adultos con discapacidad cognitiva e intelectual. Trabajamos con familias en condición de vulnerabilidad, brindando programas especializados, atención interdisciplinaria y herramientas para que cada persona pueda desarrollar su autonomía, participar en su comunidad y construir un proyecto de vida con dignidad y esperanza.
>
> Nuestro nombre lo dice todo: creemos en horizontes — en la posibilidad de ver más allá — y en la sabiduría que surge cuando la educación, el amor y la inclusión se unen con propósito.

#### Misión (propuesta)
> Acompañar integralmente a personas con discapacidad cognitiva e intelectual y a sus familias, mediante programas educativos, terapéuticos y sociales que promuevan su autonomía, inclusión y bienestar, con enfoque humanizado, diferencial y comunitario.

#### Visión (propuesta)
> Ser en 2030 una fundación referente en Bogotá en inclusión educativa y social de personas con discapacidad cognitiva e intelectual, reconocida por la calidad de sus programas, el impacto en las familias que acompaña y su capacidad de transformar comunidades desde la esperanza y el conocimiento.

#### Nuestro enfoque
Mostrar como lista visual con íconos:
- Inclusión educativa y social
- Atención integral e interdisciplinaria
- Enfoque diferencial
- Participación familiar activa
- Desarrollo de autonomía
- Respeto por la dignidad humana
- Fortalecimiento comunitario

#### ¿Por qué elegirnos?
- Atención cálida y humanizada
- Procesos personalizados según la etapa de vida
- Equipo interdisciplinario (Psicología, Fonoaudiología, Terapia Ocupacional)
- Espacios inclusivos y seguros
- Acompañamiento a la familia en todo el proceso
- Programas adaptados a niñez, juventud y adultez

#### Equipo
**Nota para Claude Code:** Crear sección con grid de tarjetas de equipo. Usar placeholders de foto y nombre hasta que la fundación provea los datos. Estructura:
```
[Foto]
Nombre Apellido
Cargo / Profesión
```

#### Aliados
**Nota para Claude Code:** Crear sección de logos de aliados con placeholders. La fundación completará esta información.

---

### 4.3 PROGRAMAS

#### Página índice `/programas`

Mostrar los 5 programas como cards con descripción expandible o como lista con imagen lateral.

---

#### `/programas/ninez` — Programa de Niñez

**Nombre oficial:** *"Primeros Pasos hacia la Inclusión Escolar"*

**Objetivo:**
> Fortalecer en niños y niñas las habilidades básicas necesarias para favorecer su acercamiento, adaptación e inclusión en el entorno escolar y social.

**¿Qué trabajamos?**
- Adaptación al entorno escolar
- Habilidades cognitivas y comunicativas
- Autonomía básica
- Socialización y manejo emocional
- Acompañamiento terapéutico

**Talleres (mostrar como acordeón o grid):**

| Taller | Descripción |
|---|---|
| "Aprendo y Sigo Indicaciones" | Fortalece el seguimiento de instrucciones, atención y adaptación a rutinas. |
| "Mi Ruta Escolar" | Promueve hábitos escolares, organización y adaptación al aula. |
| "Explorando con Atención" | Estimula la concentración, memoria y permanencia en actividades. |
| "Manitos Creativas" | Desarrolla motricidad fina y habilidades previas a la escritura. |
| "Descubriendo Letras y Sonidos" | Inicia procesos de lectoescritura y reconocimiento fonológico. |
| "Hablo, Expreso y Comunico" | Fortalece lenguaje, expresión verbal y comunicación funcional. |
| "Amigos y Emociones" | Favorece habilidades sociales, convivencia y expresión emocional. |
| "Yo Puedo Solo" | Promueve autonomía en hábitos de higiene, alimentación y organización personal. |

---

#### `/programas/jovenes` — Programa de Adolescentes y Jóvenes

**Nombre oficial:** *"Habilidades para la Vida y la Inclusión Social"*

**Objetivo:**
> Fortalecer habilidades personales, sociales y funcionales que favorezcan la autonomía, la participación social y el desarrollo de proyecto de vida.

**¿Qué trabajamos?**
- Habilidades para la vida
- Independencia funcional
- Comunicación y relaciones sociales
- Formación ocupacional
- Participación comunitaria

**Talleres:**

| Taller | Descripción |
|---|---|
| "Decido y Construyo Mi Camino" | Fortalece la toma de decisiones y resolución de situaciones cotidianas. |
| "Conociendo Mis Emociones" | Promueve identificación y manejo adecuado de emociones. |
| "Me Expreso con Seguridad" | Desarrolla comunicación asertiva y habilidades sociales. |
| "Cuidando de Mí" | Fortalece hábitos de higiene, salud y autocuidado. |
| "Aprendo a Administrar" | Favorece el manejo funcional del dinero y compras básicas. |
| "Cocinando Mi Independencia" | Desarrolla habilidades funcionales para la preparación básica de alimentos. |
| "Creando Sueños y Oportunidades" | Promueve habilidades ocupacionales y emprendimientos inclusivos. |
| "Mi Cuerpo, Mi Bienestar y Mi Protección" | Fortalece el autocuidado, reconocimiento corporal y prevención de riesgos. |

---

#### `/programas/adultos` — Programa para Adultos

**Nombre oficial:** *"Autonomía, Participación y Calidad de Vida"*

**Objetivo:**
> Promover la autonomía funcional, la participación social y el bienestar integral de adultos con discapacidad cognitiva e intelectual.

**¿Qué trabajamos?**
- Vida independiente
- Participación social
- Actividades ocupacionales
- Bienestar emocional
- Inclusión comunitaria

**Talleres:**

| Taller | Descripción |
|---|---|
| "Mi Hogar, Mi Responsabilidad" | Fortalece habilidades para la organización y responsabilidades del hogar. |
| "Sabores de Independencia" | Promueve preparación básica de alimentos y hábitos saludables. |
| "Manos que Transforman" | Desarrolla habilidades productivas y ocupacionales. |
| "Participando en Mi Comunidad" | Favorece la inclusión social y participación comunitaria. |
| "Construyendo Mi Historia" | Fortalece autoestima, identidad y proyecto de vida. |

---

#### `/programas/servicios` — Servicios Profesionales

**Nombre oficial:** *"Apoyo Integral para la Inclusión"*

**Descripción:**
> Brindamos atención interdisciplinaria orientada al fortalecimiento del desarrollo integral y la inclusión educativa y social.

**Tres servicios (mostrar como 3 cards con ícono):**

**1. Psicología — "Espacios para Crecer y Sentir"**
> Acompañamiento emocional, fortalecimiento de habilidades sociales, orientación familiar y apoyo conductual.

**2. Fonoaudiología — "Comunico Mi Mundo"**
> Estimulación del lenguaje, comunicación funcional y fortalecimiento comunicativo.

**3. Terapia Ocupacional — "Moviendo Mis Habilidades"**
> Fortalecimiento de motricidad, integración sensorial y habilidades para la vida diaria.

---

#### `/programas/plan-padrino` — Plan Padrino

**Nombre oficial:** *"Apadrina un Sueño, Transforma una Vida"*

**Descripción general:**
> El Plan Padrino es una estrategia solidaria de la FHS para brindar apoyo económico a niños, niñas y adolescentes con discapacidad cognitiva e intelectual de familias de bajos recursos, facilitando su acceso, permanencia y continuidad en instituciones educativas inclusivas.

**Justificación (simplificada para web):**
> En Colombia, muchas familias enfrentan barreras económicas que impiden que sus hijos con discapacidad accedan a educación inclusiva especializada. Los costos de matrículas, terapias, materiales y transporte pueden ser insalvables. La FHS crea el Plan Padrino como una alternativa solidaria para que ningún niño pierda su oportunidad de aprender.

**Modalidades de apadrinamiento (4 tarjetas):**

| Modalidad | Descripción |
|---|---|
| Padrino Total | Cubre el valor completo de pensión o matrícula. Incluye material escolar y apoyo complementario. |
| Padrino Parcial | Aporta un porcentaje del costo. Permite apoyos compartidos entre varios padrinos. |
| Padrino Empresarial | Empresas o entidades patrocinan uno o varios estudiantes. Incluye certificación de donación e informes de impacto. |
| Fondo Solidario Educativo | Aportes libres para emergencias educativas o subsidios complementarios. |

**Población beneficiaria:**
- Niños, niñas y adolescentes con discapacidad cognitiva e intelectual
- Familias de bajos recursos económicos
- En riesgo de deserción escolar
- Vinculados o en proceso de ingreso a instituciones inclusivas

**CTA principal:** "Quiero apadrinar un sueño" → formulario de contacto o WhatsApp

---

### 4.4 DONACIONES

**Título:** *Tu apoyo transforma horizontes*

**Texto:**
> Cada donación a la Fundación Horizontes de Sabiduría permite que más niños, jóvenes y adultos con discapacidad cognitiva en Bogotá accedan a programas de inclusión que transforman sus vidas y las de sus familias.

**Secciones:**
1. **Cómo donar** — instrucciones claras (datos bancarios o botón de pago — *la FHS debe proveer los datos*)
2. **¿A qué va tu donación?** — lista de destinación de recursos (programas, terapias, becas, materiales)
3. **Transparencia** — compromiso de uso responsable de los recursos
4. **Impacto social** — placeholder para mostrar cifras cuando estén disponibles

**Nota:** Integrar botón de pago en línea si la FHS lo habilita (ej: PayU Colombia, Wompi).

---

### 4.5 BLOG / NOTICIAS

**Categorías de contenido:**
- Educación consciente
- Desarrollo humano
- Comunidad
- Historias inspiradoras

**Estructura de cada entrada:**
- Imagen destacada
- Categoría + Fecha
- Título (H1 SEO-optimizado)
- Cuerpo del artículo
- Tags relacionados
- CTA al final: "Conoce nuestros programas" o "Apoya la fundación"

**Nota para Claude Code:** Crear estructura de blog con mínimo 3 artículos placeholder. Usar títulos que integren las palabras clave SEO definidas en la sección 6.

---

### 4.6 CONTACTO

**Elementos del formulario:**
- Nombre completo
- Correo electrónico
- Teléfono / WhatsApp
- Motivo de contacto (select: "Quiero información sobre programas" / "Quiero ser padrino" / "Quiero hacer una donación" / "Soy aliado o empresa" / "Otro")
- Mensaje
- Botón: "Enviar mensaje"

**Información de contacto (placeholders — la FHS completará):**
- 📍 Dirección: Bogotá D.C., Colombia *(dirección exacta por confirmar)*
- 📞 Teléfono: *(por confirmar)*
- 📧 Correo institucional: *(por confirmar)*
- 💬 WhatsApp: *(por confirmar — usar botón flotante de WhatsApp en todo el sitio)*
- 🌐 Redes sociales: Instagram, Facebook *(links por confirmar)*

---

## 5. COMPONENTES GLOBALES

### Navbar
- Logo FHS a la izquierda
- Links de navegación: Inicio | Nosotros | Programas | Plan Padrino | Blog | Contacto
- Botón CTA "Donar" en terracota `#B56E45` siempre visible
- En móvil: menú hamburguesa
- Navbar sticky (fija al hacer scroll)
- Fondo: crema `#EDE6D8` o blanco semitransparente con blur

### Footer
- Logo FHS
- Descripción corta: *"Transformando vidas a través de la educación, el amor y la inclusión en Bogotá."*
- Links rápidos: secciones principales
- Información de contacto
- Íconos de redes sociales
- Aviso legal: "Fundación Horizontes de Sabiduría — Entidad sin ánimo de lucro — Bogotá, Colombia"
- Copyright: `© 2025 Fundación Horizontes de Sabiduría. Todos los derechos reservados.`

### Botón flotante de WhatsApp
- Siempre visible en la esquina inferior derecha
- Color: verde WhatsApp `#25D366`
- Texto tooltip: "¡Escríbenos!"

### Breadcrumbs
- Mostrar en todas las páginas internas (excepto Home)

---

## 6. ESTRATEGIA SEO

### 6.1 Palabras clave primarias (alto volumen, alta intención)

| Keyword | Intención de búsqueda | Página objetivo |
|---|---|---|
| fundación discapacidad cognitiva Bogotá | Búsqueda de servicios | Home / Nosotros |
| inclusión educativa discapacidad intelectual Bogotá | Padres buscando apoyo | Home / Programas |
| terapia ocupacional discapacidad cognitiva Bogotá | Búsqueda de servicios | `/programas/servicios` |
| fonoaudiología niños discapacidad Bogotá | Búsqueda de servicios | `/programas/servicios` |
| psicología discapacidad intelectual Bogotá | Búsqueda de servicios | `/programas/servicios` |
| programas inclusión niños discapacidad Bogotá | Padres buscando programas | `/programas/ninez` |
| talleres habilidades vida jóvenes discapacidad | Padres/jóvenes | `/programas/jovenes` |
| fundación sin ánimo de lucro discapacidad Colombia | Donantes / aliados | Nosotros / Donaciones |
| cómo donar fundación discapacidad Colombia | Donantes | `/donaciones` |
| apadrinamiento niños discapacidad educativa Colombia | Donantes / padrinos | `/programas/plan-padrino` |

### 6.2 Palabras clave secundarias (long tail)

- "qué hacer si mi hijo tiene discapacidad cognitiva en Bogotá"
- "apoyo escolar niños discapacidad intelectual Bogotá"
- "actividades autonomía adultos discapacidad intelectual"
- "inclusión social jóvenes síndrome Down Bogotá"
- "cómo apadrinar un niño con discapacidad Colombia"
- "terapias integrales discapacidad cognitiva Bogotá"
- "habilidades para la vida discapacidad intelectual adolescentes"
- "fundación educación inclusiva Bogotá Colombia"

### 6.3 Implementación técnica SEO

#### Meta tags por página

**Home:**
```html
<title>Fundación Horizontes de Sabiduría | Inclusión educativa y social en Bogotá</title>
<meta name="description" content="Somos una fundación en Bogotá que acompaña a niños, jóvenes y adultos con discapacidad cognitiva e intelectual. Programas de inclusión, terapias y Plan Padrino. ¡Conoce cómo puedes ayudar!">
```

**Nosotros:**
```html
<title>Quiénes Somos | Fundación Horizontes de Sabiduría — Bogotá</title>
<meta name="description" content="Conoce la misión, visión y equipo de la Fundación Horizontes de Sabiduría, entidad sin ánimo de lucro dedicada a la inclusión de personas con discapacidad cognitiva en Bogotá.">
```

**Programas (índice):**
```html
<title>Nuestros Programas | Inclusión y Desarrollo para Personas con Discapacidad — FHS Bogotá</title>
<meta name="description" content="Programas especializados para niños, jóvenes y adultos con discapacidad cognitiva en Bogotá: talleres de vida independiente, inclusión escolar, terapias y Plan Padrino.">
```

**Programa Niñez:**
```html
<title>Programa Niñez — Inclusión Escolar para Niños con Discapacidad Cognitiva en Bogotá</title>
<meta name="description" content="Acompañamos a niños y niñas con discapacidad cognitiva en Bogotá en su proceso de inclusión escolar con talleres especializados en habilidades cognitivas, autonomía y socialización.">
```

**Plan Padrino:**
```html
<title>Plan Padrino — Apadrina un Sueño, Transforma una Vida | FHS Bogotá</title>
<meta name="description" content="Sé padrino de un niño con discapacidad cognitiva en Bogotá y apoya su acceso a educación inclusiva. Conoce las modalidades de apadrinamiento de la Fundación Horizontes de Sabiduría.">
```

**Donaciones:**
```html
<title>Haz una Donación | Apoya la Inclusión de Personas con Discapacidad en Bogotá</title>
<meta name="description" content="Tu donación a la Fundación Horizontes de Sabiduría permite que más personas con discapacidad cognitiva en Bogotá accedan a programas de inclusión educativa y social.">
```

**Blog:**
```html
<title>Blog | Educación Inclusiva y Discapacidad Cognitiva — Fundación Horizontes de Sabiduría</title>
<meta name="description" content="Artículos sobre inclusión educativa, discapacidad cognitiva, desarrollo humano e historias inspiradoras de la Fundación Horizontes de Sabiduría en Bogotá.">
```

**Contacto:**
```html
<title>Contáctanos | Fundación Horizontes de Sabiduría — Bogotá</title>
<meta name="description" content="Escríbenos para conocer nuestros programas, hacer una donación o unirte como padrino. Estamos en Bogotá y te atendemos con gusto.">
```

#### Schema.org (JSON-LD)

Implementar en el `<head>` del Home:

```json
{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Fundación Horizontes de Sabiduría",
  "alternateName": "FHS",
  "description": "Fundación sin ánimo de lucro en Bogotá que acompaña a personas con discapacidad cognitiva e intelectual mediante programas de inclusión educativa y social.",
  "url": "[URL del sitio]",
  "logo": "[URL del logo]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bogotá",
    "addressRegion": "Bogotá D.C.",
    "addressCountry": "CO"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "Spanish"
  },
  "sameAs": [
    "[URL Instagram]",
    "[URL Facebook]"
  ]
}
```

#### Otras directrices técnicas SEO

- **URLs amigables:** Todo en minúsculas, sin tildes, con guiones. Ej: `/programas/ninez`, `/plan-padrino`
- **Imágenes:** Todos los `<img>` deben tener atributo `alt` descriptivo en español. Ej: `alt="Niña con discapacidad cognitiva participando en taller de escritura en Bogotá"`
- **Headings:** Solo un `<h1>` por página. Jerarquía coherente H1 → H2 → H3.
- **Velocidad:** Optimizar imágenes (WebP), lazy loading, fuentes con `display=swap`
- **Mobile-first:** Diseño completamente responsivo. El 70%+ del tráfico esperado es móvil.
- **Sitemap XML:** Generar `/sitemap.xml` automáticamente
- **robots.txt:** Configurar correctamente
- **Open Graph:** Implementar tags OG para compartir en redes sociales
- **Canonical tags:** Una URL canónica por página
- **Google Search Console:** Dejar estructura preparada para verificación

#### Estrategia de contenido SEO (Blog)

Publicar mínimo 2 artículos/mes. Temas sugeridos para primeros artículos:

1. *"¿Qué es la discapacidad cognitiva y cómo apoyar a tu hijo en Bogotá?"*
2. *"Inclusión educativa en Colombia: derechos y recursos para familias"*
3. *"Cómo funciona el Plan Padrino de la Fundación Horizontes de Sabiduría"*
4. *"Terapia ocupacional para niños con discapacidad cognitiva: qué esperar"*
5. *"5 actividades para desarrollar la autonomía en jóvenes con discapacidad intelectual"*

Cada artículo debe: tener mínimo 800 palabras, incluir la keyword en el título y primer párrafo, tener CTA interno hacia programas o donaciones, e incluir meta description optimizada.

---

## 7. ESPECIFICACIONES TÉCNICAS

### Stack definitivo
- **Framework:** Astro — generación estática pura, óptimo para SEO, velocidad máxima
- **Estilos:** Tailwind CSS
- **Blog:** Archivos Markdown locales dentro del repositorio. El desarrollador los actualiza directamente cuando se requiera — sin CMS externo.
- **Formularios:** EmailJS o Resend para envío al correo institucional sin backend
- **Repositorio:** GitHub
- **Hosting:** Vercel (integración directa con GitHub, deploy automático en cada push)
- **Dominio:** Por definir — contendrá la palabra "fundacion"

### Skills de Claude Code — OBLIGATORIAS EN TODA LA SESIÓN

> ⚠️ **Instrucción crítica para Claude Code:** Las siguientes dos skills deben activarse al inicio de la sesión y mantenerse activas durante todo el desarrollo. No son opcionales ni puntuales.

| Skill | Propósito |
|---|---|
| `design-taste-frontend` | Garantiza que cada componente, página y detalle visual sea profesional, moderno y con efectos de calidad. Aplicar en TODOS los componentes sin excepción. |
| `full-output-enforcement` | Garantiza que Claude Code genere siempre el código completo, sin truncar, sin placeholders de código, sin "// resto del código aquí". Todo el código debe estar escrito. |

### Responsive
- Breakpoints: mobile (< 768px), tablet (768–1024px), desktop (> 1024px)
- Prioridad de diseño: **mobile-first**

### Accesibilidad (a11y)
- Contraste de color mínimo WCAG AA
- Navegación por teclado
- Atributos ARIA en componentes interactivos
- Texto alternativo en todas las imágenes

### Rendimiento objetivo
- Lighthouse Score: > 90 en Performance, SEO, Accessibility
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1

---

## 8. PENDIENTES QUE LA FHS DEBE PROVEER

Antes del lanzamiento, la fundación debe entregar:

- [ ] Archivos del logo en SVG y PNG (fondo transparente, fondo claro, versión horizontal)
- [ ] Fotografías reales de programas, talleres y beneficiarios (con autorización de uso de imagen)
- [ ] Misión y visión aprobadas por la junta (se propone texto en sección 4.2 como base)
- [ ] Dirección física completa en Bogotá
- [ ] Teléfono y número de WhatsApp institucional
- [ ] Correo electrónico institucional
- [ ] Links a redes sociales (Instagram, Facebook)
- [ ] Datos bancarios para donaciones (o pasarela de pago definida)
- [ ] Cifras de impacto cuando estén disponibles
- [ ] Testimonios de familias o beneficiarios (con autorización)
- [ ] Nombre definitivo del dominio web
- [ ] Integrantes del equipo (nombre, cargo, foto)
- [ ] Aliados o patrocinadores (logos y nombres)
- [ ] Primeros artículos de blog (o aprobación de los sugeridos en sección 6)

---

## 9. NOTAS FINALES PARA CLAUDE CODE

1. **El sitio debe sentirse cálido, no clínico.** Evitar estética de hospital o institución médica. Prima lo humano y lo esperanzador.
2. **El verde `#7BA283` es el color de confianza.** El terracota `#B56E45` es el color de la acción (botones CTA principales). Usar con intención.
3. **Los nombres de los talleres son activos de marca.** Mantenerlos en comillas con su ortografía exacta.
4. **Cada página debe tener un CTA claro** — el usuario nunca debe quedarse sin saber qué hacer a continuación.
5. **El Plan Padrino es el programa estrella para donantes.** Darle prominencia visual en Home y Navbar.
6. **SEO es prioridad desde el día 1.** Implementar todos los meta tags, schema y buenas prácticas desde el primer build, no como adición posterior.
7. **Usar placeholders claramente marcados** para todo el contenido que la FHS aún no ha entregado (fotos, cifras, datos de contacto).
8. **El botón de WhatsApp flotante** debe estar presente en todas las páginas.
9. **El sitio es la primera impresión digital** de una fundación nueva — debe transmitir confianza y profesionalismo desde el primer scroll.

---

*Documento preparado en sesión de planeación — Junio 2025*  
*Versión 1.0 — Lista para Claude Code*
