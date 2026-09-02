"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/Section";
import { Reveal, RevealText, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { solutions, company } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <Section grid className="pt-36 md:pt-44 lg:pt-48">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Solutions</p>
            </Reveal>

            <RevealText
              as="h1"
              text="The building blocks."
              delay={0.05}
              className="display-1 mt-6 text-ink"
            />
            <RevealText
              as="p"
              text="Ground to cloud."
              delay={0.22}
              className="display-1 titanium-sheen"
            />

            <Reveal delay={0.45}>
              <p className="lead mt-8 max-w-xl break-words">
                Eleven building blocks we specify, supply, and commission — from the sensor and
                the drive on the machine to the analytics on your screen. Each one has a detail
                sheet, and each one is chosen to be owned by your team afterwards.
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
                  href="/services"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-full px-8",
                  )}
                >
                  See the services
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.2} className="lg:col-span-5">
            <ParallaxImage
              src={solutions[0].image}
              alt={`Control hardware commissioned by ${company.name} on a production line`}
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              caption={{ label: "Stack", value: "Ground → Cloud" }}
            />
          </Reveal>
        </div>
      </Section>

      {/* Index grid */}
      <Section tone="paper">
        <SectionHeader
          eyebrow="Index"
          title="Eleven blocks, one stack"
          intro="Sensors, drives and robots at the bottom, controllers and power above them, networks and gateways between — and the analytics that only work because the layers below were done properly."
        />

        <Stagger className="grid grid-cols-1 hairline-grid sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((sol) => (
            <StaggerItem key={sol.slug} className="h-full">
              <Link
                href={`/solutions/${sol.slug}`}
                className="group flex h-full flex-col bg-background p-7 transition-colors hover:bg-paper"
              >

                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-titanium-700 break-words">
                  {sol.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed break-words">{sol.summary}</p>

                <dl className="mt-6 space-y-3 border-t border-line pt-5">
                  {sol.specs.slice(0, 2).map((spec) => (
                    <div key={spec.label}>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-text">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 text-sm leading-snug text-ink break-words line-clamp-2">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-ink">
                  Detail sheet
                  <ArrowUpRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

    </>
  );
}
