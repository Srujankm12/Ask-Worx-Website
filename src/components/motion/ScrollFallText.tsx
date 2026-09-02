"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A heading whose words fall into place as the section scrolls in.
 *
 * Scroll POSITION drives it, so the words settle as you approach the section
 * and lift back out if you scroll away — it reads as something you are
 * steering, not a one-shot fade. Words are staggered by index, so the line
 * lands left to right rather than all at once.
 *
 * Only transform and opacity animate, and the whole effect is skipped under
 * prefers-reduced-motion.
 */

function FallWord({
  progress,
  index,
  children,
}: {
  progress: MotionValue<number>;
  index: number;
  children: React.ReactNode;
}) {
  // Each word starts a little later than the one before it, but the stagger
  // is capped so long headings still finish inside the scroll window.
  const start = Math.min(index * 0.06, 0.42);
  const end = start + 0.5;

  const y = useTransform(progress, [start, end], ["-85%", "0%"]);
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const rotate = useTransform(progress, [start, end], [-7, 0]);

  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        style={{ y, opacity, rotate }}
        className="inline-block origin-bottom-left will-change-transform"
      >
        {children}
      </motion.span>
    </span>
  );
}

export function ScrollFallText({
  text,
  className,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Runs from "this heading is one viewport away" to "it has reached the
  // upper third of the screen", which is where a heading naturally settles.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 35%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.35,
  });

  if (reduced) {
    return <Tag className={cn("[text-wrap:balance]", className)}>{text}</Tag>;
  }

  const words = text.split(" ");

  return (
    <div ref={ref}>
      <Tag className={cn("[text-wrap:balance]", className)}>
        {words.map((word, i) => (
          <FallWord key={`${word}-${i}`} progress={progress} index={i}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </FallWord>
        ))}
      </Tag>
    </div>
  );
}
