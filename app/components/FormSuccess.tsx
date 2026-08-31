type FormSuccessProps = {
  title?: string;
  message?: string;
  variant?: "light" | "dark";
  className?: string;
};

export default function FormSuccess({
  title = "¡Solicitud enviada!",
  message = "Gracias por contactarnos. Te responderemos en menos de 24 horas.",
  variant = "light",
  className = ""
}: FormSuccessProps) {
  const isDark = variant === "dark";

  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex items-start gap-3 rounded-2xl border p-5 animate-fadeUp motion-reduce:animate-none ${
        isDark
          ? "border-emerald-400/30 bg-emerald-500/10 text-white"
          : "border-emerald-200 bg-emerald-50 text-emerald-950"
      } ${className}`}
    >
      <span
        aria-hidden
        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
          isDark ? "bg-emerald-400/20 text-emerald-300" : "bg-emerald-100 text-emerald-700"
        }`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <div>
        <p className="text-sm font-semibold sm:text-base">{title}</p>
        <p
          className={`mt-1 text-sm leading-relaxed ${
            isDark ? "text-white/80" : "text-emerald-800"
          }`}
        >
          {message}
        </p>
      </div>
    </div>
  );
}
