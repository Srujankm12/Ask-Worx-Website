import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal, RevealText } from "@/components/motion/Reveal";
import { company, formatDate } from "@/lib/site";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  contact?: boolean;
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Section className="pb-0 pt-28 md:pt-36" grid>
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <RevealText as="h1" text={title} delay={0.05} className="display-1 mt-5 text-ink" />
          <Reveal delay={0.15}>
            <p className="lead mt-6">{intro}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-text">
              Last updated{" "}
              <time dateTime={updated}>{formatDate(updated)}</time>
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Contents */}
          <nav aria-labelledby="legal-contents" className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <h2
                id="legal-contents"
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-text"
              >
                Contents
              </h2>
              <ol className="mt-5 space-y-2.5">
                {sections.map((s, i) => (
                  <li key={s.id} className="flex gap-3">
                    <span aria-hidden="true" className="font-mono text-[11px] text-muted-text">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-body-text transition-colors hover:text-ink"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          {/* Body */}
          <div className="lg:col-span-9">
            <div className="max-w-[68ch] space-y-14">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <Reveal>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-titanium-700">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-ink md:text-3xl">
                      {s.title}
                    </h2>
                  </Reveal>

                  <Reveal delay={0.08}>
                    <div className="mt-5 space-y-4 break-words text-[15px] leading-[1.85] text-body-text">
                      {s.paragraphs?.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}

                      {s.list && (
                        <ul className="space-y-3">
                          {s.list.map((item) => (
                            <li key={item.slice(0, 32)} className="flex gap-3">
                              <span
                                aria-hidden="true"
                                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-titanium"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {s.contact && (
                        <ul className="not-prose space-y-px overflow-hidden rounded-xl border border-line bg-line">
                          <li>
                            <a
                              href={`mailto:${company.email}`}
                              className="flex items-center gap-3 bg-background p-4 transition-colors hover:bg-paper"
                            >
                              <Mail className="size-4 shrink-0 text-titanium-700" aria-hidden="true" />
                              <span className="break-all text-ink">{company.email}</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href={company.phoneHref}
                              className="flex items-center gap-3 bg-background p-4 transition-colors hover:bg-paper"
                            >
                              <Phone className="size-4 shrink-0 text-titanium-700" aria-hidden="true" />
                              <span className="text-ink">{company.phone}</span>
                            </a>
                          </li>
                          <li className="flex items-start gap-3 bg-background p-4">
                            <MapPin className="mt-0.5 size-4 shrink-0 text-titanium-700" aria-hidden="true" />
                            <address className="not-italic text-body-text">{company.address}</address>
                          </li>
                        </ul>
                      )}
                    </div>
                  </Reveal>
                </section>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
