"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const drawerVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.2 }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 }
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusFirstItem = () =>
      menuRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? []
      );
      const first = focusableElements[0];
      const last = focusableElements.at(-1);

      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    focusFirstItem();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        onClick={() => setIsOpen((open) => !open)}
        className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Backdrop & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={menuRef}
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="fixed inset-0 top-16 z-50 bg-[#050507]/95 backdrop-blur-xl border-t border-[#1c1c27] flex flex-col p-6 overflow-y-auto"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
          <motion.div 
            className="flex flex-col space-y-1 mb-8"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.04
                }
              }
            }}
          >
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  variants={linkVariants}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between py-3 px-4 rounded-lg text-base font-medium transition-colors",
                      isActive
                        ? "bg-blue-600/15 text-blue-400 border border-blue-500/20"
                        : "text-zinc-300 hover:text-white hover:bg-[#14141b]"
                    )}
                    data-interactive="true"
                  >
                  <span>{item.title}</span>
                  {(item.href === "/join"
                    ? siteConfig.recruitment.isOpen
                      ? "Recruiting"
                      : "Closed"
                    : item.badge) && (
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {item.href === "/join"
                        ? siteConfig.recruitment.isOpen
                          ? "Recruiting"
                          : "Closed"
                        : item.badge}
                    </span>
                  )}
                </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-auto pt-6 border-t border-[#1c1c27] space-y-4">
            <Link href="/join" onClick={() => setIsOpen(false)} className="w-full block">
              <Button variant="primary" className="w-full justify-center h-12 text-base">
                Join NEXUS
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>

            <div className="text-center pt-2">
              <p className="text-xs font-mono text-zinc-500">
                NEXUS — Innovation & Leadership Club
              </p>
              <p className="text-[11px] text-zinc-600 mt-0.5">
                Rajarambapu Institute of Technology (RIT)
              </p>
            </div>
          </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
