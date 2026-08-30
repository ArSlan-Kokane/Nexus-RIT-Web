export type AnimationVariant = "default" | "gentle" | "snappy" | "bouncy";

export type AnimationDuration = "fast" | "normal" | "slow";

export type AnimationEasing = 
  | "easeOut" 
  | "easeIn" 
  | "easeInOut" 
  | "linear" 
  | "custom";

export interface AnimationConfig {
  duration: number;
  easing: [number, number, number, number];
  delay?: number;
}

export interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export interface CursorPosition {
  x: number;
  y: number;
}

export interface AnimationTiming {
  fast: AnimationConfig;
  normal: AnimationConfig;
  slow: AnimationConfig;
}

export interface PageTransition {
  duration: number;
  ease: [number, number, number, number];
}