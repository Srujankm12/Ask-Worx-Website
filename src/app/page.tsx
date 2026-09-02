"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/Section";
import { Reveal, RevealText, Stagger, StaggerItem } from "@/components/motion/Reveal";
import {
  ScrollVelocityRow,
  ScrollShift,
  MarqueeImage,
} from "@/components/motion/ScrollMarquee";
import {
  ScrubShowcase,
  useScrubMode,
  type ScrubBeat,
} from "@/components/motion/ScrubShowcase";
import { ScrollFallText } from "@/components/motion/ScrollFallText";
import {
  services,
  solutions,
  industries,
  posts,
  processSteps,
  stack,
  benefits,
  partnership,
  company,
  formatDate,
} from "@/lib/site";

function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  // Drive from document scroll in pixels — element-relative progress can
  // measure stale while fonts and images settle, which washed out the hero.
  const { scrollY } = useScroll();

  // Content drifts up, then dissolves only once you are clearly leaving —
  // it stays fully solid through the first part of the scroll.
  const y = useTransform(scrollY, [0, 800], [0, 90]);
  const opacity = useTransform(scrollY, [0, 320, 760], [1, 1, 0]);

  // The brushed-metal highlight travels across the headline as you scroll,
  // so the type catches the light the way the logo's finish does.
  const sheenX = useTransform(scrollY, [0, 700], ["0%", "100%"]);

  // The mark behind the type parallaxes and turns fractionally.
  const markY = useTransform(scrollY, [0, 700], [0, -70]);
  const markScale = useTransform(scrollY, [0, 700], [1, 1.12]);
  const markRotate = useTransform(scrollY, [0, 700], [0, 6]);

  // Rule retracts as you leave the top.
  const ruleScale = useTransform(scrollY, [0, 400], [1, 0.2]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[92vh] flex-col overflow-hidden bg-background pt-20"
    >
      <div aria-hidden="true" className="absolute inset-0 grid-paper opacity-60" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,#FFFFFF_35%,transparent_100%)]"
      />

      {/* Oversized brand mark — the hero's only image, and it's yours */}
      <motion.div
        aria-hidden="true"
        style={{ y: markY, scale: markScale, rotate: markRotate }}
        className="pointer-events-none absolute -right-[12%] top-1/2 hidden w-[52vw] max-w-[760px] -translate-y-1/2 md:block"
      >
        <Image
          src="/logo.png"
          alt=""
          width={760}
          height={506}
          priority
          className="w-full opacity-[0.07] grayscale"
        />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="container-custom relative z-10 flex flex-1 flex-col justify-center py-14 md:py-20"
      >
        <Reveal>
          <div className="flex items-center gap-4">
            <motion.span
              aria-hidden="true"
              style={{ scaleX: ruleScale }}
              className="hidden h-px w-16 origin-left bg-line-strong sm:block"
            />
            <p className="eyebrow">
              {company.legal} · {company.city}
            </p>
          </div>
        </Reveal>

        <h1 className="mt-8 max-w-5xl">
          <RevealText
            as="span"
            text="Automation that works today."
            delay={0.05}
            className="display-1 block text-ink"
          />
          <motion.span
            style={{ backgroundPositionX: sheenX }}
            className="titanium-sheen block bg-[length:220%_100%]"
          >
            <RevealText
              as="span"
              text="Intelligence that scales tomorrow."
              delay={0.25}
              className="display-1 block"
            />
          </motion.span>
        </h1>

        <Reveal delay={0.5}>
          <p className="lead mt-10 max-w-xl">
            We engineer control systems and the software above them — PLC, SCADA,
            and IIoT — taken from the plant floor to the cloud by one team.
          </p>
        </Reveal>

      </motion.div>

      {/* Discipline strip — grounds the promise in what we actually do */}
      <div className="relative z-10 mt-auto border-t border-line bg-background">
        <div className="container-custom">
          <Stagger className="grid grid-cols-2 divide-line md:grid-cols-3 lg:grid-cols-6 lg:divide-x">
            {services.map((svc) => (
              <StaggerItem key={svc.slug}>
                <Link
                  href={`/services/${svc.slug}`}
                  className="group flex h-full flex-col justify-between gap-3 px-1 py-6 lg:px-5"
                >
                  <span className="font-heading text-sm font-bold uppercase leading-tight tracking-tight text-ink transition-colors group-hover:text-titanium-700">
                    {svc.name}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const scrub = useScrubMode();

  const header = (
    <div className="container-custom mb-10 lg:mb-14">
      <p className="eyebrow text-champagne">Method</p>
      <ScrollFallText
        text="How a deployment runs"
        as="h2"
        className="display-2 mt-4 text-champagne-100"
      />
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-champagne-600">
        Four stages, no surprises. Your line keeps running the whole way through.
      </p>
    </div>
  );

  // One beat per stage: the number huge on the left, the detail on the right.
  const beats: ScrubBeat[] = processSteps.map((s, i) => ({
    label: s.title,
    at: i / processSteps.length,
    content: (
      <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <span className="block font-heading text-[clamp(4rem,9vw,8rem)] font-extrabold leading-none text-champagne/25">
            {s.n}
          </span>
        </div>
        <div className="lg:col-span-8">
          <h3 className="font-heading text-3xl font-extrabold uppercase tracking-tight text-champagne-100 md:text-4xl">
            {s.title}
          </h3>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-champagne-600">
            {s.body}
          </p>
        </div>
      </div>
    ),
  }));

  // Stacked fallback: mobile, reduced motion, and first paint before measuring.
  if (!scrub) {
    return (
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
    );
  }

  return (
    <div className="bg-ink grid-paper-inverse text-champagne-600">
      <ScrubShowcase beats={beats} screens={4} header={header} stageMinHeight={300} />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services */}
      <Section id="services" tone="paper">
        <ScrollShift from={-4} to={3}>
          <SectionHeader
            eyebrow="Services"
            title="What we do"
            intro="Six disciplines, one engineering team. Each builds on the one before it, from the plant floor up."
            action={
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/services">
                  All services <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            }
          />
        </ScrollShift>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <StaggerItem key={svc.slug} className="h-full">
              <Link
                href={`/services/${svc.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-background transition-shadow duration-300 hover:shadow-[0_24px_60px_-28px_rgba(28,26,23,0.4)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={svc.image}
                    alt=""
                    width={1400}
                    height={875}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-titanium-700">
                    {svc.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed">{svc.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-ink">
                    Explore
                    <ArrowUpRight
                      className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>


      {/* Ground to Cloud — the five layers the name refers to */}
      <Section id="stack" tone="paper">
        <SectionHeader
          eyebrow="The stack"
          title="Ground to cloud, one layer at a time"
          intro="We don't just automate machines — we connect operations to intelligence. Every discipline we run sits on one of these five layers, and the same team owns all of them."
        />

        <Stagger className="hairline-grid grid grid-cols-1">
          {[...stack].reverse().map((layer) => (
            <StaggerItem key={layer.name}>
              <div className="grid gap-4 bg-background p-7 md:grid-cols-12 md:items-baseline md:gap-8">
                <div className="md:col-span-3">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-ink md:text-2xl">
                    {layer.name}
                  </h3>
                </div>

                <p className="text-[15px] leading-[1.85] md:col-span-6">{layer.body}</p>

                <ul className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
                  {layer.solutions.map((slug) => {
                    const sol = solutions.find((x) => x.slug === slug);
                    if (!sol) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/solutions/${sol.slug}`}
                          className="inline-flex rounded-full border border-line bg-paper px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.06em] text-body-text transition-colors hover:border-line-strong hover:text-ink"
                        >
                          {sol.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* What a unified stack is worth */}
      <Section>
        <SectionHeader
          eyebrow="Why it matters"
          title="What a unified system gives you"
          intro="The benefit of owning every layer is not tidiness. It is that the numbers finally agree."
        />
        <Stagger className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
          {benefits.map((b) => (
            <StaggerItem key={b.n}>
              <div className="border-t border-line-strong pt-6">
                <span className="block font-heading text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-none text-titanium-700/30">
                  {b.n}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-tight text-ink">
                  {b.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.85]">{b.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Solutions */}
      <Section id="solutions">
        <SectionHeader
          eyebrow="Solutions"
          title="The hardware and platforms"
          intro="The building blocks we specify, supply, and commission — each with its own detail sheet."
          action={
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/solutions">
                All solutions <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          }
        />

        <Stagger className="grid grid-cols-1 hairline-grid sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((sol) => (
            <StaggerItem key={sol.slug} className="h-full">
              <Link
                href={`/solutions/${sol.slug}`}
                className="group flex h-full flex-col bg-background p-7 transition-colors hover:bg-paper"
              >
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-titanium-700">
                  {sol.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed">{sol.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-ink">
                  Detail sheet
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Work band — two rows drifting opposite ways as you scroll */}
      <section aria-labelledby="work-band" className="overflow-hidden bg-paper py-16 md:py-24">
        <div className="container-custom">
          <Reveal>
            <p className="eyebrow">In the field</p>
          </Reveal>
          <ScrollFallText
            text="Where the work happens"
            as="h2"
            className="display-2 mt-4 max-w-2xl text-ink"
          />
        </div>

        <div className="mt-12 space-y-4 md:space-y-6">
          <ScrollVelocityRow baseVelocity={2.2}>
            {solutions.slice(0, 5).map((sol) => (
              <MarqueeImage
                key={sol.slug}
                src={sol.image}
                alt={`${sol.name} — installed and commissioned by ${company.name}`}
                kind="Solution"
                name={sol.name}
              />
            ))}
          </ScrollVelocityRow>

          <ScrollVelocityRow baseVelocity={-2.2}>
            {industries.slice(0, 5).map((ind) => (
              <MarqueeImage
                key={ind.slug}
                src={ind.image}
                alt={`${ind.name} production environment`}
                kind="Industry"
                name={ind.name}
              />
            ))}
          </ScrollVelocityRow>
        </div>
      </section>

      {/* Process — pinned and scroll-scrubbed on desktop */}
      <ProcessSection />

      {/* Industries */}
      <Section id="industries" tone="paper">
        <SectionHeader
          eyebrow="Industries"
          title="Where we deploy"
          intro={`The same stack, tuned to the constraints of each sector — compliance, hygiene, uptime, or all three. Six of the ${industries.length} we work in.`}
          action={
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/industries">
                All industries <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          }
        />
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.slice(0, 6).map((ind) => (
            <StaggerItem key={ind.slug} className="h-full">
              <Link
                href={`/industries/${ind.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-background transition-shadow hover:shadow-[0_20px_50px_-24px_rgba(28,26,23,0.35)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ind.image}
                    alt={`${ind.name} production environment`}
                    width={1400}
                    height={875}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-titanium-700">
                    {ind.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed">{ind.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink">
                    Sector notes
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Insights */}
      <Section>
        <SectionHeader
          eyebrow="Field notes"
          title="From the engineering blog"
          action={
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/blog">
                All articles <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          }
        />
        <Stagger className="grid grid-cols-1 hairline-grid md:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-paper">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-text">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true"> · </span>
                  {post.tag}
                </p>
                <h3 className="mt-5 font-heading text-xl font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-titanium-700">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed">{post.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 font-mono text-[11px] uppercase tracking-[0.12em] text-ink">
                  Read article
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* One partner — the single point of contact */}
      <Section tone="ink" grid>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow text-champagne">Single point of contact</p>
          </Reveal>
          <ScrollFallText
            text={partnership.title}
            as="h2"
            className="display-2 mt-5 text-champagne-100"
          />
          <Reveal delay={0.15}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-champagne-600">
              {partnership.body}
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mx-auto mt-9 max-w-xl border-t border-champagne/25 pt-7 font-heading text-lg font-bold uppercase tracking-tight text-champagne-100 md:text-xl">
              {partnership.closing}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl bg-ink grid-paper-inverse px-8 py-16 md:px-16 md:py-24">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-96 rounded-full bg-champagne/10 blur-3xl"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="eyebrow text-champagne">Next step</p>
              </Reveal>
              <RevealText
                as="h2"
                text="Bring us a bottleneck. We'll bring the drawings."
                delay={0.05}
                className="display-2 mt-5 text-champagne-100"
              />
              <Reveal delay={0.15}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-champagne-600">
                  A 30-minute call with an engineer — not a salesperson — to scope what
                  automation can do for your plant.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="lg:col-span-4">
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <Button asChild size="lg" className="w-full rounded-full bg-champagne text-ink hover:bg-white sm:w-auto">
                  <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
                    WhatsApp an Engineer
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full border-champagne/30 bg-transparent text-champagne-100 hover:bg-champagne/10 hover:text-white sm:w-auto"
                >
                  <Link href="/contact">Send a Brief</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
