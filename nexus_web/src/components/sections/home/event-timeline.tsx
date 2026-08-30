import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BlueLine } from "@/components/ui/blue-line";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { EventItem } from "@/types";
import { ArrowRight, ArrowUpRight, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface EventTimelineProps {
  events: EventItem[];
}

export function EventTimeline({ events }: EventTimelineProps) {
  const headerRef = useScrollReveal();
  const timelineRef = useScrollReveal();

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-24 bg-[#07070a] border-b border-[#1c1c27]">
      <Container size="xl">
        <div className="space-y-16">
          {/* Section Header */}
          <motion.div
            ref={headerRef.elementRef}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1c1c27] pb-8 scroll-reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={headerRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="space-y-3 max-w-3xl">
              <div className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>CHRONOLOGICAL SPRINT HORIZON</span>
              </div>
              <BlueLine orientation="horizontal" variant="draw" delay={0.2} />
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
                Events & Workshop Horizon
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Keynotes, hands-on architecture bootcamps, and hackathons hosted by NEXUS at RIT.
              </p>
            </div>

            <Link href="/events">
              <Button variant="outline" size="sm" className="font-mono text-xs">
                <span>View Complete Event Archive</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
              </Button>
            </Link>
          </motion.div>

          {/* Chronological Timeline Layout */}
          <motion.div
            ref={timelineRef.elementRef}
            className="space-y-8 relative scroll-reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={timelineRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {events.map((event, index) => {
              const isUpcoming = event.status === "UPCOMING";

              return (
                <motion.div
                  key={event.id}
                  className={`p-8 rounded-2xl border transition-all ${
                    isUpcoming
                      ? "bg-[#09090e] border-blue-900/40 hover:border-blue-700/60 shadow-[0_0_30px_rgba(59,130,246,0.05)]"
                      : "bg-[#060608] border-[#1c1c27] opacity-80 hover:opacity-100"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={timelineRef.isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Left: Date & Status Node */}
                    <div className="space-y-2 lg:w-1/4 shrink-0">
                      <div className="flex items-center gap-2.5">
                        {isUpcoming ? (
                          <motion.span
                            className="h-2.5 w-2.5 rounded-full bg-blue-400"
                            variants={pulseVariants}
                            animate="pulse"
                          />
                        ) : (
                          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                        )}
                        <Badge variant={isUpcoming ? "accent" : "default"}>
                          {event.status}
                        </Badge>
                      </div>
                      <div className="text-base font-mono font-bold text-white">
                        {event.date}
                      </div>
                      <div className="text-xs font-mono text-zinc-500">
                        {event.time}
                      </div>
                    </div>

                    {/* Center: Details */}
                    <div className="space-y-2 lg:w-1/2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {event.title}
                      </h3>
                      <p className="text-xs font-mono text-blue-400">
                        {event.tagline}
                      </p>
                      <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 pt-2">
                        <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                        <span>{event.venue}</span>
                      </div>
                    </div>

                    {/* Right: Registration / Archive CTA */}
                    <div className="lg:w-1/4 flex flex-col items-start lg:items-end justify-center shrink-0">
                      {event.isRegistrationOpen && event.registrationUrl ? (
                        <a
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto"
                        >
                          <Button variant="primary" size="md" className="w-full text-xs font-mono h-10 px-6">
                            <span>Register via Google</span>
                            <ArrowUpRight className="h-3.5 w-3.5 ml-1.5" />
                          </Button>
                        </a>
                      ) : (
                        <span className="text-xs font-mono text-zinc-600 px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800">
                          Sprint Concluded
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}