import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";

const links = [
  { icon: Mail, label: "hola@javierherrera.com.co", href: "mailto:hola@javierherrera.com.co" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("¡Mensaje enviado! Te respondo pronto.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <Layout>
      <section className="container max-w-3xl py-20 md:py-28">
        <div className="animate-fade-up">
          <p className="mb-3 text-xs uppercase tracking-widest text-primary">Contacto</p>
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            ¿Tienes una idea? <span className="text-gradient italic">cuéntamela.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Respondo todos los mensajes. Si es un proyecto, mejor con detalles; si es solo
            para saludar, también vale.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_280px]">
          <form onSubmit={handleSubmit} className="glass-card space-y-5 rounded-2xl p-7">
            <div>
              <label className="mb-2 block text-sm text-muted-foreground">Tu nombre</label>
              <input
                required
                type="text"
                className="w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                placeholder="Cómo te llamas"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-muted-foreground">Tu correo</label>
              <input
                required
                type="email"
                className="w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-muted-foreground">Tu mensaje</label>
              <textarea
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-border bg-input px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                placeholder="Cuéntame en qué andas..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-transform hover:scale-[1.02] disabled:opacity-50"
            >
              {sending ? "Enviando..." : "Enviar mensaje"}
              <Send className="h-4 w-4" />
            </button>
          </form>

          <aside className="space-y-3">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">O por aquí</p>
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border bg-card/50 px-4 py-3 text-sm transition-colors hover:border-primary/40 hover:bg-secondary"
              >
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-foreground/90 group-hover:text-foreground">{label}</span>
              </a>
            ))}
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
