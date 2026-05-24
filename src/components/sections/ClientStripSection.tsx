"use client";

import * as React from "react";
import { motion, useInView } from "motion/react";

const clients = [
  "An MP-based clothing chain",
  "A Mumbai D2C skincare brand",
  "A packaging manufacturer in Pune",
  "An Indore logistics fleet",
  "A diagnostic chain in Bhopal",
];

export function ClientStripSection() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="relative py-16 lg:py-20 bg-[var(--bg-muted)] border-y border-[var(--border-subtle)]"
      aria-label="Industries served"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] uppercase tracking-widest font-mono font-semibold text-[var(--text-muted)] mb-8">
          Industries we&apos;ve worked across
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:gap-x-12">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-sm sm:text-[15px] font-medium text-[var(--text-secondary)] italic"
            >
              {c}
            </motion.div>
          ))}
        </div>
        <p className="text-center text-[11px] text-[var(--text-muted)] mt-8 max-w-xl mx-auto leading-relaxed">
          Names withheld for client confidentiality. Real numbers, anonymized.
        </p>
      </div>
    </section>
  );
}
