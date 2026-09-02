"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

/**
 * A vertical rail whose fill grows with scroll, lighting each node as the
 * fill's tip reaches it. Used on /about for the Ground-to-Cloud framework, so
 * the reader physically descends the stack as they read it.
 *
 * Thresholds are measured from layout rather than assumed to be evenly spaced —
 * the nodes have different heights, so an even split would light them early.
 */

export type RailItem = {
  key: string;
  title: string;
  role: string;
  body: string;
  points: string[];
};

function RailNode({
  item,
  index,
  progress,
  threshold,
  innerRef,
  alwaysOn,
}: {
  item: RailItem;
  index: number;
  progress: MotionValue<number>;
  threshold: number;
  innerRef: (el: HTMLDivElement | null) => void;
  alwaysOn: boolean;
}) {
  const [active, setActive] = useState(alwaysOn);

  // Re-evaluate when the measured threshold arrives (it lands a frame after
  // mount) and when the page is loaded already scrolled past this node.
  // Deferred to the next frame so it is not a synchronous setState in render.
  useEffect(() => {
    if (alwaysOn) return;
    const id = requestAnimationFrame(() => setActive(progress.get() >= threshold));
    return () => cancelAnimationFrame(id);
  }, [progress, threshold, alwaysOn]);

  useMotionValueEvent(progress, "change", (v) => {
    if (!alwaysOn) setActive(v >= threshold);
  });

  const lit = alwaysOn || active;

  return (
    <div ref={innerRef} className="relative pl-10 md:pl-14">
      {/* Node marker — sits on the rail */}
      <span
        aria-hidden="true"
        className={[
          "absolute left-0 top-2 flex size-[22px] -translate-x-[10.5px] items-center justify-center",
          "rounded-full border transition-all duration-500",
          lit
            ? "border-ink bg-ink"
            : "border-line-strong bg-background",
        ].join(" ")}
      >
        <span
          className={[
            "size-1.5 rounded-full transition-colors duration-500",
            lit ? "bg-champagne" : "bg-line-strong",
          ].join(" ")}
        />
      </span>

      <h3 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span
          className={[
            "font-heading text-3xl font-extrabold uppercase tracking-tight transition-colors duration-500 md:text-4xl",
            lit ? "text-ink" : "text-ink/25",
          ].join(" ")}
        >
          {item.title}
        </span>
        <span
          className={[
            "font-heading text-sm font-bold uppercase tracking-[0.08em] transition-colors duration-500",
            lit ? "text-titanium-700" : "text-muted-text/40",
          ].join(" ")}
        >
          {item.role}
        </span>
      </h3>

      <p
        className={[
          "mt-3 max-w-[54ch] text-[15px] leading-[1.85] transition-colors duration-500",
          lit ? "text-body-text" : "text-body-text/35",
        ].join(" ")}
      >
        {item.body}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {item.points.map((point, i) => (
          <li key={point}>
            <span
              className={[
                "inline-flex rounded-full border px-3.5 py-1.5 font-mono text-[11px]",
                "uppercase tracking-[0.06em] transition-all duration-500",
                lit
                  ? "border-line bg-paper text-body-text"
                  : "border-line/50 bg-transparent text-muted-text/30",
              ].join(" ")}
              style={{ transitionDelay: lit ? `${60 + i * 35}ms` : "0ms" }}
            >
              {point}
            </span>
          </li>
        ))}
      </ul>

      {/* Layer number, ghosted behind the node on wide screens */}
      <span
        aria-hidden="true"
        className={[
          "pointer-events-none absolute -top-4 right-0 hidden font-heading text-[5rem]",
          "font-extrabold leading-none transition-colors duration-500 lg:block",
          lit ? "text-champagne" : "text-champagne/30",
        ].join(" ")}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export function ScrollRail({ items }: { items: RailItem[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [thresholds, setThresholds] = useState<number[]>([]);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 72%", "end 60%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const measure = () => {
      const rail = railRef.current;
      if (!rail) return;
      const usable = rail.offsetHeight;
      setThresholds(
        nodeRefs.current.map((el) => {
          if (!el || usable <= 0) return 1;
          // Marker centre: node top + top-2 (8px) + half of the 22px marker.
          const centre = el.offsetTop + 8 + 11;
          return Math.min(1, Math.max(0, centre / usable));
        }),
      );
    };

    measure();
    // Fonts settle after first paint and shift every offsetTop below them.
    document.fonts?.ready.then(measure).catch(() => {});
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items.length]);

  return (
    <div ref={railRef} className="relative">
      {/* Static rail */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-px bg-line-strong"
      />
      {/* Fill — grows as the section scrolls through */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-px origin-top bg-ink"
        style={{ scaleY: reduced ? 1 : scaleY }}
      />

      <div className="flex flex-col gap-16 md:gap-20">
        {items.map((item, i) => (
          <RailNode
            key={item.key}
            item={item}
            index={i}
            progress={scrollYProgress}
            threshold={thresholds[i] ?? 1}
            alwaysOn={!!reduced}
            innerRef={(el) => {
              nodeRefs.current[i] = el;
            }}
          />
        ))}
      </div>
    </div>
  );
}
