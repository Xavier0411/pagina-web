import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/data/posts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" });

const PostCard = ({ post, index }: { post: Post; index: number }) => {
  const isProject = post.type === "proyecto";
  return (
    <Link
      to={`/post/${post.slug}`}
      className="glass-card group relative block overflow-hidden rounded-2xl p-7 animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-wider">
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

      <h2 className="font-display text-2xl font-medium leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary-glow md:text-3xl">
        {post.title}
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {post.excerpt}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
              #{t}
            </span>
          ))}
        </div>
        <span className="flex items-center gap-1 text-sm text-primary opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
          Leer <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
};

export default PostCard;
