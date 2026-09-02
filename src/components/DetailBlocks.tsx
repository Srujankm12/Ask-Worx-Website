import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollFallText } from "@/components/motion/ScrollFallText";
import type { Section as ContentSection, Faq } from "@/lib/site";

/**
 * Shared building blocks for the /services, /solutions and /industries detail
 * pages, so all three read as one document rather than three templates.
 */

/** Long-form prose: numbered headings with a readable measure. */
export function ProseSections({
  sections,
  eyebrow,
}: {
  sections: ContentSection[];
  eyebrow?: string;
}) {
  return (
    <div>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <div className="mt-8 space-y-14">
        {sections.map((section, i) => (
          <section key={section.heading}>
            <Reveal>
              <div className="flex items-baseline gap-5">
                <span
                  aria-hidden="true"
                  className="font-mono text-[11px] tabular-nums text-muted-text"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-heading text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
                  {section.heading}
                </h2>
              </div>
            </Reveal>
            <div className="mt-5 max-w-[68ch] space-y-4 pl-0 md:pl-10">
              {section.paragraphs.map((p) => (
                <Reveal key={p.slice(0, 28)} delay={0.06}>
                  <p className="break-words text-[15px] leading-[1.85] md:text-base">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

/** A numbered hairline list — capabilities, use cases, applications. */
export function NumberedList({
  title,
  items,
  eyebrow,
}: {
  title: string;
  items: string[];
  eyebrow?: string;
}) {
  return (
    <div>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <ScrollFallText
        as="h2"
        text={title}
        className="mt-4 font-heading text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl"
      />
      <ol className="mt-8 border-t border-line">
        {items.map((item, i) => (
          <Reveal key={item.slice(0, 28)} as="li" delay={i * 0.04}>
            <div className="flex items-baseline gap-6 border-b border-line py-4">
              <span
                aria-hidden="true"
                className="font-mono text-[11px] tabular-nums text-muted-text"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="break-words text-[15px] leading-relaxed text-ink md:text-base">
                {item}
              </span>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

/** Plain checklist for deliverables — what actually changes hands. */
export function Deliverables({
  title = "What you receive",
  items,
}: {
  title?: string;
  items: string[];
}) {
  return (
    <div>
      <ScrollFallText
        as="h2"
        text={title}
        className="font-heading text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl"
      />
      <ul className="mt-8 grid gap-px bg-line md:grid-cols-2">
        {items.map((item) => (
          <Reveal key={item.slice(0, 28)} as="li">
            <div className="flex h-full items-start gap-3 bg-background p-5">
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-titanium"
              />
              <span className="break-words text-[15px] leading-relaxed">{item}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

/** Key/value strip — specs, outcomes, sector considerations. */
export function FactGrid({
  items,
  columns = 3,
}: {
  items: { label: string; value: string }[];
  columns?: 2 | 3;
}) {
  return (
    <dl
      className={`grid hairline-grid ${
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {items.map((item) => (
        <div key={item.label} className="bg-background px-5 py-5">
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-text">
            {item.label}
          </dt>
          <dd className="mt-2 break-words font-heading text-lg font-bold uppercase tracking-tight text-ink">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Questions buyers actually ask, answered plainly. */
export function Faqs({ items, title = "Common questions" }: { items: Faq[]; title?: string }) {
  return (
    <div>
      <ScrollFallText
        as="h2"
        text={title}
        className="font-heading text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl"
      />
      <dl className="mt-8 border-t border-line">
        {items.map((faq) => (
          <Reveal key={faq.q}>
            <div className="grid gap-3 border-b border-line py-7 md:grid-cols-12 md:gap-8">
              <dt className="font-heading text-lg font-bold uppercase tracking-tight text-ink md:col-span-5">
                {faq.q}
              </dt>
              <dd className="break-words text-[15px] leading-[1.85] md:col-span-7">
                {faq.a}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </div>
  );
}
