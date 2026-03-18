import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moniveo | Soluciones SaaS para sectores olvidados",
  description:
    "Moniveo crea soluciones tecnológicas para sectores económicos que suelen ser olvidados. Agenda una demo y transforma tu operación con herramientas simples y medibles."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-zinc-950 antialiased">
        {children}
      </body>
    </html>
  );
}
