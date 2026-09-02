import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal, RevealText, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { posts, company, formatDate } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://askworx.in/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://askworx.in/blog/${post.slug}`,
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = posts.filter((p) => p.slug !== post.slug);

  return (
    <>
      {/* Article header */}
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
                href="/blog"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-text transition-colors hover:text-ink"
              >
                <ArrowLeft className="size-3.5" aria-hidden="true" />
                All articles
              </Link>
            </nav>
          </Reveal>

          <div className="mt-10 max-w-4xl">
            <Reveal delay={0.05}>
              <p className="eyebrow">
                {post.tag}
                <span aria-hidden="true"> · </span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true"> · </span>
                {post.readingTime}
              </p>
            </Reveal>

            <RevealText
              as="h1"
              text={post.title}
              delay={0.1}
              className="display-2 mt-6 text-ink"
            />

            <Reveal delay={0.4}>
              <p className="lead mt-7 max-w-[68ch] break-words">{post.excerpt}</p>
            </Reveal>
          </div>

          <div className="mt-12 md:mt-16">
            <ParallaxImage
              src={post.image}
              alt={`Illustration for the article “${post.title}”`}
              priority
              sizes="100vw"
              imageClassName="aspect-[16/9] md:aspect-[21/9]"
              caption={{ label: post.tag, value: post.readingTime }}
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <Section tone="paper">
        <article className="mx-auto max-w-[68ch] break-words">
          {post.body.map((block, i) => (
            <section key={block.heading} className={i === 0 ? "" : "mt-14"}>
              <Reveal>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </Reveal>
              <RevealText
                as="h2"
                text={block.heading}
                delay={0.05}
                className="mt-3 font-heading text-2xl font-extrabold uppercase leading-[1.1] tracking-tight text-ink md:text-3xl"
              />
              <div
                aria-hidden="true"
                className="mt-6 h-px w-full bg-line"
              />
              {block.paragraphs.map((para, j) => (
                <Reveal key={para.slice(0, 48)} delay={0.1 + j * 0.05}>
                  <p className="mt-6 text-[16px] leading-[1.9] text-body-text break-words md:text-[17px]">
                    {para}
                  </p>
                </Reveal>
              ))}
            </section>
          ))}

          <Reveal>
            <p className="mt-14 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-text">
              Written by the {company.name} engineering team
              <span aria-hidden="true"> · </span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </p>
          </Reveal>
        </article>
      </Section>

      {/* Related reading */}
      <Section>
        <Reveal>
          <p className="eyebrow">Related reading</p>
        </Reveal>
        <RevealText
          as="h2"
          text="More field notes"
          delay={0.05}
          className="display-2 mt-4 text-ink"
        />

        <Stagger className="mt-12 grid grid-cols-1 hairline-grid md:grid-cols-2">
          {related.map((rel) => (
            <StaggerItem key={rel.slug} className="h-full">
              <article className="h-full">
                <Link
                  href={`/blog/${rel.slug}`}
                  className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-paper"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-text">
                    <time dateTime={rel.date}>{formatDate(rel.date)}</time>
                    <span aria-hidden="true"> · </span>
                    {rel.tag}
                    <span aria-hidden="true"> · </span>
                    {rel.readingTime}
                  </p>

                  <h3 className="mt-5 font-heading text-xl font-bold uppercase leading-snug tracking-tight text-ink transition-colors group-hover:text-titanium-700 break-words">
                    {rel.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed break-words">{rel.excerpt}</p>

                  <span className="mt-auto inline-flex items-center gap-1.5 pt-8 font-mono text-[11px] uppercase tracking-[0.12em] text-ink">
                    Read article
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
