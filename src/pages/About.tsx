import Layout from "@/components/Layout";
import avatar from "@/assets/avatar.jpg";
import { Link } from "react-router-dom";

const About = () => (
  <Layout>
    <section className="container max-w-4xl py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-[260px_1fr]">
        <div className="relative mx-auto md:mx-0">
          <div className="absolute -inset-3 rounded-full bg-gradient-text opacity-30 blur-2xl" />
          <img
            src={avatar}
            alt="Retrato de Javier Herrera"
            width={768}
            height={768}
            loading="lazy"
            className="relative h-56 w-56 rounded-full object-cover ring-1 ring-border"
          />
        </div>
        <div className="animate-fade-up">
          <p className="mb-3 text-xs uppercase tracking-widest text-primary">Sobre mí</p>
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Hola, soy <span className="text-gradient italic">Javier</span>.
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Construyo productos digitales desde hace varios años. Me gusta lo simple,
              lo que se entiende a la primera, y los detalles que se notan sin gritar.
            </p>
            <p>
              Vengo del mundo del desarrollo, pero también del de las personas. Por eso
              cuento mis proyectos como historias: porque detrás de cada línea de código
              hay alguien usándola.
            </p>
            <p>
              Cuando no estoy frente al portátil, probablemente estoy caminando, leyendo
              o tomando café — el de filtro, sin azúcar.
            </p>
          </div>
          <div className="mt-8 flex gap-3">
            <Link
              to="/contacto"
              className="rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-transform hover:scale-[1.02]"
            >
              Hablemos
            </Link>
            <Link
              to="/"
              className="rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
            >
              Ver el blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
