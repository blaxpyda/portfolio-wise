import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { personalInfo } from "../data/personalInfo";
import { item, stagger, useAnimationProps } from "../lib/animations";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const empty: FormState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const anim = useAnimationProps();
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2800);
    return () => clearTimeout(t);
  }, [toast]);

  const validate = (data: FormState): Errors => {
    const e: Errors = {};
    if (!data.name.trim()) e.name = "Please enter your name.";
    if (!data.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = "That email doesn't look right.";
    if (!data.subject.trim()) e.subject = "Add a subject line.";
    if (!data.message.trim()) e.message = "Don't forget your message.";
    else if (data.message.trim().length < 10)
      e.message = "Your message is a little short.";
    return e;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const v = validate(values);
    setErrors(v);
    if (Object.keys(v).length) return;

    setStatus("submitting");
    try {
      const res = await fetch(personalInfo.contactFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: personalInfo.contactFormAccessKey,
          from_name: values.name,
          reply_to: values.email,
          subject: values.subject,
          message: values.message,
        }),
      });
      const json = await res.json();
      if (res.ok && json.success !== false) {
        setStatus("success");
        setValues(empty);
        setToast("Thanks! Your message is on its way.");
      } else {
        throw new Error(json.message || "Request failed");
      }
    } catch {
      setStatus("error");
      setToast("Something went wrong. Please try again or email me directly.");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setToast("Email copied to clipboard");
    } catch {
      setToast("Couldn't copy — please copy manually");
    }
  };

  return (
    <Section id="contact" aria-label="Contact">
      <div className="container-max">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          subtitle="Have a project, a role, or just a question? Send me a note and I'll get back within a couple of days."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <motion.form
            {...anim}
            variants={stagger}
            onSubmit={onSubmit}
            noValidate
            className="card flex flex-col gap-5 p-6 sm:p-8"
          >
            <Field label="Name" error={errors.name}>
              <input
                type="text"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                className={inputClass(!!errors.name)}
                placeholder="Ada Lovelace"
                aria-invalid={!!errors.name}
              />
            </Field>

            <Field label="Email" error={errors.email}>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                className={inputClass(!!errors.email)}
                placeholder="ada@example.com"
                aria-invalid={!!errors.email}
              />
            </Field>

            <Field label="Subject" error={errors.subject}>
              <input
                type="text"
                name="subject"
                value={values.subject}
                onChange={(e) => setValues((v) => ({ ...v, subject: e.target.value }))}
                className={inputClass(!!errors.subject)}
                placeholder="Let's work together"
                aria-invalid={!!errors.subject}
              />
            </Field>

            <Field label="Message" error={errors.message}>
              <textarea
                name="message"
                rows={5}
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                className={`${inputClass(!!errors.message)} resize-none`}
                placeholder="Tell me about your project..."
                aria-invalid={!!errors.message}
              />
            </Field>

            <motion.button
              variants={item}
              type="submit"
              disabled={status === "submitting"}
              className="btn btn-primary mt-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
              {status !== "submitting" && <SendIcon className="h-4 w-4" />}
            </motion.button>

            {status === "success" && (
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Thanks for reaching out — I'll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-rose-600 dark:text-rose-400">
                Something went wrong. Please email me directly at {personalInfo.email}.
              </p>
            )}
          </motion.form>

          <motion.div
            {...anim}
            variants={stagger}
            className="flex flex-col gap-6"
          >
            <motion.div variants={item} className="card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                Direct
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Prefer email? Reach me at:
              </p>
              <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-3 dark:border-slate-800 dark:bg-slate-800/40">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-medium text-slate-800 hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400"
                >
                  {personalInfo.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                  aria-label="Copy email to clipboard"
                >
                  <CopyIcon className="h-4 w-4" />
                </button>
              </div>
            </motion.div>

            <motion.div variants={item} className="card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                Around the web
              </h3>
              <div className="mt-4 flex gap-3">
                <SocialLink href={personalInfo.socials.github} label="GitHub">
                  <GitHubIcon className="h-5 w-5" />
                </SocialLink>
                <SocialLink href={personalInfo.socials.linkedin} label="LinkedIn">
                  <LinkedInIcon className="h-5 w-5" />
                </SocialLink>
                <SocialLink href={personalInfo.socials.twitter} label="Twitter / X">
                  <TwitterIcon className="h-5 w-5" />
                </SocialLink>
                <SocialLink href={`mailto:${personalInfo.email}`} label="Email">
                  <MailIcon className="h-5 w-5" />
                </SocialLink>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            role="status"
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-2xl dark:bg-brand-600"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.label variants={item} className="flex flex-col gap-1.5">
      <span className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
          {label}
        </span>
        {error && (
          <span className="text-xs font-medium text-rose-600 dark:text-rose-400">
            {error}
          </span>
        )}
      </span>
      {children}
    </motion.label>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm transition-colors placeholder:text-slate-400",
    "dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500",
    hasError
      ? "border-rose-400 focus:border-rose-500 dark:border-rose-500"
      : "border-slate-200 focus:border-brand-500 dark:border-slate-700 dark:focus:border-brand-500",
    "focus:outline-none focus:ring-2 focus:ring-brand-500/40",
  ].join(" ");
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      title={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-700 dark:hover:text-brand-400"
    >
      {children}
    </a>
  );
}

function CopyIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15V5a2 2 0 012-2h10" />
    </svg>
  );
}

function SendIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}

function MailIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function GitHubIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.68.8.56A11.51 11.51 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 005 0 2.5 2.5 0 00-2.52-2.5zM3 9h4v12H3zM10 9h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H10z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.9 3H22l-7.5 8.57L23 21h-6.94l-5.43-7.1L4.5 21H1.4l8.02-9.17L1 3h7.1l4.9 6.48L18.9 3zm-2.43 16h1.92L7.6 4.9H5.54l11 14.1z" />
    </svg>
  );
}
