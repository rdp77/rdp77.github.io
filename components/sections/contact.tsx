"use client";

import { useState } from "react";
import Script from "next/script";
import { Section, btnPrimary } from "@/components/ui/primitives";
import { ContactAside } from "@/components/contact-aside";

type State = "idle" | "loading" | "success" | "error";
const field = "w-full rounded-sm border border-line bg-bg px-3 py-2.5 text-sm placeholder:text-faint focus:border-fg focus:outline-none";

export function Contact() {
  const [state, setState] = useState<State>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [failMsg, setFailMsg] = useState("");
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  const siteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    const next: Record<string, string> = {};
    if (v("name").length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) next.email = "Enter a valid email.";
    if (v("subject").length < 3) next.subject = "Please add a subject.";
    if (v("message").length < 10) next.message = "Message must be at least 10 characters.";
    if (siteKey && !v("h-captcha-response")) next.captcha = "Please complete the verification.";
    setErrors(next);
    if (Object.keys(next).length) return;
    if (!accessKey) { setState("error"); return; }

    setState("loading");
    try {
      fd.append("access_key", accessKey);
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const json = (await res.json()) as { success: boolean; message?: string };
      if (!json.success) throw new Error(json.message);
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
        {(["name", "email", "subject"] as const).map((k) => (
          <div key={k}>
            <label htmlFor={k} className="mb-1.5 block text-sm font-medium capitalize">{k}</label>
            <input id={k} name={k} type={k === "email" ? "email" : "text"} className={field} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} autoComplete={k === "name" ? "name" : k === "email" ? "email" : "off"} />
            {errors[k] && <p id={`${k}-err`} className="mt-1 text-xs text-bad-fg">{errors[k]}</p>}
          </div>
        ))}
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
          <textarea id="message" name="message" rows={5} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
          {errors.message && <p id="message-err" className="mt-1 text-xs text-bad-fg">{errors.message}</p>}
        </div>
        {siteKey && (
          <div>
            <div className="h-captcha" data-sitekey={siteKey} data-theme="dark" data-recaptchacompat="off" />
            {errors.captcha && <p className="mt-1 text-xs text-bad-fg">{errors.captcha}</p>}
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
