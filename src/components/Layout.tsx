import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen">
    <div className="pointer-events-none fixed inset-0 -z-10 bg-hero" />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
