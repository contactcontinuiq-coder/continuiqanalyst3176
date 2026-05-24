"use client";

import * as React from "react";
import { motion, useInView } from "motion/react";
import { MessageSquare, Target, Handshake, Globe2 } from "lucide-react";

const props = [
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "We speak business, not SQL.",
    body: "Reports are in plain English with recommendations, not just charts.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "We charge for outcomes, not hours.",
    body: "Productized services with clear deliverables and prices.",
  },
  {
    icon: <Handshake className="h-5 w-5" />,
    title: "We're a partner, not a project.",
    body: "Most clients stay with us 12+ months. We grow as you grow.",
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: "We've seen your problem before.",
    body: "Across ecommerce, retail, manufacturing, logistics, healthcare.",
  },
];

export function WhyContinuiqSection() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why-us"
      className="relative py-24 lg:py-32 bg-[var(--bg-secondary)]"
      aria-labelledby="why-heading"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)] mb-3">
            Why Continuiq
          </p>
          <h2
            id="why-heading"
            className="font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight"
            style={{
              fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3rem)",
              fontFamily: "var(--font-outfit, sans-serif)",
            }}
          >
            Why business owners pick us over hiring an analyst.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {props.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-muted)] p-5 sm:p-6 hover:border-[var(--accent-primary)]/40 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3
                className="text-base font-bold text-[var(--text-primary)] mb-2 leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
              >
                {p.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
