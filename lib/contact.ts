export type ContactErrors = Partial<
  Record<"name" | "email" | "subject" | "message" | "captcha", string>
>;

export function validateContact(get: (k: string) => string, needsCaptcha: boolean): ContactErrors {
  const next: ContactErrors = {};
  if (get("name").length < 2 || get("name").length > 100) next.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email"))) next.email = "Enter a valid email.";
  if (get("subject").length < 3) next.subject = "Please add a subject.";
  if (get("message").length < 10 || get("message").length > 5000)
    next.message = "Message must be 10 to 5000 characters.";
  if (needsCaptcha && !get("h-captcha-response"))
    next.captcha = "Please complete the verification.";
  return next;
}

export async function submitContact(fd: FormData, accessKey: string): Promise<void> {
  fd.append("access_key", accessKey);
  const fail = "Could not send your message. Check your connection and try again.";
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: fd,
    signal: AbortSignal.timeout(15000),
  }).catch(() => {
    throw new Error(fail);
  });
  const json = (await res.json().catch(() => null)) as {
    success: boolean;
    message?: string;
  } | null;
  if (!json?.success)
    throw new Error(res.status === 429 ? "Too many attempts. Wait a minute and retry." : fail);
}
