import Container from "./Container";
import CentralAmericaMap from "./CentralAmericaMap";

const pillars = [
  {
    title: "Misión",
    text: "Construimos software claro para operaciones que hoy siguen dependiendo de hojas de cálculo, WhatsApp y procesos manuales."
  },
  {
    title: "Enfoque",
    text: "Priorizamos simplicidad, adopción rápida y métricas útiles. Menos complejidad, más control desde el primer mes."
  },
  {
    title: "Equipo",
    text: "Moniveo combina experiencia en desarrollo de software, diseño de producto y comprensión de procesos operativos."
  }
];

export default function AboutUs() {
  return (
    <section
      id="sobre-nosotros"
      className="scroll-mt-24 border-t border-zinc-200/70 bg-white"
    >
      <Container className="py-14 sm:py-16">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="flex max-w-xl flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.04em] text-zinc-500">
              Sobre nosotros
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
              Tecnología diseñada desde la realidad de nuestra región
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
              Desarrollamos aplicaciones pensadas para resolver necesidades
              reales de cada industria, priorizando la simplicidad, la
              experiencia del usuario y una operación más clara y eficiente.
              Nacemos en El Salvador con una visión regional para Centroamérica
              y un enfoque adaptado a las particularidades de nuestros mercados.
            </p>
          </div>

          <div className="aspect-[4/3] w-full min-h-[280px] sm:min-h-[320px] lg:aspect-auto lg:min-h-[380px]">
            <CentralAmericaMap />
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-zinc-200 pt-10 sm:grid-cols-3 sm:gap-10">
          {pillars.map((item) => (
            <div key={item.title}>
              <h3 className="text-sm font-semibold tracking-tight text-zinc-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
