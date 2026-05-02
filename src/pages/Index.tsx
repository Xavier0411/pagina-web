import { useState } from "react";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import { posts, type PostType } from "@/data/posts";
import { cn } from "@/lib/utils";

type Filter = "todos" | PostType;

const filters: { id: Filter; label: string }[] = [
  { id: "todos", label: "Todo" },
  { id: "experiencia", label: "Experiencias" },
  { id: "proyecto", label: "Proyectos" },
];

const Index = () => {
  const [filter, setFilter] = useState<Filter>("todos");
  const visible = filter === "todos" ? posts : posts.filter((p) => p.type === filter);
  const sorted = [...visible].sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container relative pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="absolute -top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" />
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Diario y portafolio
          </p>
          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl animate-fade-up">
            Historias y proyectos,<br />
            <span className="text-gradient italic">contados despacio.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground animate-fade-up [animation-delay:100ms]">
            Soy Javier. Aquí escribo lo que aprendo construyendo cosas en internet —
            sin tecnicismos, con calma y un café cerca.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="container">
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-border/50 pb-6">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm transition-all duration-300",
                filter === f.id
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground">
            {sorted.length} {sorted.length === 1 ? "entrada" : "entradas"}
          </span>
        </div>

        <div className="grid gap-5 pb-12 md:grid-cols-2">
          {sorted.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
