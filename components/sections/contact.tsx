"use client";

import { useState } from "react";
import Script from "next/script";
import { Section, btnPrimary } from "@/components/ui/primitives";
import { ContactAside } from "@/components/contact-aside";
import { validateContact, submitContact, type ContactErrors } from "@/lib/contact";

type State = "idle" | "loading" | "success" | "error";
const field = "w-full rounded-sm border border-line bg-bg px-3 py-2.5 text-sm placeholder:text-faint focus:border-fg focus:outline-none";

function FieldError({ id, message }: { id?: string; message?: string }) {
  return message ? <p id={id} className="mt-1 text-xs text-bad-fg">{message}</p> : null;
}

const AUTOCOMPLETE = { name: "name", email: "email", subject: "off" } as const;

function TextField({ name, error }: { name: keyof typeof AUTOCOMPLETE; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium capitalize">{name}</label>
      <input id={name} name={name} type={name === "email" ? "email" : "text"} className={field} aria-invalid={!!error} aria-describedby={error ? `${name}-err` : undefined} autoComplete={AUTOCOMPLETE[name]} />
      <FieldError id={`${name}-err`} message={error} />
    </div>
  );
}

export function Contact() {
  const [state, setState] = useState<State>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [failMsg, setFailMsg] = useState("");
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  const siteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const next = validateContact((k) => String(fd.get(k) ?? "").trim(), !!siteKey);
    setErrors(next);
    if (Object.keys(next).length) return;
    if (!accessKey) { setState("error"); return; }

    setState("loading");
    try {
      await submitContact(fd, accessKey);
      form.reset();
      setState("success");
    } catch (err) {
      setFailMsg(err instanceof Error ? err.message : "");
      setState("error");
    }
  }

  return (
    <Section h1 id="contact" eyebrow="Contact" title="Let's talk">
      {siteKey && <Script src="https://js.hcaptcha.com/1/api.js?recaptchacompat=off" strategy="lazyOnload" />}
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px]">
      <form onSubmit={onSubmit} noValidate className="grid max-w-2xl min-w-0 content-start gap-5" aria-busy={state === "loading"}>
        {(["name", "email", "subject"] as const).map((k) => <TextField key={k} name={k} error={errors[k]} />)}
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
          <textarea id="message" name="message" rows={5} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
          <FieldError id="message-err" message={errors.message} />
        </div>
        {siteKey && (
          <div>
            <div className="h-captcha" data-sitekey={siteKey} data-theme="dark" data-recaptchacompat="off" />
            {errors.captcha && <FieldError message={errors.captcha} />}
          </div>
        )}
        <div className="flex items-center gap-4">
          <button type="submit" disabled={state === "loading"} className={`${btnPrimary} disabled:opacity-60`}>{state === "loading" ? "Sending…" : "Send message"}</button>
          <p role="status" aria-live="polite" className="text-sm">
            {state === "success" && <span className="text-ok-fg">Thanks — your message was sent.</span>}
            {state === "error" && <span className="text-bad-fg">{accessKey ? failMsg || "Something went wrong. Please try again." : "Form not configured (missing NEXT_PUBLIC_WEB3FORMS_KEY)."}</span>}
          </p>
        </div>
      </form>
      <ContactAside />
      </div>
    </Section>
  );
}
