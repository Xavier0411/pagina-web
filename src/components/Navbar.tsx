import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/contacto", label: "Contacto" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
            <span className="absolute inset-0 rounded-lg bg-gradient-text opacity-60 blur-md transition-opacity group-hover:opacity-100" />
            <span className="relative font-display text-sm font-semibold text-foreground">jh</span>
          </span>
          <span className="font-display text-base font-medium tracking-tight">
            javier<span className="text-muted-foreground">herrera</span>
          </span>
        </Link>
        <ul className="flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={cn(
                  "rounded-full px-4 py-2 text-muted-foreground transition-colors hover:text-foreground",
                  pathname === l.to && "bg-secondary text-foreground"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
