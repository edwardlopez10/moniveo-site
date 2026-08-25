"use client";

import { useRef } from "react";
import Container from "./Container";

const kpis = [
  {
    title: "Operación",
    value: "+18%",
    note: "eficiencia mensual"
  },
  {
    title: "Tiempos",
    value: "-27%",
    note: "reducción de fricción"
  },
  {
    title: "Visibilidad",
    value: "24/7",
    note: "indicadores clave"
  }
];

const GRID_CELL = 170;
const GRID_CELL_XL = 180;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    // Skip coarse pointers (touch) — no hover affordance needed
    if (event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const cell =
      window.matchMedia("(min-width: 1280px)").matches
        ? GRID_CELL_XL
        : GRID_CELL;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    // Snap solid square to the grid cell under the cursor
    const cellX = Math.floor(x / cell) * cell;
    const cellY = Math.floor(y / cell) * cell;

    section.style.setProperty("--hero-mx", `${cellX}px`);
    section.style.setProperty("--hero-my", `${cellY}px`);
    section.style.setProperty("--hero-cell", `${cell}px`);
    section.dataset.heroActive = "true";
  }

  function handlePointerLeave() {
    const section = sectionRef.current;
    if (!section) return;
    section.dataset.heroActive = "false";
  }

  return (
    <section
      id="inicio"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      data-hero-active="false"
      className="group/hero relative flex min-h-[calc(100svh-6rem)] items-center overflow-x-clip bg-white py-12 lg:py-4"
      style={
        {
          "--hero-mx": "0px",
          "--hero-my": "0px",
          "--hero-cell": `${GRID_CELL}px`
        } as React.CSSProperties
      }
    >
      {/* Background layers clipped to the hero bounds */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Subtle square grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(70,55,90,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(70,55,90,0.09)_1px,transparent_1px)] bg-[size:170px_170px] xl:bg-[size:180px_180px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" />

        {/* Soft lavender wash — stronger on the right */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(129,92,246,0.11),transparent_38%),radial-gradient(circle_at_58%_78%,rgba(187,146,255,0.065),transparent_42%)]" />

        {/* Solid grid-cell highlight (desktop only) */}
        <div
          className="absolute left-0 top-0 hidden bg-[rgba(66,46,92,0.035)] opacity-0 transition-opacity duration-150 group-data-[hero-active=true]/hero:opacity-100 md:block"
          style={{
            width: "var(--hero-cell)",
            height: "var(--hero-cell)",
            transform: "translate(var(--hero-mx), var(--hero-my))"
          }}
        />
      </div>      <Container className="relative z-10 w-full">
        <div className="grid w-full grid-cols-1 items-center gap-12 sm:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="flex max-w-[580px] flex-col items-start xl:max-w-[600px]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.04em] text-zinc-600 sm:mb-7">
              Software para operaciones
            </p>

            <h1 className="mb-5 text-balance text-4xl font-bold tracking-tight text-zinc-950 sm:mb-6 sm:text-5xl xl:text-[3.25rem] xl:leading-[1.1]">
              Software diseñado para simplificar operaciones
            </h1>

            <p className="mb-7 max-w-[560px] text-pretty text-base leading-relaxed text-zinc-700 sm:mb-10 sm:text-lg">
              Diseñamos plataformas que digitalizan procesos, reducen tareas
              manuales y ofrecen información clara para tomar mejores
              decisiones.
            </p>

            <form
              className="flex w-full max-w-[520px] flex-col gap-3 sm:flex-row sm:items-center sm:gap-2"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Solicitar una demo"
            >
              <input
                type="email"
                name="email"
                placeholder="Tu correo de trabajo"
                autoComplete="email"
                required
                aria-label="Correo de trabajo"
                className="box-border h-12 w-full min-w-0 flex-1 appearance-none rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base leading-normal text-zinc-950 shadow-sm placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none sm:text-sm"
              />
              <button
                type="submit"
                className="inline-flex h-12 w-full shrink-0 items-center justify-center rounded-xl bg-zinc-950 px-7 text-base font-semibold text-white shadow-sm hover:bg-zinc-800 sm:w-auto sm:text-sm"
              >
                Agendar demo
              </button>
            </form>

            <p className="mt-2.5 text-sm text-zinc-500">
              Sin compromiso. Te contactamos en menos de 24 horas.
            </p>
          </div>

          <div className="relative min-w-0">
            <div className="mx-auto w-full max-w-[760px] animate-fadeUp lg:mx-0 lg:w-[720px] lg:max-w-none xl:w-[780px]">
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_24px_80px_-24px_rgba(24,24,27,0.35)]">
                <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-3.5">
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

                <div className="grid gap-4 p-5 sm:grid-cols-3">
                  {kpis.map((kpi) => (
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

                <div className="grid gap-4 border-t border-zinc-100 p-5 sm:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                    <p className="text-sm font-medium text-zinc-700">
                      Flujo operativo
                    </p>
                    <div className="mt-4 space-y-3">
                      {["Solicitudes", "Asignación", "Cierre"].map(
                        (label, i) => (
                          <div key={label} className="flex items-center gap-3">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-950 text-xs font-semibold text-white">
                              {i + 1}
                            </span>
                            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-zinc-200">
                              <div
                                className="h-full rounded-full bg-zinc-950"
                                style={{ width: `${88 - i * 18}%` }}
                              />
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                    <p className="text-sm font-medium text-zinc-700">
                      Estado del día
                    </p>
                    <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                      42
                    </p>
                    <p className="mt-1 text-sm text-zinc-600">
                      tareas activas en curso
                    </p>
                    <div className="mt-5 flex gap-2">
                      <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200">
                        En tiempo
                      </span>
                      <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200">
                        3 alertas
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
