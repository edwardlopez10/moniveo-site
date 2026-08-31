"use client";

import { type TurnstileInstance } from "@marsidev/react-turnstile";
import { useCallback, useRef, useState } from "react";
import type { ContactFormType, ContactPayload } from "@/lib/contact";

type FormStatus = "idle" | "submitting" | "success" | "error";

type UseContactFormOptions = {
  type: ContactFormType;
  getPayload: () => Omit<ContactPayload, "type" | "turnstileToken">;
  onSuccess?: () => void;
};

type UseContactFormReturn = {
  status: FormStatus;
  errorMessage: string | null;
  turnstileRef: React.RefObject<TurnstileInstance | undefined>;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleTurnstileVerify: (token: string) => void;
  handleTurnstileError: () => void;
  reset: () => void;
};

export function useContactForm({
  type,
  getPayload,
  onSuccess
}: UseContactFormOptions): UseContactFormReturn {
  const turnstileRef = useRef<TurnstileInstance | undefined>(undefined);
  const pendingSubmitRef = useRef(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (status === "submitting" || pendingSubmitRef.current) return;

      setErrorMessage(null);
      setStatus("submitting");
      turnstileRef.current?.reset();
      pendingSubmitRef.current = true;
      turnstileRef.current?.execute();
    },
    [status]
  );

  const handleTurnstileVerify = useCallback(
    (token: string) => {
      if (!pendingSubmitRef.current) return;
      pendingSubmitRef.current = false;

      void (async () => {
        try {
          const payload = getPayload();
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ type, ...payload, turnstileToken: token })
          });

          const data = (await response.json()) as { error?: string };

          if (!response.ok) {
            throw new Error(data.error ?? "No pudimos enviar tu solicitud.");
          }

          setStatus("success");
          onSuccess?.();
        } catch (error) {
          setStatus("error");
          setErrorMessage(
            error instanceof Error
              ? error.message
              : "No pudimos enviar tu solicitud."
          );
        }
      })();
    },
    [getPayload, onSuccess, type]
  );

  const handleTurnstileError = useCallback(() => {
    if (!pendingSubmitRef.current) return;
    pendingSubmitRef.current = false;
    setStatus("error");
    setErrorMessage(
      "No pudimos verificar tu solicitud. Recarga la página e intenta de nuevo."
    );
  }, []);

  const reset = useCallback(() => {
    pendingSubmitRef.current = false;
    setStatus("idle");
    setErrorMessage(null);
  }, []);

  return {
    status,
    errorMessage,
    turnstileRef,
    handleSubmit,
    handleTurnstileVerify,
    handleTurnstileError,
    reset
  };
}
