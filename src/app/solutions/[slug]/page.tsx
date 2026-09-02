import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/Section";
import { Reveal, RevealText, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { ScrollFallText } from "@/components/motion/ScrollFallText";
import {
  ProseSections,
  NumberedList,
  Deliverables,
  Faqs,
} from "@/components/DetailBlocks";
import { solutions, company } from "@/lib/site";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  return solutions.map((sol) => ({ slug: sol.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((sol) => sol.slug === slug);

  if (!solution) {
    return { title: "Solution not found" };
  }

  return {
    title: solution.name,
    description: solution.summary,
    alternates: { canonical: `https://askworx.in/solutions/${solution.slug}` },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions.find((sol) => sol.slug === slug);

  if (!solution) {
    notFound();
  }

  const others = solutions.filter((sol) => sol.slug !== solution.slug);

  return (
    <>
      {/* Hero */}
      <Section grid className="pt-36 md:pt-44 lg:pt-48">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-text">
              <li>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 text-ink transition-colors hover:text-titanium-700"
                >
                  <ArrowLeft className="size-3.5" aria-hidden="true" />
                  All solutions
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="break-words">
                {solution.name}
              </li>
            </ol>
          </nav>
        </Reveal>

        <div className="max-w-3xl">
          <RevealText
            as="h1"
            text={solution.name}
            delay={0.05}
            className="display-1 mt-6 text-ink"
          />
          <Reveal delay={0.3}>
            <p className="lead mt-7 break-words">{solution.summary}</p>
          </Reveal>
        </div>

        <div className="mt-12 md:mt-16">
          <ParallaxImage
            src={solution.image}
            alt={`${solution.name} installed and commissioned by ${company.name}`}
            priority
            sizes="100vw"
            strength={28}
            imageClassName="aspect-[16/9] md:aspect-[21/9]"
            caption={{ label: "Solution", value: solution.name }}
          />
        </div>
      </Section>

      {/* Body + specification */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow">Detail sheet</p>
            </Reveal>
            <RevealText
              as="h2"
              text="How we build it"
              delay={0.05}
              className="display-2 mt-4"
            />
            <Reveal delay={0.15}>
              <p className="mt-5 text-sm leading-relaxed text-muted-text">
                Every deployment is documented to the last terminal, so your team can own it
                the day we hand it over.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <p className="border-l border-line-strong pl-6 text-lg leading-[1.9] text-ink break-words md:text-xl md:leading-[1.85]">
                {solution.body}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-10 grid grid-cols-1 hairline-grid sm:grid-cols-3">
                {solution.specs.map((spec) => (
                  <div key={spec.label} className="bg-background p-6">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                      {spec.label}
                    </dt>
                    <dd className="mt-3 text-[15px] leading-snug text-ink break-words">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8")}
                >
                  Ask about this
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-full px-8",
                  )}
                >
                  See how it is delivered
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
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
                text="What you should know"
                className="display-2 mt-4"
              />
              <Reveal delay={0.12}>
                <p className="mt-5 leading-relaxed text-body-text">
                  How this building block behaves in a working plant, and where it fits.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ProseSections sections={solution.sections} />
          </div>
        </div>
      </Section>

      {/* Use cases and deliverables */}
      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <NumberedList
            eyebrow="Applied"
            title="Where it earns its place"
            items={solution.useCases}
          />
          <Deliverables title="What ships with it" items={solution.deliverables} />
        </div>
      </Section>

      {/* FAQs */}
      <Section>
        <Faqs items={solution.faqs} />
      </Section>

      {/* Other solutions */}
      <Section tone="paper">
        <SectionHeader
          eyebrow="Elsewhere in the stack"
          title="Other solutions"
          intro="The layers above and below this one — most projects use three or four together."
        />
        <Stagger className="grid grid-cols-1 hairline-grid sm:grid-cols-2 lg:grid-cols-4">
          {others.map((other) => (
            <StaggerItem key={other.slug} className="h-full">
              <Link
                href={`/solutions/${other.slug}`}
                className="group flex h-full flex-col bg-background p-7 transition-colors hover:bg-paper"
              >
                <h3 className="mt-5 font-heading text-lg font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-titanium-700 break-words">
                  {other.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed line-clamp-3">{other.summary}</p>
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
