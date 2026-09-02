import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { company, services, solutions, industries } from "@/lib/site";

const columns = [
  {
    title: "Services",
    links: services.map((s) => ({ name: s.name, href: `/services/${s.slug}` })),
  },
  {
    title: "Solutions",
    links: solutions.slice(0, 6).map((s) => ({ name: s.name, href: `/solutions/${s.slug}` })),
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/askworx", Icon: Linkedin },
  { name: "Instagram", href: "https://www.instagram.com/askworx", Icon: Instagram },
];

export const Footer = () => {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt=""
                width={40}
                height={40}
                className="h-9 w-auto object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="font-heading text-xl font-extrabold uppercase tracking-[0.14em] text-ink">
                  ASKworX
                </span>
                <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.28em] text-muted-text">
                  {company.tagline}
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-body-text">
              Control systems and the software above them — engineered by one team,
              from the plant floor to the cloud.
            </p>

            <address className="mt-6 space-y-2 text-sm not-italic text-body-text">
              <a href={`mailto:${company.email}`} className="block hover:text-ink">
                {company.email}
              </a>
              <a href={company.phoneHref} className="block hover:text-ink">
                {company.phone}
              </a>
              <p className="max-w-xs text-muted-text">{company.address}</p>
            </address>

            <ul className="mt-6 flex gap-2">
              {socials.map(({ name, href, Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${company.name} on ${name}`}
                    className="flex size-10 items-center justify-center rounded-full border border-line text-body-text transition-colors hover:border-ink hover:bg-ink hover:text-white"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-labelledby={`footer-${col.title}`}>
              <h2
                id={`footer-${col.title}`}
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-text"
              >
                {col.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-body-text transition-colors hover:text-ink"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Industries — all 20 sectors, five per column so no column towers
            over the rest. grid-flow-col fills downwards, not across. */}
        <nav aria-labelledby="footer-industries" className="mt-14 border-t border-line pt-10">
          <h2
            id="footer-industries"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-text"
          >
            Industries
          </h2>
          <ul className="mt-5 grid auto-cols-fr grid-flow-col grid-rows-10 gap-x-8 gap-y-3 sm:grid-rows-7 lg:grid-rows-5">
            {industries.map((ind) => (
              <li key={ind.slug}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="text-sm text-body-text transition-colors hover:text-ink"
                >
                  {ind.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-text">
            © {new Date().getFullYear()} {company.legal}. All rights reserved.
          </p>
          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-ink hover:underline"
          >
            Start a project
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};
