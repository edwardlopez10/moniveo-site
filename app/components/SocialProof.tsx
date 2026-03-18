import Container from "./Container";

const logos = [
  "Grupo Norte",
  "Clínica Central",
  "EcoGestión",
  "Residenciales Uno",
  "AgroPlus"
];

const testimonials = [
  {
    quote:
      "Por fin un sistema que habla el idioma del negocio. En dos semanas ya teníamos métricas claras y alertas útiles.",
    name: "María G.",
    role: "Gerente • Servicios"
  },
  {
    quote:
      "La implementación fue rápida. Lo que más valoro es la simplicidad: equipo y dirección ven lo mismo, sin confusión.",
    name: "Carlos R.",
    role: "Dueño • Comercio"
  }
];

export default function SocialProof() {
  return (
    <section className="border-t border-zinc-200/70 bg-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
              Confianza basada en resultados, no en promesas.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-700">
              Moniveo está diseñado para operar en el mundo real: equipos pequeños, procesos manuales,
              presupuesto limitado y necesidad de control inmediato.
            </p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Empresas que podrían usar Moniveo (logos placeholder)
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {logos.map((name) => (
                  <div
                    key={name}
                    className="flex items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-4 text-sm font-semibold text-zinc-700"
                    aria-label={`Logo de ${name}`}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <blockquote className="text-base leading-relaxed text-zinc-800">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white"
                    aria-hidden
                  >
                    {t.name.split(" ")[0].slice(0, 1)}
                    {t.name.split(" ")[1]?.slice(0, 1) ?? ""}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-950">{t.name}</div>
                    <div className="text-sm text-zinc-600">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-zinc-950">Indicadores típicos que medimos</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>• Tiempos de atención y resolución</li>
                <li>• Cumplimiento operativo y auditorías</li>
                <li>• Costos evitados por alertas tempranas</li>
                <li>• Productividad por equipo / turno</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
