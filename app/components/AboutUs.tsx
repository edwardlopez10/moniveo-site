import Container from './Container';

const pillars = [
  {
    title: 'Misión',
    text: 'Construimos software claro para operaciones que hoy siguen dependiendo de hojas de cálculo, WhatsApp y procesos manuales.',
  },
  {
    title: 'Enfoque',
    text: 'Priorizamos simplicidad, adopción rápida y métricas útiles. Menos complejidad, más control desde el primer mes.',
  },
  {
    title: 'Equipo',
    text: 'Moniveo combina experiencia en desarrollo de software, diseño de producto y comprensión de procesos operativos.',
  },
];

export default function AboutUs() {
  return (
    <section id='sobre-nosotros' className='scroll-mt-24 border-t border-zinc-200/70 bg-white'>
      <Container className='py-14 sm:py-16'>
        <div className='grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14'>
          <div className='max-w-xl'>
            <p className='text-xs font-semibold uppercase tracking-[0.04em] text-zinc-500'>
              Sobre nosotros
            </p>
            <h2 className='mt-3 text-balance text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl'>
              Tecnología diseñada desde la realidad de nuestra región
            </h2>
            <p className='mt-4 text-base leading-relaxed text-zinc-700'>
              Desarrollamos aplicaciones pensadas para resolver necesidades reales de cada
              industria, priorizando la simplicidad, la experiencia del usuario y una operación más
              clara y eficiente. Nacemos en El Salvador con una visión regional para Centroamérica y
              un enfoque adaptado a las particularidades de nuestros mercados.
            </p>
          </div>

          {/* Placeholder visual */}
          <div
            className='relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50'
            aria-hidden
          >
            <div className='absolute inset-0 bg-[linear-gradient(135deg,#f4f4f5_0%,#fafafa_45%,#eef2ff_100%)]' />
            <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(70,55,90,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(70,55,90,0.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-70' />
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='rounded-xl border border-zinc-200/80 bg-white/80 px-4 py-2 text-xs font-medium text-zinc-500 shadow-sm backdrop-blur-sm'>
                Imagen del equipo · placeholder
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 grid gap-8 border-t border-zinc-200 pt-10 sm:grid-cols-3 sm:gap-10'>
          {pillars.map((item) => (
            <div key={item.title}>
              <h3 className='text-sm font-semibold tracking-tight text-zinc-950'>{item.title}</h3>
              <p className='mt-2 text-sm leading-relaxed text-zinc-600'>{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
