#!/usr/bin/env node

/**
 * Creates and publishes the Moniveo "thank you" Resend template.
 *
 * Usage:
 *   RESEND_API_KEY=re_xxx node scripts/create-resend-template.mjs
 *
 * Copy the printed RESEND_THANK_YOU_TEMPLATE_ID into your .env.local file.
 */

import { Resend } from "resend";

const API_KEY = process.env.RESEND_API_KEY;

if (!API_KEY) {
  console.error("Error: RESEND_API_KEY environment variable is required.");
  process.exit(1);
}

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Moniveo <info@moniveo.sv>";

const HTML = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Gracias por contactar a Moniveo</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f4f5;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e4e4e7;">
          <tr>
            <td style="background-color:#18181b;padding:28px 32px;">
              <p style="margin:0;font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#a1a1aa;">Moniveo</p>
              <h1 style="margin:10px 0 0;font-size:24px;line-height:1.3;font-weight:700;color:#ffffff;">
                {{{GREETING}}}
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#3f3f46;">
                Gracias por contactarnos. Recibimos tu solicitud y nuestro equipo la revisará pronto.
              </p>
              <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#3f3f46;">
                Te responderemos en menos de <strong>24 horas</strong> para coordinar una demo personalizada y entender cómo podemos ayudarte.
              </p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#fafafa;border:1px solid #e4e4e7;border-radius:12px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0 0 6px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;color:#71717a;">Tu correo</p>
                    <p style="margin:0;font-size:15px;color:#18181b;">{{{CONTACT_EMAIL}}}</p>
                  </td>
                </tr>
              </table>
              <p style="margin:24px 0 0;font-size:14px;line-height:1.6;color:#71717a;">
                Si no solicitaste este mensaje, puedes ignorarlo con tranquilidad.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 28px;border-top:1px solid #e4e4e7;">
              <p style="margin:0;font-size:12px;line-height:1.5;color:#a1a1aa;text-align:center;">
                © Moniveo · Software diseñado para simplificar operaciones
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

async function main() {
  const resend = new Resend(API_KEY);

  console.log("Creating Resend template...");
  const { data: template, error: createError } = await resend.templates.create({
    name: "moniveo-thank-you",
    alias: "moniveo-thank-you",
    from: FROM_EMAIL,
    subject: "Gracias por contactar a Moniveo",
    html: HTML,
    variables: [
      {
        key: "GREETING",
        type: "string",
        fallbackValue: "Hola."
      },
      {
        key: "CONTACT_EMAIL",
        type: "string",
        fallbackValue: "correo@ejemplo.com"
      }
    ]
  });

  if (createError) {
    console.error("Failed to create template:", createError);
    process.exit(1);
  }

  console.log("Publishing template...");
  const { error: publishError } = await resend.templates.publish(template.id);

  if (publishError) {
    console.error("Failed to publish template:", publishError);
    console.log(`\nTemplate was created but not published. ID: ${template.id}`);
    console.log("Publish it from the Resend dashboard, then add the ID to .env.local.");
    process.exit(1);
  }

  console.log("\n✓ Template created and published!\n");
  console.log(`RESEND_THANK_YOU_TEMPLATE_ID=${template.id}`);
  console.log("\nAdd the above to your .env.local file.");
}

main().catch((error) => {
  console.error(error.message ?? error);
  process.exit(1);
});
