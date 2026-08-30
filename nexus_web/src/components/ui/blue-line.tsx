"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { forwardRef } from "react";

interface BlueLineProps {
  className?: string;
  variant?: "default" | "draw" | "expand";
  orientation?: "horizontal" | "vertical";
  delay?: number;
  duration?: number;
  color?: string;
}

export const BlueLine = forwardRef<HTMLDivElement, BlueLineProps>(
  ({ className, variant = "draw", orientation = "horizontal", delay = 0, duration = 0.6, color }, ref) => {
    const lineVariants = {
      default: {
        [orientation === "horizontal" ? "scaleX" : "scaleY"]: 0,
        originX: 0,
        originY: 0,
        opacity: 0,
      },
      draw: {
        [orientation === "horizontal" ? "scaleX" : "scaleY"]: 1,
        originX: 0,
        originY: 0,
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
      expand: {
        [orientation === "horizontal" ? "scaleX" : "scaleY"]: 1,
        originX: 0.5,
        originY: 0.5,
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          color || "bg-blue-500",
          orientation === "horizontal" ? "h-[2px] w-full" : "h-full w-[2px]",
          className
        )}
        variants={lineVariants}
        initial="default"
        animate={variant}
      />
    );
  }
);

BlueLine.displayName = "BlueLine";