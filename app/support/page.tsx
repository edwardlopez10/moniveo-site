import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/app/components/Container";
import Footer from "@/app/components/Footer";
import Logo from "@/app/components/Logo";

export const metadata: Metadata = {
  title: "Soporte | Moniveo",
  description:
    "Centro de soporte de Moniveo. Contacto, ayuda con aplicaciones móviles, paneles web y solicitudes de cuenta."
};

const faqItems = [
  {
    question: "¿Cómo accedo a mi cuenta?",
    answer:
      "Si su organización (residencial o clínica) utiliza Moniveo, recibirá credenciales de su administrador. Si tiene problemas para iniciar sesión, contacte al administrador de su organización o escríbanos a soporte@moniveo.com."
  },
  {
    question: "¿Cómo reporto un error o problema técnico?",
    answer:
      "Envíe un correo a soporte@moniveo.com describiendo el problema, la aplicación que utiliza (residente, paciente o panel web), su dispositivo y, si es posible, capturas de pantalla."
  },
  {
    question: "¿Cómo solicito la eliminación de mi cuenta?",
    answer:
      "Puede solicitarla desde la aplicación cuando la opción esté disponible, a través del administrador de su organización o escribiendo a privacidad@moniveo.com. Consulte nuestra Política de Privacidad para más detalle."
  },
  {
    question: "¿Dónde encuentro la política de privacidad y los términos de uso?",
    answer:
      "Disponibles en moniveo.com/privacy y moniveo.com/terms. Aplican a todos nuestros productos digitales."
  }
];

export default function SupportPage() {
  return (
    <>
      <header className="border-b border-zinc-200/70 bg-white">
        <Container className="flex h-16 items-center lg:h-20">
          <Link href="/" aria-label="Volver al inicio">
            <Logo className="h-5 w-auto lg:h-6" />
          </Link>
        </Container>
      </header>

      <main className="border-b border-zinc-200/70 bg-white">
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.04em] text-zinc-500">
              Soporte
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Centro de ayuda
            </h1>
            <p className="mt-6 text-base leading-relaxed text-zinc-700">
              Estamos aquí para ayudarle con Moniveo Residente, Moniveo Salud,
              nuestras aplicaciones móviles y cualquier consulta relacionada con
              su cuenta.
            </p>
          </div>

          <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold tracking-tight text-zinc-950">
                Soporte general
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Dudas técnicas, acceso, errores y asistencia con el producto.
              </p>
              <a
                href="mailto:soporte@moniveo.com"
                className="mt-4 inline-block text-sm font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-950"
              >
                soporte@moniveo.com
              </a>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold tracking-tight text-zinc-950">
                Privacidad y datos
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Solicitudes de acceso, corrección o eliminación de datos
                personales.
              </p>
              <a
                href="mailto:privacidad@moniveo.com"
                className="mt-4 inline-block text-sm font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-950"
              >
                privacidad@moniveo.com
              </a>
            </div>
          </div>

          <div className="mt-12 max-w-3xl">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-950">
              Preguntas frecuentes
            </h2>
            <dl className="mt-6 space-y-6">
              {faqItems.map((item) => (
                <div key={item.question}>
                  <dt className="text-sm font-semibold text-zinc-950">
                    {item.question}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-zinc-700">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-12 max-w-3xl rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-950">
              Documentos legales
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">
              Consulte nuestras políticas aplicables a todos los productos
              Moniveo:
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-zinc-950 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-950"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-zinc-950 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-950"
                >
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          <p className="mt-8 max-w-3xl text-sm text-zinc-500">
            Tiempo de respuesta habitual: 1–2 días hábiles. Para incidentes
            críticos de seguridad, indíquelo en el asunto del correo.
          </p>
        </Container>
      </main>

      <Footer />
    </>
  );
}
