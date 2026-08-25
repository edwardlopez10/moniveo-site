"use client";

import { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";

const navItems = [
  { label: "Productos", href: "#productos" },
  { label: "Sobre nosotros", href: "#sobre-nosotros" },
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
  const [menuOpen, setMenuOpen] = useState(false);

  function goTo(href: string) {
    setMenuOpen(false);
    scrollToId(href);
  }

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-zinc-200/70 bg-white/80 backdrop-blur lg:h-24">
      <Container className="h-full">
        <div className="flex h-full items-center">
          <div className="flex shrink-0 items-center gap-10 xl:gap-12">
            <a
              href="#inicio"
              className="inline-flex items-center"
              onClick={(e) => {
                e.preventDefault();
                goTo("#inicio");
              }}
              aria-label="Ir al inicio"
            >
              <Logo className="h-5 w-auto lg:h-6" priority />
            </a>

            <nav
              className="hidden items-center gap-8 lg:flex"
              aria-label="Navegación principal"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-zinc-700 hover:text-zinc-950"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <a
              href="#cta"
              className="inline-flex h-12 min-w-[120px] items-center justify-center rounded-xl border border-zinc-300 bg-white px-7 text-sm font-semibold text-zinc-950 shadow-sm hover:bg-zinc-50"
              onClick={(e) => {
                e.preventDefault();
                goTo("#cta");
              }}
            >
              Ver demo
            </a>
            <a
              href="#cta"
              className="inline-flex h-12 min-w-[125px] items-center justify-center rounded-xl bg-zinc-950 px-7 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800"
              onClick={(e) => {
                e.preventDefault();
                goTo("#cta");
              }}
              aria-label="Agendar una demo"
            >
              Agendar demo
            </a>
          </div>

          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-300 bg-white text-zinc-950 shadow-sm hover:bg-zinc-50 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Cerrar" : "Menú"}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden
            >
              {menuOpen ? (
                <path
                  d="M4 4l10 10M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 5h12M3 9h12M3 13h12"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <div className="absolute inset-x-0 top-full border-b border-zinc-200 bg-white shadow-sm lg:hidden">
          <Container>
            <div id="mobile-nav" className="py-4">
              <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                    onClick={(e) => {
                      e.preventDefault();
                      goTo(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="#cta"
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-zinc-300 bg-white px-7 text-sm font-semibold text-zinc-950 shadow-sm hover:bg-zinc-50"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo("#cta");
                  }}
                >
                  Ver demo
                </a>
                <a
                  href="#cta"
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-zinc-950 px-7 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo("#cta");
                  }}
                >
                  Agendar demo
                </a>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
