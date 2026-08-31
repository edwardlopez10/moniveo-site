import { Resend } from "resend";
import type { ContactPayload } from "./contact";
import { getSectorLabel } from "./contact";

let client: Resend | null = null;

function getResend(): Resend {
  if (!client) {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }
    client = new Resend(apiKey);
  }
  return client;
}

function getFromEmail(): string {
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  if (!from) {
    throw new Error("RESEND_FROM_EMAIL is not configured");
  }
  return from;
}

function throwOnError(
  result: { data: unknown; error: unknown },
  context: string
): void {
  if (result.error) {
    console.error(`Resend ${context} error:`, result.error);
    throw new Error(`Resend ${context} failed`);
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildInternalEmailHtml(payload: ContactPayload): string {
  const source =
    payload.type === "hero" ? "Hero (correo rápido)" : "Formulario de demo";
  const sectorLabel = getSectorLabel(payload.sector);

  const rows = [
    ["Origen", source],
    ["Email", payload.email],
    ...(payload.nombre ? [["Nombre", payload.nombre] as const] : []),
    ...(sectorLabel ? [["Sector", sectorLabel] as const] : [])
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#52525b;border-bottom:1px solid #e4e4e7;">${label}</td><td style="padding:8px 12px;color:#18181b;border-bottom:1px solid #e4e4e7;">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#18181b;margin:0 0 16px;">Nuevo contacto desde moniveo.sv</h2>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e4e4e7;border-radius:8px;overflow:hidden;">
        ${tableRows}
      </table>
    </div>
  `;
}

function buildGreeting(payload: ContactPayload): string {
  const firstName = payload.nombre?.split(" ")[0]?.trim();
  return firstName ? `Hola, ${firstName}.` : "Hola.";
}

export async function sendInternalNotification(
  payload: ContactPayload
): Promise<void> {
  const subject =
    payload.type === "hero"
      ? `[Moniveo] Nueva solicitud de demo — ${payload.email}`
      : `[Moniveo] Nueva solicitud de demo — ${payload.nombre}`;

  const result = await getResend().emails.send({
    from: getFromEmail(),
    to: process.env.CONTACT_NOTIFICATION_EMAIL ?? "info@moniveo.sv",
    subject,
    html: buildInternalEmailHtml(payload)
  });

  throwOnError(result, "internal notification");
}

export async function sendThankYouEmail(
  payload: ContactPayload
): Promise<void> {
  const templateId = process.env.RESEND_THANK_YOU_TEMPLATE_ID?.trim();
  if (!templateId) {
    throw new Error("RESEND_THANK_YOU_TEMPLATE_ID is not configured");
  }

  const result = await getResend().emails.send({
    from: getFromEmail(),
    to: payload.email,
    template: {
      id: templateId,
      variables: {
        GREETING: buildGreeting(payload),
        CONTACT_EMAIL: payload.email
      }
    }
  });

  throwOnError(result, "thank-you email");
}
