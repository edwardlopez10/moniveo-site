import Image from "next/image";
import Container from "./Container";

const products = [
  {
    name: "Moniveo Residente",
    logo: "/moni-residentes-square-logo.svg",
    tagline: "Operación y control para residenciales y edificios.",
    bullets: ["Accesos y bitácoras", "Alertas y reportes", "Roles y permisos"]
  },
  {
    name: "Moniveo Salud",
    logo: "/moni-salud-square-logo.svg",
    tagline: "Estandariza procesos y mejora la atención con datos.",
    bullets: [
      "Checklists y flujos",
      "Cumplimiento y auditoría",
      "Indicadores clínicos/operativos"
    ]
  },
  {
    name: "Próximamente",
    logo: null as string | null,
    tagline: "Una solución nueva viene en camino.",
    bullets: ["En diseño", "Pilotos abiertos", "Feedback de clientes"]
  }
];

export default function Products() {
  return (
    <section id="productos" className="scroll-mt-24 border-t border-zinc-200/70 bg-white">
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
              Productos enfocados en sectores olvidados
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-700">
              Módulos listos para operar. Configuración guiada y métricas desde
              el día uno. Cada producto comparte una base común: simplicidad +
              visibilidad + control.
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
                className={`group relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_1px_2px_rgba(24,24,27,0.04)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(24,24,27,0.12)] ${
                  comingSoon ? "opacity-95" : ""
                }`}
              >
                <span
                  className={`absolute right-4 top-4 rounded-full px-2.5 py-1 text-xs font-semibold ${
                    comingSoon
                      ? "border border-zinc-300 bg-zinc-50 text-zinc-700"
                      : "bg-emerald-50 text-emerald-700"
                  }`}
                >
                  {comingSoon ? "En camino" : "Disponible"}
                </span>

                {p.logo ? (
                  <div className="mb-4 inline-flex h-11 w-11 overflow-hidden rounded-[0.8rem] shadow-[0_1px_2px_rgba(24,24,27,0.06)] ring-1 ring-black/5">
                    <Image
                      src={p.logo}
                      alt=""
                      width={44}
                      height={44}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-[0.8rem] border border-zinc-300 bg-zinc-50"
                    aria-hidden
                  >
                    <svg
                      className="h-4 w-4 text-zinc-300"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M4.5 2.8v10.4a.75.75 0 0 0 1.15.63l8.1-5.2a.75.75 0 0 0 0-1.26l-8.1-5.2A.75.75 0 0 0 4.5 2.8Z" />
                    </svg>
                  </div>
                )}

                <h3 className="pr-24 text-lg font-semibold tracking-tight text-zinc-950">
                  {p.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                  {p.tagline}
                </p>

                <ul className="mt-4 space-y-2.5 text-sm text-zinc-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M3.5 8.5 6.5 11.5 12.5 4.5"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="leading-5">{b}</span>
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
                    {comingSoon
                      ? "Unirme a lista de espera"
                      : "Solicitar demo"}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <p className="text-sm font-semibold text-zinc-950">
            ¿Tienes un sector específico?
          </p>
          <p className="mt-1 text-sm text-zinc-700">
            Si tu industria está “olvidada” por el software tradicional,
            cuéntanos. Podemos diseñar un piloto en semanas.
          </p>
        </div>
      </Container>
    </section>
  );
}
