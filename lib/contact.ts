export type ContactErrors = Partial<Record<"name" | "email" | "subject" | "message" | "captcha", string>>;

export function validateContact(get: (k: string) => string, needsCaptcha: boolean): ContactErrors {
  const next: ContactErrors = {};
  if (get("name").length < 2) next.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email"))) next.email = "Enter a valid email.";
  if (get("subject").length < 3) next.subject = "Please add a subject.";
  if (get("message").length < 10) next.message = "Message must be at least 10 characters.";
  if (needsCaptcha && !get("h-captcha-response")) next.captcha = "Please complete the verification.";
  return next;
}

export async function submitContact(fd: FormData, accessKey: string): Promise<void> {
  fd.append("access_key", accessKey);
  const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
  const json = (await res.json()) as { success: boolean; message?: string };
  if (!json.success) throw new Error(json.message);
}
