import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonVariantsConfig {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export const buttonVariants = ({
  variant = "primary",
  size = "md",
  className,
}: ButtonVariantsConfig = {}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050507] disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer tracking-normal active:translate-y-0";

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-[0_0_20px_rgba(37,99,235,0.25)] hover:shadow-[0_0_25px_rgba(59,130,246,0.45)] hover:-translate-y-0.5 border border-blue-400/30",
    secondary:
      "bg-[#101017] hover:bg-[#181824] text-zinc-200 border border-[#262638] hover:border-zinc-500/50 hover:text-white hover:-translate-y-0.5 shadow-sm",
    outline:
      "border border-zinc-700/80 hover:border-blue-500/80 bg-transparent text-zinc-200 hover:text-white hover:bg-blue-950/20 hover:-translate-y-0.5",
    ghost:
      "bg-transparent hover:bg-zinc-800/50 text-zinc-300 hover:text-white",
    link:
      "bg-transparent text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline p-0 h-auto",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "text-xs px-3 py-1.5 gap-1.5 h-8",
    md: "text-sm px-4 py-2 gap-2 h-10",
    lg: "text-sm sm:text-base px-6 py-3 gap-2.5 h-12",
    icon: "h-9 w-9 p-0",
  };

  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
  external?: boolean;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      disabled,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const classes = buttonVariants({ variant, size, className });

    if (href) {
      if (href.startsWith("/")) {
        return (
          <Link
            href={href}
            className={classes}
            data-interactive="true"
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : undefined}
          >
            {children}
          </Link>
        );
      }

      return (
        <a
          href={href}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          className={classes}
          data-interactive="true"
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={classes}
        data-interactive="true"
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
