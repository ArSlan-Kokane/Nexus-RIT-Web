import { AnimationTiming, PageTransition } from "@/types";

export const ANIMATION_TIMING: AnimationTiming = {
  fast: {
    duration: 150,
    easing: [0.25, 0.1, 0.25, 1.0],
  },
  normal: {
    duration: 300,
    easing: [0.25, 0.1, 0.25, 1.0],
  },
  slow: {
    duration: 500,
    easing: [0.25, 0.1, 0.25, 1.0],
  },
};

export const PAGE_TRANSITION: PageTransition = {
  duration: 200,
  ease: [0.25, 0.1, 0.25, 1.0],
};

export const HERO_SEQUENCE_DURATION = 2500;

export const CURSOR_THROTTLE_MS = 16; // ~60fps

export const SCROLL_REVEAL_THRESHOLD = 0.1;

export const SCROLL_REVEAL_ROOT_MARGIN = "50px";

export const MOBILE_BREAKPOINT = 768;

export const REDUCED_MOTION_DURATION = 50;