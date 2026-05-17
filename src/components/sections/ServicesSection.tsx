"use client";

import * as React from "react";
import { motion, useInView } from "motion/react";
import { BarChart2, Users, Search, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  pitch: string;
  deliverables: string[];
  timeline: string;
  timelineBadgeColor?: string;
  isFree?: boolean;
  index: number;
}

function ServiceCard({
  icon,
  title,
  pitch,
  deliverables,
  timeline,
  isFree = false,
  index,
}: ServiceCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
    >
      <Card
        className="relative flex flex-col h-full p-6 group cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--brand-accent)]/10 hover:border-[var(--brand-accent)]/40 bg-[var(--surface-elevated)] overflow-hidden"
      >
        {/* FREE sticker */}
        {isFree && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-green-500 text-white text-xs font-bold uppercase tracking-wide shadow-md shadow-green-500/30">
              FREE
            </span>
          </div>
        )}

        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl bg-gradient-to-br from-[var(--brand-accent)]/5 to-transparent" />

        {/* Icon */}
        <div className="mb-5">
          <div className="h-12 w-12 rounded-xl bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/20 flex items-center justify-center text-[var(--brand-accent)] group-hover:rotate-6 transition-transform duration-300 group-hover:bg-[var(--brand-accent)]/15">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--brand-accent)] transition-colors duration-200"
          style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
        >
          {title}
        </h3>

        {/* Pitch */}
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5 flex-1">
          {pitch}
        </p>

        {/* Deliverables */}
        <ul className="space-y-2 mb-6">
          {deliverables.map((d, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle className="h-4 w-4 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
              <span className="text-sm text-[var(--text-secondary)]">{d}</span>
            </li>
          ))}
        </ul>

        {/* Timeline badge */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border)]">
          <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
            <Clock className="h-3.5 w-3.5" />
            <span className="text-xs font-medium font-mono">{timeline}</span>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-accent)] hover:gap-2 transition-all duration-200 group/link"
          >
            Learn more
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
          </a>
        </div>
      </Card>
    </motion.div>
  );
}

const services: Omit<ServiceCardProps, "index">[] = [
  {
    icon: <BarChart2 className="h-6 w-6" />,
    title: "Sales Dashboard in 48h",
    pitch:
      "One live dashboard that answers every ‘how are we doing?’ question your team asks every Monday.",
    deliverables: [
      "Power BI / Looker Studio dashboard",
      "Connected to your live data sources",
      "8–12 KPIs with filters & drill-downs",
    ],
    timeline: "48 hours",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Customer Churn Report",
    pitch:
      "Find out exactly which customers are leaving, why, and what they were worth — before next quarter.",
    deliverables: [
      "15-page detailed churn report",
      "Retention playbook with action steps",
      "Cohort analysis & LTV breakdown",
    ],
    timeline: "5 business days",
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "GA + Shopify Audit",
    pitch:
      "A surgical audit of your analytics stack: what's broken, what's missing, what's costing you money.",
    deliverables: [
      "2-page diagnostic report",
      "5 prioritised fixes with implementation steps",
      "30-min walkthrough call included",
    ],
    timeline: "3 business days",
    isFree: true,
  },
];

export function ServicesSection() {
  const headerRef = React.useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-[var(--surface)]" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--brand-accent)]/20 bg-[var(--brand-accent)]/5 text-sm font-medium text-[var(--brand-accent)] mb-4"
          >
            What we deliver
          </motion.span>
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold text-[var(--text-primary)]"
            style={{
              fontSize: "clamp(2rem, 3vw + 1rem, 3rem)",
              fontFamily: "var(--font-outfit, sans-serif)",
            }}
          >
            Three ways we turn your data into{" "}
            <span className="text-[var(--brand-accent)]">₹</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-[var(--text-secondary)] text-lg leading-relaxed"
          >
            Clear deliverables, fixed timelines, no surprises. Every engagement starts with a free audit.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[var(--text-muted)] text-sm mb-4">
            Not sure which service you need?
          </p>
          <Button
            size="lg"
            asChild
            className="bg-[var(--brand-accent)] text-white font-semibold hover:brightness-110 shadow-md shadow-[var(--brand-accent)]/20"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start with a free audit →
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
