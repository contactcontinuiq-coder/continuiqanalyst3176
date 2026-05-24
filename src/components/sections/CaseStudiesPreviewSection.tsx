"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

const toneColor = {
  success: "var(--accent-success)",
  danger: "var(--accent-danger)",
  warning: "var(--accent-warning)",
};

export function CaseStudiesPreviewSection() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="case-studies"
      className="relative py-24 lg:py-32 bg-[var(--bg-secondary)]"
      aria-labelledby="case-studies-heading"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)] mb-3">
              Real businesses. Real numbers.
            </p>
            <h2
              id="case-studies-heading"
              className="font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight mb-3"
              style={{
                fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3rem)",
                fontFamily: "var(--font-outfit, sans-serif)",
              }}
            >
              A few of the problems we&apos;ve solved recently.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent-primary)] hover:gap-2 transition-all whitespace-nowrap group"
          >
            View all case studies
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group relative flex flex-col h-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-6 hover:border-[var(--accent-primary)]/40 hover:shadow-xl hover:shadow-[var(--accent-primary)]/5 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Tag + sample badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[var(--accent-primary)]">
                    {cs.industry}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-[var(--text-muted)] border border-[var(--border-subtle)] rounded px-1.5 py-0.5">
                    Sample
                  </span>
                </div>

                {/* Headline */}
                <h3
                  className="text-lg font-bold text-[var(--text-primary)] leading-tight mb-3 tracking-tight"
                  style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
                >
                  {cs.headline}
                </h3>

                {/* Wow metric tile */}
                <div
                  className="rounded-xl p-4 mb-4 border"
                  style={{
                    borderColor: `color-mix(in srgb, ${toneColor[cs.wowMetric.tone]} 30%, transparent)`,
                    background: `color-mix(in srgb, ${toneColor[cs.wowMetric.tone]} 6%, transparent)`,
                  }}
                >
                  <p
                    className="text-3xl font-bold font-mono tabular-nums leading-none"
                    style={{ color: toneColor[cs.wowMetric.tone] }}
                  >
                    {cs.wowMetric.value}
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold mt-1.5">
                    {cs.wowMetric.label}
                  </p>
                </div>

                {/* Context */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">
                  {cs.context}
                </p>

                {/* CTA */}
                <div className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent-primary)] group-hover:gap-2 transition-all">
                  Read case study
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
