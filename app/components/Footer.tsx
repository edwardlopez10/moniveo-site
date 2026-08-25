import Container from "./Container";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <Logo className="h-5 w-auto" />
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#productos" className="text-zinc-700 hover:text-zinc-950">
              Productos
            </a>
            <a href="#sobre-nosotros" className="text-zinc-700 hover:text-zinc-950">
              Sobre nosotros
            </a>
            <a href="#como-funciona" className="text-zinc-700 hover:text-zinc-950">
              Cómo funciona
            </a>
            <a href="#faq" className="text-zinc-700 hover:text-zinc-950">
              FAQ
            </a>
            <a href="#cta" className="text-zinc-700 hover:text-zinc-950">
              Demo
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-zinc-200 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Moniveo. Todos los derechos reservados.</p>
          <p>Hecho con enfoque mobile-first • Accesible • Minimal</p>
        </div>
      </Container>
    </footer>
  );
}
