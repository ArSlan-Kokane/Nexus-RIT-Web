import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col mb-12 sm:mb-16 max-w-3xl",
        alignClasses[align],
        className
      )}
    >
      {badge && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium uppercase tracking-wider text-blue-400 bg-blue-950/40 border border-blue-800/40 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
