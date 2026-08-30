"use client";

import { useEffect, useRef, useState } from "react";
import { SCROLL_REVEAL_THRESHOLD, SCROLL_REVEAL_ROOT_MARGIN, REDUCED_MOTION_DURATION } from "@/lib/constants/animation";

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
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(reducedMotionQuery.matches);

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // For reduced motion, show immediately with very short delay
            const actualDelay = isReducedMotion ? REDUCED_MOTION_DURATION : delay * 1000;
            setTimeout(() => {
              setIsVisible(true);
            }, actualDelay);

            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, delay, isReducedMotion]);

  return { elementRef, isVisible, isReducedMotion };
}