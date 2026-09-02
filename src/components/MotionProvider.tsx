"use client";

import { MotionConfig } from "framer-motion";

/**
 * Wraps the app so every framer-motion animation honours the OS
 * "reduce motion" setting. CSS media queries cannot reach JS-driven
 * transforms, so this is the only thing that makes them compliant.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
