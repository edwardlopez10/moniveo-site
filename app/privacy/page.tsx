import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/app/components/Container";
import Footer from "@/app/components/Footer";
import Logo from "@/app/components/Logo";

export const metadata: Metadata = {
  title: "Política de Privacidad | Moniveo",
  description:
    "Política de privacidad de Moniveo. Aplica a nuestros paneles web, aplicaciones móviles y servicios relacionados."
};

const lastUpdated = "5 de noviembre de 2026";

const sections = [
  {
    title: "1. Alcance",
    content: (
      <>
        <p>
          Esta Política de Privacidad describe cómo Moniveo (&quot;Moniveo&quot;,
          &quot;nosotros&quot;) recopila, utiliza, almacena y protege la
          información personal cuando usted utiliza nuestros productos y
          servicios digitales, incluyendo:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            <strong>Paneles web de administración:</strong> plataforma para
            administración de residenciales y edificios, y plataforma para
            clínicas y centros de salud (Moniveo Salud).
          </li>
          <li>
            <strong>Moniveo Residente:</strong> aplicación Android para
            residentes, identificador{" "}
            <span className="font-medium text-zinc-950">com.moni.resident</span>
            , disponible en Google Play. Lo que esta aplicación recopila, usa,
            comparte y elimina está en la sección 2. Esa sección prevalece sobre
            el resto de esta política para esa aplicación.
          </li>
          <li>
            <strong>Otras aplicaciones móviles:</strong> aplicación para
            pacientes, disponible en App Store y Google Play, y la aplicación de
            kiosco.
          </li>
          <li>
            <strong>Sitio web:</strong> moniveo.com y subdominios asociados.
          </li>
        </ul>
        <p className="mt-4">
          Al utilizar cualquiera de estos servicios, usted acepta las prácticas
          descritas en esta política. Si no está de acuerdo, le pedimos que no
          utilice nuestros servicios.
        </p>
      </>
    )
  },
  {
    title: "2. Moniveo Residente (aplicación Android)",
    content: (
      <>
        <p>
          Esta sección aplica únicamente a la aplicación Android Moniveo
          Residente (
          <span className="font-medium text-zinc-950">com.moni.resident</span>
          ). El panel web de administración de residenciales es un producto
          distinto. Si esta sección difiere del resto de la política, para
          Moniveo Residente prevalece esta sección.
        </p>
        <p>
          <strong>Datos que recopila:</strong> nombre, correo electrónico,
          teléfono, credenciales de la cuenta, tokens de sesión, datos de la
          residencia y de las visitas, fotos y PDF de comprobantes de pago, y
          el token de notificaciones push.
        </p>
        <p>
          <strong>Datos que no recopila:</strong> ubicación, datos de salud,
          contactos, identificador de publicidad, ni datos de analítica o de
          fallos.
        </p>
        <p>
          <strong>Para qué se usan:</strong> iniciar sesión, gestionar visitas
          y el acceso por código QR, subir comprobantes de pago, y enviar
          notificaciones de visitas. La cámara y las fotos se usan solo para
          subir un comprobante de pago a nuestro backend.
        </p>
        <p>
          <strong>Con quién se comparten:</strong> con el backend de Moniveo y
          con los proveedores que lo operan (hosting, base de datos,
          almacenamiento de archivos y correo), y con los administradores de la
          residencia del propio residente. Estos datos no se venden y no se
          usan para publicidad.
        </p>
        <p>
          <strong>Eliminación:</strong> puede eliminar su cuenta en la
          aplicación, en Perfil → Privacidad y seguridad → Eliminar cuenta, o
          escribiendo a{" "}
          <a
            href="mailto:privacidad@moniveo.com"
            className="text-zinc-950 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-950"
          >
            privacidad@moniveo.com
          </a>
          . Al eliminar la cuenta se eliminan las visitas y los datos del
          perfil, y el registro de la cuenta se anonimiza. Los registros de pago
          se conservan para contabilidad. El resto de los datos vinculados a la
          cuenta del residente se elimina o se anonimiza.
        </p>
      </>
    )
  },
  {
    title: "3. Responsable del tratamiento",
    content: (
      <>
        <p>
          El responsable del tratamiento de sus datos personales es Moniveo. Para
          consultas relacionadas con privacidad puede contactarnos en:
        </p>
        <ul className="mt-4 list-none space-y-1">
          <li>
            <strong>Correo:</strong>{" "}
            <a
              href="mailto:privacidad@moniveo.com"
              className="text-zinc-950 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-950"
            >
              privacidad@moniveo.com
            </a>
          </li>
        </ul>
      </>
    )
  },
  {
    title: "4. Datos que recopilamos",
    content: (
      <>
        <p>
          Los datos de Moniveo Residente son los de la sección 2. Esa
          aplicación no recopila ubicación, datos de salud, contactos,
          identificador de publicidad, ni datos de analítica o de fallos. El
          único identificador de dispositivo que envía es el token de
          notificaciones push. En los demás productos, y según su rol
          (administrador, paciente, personal de clínica u otro), podemos
          recopilar:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            <strong>Datos de identificación y contacto:</strong> nombre,
            correo electrónico, teléfono, identificadores de cuenta.
          </li>
          <li>
            <strong>Datos de cuenta y autenticación:</strong> credenciales,
            tokens de sesión, registros de acceso.
          </li>
          <li>
            <strong>Datos operativos:</strong> información relacionada con
            residenciales, visitas, accesos, solicitudes, citas, historial de
            actividad dentro de la plataforma y registros operativos.
          </li>
          <li>
            <strong>Datos de salud (solo Moniveo Salud y la aplicación para pacientes):</strong>{" "}
            únicamente cuando sea necesario para la prestación del servicio y
            conforme a la legislación aplicable. Estos datos reciben protección
            reforzada. Moniveo Residente no recopila datos de salud.
          </li>
          <li>
            <strong>Datos del dispositivo y técnicos (productos distintos de Moniveo Residente):</strong>{" "}
            tipo de dispositivo, sistema operativo, versión de la app, dirección
            IP, identificadores del dispositivo, registros de errores y métricas
            de rendimiento.
          </li>
          <li>
            <strong>Datos de ubicación (productos distintos de Moniveo Residente):</strong>{" "}
            solo si usted otorga permiso explícito y cuando sea necesario para
            una función concreta. Moniveo Residente no recopila ubicación ni
            solicita ese permiso.
          </li>
          <li>
            <strong>Comunicaciones:</strong> mensajes enviados a soporte,
            notificaciones push (si las activa) y preferencias de comunicación.
          </li>
        </ul>
        <p className="mt-4">
          No recopilamos intencionalmente datos de menores de 13 años. Si
          detectamos que hemos recibido datos de un menor sin consentimiento
          parental verificable, los eliminaremos.
        </p>
      </>
    )
  },
  {
    title: "5. Cómo utilizamos sus datos",
    content: (
      <>
        <p>Utilizamos la información personal para:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Proveer, operar y mantener nuestros servicios.</li>
          <li>Autenticar usuarios y gestionar cuentas y permisos.</li>
          <li>
            Procesar operaciones, solicitudes, accesos, citas y flujos de
            trabajo dentro de las plataformas.
          </li>
          <li>
            Enviar notificaciones transaccionales, alertas operativas y, con su
            consentimiento, comunicaciones informativas.
          </li>
          <li>Mejorar la seguridad, detectar fraudes y prevenir abusos.</li>
          <li>
            En productos distintos de Moniveo Residente, analizar el uso
            agregado para mejorar el producto y el rendimiento.
          </li>
          <li>Cumplir obligaciones legales y responder a requerimientos válidos.</li>
        </ul>
        <p className="mt-4">
          No vendemos su información personal. No utilizamos datos de salud con
          fines publicitarios.
        </p>
      </>
    )
  },
  {
    title: "6. Base legal y consentimiento",
    content: (
      <p>
        Tratamos datos personales cuando es necesario para ejecutar un contrato
        con usted o con la organización que le proporciona acceso, cuando existe
        un interés legítimo compatible con sus derechos (por ejemplo, seguridad
        y mejora del servicio), cuando usted otorga consentimiento (por ejemplo,
        notificaciones push o permisos del dispositivo) o cuando debemos cumplir
        una obligación legal. Puede retirar su consentimiento en cualquier
        momento cuando el tratamiento se base en él, sin afectar la licitud del
        tratamiento previo.
      </p>
    )
  },
  {
    title: "7. Compartición con terceros",
    content: (
      <>
        <p>Podemos compartir información con:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            <strong>Proveedores de infraestructura:</strong> hosting, bases de
            datos, almacenamiento de archivos y servicios de correo, bajo
            acuerdos de confidencialidad y procesamiento de datos. La analítica
            técnica corresponde a productos distintos de Moniveo Residente. Esa
            aplicación no comparte datos con proveedores de analítica ni de
            registro de fallos.
          </li>
          <li>
            <strong>Organizaciones cliente:</strong> cuando accede a Moniveo a
            través de su residencial, clínica u otra entidad que contrata el
            servicio, ciertos datos pueden ser visibles para administradores
            autorizados de dicha organización conforme a su rol.
          </li>
          <li>
            <strong>Autoridades:</strong> cuando la ley lo exija o para proteger
            derechos, seguridad e integridad de usuarios y del servicio.
          </li>
        </ul>
        <p className="mt-4">
          Exigimos a nuestros proveedores que traten los datos únicamente según
          nuestras instrucciones y con medidas de seguridad adecuadas.
        </p>
      </>
    )
  },
  {
    title: "8. Transferencias internacionales",
    content: (
      <p>
        Sus datos pueden procesarse en servidores ubicados fuera de su país de
        residencia. Cuando transferimos datos internacionalmente, implementamos
        salvaguardas contractuales y técnicas razonables para proteger su
        información conforme a la legislación aplicable.
      </p>
    )
  },
  {
    title: "9. Retención de datos",
    content: (
      <p>
        Conservamos los datos personales mientras su cuenta esté activa, mientras
        sea necesario para prestar el servicio, mientras la organización
        contratante mantenga la relación con Moniveo, o durante el plazo exigido
        por ley. Posteriormente, eliminamos o anonimizamos la información de
        forma segura, salvo que debamos conservarla por obligaciones legales o
        resolución de disputas. En Moniveo Residente, la eliminación de la cuenta
        se rige por la sección 2: se eliminan las visitas y los datos del perfil,
        el registro de la cuenta se anonimiza, y los registros de pago se
        conservan para contabilidad.
      </p>
    )
  },
  {
    title: "10. Seguridad",
    content: (
      <p>
        Aplicamos medidas técnicas y organizativas diseñadas para proteger sus
        datos, incluyendo cifrado en tránsito (HTTPS/TLS), controles de acceso
        basados en roles, registros de auditoría y prácticas de desarrollo
        seguro. Ningún sistema es completamente infalible; si detectamos un
        incidente de seguridad que afecte sus datos, le notificaremos conforme
        a la ley aplicable.
      </p>
    )
  },
  {
    title: "11. Sus derechos",
    content: (
      <>
        <p>
          Según su jurisdicción, puede tener derecho a acceder, rectificar,
          eliminar, oponerse, limitar el tratamiento, solicitar portabilidad y
          retirar el consentimiento. Para ejercer estos derechos, escriba a{" "}
          <a
            href="mailto:privacidad@moniveo.com"
            className="text-zinc-950 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-950"
          >
            privacidad@moniveo.com
          </a>
          . Responderemos dentro de los plazos establecidos por la ley aplicable.
        </p>
      </>
    )
  },
  {
    title: "12. Eliminación de cuenta",
    content: (
      <>
        <p>
          En Moniveo Residente puede eliminar su cuenta en la aplicación, en
          Perfil → Privacidad y seguridad → Eliminar cuenta, o escribiendo a{" "}
          <a
            href="mailto:privacidad@moniveo.com"
            className="text-zinc-950 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-950"
          >
            privacidad@moniveo.com
          </a>
          . Al eliminar la cuenta se eliminan las visitas y los datos del
          perfil, y el registro de la cuenta se anonimiza. Los registros de pago
          se conservan para contabilidad. El resto de los datos vinculados a esa
          cuenta se elimina o se anonimiza.
        </p>
        <p>
          En las demás aplicaciones y paneles, puede solicitar la eliminación
          escribiendo a{" "}
          <a
            href="mailto:privacidad@moniveo.com"
            className="text-zinc-950 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-950"
          >
            privacidad@moniveo.com
          </a>{" "}
          o a través del administrador de su organización (residencial o
          clínica), cuando corresponda. Procesaremos esas solicitudes en un
          plazo razonable. Algunos datos pueden conservarse cuando la ley lo
          requiera o cuando sea necesario para fines legítimos como prevención
          de fraude o cumplimiento normativo.
        </p>
      </>
    )
  },
  {
    title: "13. Permisos en aplicaciones móviles",
    content: (
      <>
        <p>
          Nuestras apps móviles pueden solicitar permisos del dispositivo. Solo
          accedemos a ellos cuando son necesarios para la función correspondiente
          y, cuando la plataforma lo requiera, con su consentimiento:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            <strong>Notificaciones:</strong> para alertas operativas y avisos
            importantes.
          </li>
          <li>
            <strong>Cámara (aplicación de kiosco):</strong> para leer códigos QR
            de acceso.
          </li>
          <li>
            <strong>Cámara y fotos en Moniveo Residente:</strong> solo para
            subir un comprobante de pago, en imagen o PDF, a nuestro backend.
          </li>
          <li>
            <strong>Cámara o galería en otras aplicaciones:</strong> para
            adjuntar documentos o evidencia cuando la función lo requiera.
          </li>
          <li>
            <strong>Ubicación:</strong> Moniveo Residente no solicita este
            permiso. Otras aplicaciones pueden solicitarlo solo si una función
            específica lo necesita y usted lo autoriza.
          </li>
        </ul>
        <p className="mt-4">
          Puede revocar permisos desde la configuración de su dispositivo en
          cualquier momento. Algunas funciones pueden dejar de estar disponibles
          si revoca ciertos permisos.
        </p>
      </>
    )
  },
  {
    title: "14. Cookies y tecnologías similares",
    content: (
      <p>
        Nuestros sitios web y paneles pueden utilizar cookies y tecnologías
        similares para mantener sesiones, recordar preferencias y analizar el
        uso de forma agregada. Puede configurar su navegador para rechazar
        cookies; tenga en cuenta que algunas funciones pueden no operar
        correctamente sin ellas.
      </p>
    )
  },
  {
    title: "15. Cambios a esta política",
    content: (
      <p>
        Podemos actualizar esta Política de Privacidad ocasionalmente.
        Publicaremos la versión revisada en esta página e indicaremos la fecha de
        última actualización. Si los cambios son significativos, le
        notificaremos por medios razonables (por ejemplo, correo electrónico o
        aviso dentro de la aplicación). Le recomendamos revisar esta página
        periódicamente.
      </p>
    )
  }
];

export default function PrivacyPage() {
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
              Política de Privacidad
            </h1>
            <p className="mt-3 text-sm text-zinc-500">
              Última actualización: {lastUpdated}
            </p>
            <p className="mt-6 text-base leading-relaxed text-zinc-700">
              Esta política cubre los productos digitales de Moniveo. La sección
              2 describe solo la aplicación Android Moniveo Residente
              (com.moni.resident) y prevalece sobre el resto de la política para
              esa aplicación. El panel web de administración de residenciales es
              un producto distinto. La política también cubre Moniveo Salud, la
              aplicación para pacientes, la aplicación de kiosco y el sitio web,
              y está redactada para cumplir los requisitos de Apple App Store,
              Google Play y la
              normativa de protección de datos aplicable.
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
                16. Contacto
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Para preguntas sobre esta política o sobre el tratamiento de sus
                datos personales, contáctenos en{" "}
                <a
                  href="mailto:privacidad@moniveo.com"
                  className="text-zinc-950 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-950"
                >
                  privacidad@moniveo.com
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
