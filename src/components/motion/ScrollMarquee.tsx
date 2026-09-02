"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
  wrap,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A row that drifts horizontally on its own and speeds up with scroll —
 * and flips direction when the user scrolls the other way.
 * Children are repeated so the loop is seamless.
 */
export function ScrollVelocityRow({
  children,
  baseVelocity = 2,
  className,
  repeat = 3,
}: {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
  repeat?: number;
}) {
  const reduced = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1200], [0, 4], {
    clamp: false,
  });

  // Wrap across one copy's width so the loop never shows a seam.
  const x = useTransform(baseX, (v) => `${wrap(-100 / repeat, 0, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    const factor = velocityFactor.get();
    if (factor < 0) directionFactor.current = -1;
    else if (factor > 0) directionFactor.current = 1;

    moveBy += directionFactor.current * moveBy * Math.abs(factor);
    baseX.set(baseX.get() + moveBy);
  });

  const copies = Array.from({ length: repeat });

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <motion.div
        style={reduced ? undefined : { x }}
        className="flex w-max flex-nowrap"
      >
        {copies.map((_, i) => (
          <div key={i} aria-hidden={i > 0} className="flex flex-nowrap">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/**
 * Scroll-linked horizontal drift: the element slides from `from` to `to`
 * as it travels through the viewport. Pure transform, so it stays smooth.
 */
export function ScrollShift({
  children,
  from = -8,
  to = 8,
  className,
}: {
  children: React.ReactNode;
  from?: number;
  to?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [`${from}%`, `${to}%`]);
  const x = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div ref={ref} className={cn("w-full", className)}>
      <motion.div style={reduced ? undefined : { x }}>{children}</motion.div>
    </div>
  );
}

/** One image tile inside a velocity row, captioned with what it shows. */
export function MarqueeImage({
  src,
  alt,
  name,
  kind,
}: {
  src: string;
  alt: string;
  name: string;
  kind?: string;
}) {
  return (
    <figure className="mr-4 w-[260px] shrink-0 overflow-hidden rounded-xl border border-line bg-background sm:mr-6 sm:w-[340px] lg:w-[420px]">
      <div className="relative aspect-[4/3]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 340px, 260px"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent"
        />
        <figcaption className="absolute inset-x-0 bottom-0 p-4">
          {kind && (
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-champagne">
              {kind}
            </span>
          )}
          <span className="mt-1 block font-heading text-lg font-bold uppercase leading-tight tracking-tight text-white">
            {name}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

/** A word repeated in a velocity row — the big scrolling wordmark band. */
export function MarqueeWord({
  children,
  onInk = false,
}: {
  children: React.ReactNode;
  onInk?: boolean;
}) {
  return (
    <span className="flex shrink-0 items-center">
      <span
        className={cn(
          "font-heading text-[clamp(2rem,5vw,4.5rem)] font-extrabold uppercase tracking-tight",
          onInk ? "text-champagne-100" : "text-ink",
        )}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "mx-6 size-2 shrink-0 rounded-full sm:mx-10",
          onInk ? "bg-champagne/50" : "bg-titanium/50",
        )}
      />
    </span>
  );
}
