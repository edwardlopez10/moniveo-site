"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import Container from "./Container";
import FormSuccess from "./FormSuccess";
import RequiredMark from "./RequiredMark";
import { useContactForm } from "@/app/hooks/useContactForm";

const GRID_CELL = 170;
const GRID_CELL_XL = 180;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const getPayload = useCallback(
    () => ({ email: emailRef.current?.value ?? "" }),
    []
  );

  const {
    status,
    errorMessage,
    turnstileRef,
    handleSubmit,
    handleTurnstileVerify,
    handleTurnstileError
  } = useContactForm({ type: "hero", getPayload });

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const cell = window.matchMedia("(min-width: 1280px)").matches
      ? GRID_CELL_XL
      : GRID_CELL;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
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

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <section
      id="inicio"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      data-hero-active="false"
      className="group/hero relative flex min-h-[calc(100svh-6rem)] items-center overflow-hidden bg-white py-12 lg:py-4"
      style={
        {
          "--hero-mx": "0px",
          "--hero-my": "0px",
          "--hero-cell": `${GRID_CELL}px`
        } as React.CSSProperties
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(70,55,90,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(70,55,90,0.09)_1px,transparent_1px)] bg-[size:170px_170px] xl:bg-[size:180px_180px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(129,92,246,0.11),transparent_38%),radial-gradient(circle_at_58%_78%,rgba(187,146,255,0.065),transparent_42%)]" />
        <div
          className="absolute left-0 top-0 hidden bg-[rgba(66,46,92,0.035)] opacity-0 transition-opacity duration-150 group-data-[hero-active=true]/hero:opacity-100 md:block"
          style={{
            width: "var(--hero-cell)",
            height: "var(--hero-cell)",
            transform: "translate(var(--hero-mx), var(--hero-my))"
          }}
        />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-8 xl:gap-12">
          <div className="flex max-w-[580px] flex-col items-start justify-center xl:max-w-[600px]">
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

            {status === "success" ? (
              <FormSuccess className="w-full max-w-[520px]" />
            ) : (
              <form
                className="flex w-full max-w-[520px] flex-col gap-2"
                onSubmit={handleSubmit}
                aria-label="Solicitar una demo"
                noValidate
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-2">
                  <div className="flex w-full min-w-0 flex-1 flex-col gap-2">
                    <label
                      htmlFor="hero-email"
                      className="text-xs font-semibold text-zinc-700"
                    >
                      Correo de trabajo <RequiredMark />
                      <span className="sr-only">(requerido)</span>
                    </label>
                    <input
                      ref={emailRef}
                      id="hero-email"
                      type="email"
                      name="email"
                      placeholder="tu@empresa.com"
                      autoComplete="email"
                      required
                      disabled={status === "submitting"}
                      aria-invalid={status === "error"}
                      aria-describedby={errorMessage ? "hero-email-error" : undefined}
                      className="box-border h-12 w-full min-w-0 flex-1 appearance-none rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base leading-normal text-zinc-950 shadow-sm placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none disabled:opacity-60 sm:text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex h-12 w-full shrink-0 items-center justify-center rounded-xl bg-zinc-950 px-7 text-base font-semibold text-white shadow-sm hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:text-sm"
                  >
                    {status === "submitting" ? "Enviando…" : "Agendar demo"}
                  </button>
                </div>
                {errorMessage ? (
                  <p id="hero-email-error" role="alert" className="text-sm text-red-600">
                    {errorMessage}
                  </p>
                ) : null}
                {siteKey ? (
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={siteKey}
                    options={{ size: "invisible" }}
                    onSuccess={handleTurnstileVerify}
                    onError={handleTurnstileError}
                    onExpire={handleTurnstileError}
                  />
                ) : null}
              </form>
            )}

            {status !== "success" ? (
              <p className="mt-2.5 text-sm text-zinc-500">
                Sin compromiso. Te contactamos en menos de 24 horas.
              </p>
            ) : null}
          </div>

          <div className="mx-auto w-full max-w-md animate-fadeUp motion-reduce:animate-none lg:hidden">
            <Image
              src="/dashboard-mock.png"
              alt="Vista previa del panel de Moniveo"
              width={3600}
              height={2400}
              priority
              sizes="90vw"
              className="h-auto w-full drop-shadow-[0_16px_24px_rgba(24,24,27,0.12)]"
            />
          </div>

          <div className="relative hidden lg:block" aria-hidden />
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-y-0 left-1/2 right-0 z-10 hidden overflow-hidden lg:block">
        <div className="absolute bottom-10 left-10 right-0 top-10 overflow-hidden xl:bottom-12 xl:left-14 xl:top-12">
          <div className="absolute left-0 top-0 w-[clamp(900px,76vw,1080px)] max-w-none animate-fadeUp motion-reduce:animate-none xl:w-[1180px] 2xl:w-[1280px]">
            <Image
              src="/dashboard-mock.png"
              alt="Vista previa del panel de Moniveo"
              width={3600}
              height={2400}
              priority
              sizes="(max-width: 1279px) 1080px, (max-width: 1535px) 1180px, 1280px"
              className="h-auto w-full drop-shadow-[0_20px_30px_rgba(24,24,27,0.14)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
