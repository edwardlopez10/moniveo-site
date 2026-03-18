import Container from "./Container";

const faqs = [
  {
    q: "¿Moniveo es para empresas grandes o pequeñas?",
    a: "Principalmente para pequeñas y medianas empresas. Diseñamos la implementación para equipos reducidos y procesos reales."
  },
  {
    q: "¿Cuánto tarda en implementarse?",
    a: "En la mayoría de casos, un piloto funcional puede estar listo en 1–3 semanas. Luego escalamos por módulos."
  },
  {
    q: "¿Necesito infraestructura o un equipo técnico?",
    a: "No. Moniveo es SaaS. Nosotros guiamos la configuración y te damos mejores prácticas para adopción."
  },
  {
    q: "¿Puedo pedir un producto para mi sector?",
    a: "Sí. Moniveo existe precisamente para sectores olvidados. Si tu industria no encaja en un producto actual, proponemos un piloto."
  },
  {
    q: "¿Qué pasa con la seguridad y accesos?",
    a: "Incluimos roles, permisos y trazabilidad. En la demo te mostramos cómo controlas quién ve y hace qué."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-zinc-200/70 bg-white scroll-mt-24">
      <Container className="py-14 sm:py-16">
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-700">
            Respuestas claras para ayudarte a decidir rápido.
          </p>
        </div>

        <div className="mt-10 grid gap-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="text-sm font-semibold text-zinc-950">{f.q}</span>
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 transition group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
