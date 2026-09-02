"use client";

import { useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

/**
 * Pinned, scroll-scrubbed showcase.
 *
 * Scroll POSITION drives progress — not velocity, not a clock — so the sequence
 * runs backwards when the visitor scrolls up and holds still when they stop.
 * That reversibility is the point: a reveal that fires once on enter reads as a
 * fade, not as something the visitor is driving.
 *
 * The beats are the same DOM the section would render anyway, so the effect
 * costs no asset payload, stays sharp at any viewport, and keeps its text
 * selectable. Only transform and opacity animate.
 *
 * Degradation is not a separate code path: below `lg`, or under
 * prefers-reduced-motion, the caller renders a plain stacked layout and this
 * component is never mounted.
 */

export interface ScrubBeat {
  /** Short label for the rail. */
  label: string;
  /** Progress (0–1) at which this beat becomes the active one. */
  at: number;
  content: ReactNode;
}

/** Normalised position of `p` inside the window [a, b], clamped to 0–1. */
function seg(p: number, a: number, b: number): number {
  if (b <= a) return p >= b ? 1 : 0;
  const t = (p - a) / (b - a);
  return t < 0 ? 0 : t > 1 ? 1 : t;
}

export function ScrubShowcase({
  beats,
  screens = 3,
  header,
  stageMinHeight = 360,
}: {
  beats: ScrubBeat[];
  /** Scroll runway as a multiple of viewport height. */
  screens?: number;
  /** Rendered above the pinned stage, inside the sticky area. */
  header?: ReactNode;
  stageMinHeight?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", setProgress);

  let active = 0;
  beats.forEach((b, i) => {
    if (progress >= b.at) active = i;
  });

  // A beat fades in as the previous one ends. The first is visible at rest and
  // the last stays put, so the stage is never empty.
  const fadeWidth = 0.06;

  return (
    <div ref={wrapRef} className="relative" style={{ height: `${screens * 100}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {header}

        <div className="container-custom">
          <div className="relative" style={{ minHeight: stageMinHeight }}>
            {beats.map((beat, i) => {
              const start = beat.at;
              const end = i === beats.length - 1 ? 1.01 : beats[i + 1].at;

              const enter = i === 0 ? 1 : seg(progress, start - fadeWidth, start);
              const exit = i === beats.length - 1 ? 0 : seg(progress, end - fadeWidth, end);
              const opacity = enter * (1 - exit);

              return (
                <div
                  key={beat.label}
                  aria-hidden={opacity < 0.5}
                  className="absolute inset-0"
                  style={{
                    opacity,
                    transform: `translateY(${((1 - opacity) * 18).toFixed(2)}px)`,
                    pointerEvents: opacity > 0.5 ? "auto" : "none",
                  }}
                >
                  {beat.content}
                </div>
              );
            })}
          </div>

          {/* Rail — which beat, and how far through it */}
          <div className="mt-12 flex items-center gap-4">
            {beats.map((beat, i) => {
              const start = beat.at;
              const end = i === beats.length - 1 ? 1 : beats[i + 1].at;
              const filled = seg(progress, start, end) * 100;
              return (
                <div key={beat.label} className="flex flex-1 flex-col gap-2.5">
                  <div className="h-px w-full overflow-hidden bg-champagne/20">
                    <div
                      className="h-full bg-champagne"
                      style={{ width: `${filled.toFixed(1)}%` }}
                    />
                  </div>
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-200"
                    style={{
                      color: i === active ? "var(--color-champagne)" : "var(--color-titanium)",
                    }}
                  >
                    {beat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * True only on a wide viewport with motion allowed.
 *
 * matchMedia is an external store, so it is read through
 * useSyncExternalStore: the server snapshot is `false`, which means SSR and
 * first paint always render the plain stacked layout, and the scrub only
 * mounts once the client has measured.
 */
const MQ_WIDE = "(min-width: 1024px)";
const MQ_REDUCED = "(prefers-reduced-motion: reduce)";

function subscribeToScrubMode(onChange: () => void) {
  const wide = window.matchMedia(MQ_WIDE);
  const reduced = window.matchMedia(MQ_REDUCED);
  wide.addEventListener("change", onChange);
  reduced.addEventListener("change", onChange);
  return () => {
    wide.removeEventListener("change", onChange);
    reduced.removeEventListener("change", onChange);
  };
}

function getScrubModeSnapshot() {
  return (
    window.matchMedia(MQ_WIDE).matches &&
    !window.matchMedia(MQ_REDUCED).matches
  );
}

const getScrubModeServerSnapshot = () => false;

export function useScrubMode(): boolean {
  return useSyncExternalStore(
    subscribeToScrubMode,
    getScrubModeSnapshot,
    getScrubModeServerSnapshot,
  );
}
