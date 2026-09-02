"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal, RevealText, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { posts, formatDate } from "@/lib/site";

export default function BlogPage() {
  const [lead, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background pt-20">
        <div aria-hidden="true" className="absolute inset-0 grid-paper opacity-70" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent"
        />

        <div className="container-custom relative pb-14 pt-16 md:pb-20 md:pt-24">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow">
                Field notes <span aria-hidden="true">·</span> {posts.length} articles
              </p>
            </Reveal>

            <RevealText
              as="h1"
              text="Notes from the plant floor."
              delay={0.05}
              className="display-1 mt-6 text-ink"
            />

            <Reveal delay={0.35}>
              <p className="lead mt-8">
                Working notes on control systems, industrial data, and the economics of
                automation — written by the engineers doing the commissioning, not a content
                desk.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lead article */}
      <Section tone="paper">
        <Reveal>
          <div className="mb-12 flex items-center gap-5 md:mb-14">
            <p className="eyebrow shrink-0">01 <span aria-hidden="true">—</span> Latest</p>
            <span aria-hidden="true" className="h-px flex-1 bg-line-strong" />
          </div>
        </Reveal>

        <article>
          <Link
            href={`/blog/${lead.slug}`}
            className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
          >
            <div className="lg:col-span-7">
              <ParallaxImage
                src={lead.image}
                alt={`Illustration for the article “${lead.title}”`}
                sizes="(min-width: 1024px) 58vw, 100vw"
                imageClassName="aspect-[16/10]"
                caption={{ label: lead.tag, value: lead.readingTime }}
              />
            </div>

            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-text">
                <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                <span aria-hidden="true"> · </span>
                {lead.tag}
                <span aria-hidden="true"> · </span>
                {lead.readingTime}
              </p>

              <h2 className="mt-5 font-heading text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-ink transition-colors group-hover:text-titanium-700 md:text-4xl break-words">
                {lead.title}
              </h2>

              <p className="mt-5 max-w-[62ch] text-[15px] leading-[1.85] break-words">
                {lead.excerpt}
              </p>

              <span className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink">
                Read article
                <ArrowRight
                  className="size-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </div>
          </Link>
        </article>
      </Section>

      {/* Archive */}
      <Section>
        <Reveal>
          <div className="mb-12 flex items-center gap-5 md:mb-14">
            <p className="eyebrow shrink-0">02 <span aria-hidden="true">—</span> Archive</p>
            <span aria-hidden="true" className="h-px flex-1 bg-line-strong" />
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 hairline-grid md:grid-cols-2">
          {rest.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <article className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col bg-background transition-colors hover:bg-paper"
                >
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt=""
                      width={1600}
                      height={900}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent"
                    />
                    <span className="absolute bottom-3 left-5 font-mono text-[10px] uppercase tracking-[0.18em] text-champagne">
                      {post.tag}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-text">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span aria-hidden="true"> · </span>
                      {post.readingTime}
                    </p>

                    <h2 className="mt-5 font-heading text-2xl font-bold uppercase leading-snug tracking-tight text-ink transition-colors group-hover:text-titanium-700 break-words">
                      {post.title}
                    </h2>

                    <p className="mt-3.5 max-w-[62ch] text-[15px] leading-[1.8] break-words">
                      {post.excerpt}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-1.5 pt-8 font-mono text-[11px] uppercase tracking-[0.12em] text-ink">
                      Read article
                      <ArrowUpRight
                        className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

    </>
  );
}
