"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, company } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Scroll position is an external store, so read it without an effect. */
const subscribeToScroll = (onChange: () => void) => {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
};

export const Navbar = () => {
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 12,
    () => false,
  );
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-line bg-background shadow-[0_1px_20px_-12px_rgba(28,26,23,0.5)]"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <nav
        aria-label="Main"
        className="container-custom flex h-20 items-center justify-between gap-8"
      >
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            priority
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
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

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200",
                  isActive(item.href)
                    ? "text-ink"
                    : "text-body-text hover:text-ink",
                )}
              >
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden rounded-full px-6 sm:inline-flex">
            <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
              Talk to an Engineer
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open navigation menu"
              className={cn(
                "inline-flex size-10 items-center justify-center rounded-lg text-body-text transition-colors hover:bg-secondary hover:text-ink lg:hidden",
              )}
            >
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm overscroll-contain">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex h-full flex-col px-6 pb-8 pt-4">
                <ul className="flex flex-col gap-1">
                  {nav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className={cn(
                          "block rounded-lg px-3 py-3 font-heading text-2xl font-bold uppercase tracking-tight transition-colors",
                          isActive(item.href)
                            ? "bg-secondary text-ink"
                            : "text-body-text hover:text-ink",
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-3 pt-8">
                  <Button asChild className="w-full rounded-full">
                    <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
                      Talk to an Engineer
                    </a>
                  </Button>
                  <a
                    href={`mailto:${company.email}`}
                    className="block text-center font-mono text-xs uppercase tracking-[0.15em] text-muted-text hover:text-ink"
                  >
                    {company.email}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Scroll progress — decorative */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="h-px origin-left bg-ink/70"
      />
    </header>
  );
};
