import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal, RevealText, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { ScrollFallText } from "@/components/motion/ScrollFallText";
import {
  ProseSections,
  NumberedList,
  FactGrid,
  Faqs,
} from "@/components/DetailBlocks";
import { industries, services, company } from "@/lib/site";

/** Which disciplines we usually lead with in each sector. */
const relevantServices: Record<string, string[]> = {
  automotive: ["automation", "iiot", "software"],
  pharma: ["automation", "software", "iiot"],
  "food-beverage": ["automation", "iiot", "whatsapp"],
  "renewable-energy": ["iiot", "automation", "software"],
  "oil-gas": ["automation", "iiot", "whatsapp"],
  textiles: ["automation", "iiot", "software"],
};

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((ind) => ind.slug === slug);

  if (!industry) {
    return { title: "Industry not found" };
  }

  return {
    title: `${industry.name} Automation`,
    description: industry.summary,
    alternates: { canonical: `https://askworx.in/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.name} — ${company.name}`,
      description: industry.summary,
      url: `https://askworx.in/industries/${industry.slug}`,
      images: [{ url: industry.image }],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((ind) => ind.slug === slug);

  if (!industry) {
    notFound();
  }

  const picks = relevantServices[industry.slug] ?? ["automation", "iiot", "software"];
  const sectorServices = picks
    .map((s) => services.find((svc) => svc.slug === s))
    .filter((svc): svc is (typeof services)[number] => Boolean(svc));

  const others = industries.filter((ind) => ind.slug !== industry.slug);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-background pt-20">
        <div aria-hidden="true" className="absolute inset-0 grid-paper opacity-70" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent"
        />

        <div className="container-custom relative pb-12 pt-12 md:pb-16 md:pt-16">
          <Reveal>
            <nav aria-label="Breadcrumb">
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-text transition-colors hover:text-ink"
              >
                <ArrowLeft className="size-3.5" aria-hidden="true" />
                All industries
              </Link>
            </nav>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">

              <RevealText
                as="h1"
                text={industry.name}
                delay={0.1}
                className="display-1 mt-5 text-ink"
              />

              <Reveal delay={0.3}>
                <p className="lead mt-7 max-w-2xl break-words">{industry.summary}</p>
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.2} className="lg:col-span-5">
              <dl className="grid grid-cols-2 hairline-grid text-sm">
                <div className="bg-background p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                    Scope
                  </dt>
                  <dd className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-ink">
                    {company.tagline}
                  </dd>
                </div>
                <div className="bg-background p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                    Approach
                  </dt>
                  <dd className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-ink">
                    Retrofit first
                  </dd>
                </div>
                <div className="bg-background p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                    Base
                  </dt>
                  <dd className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-ink">
                    {company.city}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="mt-12 md:mt-16">
            <ParallaxImage
              src={industry.image}
              alt={`${industry.name} production environment served by ${company.name}`}
              priority
              sizes="100vw"
              imageClassName="aspect-[16/9] md:aspect-[21/9]"
              caption={{ label: "Industry", value: industry.name }}
            />
          </div>
        </div>
      </section>

      {/* The brief + challenges */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">The brief</p>
            </Reveal>
            <RevealText
              as="h2"
              text="What this sector asks of a control system"
              delay={0.05}
              className="display-2 mt-4 text-ink"
            />
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-[68ch] text-[15px] leading-[1.9] break-words md:text-base">
                {industry.body}
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-5 max-w-[68ch] text-[15px] leading-[1.9] break-words md:text-base">
                Every engagement starts the same way: we walk the floor, read the existing
                drawings, and write down what is actually installed before anyone proposes a
                platform. The sector decides the priorities — the plant decides the design.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                Constraints we engineer around
              </p>
            </Reveal>
            <Stagger className="mt-5 border-t border-line">
              {industry.challenges.map((ch, i) => (
                <StaggerItem key={ch}>
                  <div className="flex items-baseline gap-5 border-b border-line py-4">
                    <span className="font-mono text-[11px] tracking-[0.16em] text-titanium-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-heading text-lg font-bold uppercase tracking-tight text-ink">
                      {ch}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      {/* Services we bring */}
      <Section>
        <Reveal>
          <p className="eyebrow">What we bring</p>
        </Reveal>
        <RevealText
          as="h2"
          text={`Disciplines we lead with in ${industry.name.toLowerCase()}`}
          delay={0.05}
          className="display-2 mt-4 text-ink"
        />
        <Reveal delay={0.15}>
          <p className="lead mt-5 max-w-2xl">
            The same engineering team carries the work from the panel to the dashboard, so
            nothing is lost at a handover between vendors.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 hairline-grid md:grid-cols-3">
          {sectorServices.map((svc) => (
            <StaggerItem key={svc.slug} className="h-full">
              <Link
                href={`/services/${svc.slug}`}
                className="group flex h-full flex-col bg-background p-7 transition-colors hover:bg-paper"
              >
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-titanium-700">
                  {svc.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed">{svc.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-ink">
                  Service detail
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

      {/* Long-form detail, with the section title pinned alongside */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="eyebrow">In detail</p>
              </Reveal>
              <ScrollFallText
                as="h2"
                text="What shapes the work here"
                className="display-2 mt-4"
              />
              <Reveal delay={0.12}>
                <p className="mt-5 leading-relaxed text-body-text">
                  The constraints that decide how a system for this sector gets engineered.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ProseSections sections={industry.sections} />
          </div>
        </div>
      </Section>

      {/* Applications and sector considerations */}
      <Section tone="paper">
        <NumberedList
          eyebrow="Typical scope"
          title="What we are brought in to do"
          items={industry.applications}
        />
        <div className="mt-16">
          <Reveal>
            <p className="eyebrow">Engineering constraints</p>
          </Reveal>
          <div className="mt-6">
            <FactGrid items={industry.considerations} />
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section>
        <Faqs items={industry.faqs} />
      </Section>

      {/* Other industries */}
      <Section tone="paper">
        <Reveal>
          <p className="eyebrow">Elsewhere</p>
        </Reveal>
        <RevealText
          as="h2"
          text="Other industries"
          delay={0.05}
          className="display-2 mt-4 text-ink"
        />

        <Stagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {others.map((ind) => (
            <StaggerItem key={ind.slug} className="h-full">
              <Link
                href={`/industries/${ind.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-background transition-shadow hover:shadow-[0_20px_50px_-24px_rgba(28,26,23,0.35)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ind.image}
                    alt=""
                    width={1400}
                    height={875}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-titanium-700">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed">{ind.summary}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

    </>
  );
}
