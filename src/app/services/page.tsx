"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/Section";
import { Reveal, RevealText, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ScrollFallText } from "@/components/motion/ScrollFallText";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { services, company } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section grid className="pt-36 md:pt-44 lg:pt-48">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">Services</p>
          </Reveal>

          <RevealText
            as="h1"
            text="Six disciplines."
            delay={0.05}
            className="display-1 mt-6 text-ink"
          />
          <RevealText
            as="p"
            text="One engineering team."
            delay={0.22}
            className="display-1 titanium-sheen"
          />

          <Reveal delay={0.45}>
            <p className="lead mt-8 max-w-2xl break-words">
              Control systems on the floor, the software above them, and the growth work
              around both — scoped, built, and supported by the same people who commission
              the line. Nothing here is handed to a subcontractor.
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8")}
              >
                Talk to an Engineer
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <Link
                href="/solutions"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full px-8",
                )}
              >
                See the building blocks
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Index strip — engineering drawing register */}
        <Stagger className="mt-16 grid grid-cols-1 hairline-grid sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <StaggerItem key={svc.slug} className="h-full">
              <Link
                href={`/services/${svc.slug}`}
                className="group flex h-full items-baseline gap-4 bg-background px-5 py-4 transition-colors hover:bg-paper"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink break-words">
                  {svc.name}
                </span>
                <ArrowUpRight
                  className="ml-auto size-3.5 shrink-0 text-muted-text transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Full service rows */}
      <Section tone="paper">
        <div className="space-y-24 md:space-y-32">
          {services.map((svc) => {
            return (
              <article
                key={svc.slug}
                id={svc.slug}
                className="grid gap-10 scroll-mt-28 lg:grid-cols-12 lg:gap-16"
              >
                {/* Left column pins and holds completely still while the
                    right-hand list scrolls past it, releasing at the row end.
                    The cell must stretch to the full row height (the grid's
                    default align-self) — constraining it to its content leaves
                    `sticky` no room to travel and it scrolls away instead. */}
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-32">
                    <Reveal>
                      <p className="eyebrow">{svc.name}</p>
                    </Reveal>

                    <ScrollFallText
                      as="h2"
                      text={svc.title}
                      className="mt-4 font-heading text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl"
                    />

                    <Reveal delay={0.12}>
                      <p className="mt-5 break-words leading-relaxed text-body-text">
                        {svc.summary}
                      </p>
                    </Reveal>

                    <Reveal delay={0.2}>
                      <Link
                        href={`/services/${svc.slug}`}
                        className="mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:text-titanium-700"
                      >
                        Explore this service
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    </Reveal>
                  </div>
                </div>

                {/* Right column: everything that scrolls. */}
                <div className="lg:col-span-8">
                  <ParallaxImage
                    src={svc.image}
                    alt={`${svc.name} engineering work at ${company.name}`}
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    imageClassName="aspect-[16/9]"
                    caption={{ label: "Service", value: svc.name }}
                  />

                  <Reveal delay={0.1}>
                    <p className="mt-10 break-words text-[15px] leading-[1.85] md:text-base">
                      {svc.body}
                    </p>
                  </Reveal>

                  <Stagger className="mt-10 border-t border-line">
                    {svc.capabilities.map((cap, ci) => (
                      <StaggerItem key={cap}>
                        <div className="flex items-baseline gap-6 border-b border-line py-4">
                          <span className="font-mono text-[11px] tabular-nums text-muted-text">
                            {String(ci + 1).padStart(2, "0")}
                          </span>
                          <span className="break-words font-heading text-lg font-bold uppercase tracking-tight text-ink">
                            {cap}
                          </span>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>

                  <Reveal delay={0.15}>
                    <dl className="mt-10 grid grid-cols-2 hairline-grid">
                      {svc.outcomes.map((out) => (
                        <div key={out.label} className="bg-background px-5 py-4">
                          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                            {out.label}
                          </dt>
                          <dd className="mt-2 break-words font-heading text-lg font-bold uppercase tracking-tight text-ink">
                            {out.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

    </>
  );
}
