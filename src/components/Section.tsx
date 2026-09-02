"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollFallText } from "@/components/motion/ScrollFallText";

export function Section({
  children,
  className,
  id,
  tone = "white",
  grid = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "white" | "paper" | "ink";
  grid?: boolean;
}) {
  const tones = {
    white: "bg-background",
    paper: "bg-paper border-y border-line",
    ink: "bg-ink text-champagne-600",
  };
  return (
    <section
      id={id}
      className={cn(
        "section-padding scroll-mt-20",
        tones[tone],
        grid && (tone === "ink" ? "grid-paper-inverse" : "grid-paper"),
        className,
      )}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  action,
  onInk = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  onInk?: boolean;
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 flex flex-col gap-6",
        centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto")}>
        <Reveal>
          <p className={cn("eyebrow", onInk && "text-champagne")}>{eyebrow}</p>
        </Reveal>
        <ScrollFallText
          text={title}
          as="h2"
          className={cn("display-2 mt-4", onInk && "text-champagne-100")}
        />
        {intro && (
          <Reveal delay={0.15}>
            <p className={cn("lead mt-5", onInk && "text-champagne-600")}>{intro}</p>
          </Reveal>
        )}
      </div>
      {action && <Reveal delay={0.2} className="shrink-0">{action}</Reveal>}
    </div>
  );
}
