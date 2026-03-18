import Container from "./Container";

const steps = [
  {
    title: "Diagnóstico rápido",
    desc: "Entendemos tu operación en 30–45 minutos y definimos qué medir primero."
  },
  {
    title: "Configuración guiada",
    desc: "Adaptamos flujos y roles sin complicaciones. Empezamos pequeño y escalamos."
  },
  {
    title: "Resultados medibles",
    desc: "Reportes claros, alertas útiles y decisiones basadas en datos desde el primer mes."
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-zinc-200/70 bg-white scroll-mt-24">
      <Container className="py-14 sm:py-16">
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
            Cómo funciona
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-700">
            Enfocado en dueños de negocio: implementación simple, impacto rápido y claridad total.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-sm font-semibold text-white">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">{s.desc}</p>
              <div className="mt-6 h-px w-full bg-zinc-200" />
              <p className="mt-4 text-xs text-zinc-500">
                Tip: empezamos con 1–2 métricas clave para evitar ruido.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
