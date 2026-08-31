import { NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/contact";
import { sendInternalNotification, sendThankYouEmail } from "@/lib/resend";
import { verifyTurnstileToken } from "@/lib/turnstile";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Solicitud inválida." },
      { status: 400 }
    );
  }

  const validation = validateContactPayload(body);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const { data } = validation;
  const remoteIp =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

  const isHuman = await verifyTurnstileToken(data.turnstileToken, remoteIp);
  if (!isHuman) {
    return NextResponse.json(
      { error: "No pudimos verificar tu solicitud. Intenta de nuevo." },
      { status: 403 }
    );
  }

  try {
    await Promise.all([
      sendInternalNotification(data),
      sendThankYouEmail(data)
    ]);
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      {
        error:
          "No pudimos enviar tu solicitud en este momento. Intenta de nuevo más tarde."
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
