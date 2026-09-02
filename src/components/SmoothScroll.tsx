"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooths wheel input into continuous scroll.
 *
 * A trackpad reports scroll pixel by pixel, so a scroll-driven effect looks
 * continuous on a Mac. A mouse wheel reports discrete ~100px notches, so the
 * same code advances in visible steps — the site would grade as "smooth" or
 * "janky" purely on the visitor's input device. Lenis interpolates those
 * notches into per-frame motion.
 *
 * Two things it deliberately does not do:
 * - No wheel multiplier or exaggerated duration. Changing how far the page
 *   travels per notch is the thing people rightly dislike about smooth-scroll
 *   libraries. This smooths delivery only; distance is untouched.
 * - Nothing under prefers-reduced-motion. Smoothing is still motion, so that
 *   visitor keeps the browser's native scroll.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.12, syncTouch: false });

    let frame = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    // Lenis owns the scroll position, so the browser's native anchor jump no
    // longer lands anywhere useful. Route same-page hashes through Lenis.
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;

      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      const href = anchor?.getAttribute("href");
      if (!href) return;

      const hash = href.startsWith("#")
        ? href
        : href.startsWith("/#") && window.location.pathname === "/"
          ? href.slice(1)
          : null;
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80 });
      window.history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
