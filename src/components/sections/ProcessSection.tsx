"use client";

import * as React from "react";
import { motion, useInView } from "motion/react";
import { Ear, FileSearch, Hammer, Handshake } from "lucide-react";

const steps = [
  {
    icon: <Ear className="h-5 w-5" />,
    name: "Listen",
    desc: "We start with a 30-minute call. We learn how you make money and where it hurts.",
  },
  {
    icon: <FileSearch className="h-5 w-5" />,
    name: "Audit",
    desc: "We look at your data. We find the leaks, the opportunities, and the questions nobody is answering.",
  },
  {
    icon: <Hammer className="h-5 w-5" />,
    name: "Build",
    desc: "Dashboards, reports, or full analysis — whatever the business needs. Not what's trendy.",
  },
  {
    icon: <Handshake className="h-5 w-5" />,
    name: "Partner",
    desc: "We stay close. Weekly reports, monthly reviews, and recommendations as your business changes.",
  },
];

export function ProcessSection() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      className="relative py-24 lg:py-32 bg-[var(--bg-muted)]"
      aria-labelledby="process-heading"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)] mb-3">
            How we grow the businesses we work with
          </p>
          <h2
            id="process-heading"
            className="font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight mb-4"
            style={{
              fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3rem)",
              fontFamily: "var(--font-outfit, sans-serif)",
            }}
          >
            Not magic. A repeatable process.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/40 to-transparent origin-left"
          />

          <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-5 md:text-center"
              >
                {/* Step number circle */}
                <div className="relative flex-shrink-0">
                  <div className="h-14 w-14 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-primary)] shadow-sm">
                    {step.icon}
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 h-6 w-6 rounded-full bg-[var(--accent-primary)] text-white text-[10px] font-bold font-mono flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex-1">
                  <h3
                    className="text-lg font-bold text-[var(--text-primary)] mb-1.5 tracking-tight"
                    style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
                  >
                    {step.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
