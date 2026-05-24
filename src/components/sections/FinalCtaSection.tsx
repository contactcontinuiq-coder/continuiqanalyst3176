"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section
      className="relative py-20 lg:py-24 overflow-hidden"
      style={{ backgroundColor: "#0A0F1E" }}
      aria-labelledby="final-cta-heading"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(59,130,246,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 grid-overlay opacity-30" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2
          id="final-cta-heading"
          className="font-bold text-white leading-[1.1] tracking-tight mb-5"
          style={{
            fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.75rem)",
            fontFamily: "var(--font-outfit, sans-serif)",
          }}
        >
          The first audit is free.{" "}
          <span className="text-[#60A5FA]">The next ₹10L is hiding in your data.</span>
        </h2>
        <p className="text-white/60 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
          Book your free audit. We&apos;ll review your business and tell you
          exactly where the money is — and where it&apos;s leaking.
        </p>

        <Link
          href="/audit"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent-primary)] hover:brightness-110 text-white font-bold text-base shadow-2xl shadow-[var(--accent-primary)]/40 transition-all hover:scale-[1.02]"
        >
          Book Your Free Audit
          <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="text-xs text-white/40 mt-4">
          10 slots/month · No credit card · No sales pitch
        </p>
      </motion.div>
    </section>
  );
}
