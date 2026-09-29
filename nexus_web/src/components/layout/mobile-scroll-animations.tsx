"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MobileScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

export function MobileScrollAnimation({ children, delay = 0 }: MobileScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="lg:hidden"
    >
      {children}
    </motion.div>
  );
}

// Wrapper for mobile sections to add consistent scroll animations
export function MobileSection({ children }: { children: React.ReactNode }) {
  return (
    <MobileScrollAnimation>
      <div className="mobile-section-animate">
        {children}
      </div>
    </MobileScrollAnimation>
  );
}
