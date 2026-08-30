import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/app/components/Container";
import Footer from "@/app/components/Footer";
import Logo from "@/app/components/Logo";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Moniveo",
  description:
    "Términos y condiciones de uso (EULA) de Moniveo. Aplica a paneles web, aplicaciones móviles y servicios relacionados."
};

const lastUpdated = "30 de agosto de 2026";

const sections = [
  {
    title: "1. Alcance y aceptación",
    content: (
      <>
        <p>
          Estos Términos y Condiciones (&quot;Términos&quot;) constituyen un
          acuerdo legal entre usted y Moniveo (&quot;Moniveo&quot;,
          &quot;nosotros&quot;) que rige el acceso y uso de nuestros productos y
          servicios digitales. Al registrarse, descargar, instalar o utilizar
          cualquiera de nuestros servicios, usted confirma que ha leído,
          comprendido y aceptado estos Términos.
        </p>
        <p className="mt-4">
          Si utiliza los servicios en nombre de una organización (residencial,
          clínica, empresa u otra entidad), declara tener autoridad para obligar
          a dicha organización y &quot;usted&quot; incluirá a esa organización.
        </p>
        <p className="mt-4">
          Estos Términos aplican a:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            Paneles web de administración: Moniveo Residente (residenciales y
            edificios) y Moniveo Salud (clínicas y centros de salud).
          </li>
          <li>
            Aplicaciones móviles para residentes y pacientes, disponibles en App
            Store y Google Play.
          </li>
          <li>El sitio web moniveo.com y subdominios asociados.</li>
        </ul>
        <p className="mt-4">
          El uso de datos personales se rige además por nuestra{" "}
          <Link
            href="/privacy"
            className="text-zinc-950 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-950"
          >
            Política de Privacidad
          </Link>
          .
        </p>
      </>
    )
  },
  {
    title: "2. Licencia de uso",
    content: (
      <>
        <p>
          Sujeto a estos Términos y al pago de tarifas aplicables (cuando
          corresponda), Moniveo le otorga una licencia limitada, no exclusiva, no
          transferible y revocable para acceder y utilizar nuestros servicios
          únicamente para fines legítimos y conforme a la documentación
          aplicable.
        </p>
        <p className="mt-4">
          Las aplicaciones móviles se licencian, no se venden. Usted no adquiere
          ningún derecho de propiedad sobre el software, la marca, el diseño ni
          el contenido de Moniveo, salvo los derechos expresamente otorgados en
          estos Términos.
        </p>
      </>
    )
  },
  {
    title: "3. Cuentas y acceso",
    content: (
      <>
        <p>
          Para utilizar ciertos servicios debe crear una cuenta o recibir acceso
          a través de una organización contratante. Usted es responsable de:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Mantener la confidencialidad de sus credenciales.</li>
          <li>Toda actividad realizada bajo su cuenta.</li>
          <li>
            Proporcionar información veraz, completa y actualizada.
          </li>
          <li>
            Notificarnos de inmediato cualquier uso no autorizado de su cuenta.
          </li>
        </ul>
        <p className="mt-4">
          Podemos suspender o cancelar cuentas que violen estos Términos o que
          representen un riesgo para la seguridad del servicio.
        </p>
      </>
    )
  },
  {
    title: "4. Uso aceptable",
    content: (
      <>
        <p>Usted se compromete a no:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            Utilizar los servicios de forma ilegal, fraudulenta o que infrinja
            derechos de terceros.
          </li>
          <li>
            Intentar acceder sin autorización a sistemas, cuentas o datos de
            otros usuarios.
          </li>
          <li>
            Interferir con la operación, seguridad o integridad de los
            servicios.
          </li>
          <li>
            Realizar ingeniería inversa, descompilar o desensamblar el software,
            salvo cuando la ley lo permita expresamente.
          </li>
          <li>
            Copiar, modificar, distribuir o crear obras derivadas del software
            sin autorización escrita.
          </li>
          <li>
            Utilizar los servicios para transmitir malware, spam o contenido
            ofensivo, difamatorio o ilícito.
          </li>
        </ul>
      </>
    )
  },
  {
    title: "5. Contenido y datos del usuario",
    content: (
      <p>
        Usted conserva los derechos sobre el contenido que cargue o genere en
        los servicios. Nos otorga una licencia limitada para alojar, procesar y
        mostrar dicho contenido únicamente con el fin de prestar y mejorar los
        servicios. Usted garantiza que tiene los derechos necesarios sobre el
        contenido que proporciona y que su uso no viola la ley ni derechos de
        terceros. En servicios de salud, el tratamiento de datos sensibles
        deberá cumplir la normativa aplicable y las instrucciones de la
        organización responsable del tratamiento.
      </p>
    )
  },
  {
    title: "6. Propiedad intelectual",
    content: (
      <p>
        Moniveo y sus licenciantes conservan todos los derechos sobre el
        software, interfaces, marcas, logotipos, documentación y demás
        materiales relacionados con los servicios. Nada en estos Términos le
        transfiere derechos de propiedad intelectual salvo la licencia limitada
        descrita anteriormente.
      </p>
    )
  },
  {
    title: "7. Disponibilidad y cambios del servicio",
    content: (
      <p>
        Nos esforzamos por mantener los servicios disponibles y actualizados,
        pero no garantizamos operación ininterrumpida o libre de errores.
        Podemos modificar, suspender o discontinuar funciones o servicios, de
        forma temporal o permanente, con o sin previo aviso cuando sea
        razonablemente necesario por mantenimiento, seguridad, cumplimiento
        legal o evolución del producto.
      </p>
    )
  },
  {
    title: "8. Tarifas y facturación",
    content: (
      <p>
        Algunos servicios pueden requerir suscripción o pago. Cuando aplique, las
        tarifas, ciclos de facturación y condiciones comerciales serán
        acordadas con la organización contratante o informadas antes de la
        contratación. Las suscripciones gestionadas a través de App Store o
        Google Play están sujetas además a las políticas y procesos de
        facturación de dichas plataformas, incluyendo renovaciones automáticas y
        cancelaciones según las reglas de cada tienda.
      </p>
    )
  },
  {
    title: "9. Terminación",
    content: (
      <p>
        Usted puede dejar de utilizar los servicios en cualquier momento. Podemos
        suspender o terminar su acceso si incumple estos Términos, si la
        organización contratante cancela el servicio, o por razones legales o de
        seguridad. Tras la terminación, cesa su derecho de uso y podemos
        eliminar o retener datos conforme a nuestra Política de Privacidad y la
        ley aplicable.
      </p>
    )
  },
  {
    title: "10. Exención de garantías",
    content: (
      <p>
        En la máxima medida permitida por la ley, los servicios se proporcionan
        &quot;tal cual&quot; y &quot;según disponibilidad&quot;, sin garantías
        de ningún tipo, expresas o implícitas, incluyendo garantías de
        comerciabilidad, idoneidad para un propósito particular o no infracción.
        No garantizamos que los servicios satisfagan todas sus necesidades ni que
        sean completamente seguros o libres de interrupciones.
      </p>
    )
  },
  {
    title: "11. Limitación de responsabilidad",
    content: (
      <p>
        En la máxima medida permitida por la ley, Moniveo no será responsable por
        daños indirectos, incidentales, especiales, consecuentes o punitivos, ni
        por pérdida de beneficios, datos o goodwill. Nuestra responsabilidad
        total acumulada por cualquier reclamación relacionada con los servicios
        no excederá el monto pagado por usted o por su organización a Moniveo
        por los servicios en los doce (12) meses anteriores al evento que originó
        la reclamación, o cien dólares estadounidenses (USD $100) si no hubo
        pagos, lo que sea mayor según lo permita la ley aplicable.
      </p>
    )
  },
  {
    title: "12. Indemnización",
    content: (
      <p>
        Usted acepta indemnizar y mantener indemne a Moniveo frente a
        reclamaciones, pérdidas y gastos (incluyendo honorarios legales
        razonables) derivados de su uso indebido de los servicios, del contenido
        que proporcione o del incumplimiento de estos Términos, en la medida
        permitida por la ley.
      </p>
    )
  },
  {
    title: "13. Disposiciones para App Store (Apple)",
    content: (
      <>
        <p>
          Si descarga o utiliza una aplicación móvil de Moniveo desde Apple App
          Store, usted reconoce y acepta además lo siguiente:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            Estos Términos son entre usted y Moniveo, no con Apple Inc.
            (&quot;Apple&quot;). Moniveo es el único responsable de la
            aplicación y su contenido.
          </li>
          <li>
            La licencia otorgada es limitada a un derecho no transferible de uso
            de la aplicación en productos Apple que usted posea o controle, según
            las Reglas de Uso establecidas en los Términos de Servicios de App
            Store.
          </li>
          <li>
            Moniveo, y no Apple, es responsable del mantenimiento y soporte de
            la aplicación, conforme a lo exigido por la ley aplicable.
          </li>
          <li>
            Moniveo, y no Apple, es responsable de atender reclamaciones
            relacionadas con la aplicación, incluyendo reclamaciones de producto,
            responsabilidad legal, incumplimiento normativo o protección al
            consumidor.
          </li>
          <li>
            En caso de reclamaciones por infracción de propiedad intelectual de
            terceros, Moniveo, y no Apple, será responsable de la investigación,
            defensa, acuerdo y resolución de dicha reclamación.
          </li>
          <li>
            Usted declara no estar ubicado en un país sujeto a embargo del
            gobierno de EE.UU. ni figurar en listas restringidas del gobierno de
            EE.UU.
          </li>
          <li>
            Apple y sus subsidiarias son terceros beneficiarios de estos
            Términos en relación con su licencia de la aplicación obtenida a
            través de App Store, y tienen derecho a exigir el cumplimiento de
            estos Términos contra usted como tercero beneficiario.
          </li>
        </ul>
      </>
    )
  },
  {
    title: "14. Disposiciones para Google Play",
    content: (
      <p>
        Si descarga nuestras aplicaciones desde Google Play, también aplican las
        políticas de Google, incluyendo sus términos de servicio y políticas de
        contenido. Google no es responsable del mantenimiento, soporte ni
        contenido de las aplicaciones de Moniveo. Cualquier disputa relacionada
        con la aplicación debe dirigirse a Moniveo conforme a estos Términos.
      </p>
    )
  },
  {
    title: "15. Ley aplicable y jurisdicción",
    content: (
      <p>
        Estos Términos se regirán e interpretarán conforme a las leyes
        aplicables en la jurisdicción donde Moniveo tenga su domicilio principal,
        sin perjuicio de normas imperativas de protección al consumidor que
        pudieran aplicar en su país de residencia. Las controversias se
        someterán a los tribunales competentes de dicha jurisdicción, salvo
        disposición legal en contrario.
      </p>
    )
  },
  {
    title: "16. Cambios a estos Términos",
    content: (
      <p>
        Podemos actualizar estos Términos ocasionalmente. Publicaremos la versión
        revisada en esta página e indicaremos la fecha de última actualización.
        Si los cambios son materiales, le notificaremos por medios razonables.
        El uso continuado de los servicios después de la entrada en vigor de los
        cambios constituye su aceptación de los Términos actualizados.
      </p>
    )
  }
];

export default function TermsPage() {
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
              Legal
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Términos y Condiciones
            </h1>
            <p className="mt-3 text-sm text-zinc-500">
              Última actualización: {lastUpdated}
            </p>
            <p className="mt-6 text-base leading-relaxed text-zinc-700">
              Este documento constituye el acuerdo de licencia de usuario final
              (EULA) y los términos de uso de Moniveo. Aplica de forma unificada
              a paneles web, aplicaciones móviles y servicios relacionados, e
              incluye disposiciones requeridas para distribución en Apple App
              Store y Google Play.
            </p>
          </div>

          <div className="mt-12 max-w-3xl space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-semibold tracking-tight text-zinc-950">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-4 text-sm leading-relaxed text-zinc-700">
                  {section.content}
                </div>
              </section>
            ))}

            <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950">
                17. Contacto
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Para consultas sobre estos Términos, contáctenos en{" "}
                <a
                  href="mailto:legal@moniveo.com"
                  className="text-zinc-950 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-950"
                >
                  legal@moniveo.com
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
