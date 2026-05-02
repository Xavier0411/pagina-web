export type PostType = "experiencia" | "proyecto";

export interface Post {
  slug: string;
  type: PostType;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  cover?: string;
  link?: string;
  content: string[];
}

export const posts: Post[] = [
  {
    slug: "primer-deploy-y-mil-cafes",
    type: "experiencia",
    title: "Mi primer deploy y los mil cafés que costó",
    excerpt:
      "La noche que rompí producción, lo arreglé y aprendí más en 6 horas que en 6 meses.",
    date: "2026-04-12",
    readTime: "3 min",
    tags: ["historia", "aprendizaje"],
    content: [
      "Eran las 11 de la noche cuando me di cuenta de que el botón ya no funcionaba. No el botón cualquiera, el de pagar.",
      "Respiré, abrí los logs, y empecé a desarmar el problema como quien desenreda audífonos: con paciencia y un poco de fe.",
      "Lo que aprendí esa noche no fue técnico. Fue que equivocarse en silencio, sin culparse, es parte del oficio.",
    ],
  },
  {
    slug: "tienda-artesanal-online",
    type: "proyecto",
    title: "Una tienda online para mi tía",
    excerpt:
      "Un sitio simple para vender tejidos hechos a mano. Pocos clics, muchos pedidos.",
    date: "2026-03-02",
    readTime: "2 min",
    tags: ["e-commerce", "diseño"],
    link: "https://ejemplo.com",
    content: [
      "Mi tía teje desde hace 30 años y vendía solo por WhatsApp. La idea era darle algo bonito, sin complicarle la vida.",
      "Hicimos un catálogo limpio, con fotos grandes y un carrito que cualquiera entiende. Sin login, sin trabas.",
      "El primer mes triplicó pedidos. Lo mejor: ahora me llama para pedirme cambios, no para pedir ayuda.",
    ],
  },
  {
    slug: "lo-que-no-te-cuentan-del-freelance",
    type: "experiencia",
    title: "Lo que nadie te cuenta del freelance",
    excerpt:
      "Libertad sí, pero también facturas, dudas y aprender a decir que no.",
    date: "2026-02-18",
    readTime: "4 min",
    tags: ["vida", "trabajo"],
    content: [
      "Cuando dejé el trabajo de oficina pensé que me esperaba una vida de cafés y código en pijama. Spoiler: a veces sí, a veces no.",
      "Aprendí que cobrar a tiempo es un arte, y que un buen contrato vale más que mil promesas amables.",
      "Hoy, tres años después, lo volvería a hacer. Pero esta vez con más calma y menos miedo.",
    ],
  },
  {
    slug: "dashboard-clinica-veterinaria",
    type: "proyecto",
    title: "Dashboard para una clínica veterinaria",
    excerpt:
      "Citas, historias clínicas y recordatorios. Todo en una pantalla que cabe en el celular.",
    date: "2026-01-20",
    readTime: "3 min",
    tags: ["dashboard", "salud"],
    content: [
      "El reto era simple de decir y difícil de lograr: que el veterinario pudiera atender sin mirar el computador cada dos minutos.",
      "Diseñamos vistas grandes, accesos rápidos y un asistente que avisa por WhatsApp cuando toca vacuna.",
      "Ahora los dueños llegan puntuales y los gatos siguen siendo gatos. Pequeñas victorias.",
    ],
  },
  {
    slug: "viaje-y-codigo",
    type: "experiencia",
    title: "Programar desde una hamaca",
    excerpt:
      "Pasé un mes en la costa con el portátil. Esto es lo que cambió en mi forma de trabajar.",
    date: "2025-12-05",
    readTime: "3 min",
    tags: ["viaje", "vida"],
    content: [
      "Llegué con la idea de ‘trabajar desde el paraíso’. La realidad: el wifi va y viene, y el sol no entiende de pull requests.",
      "Aprendí a planear mejor, a confiar en commits pequeños, y a cerrar el portátil cuando el mar me llamaba.",
      "Volví con menos código pero con más claridad. A veces la mejor refactorización es la del propio ritmo.",
    ],
  },
  {
    slug: "landing-restaurante",
    type: "proyecto",
    title: "Una landing que huele a leña",
    excerpt:
      "Para un restaurante de pueblo. Cero formularios, mucha foto, un botón que llama.",
    date: "2025-10-14",
    readTime: "2 min",
    tags: ["landing", "local"],
    content: [
      "Don Hernán quería ‘algo en internet’. No quería reservas ni menús PDF: quería que la gente lo llamara.",
      "Hicimos una sola página, con fotos del horno encendido y un botón gigante que marca su número.",
      "Los fines de semana ya no contesta. Tuvo que poner a su hija a tomar las reservas.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
