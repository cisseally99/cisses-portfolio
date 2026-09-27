"use client";

import { FormEvent, useState } from "react";
import PageHeader from "@/components/PageHeader";
import PageIntro from "@/components/PageIntro";
import { profile } from "@/data/portfolio";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      if (!response.ok) throw new Error("Message failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return <><PageHeader /><main><PageIntro eyebrow="Contact" title="Let&apos;s make something real." description="Have an idea, an opportunity, or a problem worth solving? Send a message and I&apos;ll get back to you." /><section className="contact-layout shell"><form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label htmlFor="name">Your name<input id="name" name="name" type="text" placeholder="Jamiu Aliyu" required minLength={2} /></label><label htmlFor="email">Email address<input id="email" name="email" type="email" placeholder="you@example.com" required /></label></div><label htmlFor="message">How can I help?<textarea id="message" name="message" placeholder="Tell me a little about the project..." required minLength={10} rows={7} /></label><input className="form-trap" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" /><button className="button button-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send message ↗"}</button>{status === "success" && <p className="form-feedback success">Thanks — your message has been sent.</p>}{status === "error" && <p className="form-feedback error">Something went wrong. Please email me directly instead.</p>}</form><div className="contact-aside"><p className="eyebrow"><span className="eyebrow-line" /> Or find me here</p><div className="contact-links-section"><a href={`mailto:${profile.email}`}><span>Email</span>{profile.email} ↗</a><a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span>github.com/cisseally99 ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span>aliyu-jamiu-1231a4297 ↗</a></div></div></section></main></>;
}
