"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

const youGet = [
  "A 30-minute discovery call with our analytics lead",
  "A written audit report (8–12 pages)",
  "Top 3 revenue opportunities, ranked by impact",
  "Top 3 money leaks, with estimated cost",
  "A clear next-step recommendation — even if it's \"don't hire us yet\"",
];

const youQualify = [
  "Businesses doing ₹15L+/month in revenue",
  "Have at least 6 months of sales data",
  "D2C, retail, manufacturing, logistics, or healthcare",
  "Decision-maker on the call",
];

export function FreeAuditSection() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="free-audit"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#0A0F1E" }}
      aria-labelledby="free-audit-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 animate-mesh"
          style={{
            background:
              "linear-gradient(135deg, #0A0F1E 0%, #0F1E3D 30%, #0A0F1E 60%, #1E3A8A 100%)",
            opacity: 0.5,
          }}
        />
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--accent-primary), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-1/2"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--accent-primary), transparent)",
          }}
        />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-5"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--accent-warning)]/30 bg-[var(--accent-warning)]/10">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-warning)] animate-pulse-dot" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--accent-warning)]">
              Limited — 10 slots this month
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          id="free-audit-heading"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center font-bold text-white leading-[1.1] tracking-tight mb-4"
          style={{
            fontSize: "clamp(2rem, 3.8vw + 0.5rem, 3.25rem)",
            fontFamily: "var(--font-outfit, sans-serif)",
          }}
        >
          Get a Free Data Audit.{" "}
          <span className="text-[#60A5FA]">Worth ₹20,000.</span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-white/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-14"
        >
          We&apos;ll review your sales, customer, and inventory data and show
          you exactly where you&apos;re losing money — and where the next ₹10L
          is hiding. No obligation.
        </motion.p>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-12">
          {/* What you get */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 lg:p-7"
          >
            <p className="text-[11px] uppercase tracking-widest font-mono font-bold text-[var(--accent-success)] mb-4">
              What you get
            </p>
            <ul className="space-y-3">
              {youGet.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/85 leading-relaxed">
                  <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-[var(--accent-success)]/20 flex items-center justify-center">
                    <Check className="h-3 w-3 text-[var(--accent-success)]" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Who qualifies */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 lg:p-7"
          >
            <p className="text-[11px] uppercase tracking-widest font-mono font-bold text-[var(--accent-primary)] mb-4">
              Who qualifies
            </p>
            <ul className="space-y-3">
              {youQualify.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/85 leading-relaxed">
                  <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-[var(--accent-primary)]/20 flex items-center justify-center">
                    <Check className="h-3 w-3 text-[var(--accent-primary)]" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[var(--accent-primary)] hover:brightness-110 text-white font-bold text-base shadow-2xl shadow-[var(--accent-primary)]/40 transition-all hover:scale-[1.02]"
          >
            Book Your Free Audit
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="text-xs text-white/50 mt-4 max-w-md mx-auto">
            Slots are limited to 10 per month so we can do real work, not just
            sales calls.
          </p>
          <p className="text-xs text-white/40 mt-2">
            No credit card. No sales pitch. Just an honest look at your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
