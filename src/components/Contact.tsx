"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const CONTACT_EMAIL = "chinhei.wu@gmail.com";
const CONTACT_PHONE = "+61 449 729 832";

// Set NEXT_PUBLIC_FORMSPREE_ENDPOINT (e.g. https://formspree.io/f/xxxxxxx)
// in your Vercel project's environment variables to enable a functional
// contact form. Without it, the form falls back to a mailto: link.
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const socials = [
  // TODO: replace with your real profile URLs
  { label: "LinkedIn", href: "https://linkedin.com/in/chinheiwu" },
  { label: "GitHub", href: "https://github.com/chinheiwu" },
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        `Portfolio enquiry from ${form.name || "website visitor"}`
      )}&body=${encodeURIComponent(
        `${form.message}\n\n— ${form.name} (${form.email})`
      )}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="text-sm font-mono uppercase tracking-widest text-accent">
            Contact
          </h2>
          <p className="mt-2 text-2xl font-semibold sm:text-3xl">
            Let&apos;s talk about your next design
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <dl className="space-y-6 text-sm">
              <div>
                <dt className="text-foreground/50 uppercase tracking-wide text-xs">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-lg font-medium hover:text-accent"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-foreground/50 uppercase tracking-wide text-xs">
                  Phone
                </dt>
                <dd className="mt-1 text-lg font-medium">{CONTACT_PHONE}</dd>
              </div>
              <div>
                <dt className="text-foreground/50 uppercase tracking-wide text-xs">
                  Languages
                </dt>
                <dd className="mt-1 text-lg font-medium">
                  English (professional), Cantonese (native), Mandarin
                  (intermediate)
                </dd>
              </div>
              <div>
                <dt className="text-foreground/50 uppercase tracking-wide text-xs">
                  Elsewhere
                </dt>
                <dd className="mt-2 flex gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-full border border-surface-border px-4 py-2 font-medium transition-colors hover:bg-surface"
                    >
                      {social.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-xs uppercase tracking-wide text-foreground/50">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-surface-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-xs uppercase tracking-wide text-foreground/50">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-surface-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-xs uppercase tracking-wide text-foreground/50">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-surface-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-sm text-green-600">
                  Thanks — your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please email me directly instead.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
