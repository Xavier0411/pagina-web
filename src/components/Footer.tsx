const Footer = () => (
  <footer className="border-t border-border/40 mt-24">
    <div className="container flex flex-col gap-2 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Javier Herrera · Hecho con calma desde Colombia.</p>
      <p className="font-display italic">"Escribir código, contar historias."</p>
    </div>
  </footer>
);

export default Footer;
