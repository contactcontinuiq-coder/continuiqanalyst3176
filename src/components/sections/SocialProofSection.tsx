"use client";

import * as React from "react";
import { motion, useInView, animate } from "motion/react";
import { Target, TrendingUp, Users, CheckCircle, MessageSquare } from "lucide-react";

// Step component
const processSteps = [
  {
    number: "01",
    title: "Discovery call",
    sub: "15 min",
    description: "We listen, you talk — no pitch, no pressure.",
  },
  {
    number: "02",
    title: "Free data audit",
    sub: "We do the work",
    description: "We look under the hood of your analytics stack.",
  },
  {
    number: "03",
    title: "Proposal + plan",
    sub: "Clear scope",
    description: "Clear scope, clear price, no surprises.",
  },
  {
    number: "04",
    title: "Delivery",
    sub: "48h–2 weeks",
    description: "Depending on scope. You review, we iterate.",
  },
];

const stats = [
  { value: 5, suffix: "+", label: "tools", caption: "we work across daily" },
  { value: 48, suffix: "hr", label: "", caption: "fastest dashboard turnaround" },
  { value: 100, suffix: "%", label: "", caption: "money-back if you're unhappy" },
  { value: 1, suffix: "-on-1", label: "", caption: "you work with the founder, always" },
];

const trustPillars = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Outcome-first",
    description:
      "We don't sell tools, we sell decisions you can make on Monday morning. Every engagement is scoped around a specific business outcome.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Indian SMB pricing",
    description:
      "Agency-quality work at founder-friendly rates. We know the Indian D2C market and price accordingly.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Full-stack analytics",
    description:
      "From Excel to Python to enterprise BI tools — one team, one engagement, no handoffs.",
  },
];

const caseStudies = [
  {
    industry: "D2C Apparel Brand",
    finding: "Found ₹2.1L/month in untracked refunds through GA4 + Shopify reconciliation",
    icon: "👗",
  },
  {
    industry: "Home Goods D2C",
    finding: "Dashboard reduced weekly reporting time from 6 hours to 20 minutes",
    icon: "🏠",
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    if (!inView || done || !ref.current) return;
    setDone(true);
    const el = ref.current;
    const controls = animate(0, target, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(v) {
        el.textContent = Math.round(v).toString();
      },
    });
    return () => controls.stop();
  }, [inView, target, done]);

  return (
    <span ref={ref} className="tabular-nums">
      0
    </span>
  );
}

export function SocialProofSection() {
  const processRef = React.useRef<HTMLDivElement>(null);
  const processInView = useInView(processRef, { once: true, margin: "-60px" });

  return (
    <section id="process" className="py-24 lg:py-32 bg-[var(--background)]" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* A: Process Stepper */}
        <div>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--brand-accent)]/20 bg-[var(--brand-accent)]/5 text-sm font-medium text-[var(--brand-accent)] mb-4">
              How we work
            </span>
            <h2
              id="process-heading"
              className="font-bold text-[var(--text-primary)]"
              style={{
                fontSize: "clamp(2rem, 3vw + 1rem, 3rem)",
                fontFamily: "var(--font-outfit, sans-serif)",
              }}
            >
              No jargon, no surprises
            </h2>
            <p className="mt-3 text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
              Four simple steps from first contact to delivered insight.
            </p>
          </div>

          <div ref={processRef} className="relative">
            {/* Desktop: horizontal connector */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-[var(--border)]">
              <motion.div
                className="h-full bg-[var(--brand-accent)] origin-left"
                initial={{ scaleX: 0 }}
                animate={processInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                  className="flex flex-col items-center text-center lg:pt-0"
                >
                  {/* Step circle */}
                  <div className="relative z-10 mb-5">
                    <div className="h-16 w-16 rounded-full border-2 border-[var(--brand-accent)] bg-[var(--background)] flex flex-col items-center justify-center shadow-lg shadow-[var(--brand-accent)]/10">
                      <span className="text-[10px] text-[var(--brand-accent)] font-mono font-bold leading-none">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  {/* Mobile connector */}
                  {i < processSteps.length - 1 && (
                    <div className="lg:hidden h-8 w-0.5 bg-[var(--border)] my-1" />
                  )}
                  <h3
                    className="text-base font-bold text-[var(--text-primary)] mb-1"
                    style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
                  >
                    {step.title}
                  </h3>
                  <span className="text-xs font-mono text-[var(--brand-accent)] font-semibold mb-2">
                    {step.sub}
                  </span>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* B: Stats */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--brand-accent)]/20 bg-[var(--brand-accent)]/5 text-sm font-medium text-[var(--brand-accent)] mb-4">
              By the numbers
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.caption}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] hover:border-[var(--brand-accent)]/30 transition-colors duration-200"
              >
                <div className="text-4xl font-bold text-[var(--brand-accent)] font-mono mb-1 tabular-nums">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                  <span>{stat.suffix}</span>
                  {stat.label && <span className="text-2xl">{stat.label}</span>}
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-snug mt-1">
                  {stat.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* C: Trust Pillars */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--brand-accent)]/20 bg-[var(--brand-accent)]/5 text-sm font-medium text-[var(--brand-accent)] mb-4">
              Why Continuiq
            </span>
            <h2
              className="font-bold text-[var(--text-primary)]"
              style={{
                fontSize: "clamp(1.75rem, 2vw + 1rem, 2.5rem)",
                fontFamily: "var(--font-outfit, sans-serif)",
              }}
            >
              Built for Indian D2C brands
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {trustPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="flex flex-col items-start gap-4"
              >
                <div className="h-12 w-12 rounded-xl bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/20 flex items-center justify-center text-[var(--brand-accent)]">
                  {pillar.icon}
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-[var(--text-primary)] mb-2"
                    style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* D: Testimonials / Case Studies */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--brand-accent)]/20 bg-[var(--brand-accent)]/5 text-sm font-medium text-[var(--brand-accent)] mb-4">
              Early results
            </span>
            <h2
              className="font-bold text-[var(--text-primary)]"
              style={{
                fontSize: "clamp(1.75rem, 2vw + 1rem, 2.5rem)",
                fontFamily: "var(--font-outfit, sans-serif)",
              }}
            >
              What we uncovered
            </h2>
            <p className="mt-3 text-[var(--text-muted)] text-sm">
              (Details anonymised at client request)
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 hover:border-[var(--brand-accent)]/30 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl" role="img" aria-hidden="true">{cs.icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-[var(--brand-accent)] uppercase tracking-wider mb-2">
                      {cs.industry}
                    </p>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-[var(--text-primary)] font-medium leading-snug">
                        {cs.finding}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] p-8 text-center"
          >
            <MessageSquare className="h-8 w-8 text-[var(--text-muted)] mx-auto mb-3" />
            <p className="text-[var(--text-muted)] text-sm">
              Testimonials from our first audit clients coming soon.{" "}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-[var(--brand-accent)] hover:underline font-medium"
              >
                Be one of our first three free audit clients →
              </a>
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
