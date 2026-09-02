"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Image that drifts slowly against the scroll and reveals from a mask.
 * Only transform/opacity animate, so it stays on the compositor.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  strength = 40,
  caption,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  strength?: number;
  caption?: { label: string; value: string };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.06]);

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-line bg-secondary shadow-[0_20px_60px_-20px_rgba(28,26,23,0.25)]",
        className,
      )}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={cn("relative w-full overflow-hidden", imageClassName ?? "aspect-[4/3]")}
      >
        <motion.div style={{ y, scale }} className="absolute inset-[-8%]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {caption && (
        <figcaption className="flex divide-x divide-line border-t border-line bg-background font-mono text-[10px] uppercase tracking-[0.08em]">
          <span className="px-3 py-2 text-muted-text">{caption.label}</span>
          <span className="px-3 py-2 text-ink">{caption.value}</span>
        </figcaption>
      )}
    </figure>
  );
}
