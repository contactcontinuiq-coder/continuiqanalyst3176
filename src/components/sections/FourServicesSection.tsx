"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowRight, FileSearch, LayoutDashboard, LineChart, Crown } from "lucide-react";
import { services, type Service } from "@/data/services";

const iconFor: Record<string, React.ReactNode> = {
  "data-audit": <FileSearch className="h-5 w-5" />,
  "dashboard-setup": <LayoutDashboard className="h-5 w-5" />,
  "growth-intelligence": <LineChart className="h-5 w-5" />,
  "revenue-optimization": <Crown className="h-5 w-5" />,
};

const toneAccent: Record<Service["tone"], string> = {
  audit: "var(--accent-primary)",
  build: "var(--accent-success)",
  subscribe: "var(--accent-warning)",
  premium: "var(--accent-danger)",
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const accent = toneAccent[service.tone];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-6 sm:p-7 hover:border-[var(--accent-primary)]/40 hover:shadow-xl hover:shadow-[var(--accent-primary)]/5 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Top row: number badge + tone marker */}
      <div className="flex items-start justify-between mb-5">
        <span
          className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-md"
          style={{
            color: accent,
            background: `color-mix(in srgb, ${accent} 12%, transparent)`,
          }}
        >
          {service.number}
        </span>
        <span
          className="text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors"
          aria-hidden
        >
          {iconFor[service.slug]}
        </span>
      </div>

      {/* Name + tagline */}
      <h3
        className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2 tracking-tight"
        style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
      >
        {service.name}
      </h3>
      <p className="text-sm sm:text-[15px] font-medium text-[var(--text-primary)]/85 mb-3 leading-snug">
        {service.tagline}
      </p>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Deliverables */}
      <ul className="space-y-2 mb-6">
        {service.deliverables.map((d) => (
          <li key={d} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
            <span
              className="mt-1.5 h-1 w-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: accent }}
              aria-hidden
            />
            <span>{d}</span>
          </li>
        ))}
      </ul>

      {/* Price + best-for */}
      <div className="border-t border-[var(--border-subtle)] pt-4 space-y-3">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-1">
            Price
          </p>
          <p className="text-base font-bold text-[var(--text-primary)] font-mono tabular-nums">
            {service.priceRange}
          </p>
          {service.priceNote && (
            <p className="text-xs text-[var(--text-muted)] mt-0.5">{service.priceNote}</p>
          )}
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-1">
            Best for
          </p>
          <p className="text-xs text-[var(--text-secondary)] leading-snug">{service.bestFor}</p>
        </div>
      </div>

      {/* CTA */}
      <Link
        href="/services"
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent-primary)] hover:gap-2 transition-all group/cta"
      >
        {service.ctaLabel}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" />
      </Link>

      {/* Accent corner glow on hover */}
      <div
        className="absolute -top-px -right-px h-12 w-12 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${accent}30 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}

export function FourServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-[var(--bg-muted)]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)] mb-3">
            How we work with you
          </p>
          <h2
            id="services-heading"
            className="font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight mb-4"
            style={{
              fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3rem)",
              fontFamily: "var(--font-outfit, sans-serif)",
            }}
          >
            Four ways we work with you.
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Start with an audit. Grow into a partnership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
