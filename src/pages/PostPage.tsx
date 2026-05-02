import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { getPost } from "@/data/posts";
import NotFound from "./NotFound";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" });

const PostPage = () => {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;
  if (!post) return <NotFound />;

  const isProject = post.type === "proyecto";

  return (
    <Layout>
      <article className="container max-w-3xl py-16 md:py-24">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Volver al inicio
        </Link>

        <header className="mb-10 animate-fade-up">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider">
            <span
              className={
                isProject
                  ? "rounded-full border border-accent-violet/40 bg-accent-violet/10 px-3 py-1 text-accent-violet"
                  : "rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-primary"
              }
            >
              {isProject ? "Proyecto" : "Experiencia"}
            </span>
            <span className="text-muted-foreground">{formatDate(post.date)}</span>
            <span className="text-muted-foreground">· {post.readTime}</span>
          </div>

          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-muted-foreground">{post.excerpt}</p>
        </header>

        <div className="space-y-6 text-lg leading-relaxed text-foreground/90 animate-fade-up [animation-delay:120ms]">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {post.link && (
          <a
            href={post.link}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Ver el proyecto <ExternalLink className="h-4 w-4" />
          </a>
        )}

        <div className="mt-12 flex flex-wrap gap-2 border-t border-border/50 pt-6">
          {post.tags.map((t) => (
            <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
              #{t}
            </span>
          ))}
        </div>
      </article>
    </Layout>
  );
};

export default PostPage;
