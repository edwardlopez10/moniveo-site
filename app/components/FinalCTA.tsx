"use client";

import Container from "./Container";

export default function FinalCTA() {
  return (
    <section id="cta" className="border-t border-zinc-200/70 bg-white scroll-mt-24">
      <Container className="py-14 sm:py-16">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-950 p-8 text-white shadow-sm sm:p-10">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 left-1/2 h-56 w-[38rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 right-[-6rem] h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                Agenda una demo y ve Moniveo en acción
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/80">
                Te mostramos el producto ideal para tu sector y definimos 1–2 métricas que puedas mejorar en 30 días.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/85">
                <li>• Demo personalizada</li>
                <li>• Recomendación de implementación</li>
                <li>• Sin compromiso</li>
              </ul>
            </div>

            {/* Simple lead form (placeholder) */}
            <form
              className="relative rounded-2xl bg-white p-6 text-zinc-950 shadow-sm"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Formulario para agendar demo"
            >
              <div className="grid gap-4">
                <div>
                  <label className="text-xs font-semibold text-zinc-700" htmlFor="nombre">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 shadow-sm placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none"
                    autoComplete="name"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-700" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@empresa.com"
                    className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 shadow-sm placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none"
                    autoComplete="email"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-700" htmlFor="sector">
                    Sector / Industria
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 shadow-sm focus:border-zinc-950 focus:outline-none"
                    defaultValue="residencial"
                  >
                    <option value="residencial">Residenciales / Edificios</option>
                    <option value="salud">Salud</option>
                    <option value="medioambiente">Medio ambiente</option>
                    <option value="comercio">Comercio</option>
                    <option value="logistica">Logística</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800"
                >
                  Solicitar demo
                </button>

                <p className="text-xs text-zinc-500">
                  Este formulario es placeholder. Conecta aquí tu CRM (HubSpot), Calendly o tu endpoint.
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
