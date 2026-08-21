import Container from "./Container";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-zinc-100 blur-3xl" />
        <div className="absolute -bottom-20 right-[-6rem] h-60 w-60 rounded-full bg-zinc-100 blur-3xl" />
        <div className="hero-grid absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
            Software diseñado para simplificar operaciones complejas
          </h1>

          <p className="mt-5 text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
            Diseñamos plataformas que digitalizan procesos, reducen tareas manuales y ofrecen información clara para tomar mejores decisiones.
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
              <span className="text-xs font-medium text-zinc-600">
                Panel de Moniveo
              </span>
              <span className="text-xs text-zinc-400">●</span>
            </div>

            <div className="grid gap-4 p-5 md:grid-cols-3">
              {[
                {
                  title: "Operación",
                  value: "+18%",
                  note: "eficiencia mensual",
                },
                {
                  title: "Tiempos",
                  value: "-27%",
                  note: "reducción de fricción",
                },
                {
                  title: "Visibilidad",
                  value: "24/7",
                  note: "indicadores clave",
                },
              ].map((kpi) => (
                <div
                  key={kpi.title}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
                >
                  <p className="text-sm font-medium text-zinc-700">
                    {kpi.title}
                  </p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
                    {kpi.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">{kpi.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
