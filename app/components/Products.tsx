import Container from "./Container";

const products = [
  {
    name: "Moniveo Residente",
    tagline: "Operación y control para residenciales y edificios.",
    bullets: ["Accesos y bitácoras", "Alertas y reportes", "Roles y permisos"]
  },
  {
    name: "Moniveo Salud",
    tagline: "Estandariza procesos y mejora la atención con datos.",
    bullets: ["Checklists y flujos", "Cumplimiento y auditoría", "Indicadores clínicos/operativos"]
  },
  {
    name: "Próximamente",
    tagline: "Una solución para un sector que hoy está desatendido.",
    bullets: ["En diseño", "Pilotos abiertos", "Feedback de clientes"]
  }
];

export default function Products() {
  return (
    <section id="productos" className="border-t border-zinc-200/70 bg-white scroll-mt-24">
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
              Productos enfocados en sectores olvidados
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-700">
              Módulos listos para operar. Configuración guiada y métricas desde el día uno.
              Cada producto comparte una base común: simplicidad + visibilidad + control.
            </p>
          </div>
          <a
            href="#cta"
            className="inline-flex w-fit items-center justify-center rounded-xl bg-zinc-950 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800"
          >
            Agendar demo
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const comingSoon = p.name.toLowerCase().includes("próximamente");
            return (
              <div
                key={p.name}
                className={`group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                  comingSoon ? "opacity-95" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{p.name}</h3>
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-semibold ${
                      comingSoon
                        ? "border border-zinc-300 bg-zinc-50 text-zinc-700"
                        : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    {comingSoon ? "En camino" : "Disponible"}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-zinc-700">{p.tagline}</p>

                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    href="#cta"
                    className={`inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm transition ${
                      comingSoon
                        ? "border border-zinc-300 bg-white text-zinc-950 hover:bg-zinc-50"
                        : "bg-zinc-950 text-white hover:bg-zinc-800"
                    }`}
                    aria-label={`Solicitar demo de ${p.name}`}
                  >
                    {comingSoon ? "Unirme a lista de espera" : "Solicitar demo"}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <p className="text-sm font-semibold text-zinc-950">¿Tienes un sector específico?</p>
          <p className="mt-1 text-sm text-zinc-700">
            Si tu industria está “olvidada” por el software tradicional, cuéntanos. Podemos diseñar un piloto
            en semanas.
          </p>
        </div>
      </Container>
    </section>
  );
}
