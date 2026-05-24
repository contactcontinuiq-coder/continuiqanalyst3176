"use client";

import * as React from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How is this different from hiring a Power BI freelancer?",
    a: "A freelancer hands you a dashboard and leaves. We tell you what to do with it. Our work starts with the business decision, not the chart — and we stay close as your business changes.",
  },
  {
    q: "Do we need to switch tools?",
    a: "No. We work with what you have — Shopify, Tally, Zoho, Excel, SQL, whatever. The point is to get insight out of the data already in your stack, not to sell you a new tool.",
  },
  {
    q: "How long does an audit take?",
    a: "3–5 business days after data access. The discovery call happens first (30 minutes). Then we work, then we walk you through the report on a 20-minute call.",
  },
  {
    q: "Is our data safe?",
    a: "NDA-first. We work inside your environment (your spreadsheets, your warehouse, your tools) where possible. No data leaves your systems unless you explicitly approve it.",
  },
  {
    q: "What if we don't have clean data?",
    a: "Most businesses don't. Cleaning is part of what we do. The audit will tell you exactly which data needs work and how much it's costing you to leave it broken.",
  },
  {
    q: "What does pricing actually look like?",
    a: "Each service has a range — Data Audit ₹5K–₹20K, Dashboards ₹20K–₹1L one-time, Growth Intelligence ₹15K–₹75K/month, Revenue Optimization ₹50K–₹3L+. Exact quote follows the audit once we understand the scope.",
  },
];

function FaqItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="border-b border-[var(--border-subtle)] last:border-b-0"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="text-base sm:text-lg font-semibold text-[var(--text-primary)] leading-snug group-hover:text-[var(--accent-primary)] transition-colors">
          {item.q}
        </span>
        <span
          className={`flex-shrink-0 mt-0.5 h-7 w-7 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] group-hover:border-[var(--accent-primary)] group-hover:text-[var(--accent-primary)] transition-all ${
            isOpen ? "rotate-45" : ""
          } duration-300`}
        >
          <Plus className="h-3.5 w-3.5" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm sm:text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-32 bg-[var(--bg-secondary)]"
      aria-labelledby="faq-heading"
    >
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)] mb-3">
            Frequently asked
          </p>
          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight"
            style={{
              fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3rem)",
              fontFamily: "var(--font-outfit, sans-serif)",
            }}
          >
            Questions we get from founders.
          </motion.h2>
        </div>

        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-muted)]/40 px-5 sm:px-7">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
