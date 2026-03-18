"use client";

import Container from "./Container";

const navItems = [
  { label: "Productos", href: "#productos" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" }
];

function scrollToId(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#inicio"
            className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-semibold tracking-tight text-zinc-950 hover:bg-zinc-100"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("#inicio");
            }}
            aria-label="Ir al inicio"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-950 text-white">
              M
            </span>
            <span>Moniveo</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className="hidden rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-950 shadow-sm hover:bg-zinc-50 md:inline-flex"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("#cta");
              }}
            >
              Ver demo
            </a>
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-lg bg-zinc-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("#cta");
              }}
              aria-label="Agendar una demo"
            >
              Agendar demo
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
