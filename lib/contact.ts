export type ContactFormType = "hero" | "demo";

export type ContactPayload = {
  type: ContactFormType;
  email: string;
  nombre?: string;
  sector?: string;
  turnstileToken: string;
};

export const SECTOR_LABELS: Record<string, string> = {
  residencial: "Residenciales / Edificios",
  salud: "Salud",
  medioambiente: "Medio ambiente",
  comercio: "Comercio",
  logistica: "Logística",
  otro: "Otro"
};

export function getSectorLabel(sector?: string): string | undefined {
  if (!sector) return undefined;
  return SECTOR_LABELS[sector] ?? sector;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim());
}

export function validateContactPayload(
  body: unknown
): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Solicitud inválida." };
  }

  const raw = body as Record<string, unknown>;
  const type = raw.type;
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const turnstileToken =
    typeof raw.turnstileToken === "string" ? raw.turnstileToken.trim() : "";
  const nombre =
    typeof raw.nombre === "string" ? raw.nombre.trim() : undefined;
  const sector =
    typeof raw.sector === "string" ? raw.sector.trim() : undefined;

  if (type !== "hero" && type !== "demo") {
    return { ok: false, error: "Tipo de formulario inválido." };
  }

  if (!email || !isValidEmail(email)) {
    return { ok: false, error: "Ingresa un correo electrónico válido." };
  }

  if (!turnstileToken) {
    return { ok: false, error: "Verificación de seguridad requerida." };
  }

  if (type === "demo") {
    if (!nombre) {
      return { ok: false, error: "El nombre es obligatorio." };
    }
    if (!sector) {
      return { ok: false, error: "Selecciona un sector." };
    }
  }

  return {
    ok: true,
    data: { type, email, nombre, sector, turnstileToken }
  };
}
