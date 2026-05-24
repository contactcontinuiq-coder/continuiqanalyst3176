"use client";

import * as React from "react";
import { motion, useInView } from "motion/react";
import { Clock, AlertOctagon, PackageX } from "lucide-react";

const problems = [
  {
    icon: <Clock className="h-5 w-5" />,
    text: "Reports take days. Decisions take weeks.",
    tone: "warning" as const,
  },
  {
    icon: <AlertOctagon className="h-5 w-5" />,
    text: "Money leaks somewhere — nobody can point to it.",
    tone: "danger" as const,
  },
  {
    icon: <PackageX className="h-5 w-5" />,
    text: "Best-selling products go out of stock. Slow movers pile up.",
    tone: "warning" as const,
  },
];

const toneClass: Record<"warning" | "danger", string> = {
  warning:
    "text-[var(--accent-warning)] border-[var(--accent-warning)]/30 bg-[var(--accent-warning)]/5",
  danger:
    "text-[var(--accent-danger)] border-[var(--accent-danger)]/30 bg-[var(--accent-danger)]/5",
};

export function ProblemSection() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-24 lg:py-32 bg-[var(--bg-secondary)]"
      aria-labelledby="problem-heading"
    >
      <div
        ref={ref}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2
          id="problem-heading"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-bold text-[var(--text-primary)] leading-[1.15] tracking-tight"
          style={{
            fontSize: "clamp(1.75rem, 3.5vw + 0.5rem, 3rem)",
            fontFamily: "var(--font-outfit, sans-serif)",
          }}
        >
          Most growing businesses have all the data they need —{" "}
          <span className="text-[var(--text-secondary)]">
            and no idea what it&apos;s telling them.
          </span>
        </motion.h2>

        <div className="mt-14 grid sm:grid-cols-3 gap-4 sm:gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.text}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
              className={`flex items-center gap-3 rounded-xl border px-4 py-4 text-left ${toneClass[p.tone]}`}
            >
              <span className="flex-shrink-0">{p.icon}</span>
              <span className="text-sm sm:text-[15px] font-medium text-[var(--text-primary)] leading-snug">
                {p.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
