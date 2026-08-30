"use client";

import { motion } from "framer-motion";
import { PAGE_TRANSITION } from "@/lib/constants/animation";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: PAGE_TRANSITION.duration / 1000,
      ease: PAGE_TRANSITION.ease,
    },
  },
};

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      className={className}
      variants={pageVariants}
      initial="initial"
      animate="enter"
    >
      {children}
    </motion.div>
  );
}