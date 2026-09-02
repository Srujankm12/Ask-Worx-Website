"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { Reveal, RevealText, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ScrollFallText } from "@/components/motion/ScrollFallText";
import { ScrollRail, type RailItem } from "@/components/motion/ScrollRail";
import {
  company,
  processSteps,
  services,
  philosophy,
  commitments,
  whoWeAre,
  fragmentation,
  framework,
  accountability,
  commitment,
  formatDate,
} from "@/lib/site";

/* The four framework layers, shaped for the scroll rail. */
const railItems: RailItem[] = framework.map((layer) => ({
  key: layer.key,
  title: layer.name,
  role: layer.role,
  body: layer.body,
  points: layer.disciplines,
}));

const principles = [
  {
    title: "Reliability before novelty",
    body:
      "A control system is judged on the shift it does not stop. We choose the platform that will still be supportable in ten years over the one that demos best, and we prove behaviour under fault conditions before anyone celebrates a feature.",
  },
  {
    title: "Documentation is the deliverable",
    body:
      "Commented logic, as-built drawings, terminal schedules, address plans, and a maintenance handover are not paperwork at the end — they are written as the work happens. If your team cannot own the system after we leave, we have not finished.",
  },
  {
    title: "Retrofit before replacement",
    body:
      "Most plants are held back by their control layer, not their machines. Replacing the controls is usually a fraction of the cost of replacing the equipment, and it releases production data the original build never exposed. We propose the rip-out only when the retrofit genuinely cannot carry the load.",
  },
  {
    title: "One team, floor to cloud",
    body:
      "The same engineers who wire the panel design the dashboard above it. That removes the seam where most industrial projects fail — the handover between the automation vendor and the software vendor — and it means the data model is agreed once, not renegotiated per layer.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background pt-20">
        <div aria-hidden="true" className="absolute inset-0 grid-paper opacity-70" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent"
        />

        <div className="container-custom relative pb-16 pt-16 md:pb-24 md:pt-24">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow">
                  About <span aria-hidden="true">·</span> {company.legal}
                </p>
              </Reveal>

              <RevealText
                as="h1"
                text="Ground to Cloud Automation."
                delay={0.05}
                className="display-1 mt-6 text-ink"
              />

              <Reveal delay={0.45}>
                <p className="lead mt-8 max-w-2xl">
                  {whoWeAre.paragraphs[0]}
                </p>
              </Reveal>

              <Reveal delay={0.58}>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.85]">
                  We design, build, program, commission and support automation systems for
                  manufacturing plants across process and discrete industries — taking
                  single-point engineering responsibility for all four layers.
                </p>
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.2} className="lg:col-span-5">
              <dl className="grid grid-cols-2 hairline-grid">
                <div className="bg-background p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                    Entity
                  </dt>
                  <dd className="mt-2 font-heading text-base font-bold uppercase tracking-tight text-ink">
                    {company.legal}
                  </dd>
                </div>
                <div className="bg-background p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                    Base
                  </dt>
                  <dd className="mt-2 font-heading text-base font-bold uppercase tracking-tight text-ink">
                    {company.city}
                  </dd>
                </div>
                <div className="bg-background p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                    Founder
                  </dt>
                  <dd className="mt-2 font-heading text-base font-bold uppercase tracking-tight text-ink">
                    {company.founder}
                  </dd>
                </div>
                <div className="bg-background p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                    Disciplines
                  </dt>
                  <dd className="mt-2 font-heading text-base font-bold uppercase tracking-tight text-ink">
                    {services.length} in-house
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we do */}
      <Section tone="paper">
        <SectionHeader
          eyebrow="What we do"
          title="From the terminal block to the dashboard"
          intro="One discipline runs into the next. That is deliberate — it is also the reason our projects do not stall at a handover."
        />

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            {/* The mark itself, on the drawing-sheet ground — no stock photography. */}
            <Reveal>
              <figure className="relative overflow-hidden rounded-xl border border-line bg-background">
                <div aria-hidden="true" className="absolute inset-0 grid-paper opacity-70" />
                <div className="relative flex flex-col items-center px-8 py-14 md:py-20">
                  {/* logo-mark.png is logo.png trimmed to the artwork and padded
                      evenly — the original canvas carries ~120px of dead space on
                      the right, which visually pushes the mark off centre. */}
                  <Image
                    src="/logo-mark.png"
                    alt={`${company.name} mark`}
                    width={423}
                    height={325}
                    className="w-[170px] max-w-full object-contain md:w-[200px]"
                  />
                  <figcaption className="mt-8 text-center">
                    <p className="font-heading text-2xl font-extrabold uppercase tracking-[0.14em] text-ink">
                      {company.name}
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-text">
                      {company.tagline}
                    </p>
                  </figcaption>
                </div>
                <div className="relative border-t border-line px-6 py-4 text-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-text">
                    {company.signature}
                  </p>
                </div>
              </figure>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="max-w-[68ch] text-[15px] leading-[1.9] break-words md:text-base">
                We begin where the process actually happens. Sensors and instrumentation
                measure it, panels distribute the power, and PLCs hold the logic that keeps
                a line deterministic and safe. That layer is unforgiving: it either runs on
                every shift or it does not, and no amount of software above it can hide a
                weak foundation.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[68ch] text-[15px] leading-[1.9] break-words md:text-base">
                Above it sits supervision — SCADA and HMI screens designed around the
                decisions an operator makes at 3 a.m., not around a vendor’s template. Then
                the industrial network and gateways move the signals off the floor without
                exposing the control system to the internet, and the cloud layer turns them
                into trends, alarms, and reports.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-5 max-w-[68ch] text-[15px] leading-[1.9] break-words md:text-base">
                At the top we build the software that people actually open: operations
                dashboards, custom ERP and CRM systems, mobile apps for field teams, and
                messaging automation that puts an alarm in the right engineer’s hand within
                seconds. Because the same team owns every layer, the data model agreed at
                the panel is the one the dashboard reads.
              </p>
            </Reveal>

            <Stagger className="mt-8 flex flex-wrap gap-2">
              {services.map((svc) => (
                <StaggerItem key={svc.slug}>
                  <span className="inline-flex rounded-full border border-line bg-background px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-body-text">
                    {svc.name}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.24}>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:text-titanium-700"
              >
                Explore the services
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Who we are — the name is the operating principle */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">{whoWeAre.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-[15px] leading-[1.9]">{whoWeAre.paragraphs[1]}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            {/* ASK / worX — the two halves of the name, read as one line */}
            <Stagger className="hairline-grid grid grid-cols-1 sm:grid-cols-2">
              {whoWeAre.nameGloss.map((g) => (
                <StaggerItem key={g.part} className="h-full">
                  <div className="flex h-full flex-col bg-background p-7">
                    <span className="font-heading text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
                      {g.part}
                    </span>
                    <p className="mt-4 text-[15px] leading-[1.85]">{g.meaning}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-[62ch] text-[15px] leading-[1.9]">
                {whoWeAre.nameClosing}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-5 border-l-2 border-ink pl-5 font-heading text-lg font-bold uppercase tracking-tight text-ink md:text-xl">
                {whoWeAre.nameEmphasis}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* The fragmentation problem — the reason the company exists */}
      <Section tone="ink" grid>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-champagne">{fragmentation.eyebrow}</p>
            </Reveal>
            <ScrollFallText
              text={fragmentation.statement}
              as="h2"
              className="display-2 mt-5 text-champagne-100"
            />
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            {/* Four vendors, four boxes, no owner. */}
            <Stagger className="divide-y divide-champagne/20 border-y border-champagne/20">
              {fragmentation.vendors.map((v, i) => (
                <StaggerItem key={v}>
                  <div className="flex items-baseline gap-5 py-4">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-champagne/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg leading-relaxed text-champagne-600">{v}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-[62ch] text-lg leading-relaxed text-champagne-100">
                {fragmentation.consequence}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-[64ch] leading-[1.9] text-champagne-600">
                {fragmentation.resolution}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* The framework — scroll-driven rail, one layer lighting at a time */}
      <Section id="framework">
        <SectionHeader
          eyebrow="The framework"
          title="The Ground to Cloud Framework"
          intro="Four layers, engineered as one chain. Scroll down through them the way the data travels up."
        />
        <ScrollRail items={railItems} />

        {/* One accountable team across all four */}
        <div className="mt-20 border-t border-line-strong pt-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ScrollFallText
                text={accountability.headline}
                as="h3"
                className="font-heading text-2xl font-extrabold uppercase leading-tight tracking-tight text-ink md:text-3xl"
              />
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-[62ch] text-[15px] leading-[1.9]">
                  {accountability.body}
                </p>
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.15} className="lg:col-span-5">
              <div className="h-full rounded-xl border border-line bg-paper p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                  {accountability.scale.title}
                </p>
                <p className="mt-4 text-[15px] leading-[1.9] text-ink">
                  {accountability.scale.body}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Philosophy — how we read a plant before we design for it */}
      <Section>
        <SectionHeader
          eyebrow="Philosophy"
          title={philosophy.title}
          intro="A specification tells you what the machine should do. It does not tell you what the shift actually looks like, and that is the part that decides whether a system survives."
        />

        <Stagger className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
          {philosophy.pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="border-t border-line-strong pt-6">
                <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3.5 text-[15px] leading-[1.85]">{pillar.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <blockquote className="mt-14 border-t border-line pt-10 text-center">
            <p className="font-heading text-2xl font-bold italic tracking-tight text-titanium-700 md:text-3xl">
              &ldquo;{philosophy.quote}&rdquo;
            </p>
          </blockquote>
        </Reveal>
      </Section>

      {/* Process */}
      <Section tone="ink" grid>
        <SectionHeader
          eyebrow="Method"
          title="How a deployment runs"
          intro="Four stages, no surprises. Your line keeps running the whole way through."
          onInk
        />
        <Stagger className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="border-t border-champagne/25 pt-5">
                <span className="font-mono text-xs tracking-[0.2em] text-champagne">{s.n}</span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-champagne-100">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-champagne-600">{s.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Principles */}
      <Section>
        {/* Commitment — what a client can hold us to */}
      <Section tone="paper">
        <SectionHeader
          eyebrow="Commitment"
          title="Engineering for reliability and growth"
          intro={`${company.name} bridges traditional automation with modern digital thinking. Five commitments hold across every engagement, whatever layer of the stack it starts at.`}
        />

        <Stagger className="hairline-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {commitments.map((c, i) => (
            <StaggerItem key={c.title} className="h-full">
              <div className="flex h-full flex-col bg-background p-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-base font-bold uppercase leading-tight tracking-tight text-ink">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed">{c.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <SectionHeader
          eyebrow="Principles"
          title="What we hold to"
          intro="Four commitments that decide how a job is scoped, built, and handed over."
        />

        <Stagger className="grid grid-cols-1 hairline-grid md:grid-cols-2">
          {principles.map((p) => (
            <StaggerItem key={p.title} className="h-full">
              <div className="flex h-full flex-col bg-background p-8 md:p-10">
                <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-[68ch] text-[15px] leading-[1.85] break-words">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Contact strip */}
      <Section tone="paper">
        {/* Commitment — the transition we exist to carry customers across */}
      <Section tone="ink" grid>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow text-champagne">{commitment.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 text-xl leading-[1.8] text-champagne-100 md:text-2xl">
              {commitment.body}
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-10 border-t border-champagne/25 pt-8 font-heading text-2xl font-extrabold uppercase tracking-tight text-champagne-100 md:text-3xl">
              {commitment.callToAction}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-champagne/70">
              {company.legal} <span aria-hidden="true">·</span> {company.city}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Where we are — registry facts beside the actual location */}
      <Section tone="paper">
        <SectionHeader
          eyebrow="Registered office"
          title="Where to find us"
          intro="A registered engineering practice in Bengaluru, working on sites across India."
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <dl className="hairline-grid grid grid-cols-1">
              <div className="bg-background p-6">
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                  Registered entity
                </dt>
                <dd className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-ink">
                  {company.legal}
                </dd>
              </div>
              <div className="bg-background p-6">
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                  LLPIN
                </dt>
                <dd className="mt-2 font-mono text-base tracking-[0.08em] text-ink">
                  {company.llpin}
                </dd>
              </div>
              {company.incorporated ? (
                <div className="bg-background p-6">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                    Incorporated
                  </dt>
                  <dd className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-ink">
                    {formatDate(company.incorporated)}
                  </dd>
                </div>
              ) : null}
              <div className="bg-background p-6">
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                  Registered address
                </dt>
                <dd className="mt-2 not-italic">
                  <address className="font-heading text-base font-bold uppercase not-italic leading-snug tracking-tight text-ink">
                    {company.address}
                  </address>
                </dd>
              </div>
            </dl>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:text-titanium-700"
            >
              Open in Google Maps
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal direction="left" delay={0.12} className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-line bg-background">
              <iframe
                title={`Map showing the ${company.name} office in ${company.city}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[380px] w-full border-0 grayscale-[0.35] md:h-[460px]"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <SectionHeader
          eyebrow="Reach us"
          title="Talk to the people who do the work"
          intro="No call centre in between. Write, call, or send the drawings you already have."
        />

        <Stagger className="grid grid-cols-1 hairline-grid md:grid-cols-3">
          <StaggerItem className="h-full">
            <a
              href={`mailto:${company.email}`}
              className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-paper"
            >
              <Mail className="size-5 text-titanium-700" aria-hidden="true" />
              <span className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                Email
              </span>
              <span className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-titanium-700 break-words">
                {company.email}
              </span>
              <span className="mt-3 text-sm leading-relaxed">
                Scope notes, drawings, and I/O lists welcome.
              </span>
            </a>
          </StaggerItem>

          <StaggerItem className="h-full">
            <a
              href={company.phoneHref}
              className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-paper"
            >
              <Phone className="size-5 text-titanium-700" aria-hidden="true" />
              <span className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                Phone
              </span>
              <span className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-titanium-700 break-words">
                {company.phone}
              </span>
              <span className="mt-3 text-sm leading-relaxed">
                Straight through to an engineer.
              </span>
            </a>
          </StaggerItem>

          <StaggerItem className="h-full">
            <div className="flex h-full flex-col bg-background p-8">
              <MapPin className="size-5 text-titanium-700" aria-hidden="true" />
              <span className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                Office
              </span>
              <address className="mt-2 not-italic font-heading text-lg font-bold uppercase leading-snug tracking-tight text-ink break-words">
                {company.address}
              </address>
              <span className="mt-3 text-sm leading-relaxed">
                Site visits across India, from {company.city}.
              </span>
            </div>
          </StaggerItem>
        </Stagger>
      </Section>

    </>
  );
}
