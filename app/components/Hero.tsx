import Container from "./Container";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Subtle background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-zinc-100 blur-3xl" />
        <div className="absolute -bottom-20 right-[-6rem] h-60 w-60 rounded-full bg-zinc-100 blur-3xl" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            SaaS simple, medible y listo para operar
          </p>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Tecnología para sectores que suelen ser olvidados.
          </h1>

          <p className="mt-5 text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
            Moniveo crea soluciones enfocadas en lo esencial: visibilidad, control y decisiones con datos.
            Diseñado para dueños de negocio que necesitan resultados, no complejidad.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800"
            >
              Agendar demo
            </a>
            <a
              href="#productos"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-sm hover:bg-zinc-50"
            >
              Ver productos
            </a>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Sin compromiso • Implementación guiada • Soporte humano
          </p>
        </div>

        {/* “Product preview” card */}
        <div className="mx-auto mt-12 max-w-5xl animate-fadeUp">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              </div>
              <span className="text-xs font-medium text-zinc-600">Panel de Moniveo (demo)</span>
              <span className="text-xs text-zinc-400">●</span>
            </div>

            <div className="grid gap-4 p-5 md:grid-cols-3">
              {[
                { title: "Operación", value: "+18%", note: "eficiencia mensual" },
                { title: "Tiempos", value: "-27%", note: "reducción de fricción" },
                { title: "Visibilidad", value: "24/7", note: "indicadores clave" }
              ].map((kpi) => (
                <div
                  key={kpi.title}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
                >
                  <p className="text-sm font-medium text-zinc-700">{kpi.title}</p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
                    {kpi.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">{kpi.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500">
            <span>✅ Reportes claros</span>
            <span>✅ Alertas inteligentes</span>
            <span>✅ Configuración rápida</span>
            <span>✅ Roles y permisos</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
