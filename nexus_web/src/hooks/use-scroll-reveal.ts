"use client";

import { useEffect, useRef, useState } from "react";
import {
  REDUCED_MOTION_DURATION,
  SCROLL_REVEAL_ROOT_MARGIN,
  SCROLL_REVEAL_THRESHOLD,
} from "@/lib/constants/animation";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    threshold = SCROLL_REVEAL_THRESHOLD,
    rootMargin = SCROLL_REVEAL_ROOT_MARGIN,
    triggerOnce = true,
    delay = 0,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const element = elementRef.current;
    let revealTimeout: number | undefined;

    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      setIsReducedMotion(event.matches);
    };

    reducedMotionQuery.addEventListener("change", handleMotionPreferenceChange);

    if (!element) {
      return () => {
        reducedMotionQuery.removeEventListener("change", handleMotionPreferenceChange);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (revealTimeout) window.clearTimeout(revealTimeout);
            const revealDelay = reducedMotionQuery.matches
              ? REDUCED_MOTION_DURATION
              : delay * 1000;

            revealTimeout = window.setTimeout(() => {
              setIsVisible(true);
            }, revealDelay);

            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            if (revealTimeout) window.clearTimeout(revealTimeout);
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => {
      if (revealTimeout) window.clearTimeout(revealTimeout);
      observer.disconnect();
      reducedMotionQuery.removeEventListener("change", handleMotionPreferenceChange);
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return { elementRef, isVisible, isReducedMotion };
}
