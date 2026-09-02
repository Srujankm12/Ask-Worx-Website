"use client";

import React, { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Section } from "@/components/Section";
import { Reveal, RevealText } from "@/components/motion/Reveal";
import { company, services } from "@/lib/site";
import { submitEnquiry, type ContactState, type Field } from "./actions";

const INITIAL: ContactState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="rounded-full px-8">
      {pending ? "Sending…" : "Send enquiry"}
      <ArrowRight className="size-4" aria-hidden="true" />
    </Button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useActionState(submitEnquiry, INITIAL);
  const formRef = useRef<HTMLFormElement>(null);

  // Move focus to the first field the server rejected, and clear the form
  // once the enquiry is away.
  useEffect(() => {
    if (state.status === "error" && state.errors) {
      const first = Object.keys(state.errors)[0] as Field | undefined;
      if (first) {
        const el = formRef.current?.elements.namedItem(first);
        if (el instanceof HTMLElement) el.focus();
      }
    }
    if (state.status === "sent") {
      formRef.current?.reset();
    }
  }, [state]);

  const err = (f: Field) => state.errors?.[f];
  const describedBy = (f: Field, hint = false) =>
    [err(f) ? `${f}-error` : null, hint ? `${f}-hint` : null].filter(Boolean).join(" ") ||
    undefined;

  const channels = [
    { Icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { Icon: Phone, label: "Phone", value: company.phone, href: company.phoneHref },
    {
      Icon: MessageSquare,
      label: "WhatsApp",
      value: "Message an engineer",
      href: company.whatsappHref,
    },
  ];

  return (
    <>
      <Section className="pb-0 pt-28 md:pt-36" grid>
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">Contact</p>
          </Reveal>
          <RevealText
            as="h1"
            text="Let&rsquo;s scope your system."
            delay={0.05}
            className="display-1 mt-5 text-ink"
          />
          <Reveal delay={0.15}>
            <p className="lead mt-6">
              Tell us what the line is doing today and what it should be doing instead.
              An engineer replies — usually within one working day.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Direct channels */}
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-ink">
                Direct lines
              </h2>
            </Reveal>

            <ul className="mt-8 space-y-px overflow-hidden rounded-xl border border-line bg-line">
              {channels.map(({ Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-4 bg-background p-5 transition-colors hover:bg-paper"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-titanium-700">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                        {label}
                      </span>
                      <span className="mt-0.5 block break-words text-sm font-medium text-ink">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-line p-5">
              <span className="flex size-10 items-center justify-center rounded-full border border-line text-titanium-700">
                <MapPin className="size-4" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                Workshop
              </h3>
              <address className="mt-2 text-sm not-italic leading-relaxed text-body-text">
                {company.address}
              </address>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-10">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-ink">
                Send a brief
              </h2>
              <p className="mt-2 text-sm text-body-text">
                Fields marked with an asterisk are required. It reaches us by email —
                no account, no newsletter.
              </p>

              <form ref={formRef} action={formAction} noValidate className="mt-8 space-y-6">
                {/* Honeypot — hidden from people, tempting to bots */}
                <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name *</Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!err("name")}
                      aria-describedby={describedBy("name")}
                      placeholder="Enter your full name"
                      className="bg-background"
                    />
                    {err("name") && (
                      <p id="name-error" className="text-sm text-destructive">{err("name")}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      aria-required="true"
                      aria-invalid={!!err("company")}
                      aria-describedby={describedBy("company")}
                      placeholder="Enter your company name"
                      className="bg-background"
                    />
                    {err("company") && (
                      <p id="company-error" className="text-sm text-destructive">{err("company")}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      spellCheck={false}
                      autoCapitalize="none"
                      aria-required="true"
                      aria-invalid={!!err("email")}
                      aria-describedby={describedBy("email")}
                      placeholder="Enter your work email"
                      className="bg-background"
                    />
                    {err("email") && (
                      <p id="email-error" className="text-sm text-destructive">{err("email")}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      spellCheck={false}
                      aria-describedby={describedBy("phone", true)}
                      placeholder="Enter your phone number"
                      className="bg-background"
                    />
                    <p id="phone-hint" className="text-xs text-muted-text">
                      Optional — fastest if you&rsquo;d like a call back.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">What do you need?</Label>
                  <Input
                    id="service"
                    name="service"
                    list="service-options"
                    autoComplete="off"
                    aria-describedby={describedBy("service", true)}
                    placeholder="Select or type what you need"
                    className="bg-background"
                  />
                  <datalist id="service-options">
                    {services.map((s) => (
                      <option key={s.slug} value={s.name} />
                    ))}
                  </datalist>
                  <p id="service-hint" className="text-xs text-muted-text">
                    Pick from the list or describe it in your own words.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Requirements *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    aria-required="true"
                    aria-invalid={!!err("message")}
                    aria-describedby={describedBy("message")}
                    placeholder="Describe your requirement — the process, the bottleneck, and what a good outcome looks like"
                    className="resize-y bg-background"
                  />
                  {err("message") && (
                    <p id="message-error" className="text-sm text-destructive">{err("message")}</p>
                  )}
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <SubmitButton />
                  <a
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-text underline-offset-4 hover:text-ink hover:underline"
                  >
                    Prefer WhatsApp? Message us instead
                  </a>
                </div>

                {/* Result — announced to screen readers when it changes */}
                <div aria-live="polite" className="min-h-6">
                  {state.status === "sent" && (
                    <p className="flex items-start gap-2 text-sm text-ink">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                      {state.message}
                    </p>
                  )}
                  {state.status === "error" && state.message && (
                    <p className="text-sm text-destructive">{state.message}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
