import { cn } from "@/lib/utils";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import React from "react";

interface ExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  showIcon?: boolean;
}

export function ExternalLink({
  href,
  children,
  className,
  showIcon = false,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors underline-offset-4 hover:underline cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
      {showIcon && <ExternalLinkIcon className="h-3.5 w-3.5 opacity-70" />}
    </a>
  );
}
