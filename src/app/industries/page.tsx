import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal, RevealText, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { industries, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "The sectors ASKworX engineers for — from automotive, pharmaceuticals and food and beverage to EV and battery, semiconductor, water treatment, data centres and aerospace. One automation stack, tuned to each set of constraints.",
  alternates: { canonical: "https://askworx.in/industries" },
};

export default function IndustriesPage() {
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
                  Industries <span aria-hidden="true">·</span> {industries.length} sectors
                </p>
              </Reveal>

              <RevealText
                as="h1"
                text="Where we deploy."
                delay={0.05}
                className="display-1 mt-6 text-ink"
              />

              <Reveal delay={0.3}>
                <p className="lead mt-8 max-w-2xl">
                  The stack barely changes from sector to sector — controllers, supervision,
                  telemetry, and the software above them. What changes is the constraint that
                  decides the design: takt time here, an audit trail there, a washdown cycle
                  somewhere else.
                </p>
              </Reveal>

              <Reveal delay={0.42}>
                <p className="mt-6 max-w-2xl text-[15px] leading-[1.85]">
                  These are the environments {company.name} works in most often, and the
                  problems each one brings to the first site walk.
                </p>
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.2} className="lg:col-span-5">
              <div className="rounded-xl border border-line bg-paper p-6 md:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                  Sector index
                </p>
                <ul className="mt-4 divide-y divide-line">
                  {industries.map((ind) => (
                    <li
                      key={ind.slug}
                      className="flex items-baseline justify-between gap-4 py-2.5"
                    >
                      <span className="font-heading text-sm font-bold uppercase tracking-tight text-ink">
                        {ind.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sector cards */}
      <Section tone="paper">
        <Reveal>
          <div className="mb-12 flex items-center gap-5 md:mb-16">
            <p className="eyebrow shrink-0">01 <span aria-hidden="true">—</span> Sector notes</p>
            <span aria-hidden="true" className="h-px flex-1 bg-line-strong" />
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:gap-x-14 lg:gap-y-20">
          {industries.map((ind) => (
            <StaggerItem key={ind.slug} className="h-full">
              <article className="h-full">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group flex h-full flex-col"
                >
                  <ParallaxImage
                    src={ind.image}
                    alt={`${ind.name} production environment`}
                    sizes="(min-width: 768px) 45vw, 100vw"
                    imageClassName="aspect-[16/10]"
                    strength={28}
                    caption={{ label: "Industry", value: ind.name }}
                  />

                  <h2 className="mt-7 font-heading text-2xl font-extrabold uppercase tracking-tight text-ink transition-colors group-hover:text-titanium-700 md:text-3xl">
                    {ind.name}
                  </h2>

                  <p className="mt-3.5 max-w-prose text-[15px] leading-[1.8] break-words">
                    {ind.summary}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {ind.challenges.map((ch) => (
                      <li key={ch}>
                        <span className="inline-flex rounded-full border border-line bg-background px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-body-text">
                          {ch}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <span className="mt-auto inline-flex items-center gap-1.5 pt-7 font-mono text-[11px] uppercase tracking-[0.12em] text-ink">
                    Sector notes
                    <ArrowUpRight
                      className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

    </>
  );
}
