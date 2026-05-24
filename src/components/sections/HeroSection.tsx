"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useInView, animate } from "motion/react";
import { ArrowRight, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const headline = "Your data already knows where the money is. We help you find it.";
const headlineWords = headline.split(" ");

// Dashboard KPI tiles (PRD 6.1)
const kpiTiles = [
  {
    label: "Revenue this month",
    value: 4720000,           // ₹47.2L
    display: (v: number) => `₹${(v / 100000).toFixed(1)}L`,
    delta: "+23%",
    tone: "success" as const,
    spark: [40, 48, 52, 49, 58, 64, 70, 72, 75, 82, 88, 96],
  },
  {
    label: "Wasted ad spend caught",
    value: 310000,            // ₹3.1L
    display: (v: number) => `₹${(v / 100000).toFixed(1)}L`,
    delta: "this quarter",
    tone: "danger" as const,
    spark: [90, 84, 78, 70, 64, 58, 50, 44, 36, 30, 24, 18],
  },
  {
    label: "Top product margin",
    value: 62,
    display: (v: number) => `${Math.round(v)}%`,
    delta: "+4pts",
    tone: "success" as const,
    spark: [40, 42, 44, 46, 48, 50, 53, 55, 57, 59, 61, 62],
  },
  {
    label: "Customers at risk",
    value: 184,
    display: (v: number) => `${Math.round(v)}`,
    delta: "watch",
    tone: "warning" as const,
    spark: [60, 70, 78, 82, 88, 92, 96, 100, 108, 120, 140, 184],
  },
];

function CountUp({
  target,
  display,
}: {
  target: number;
  display: (v: number) => string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    if (!inView || done || !ref.current) return;
    setDone(true);
    const el = ref.current;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate(v) {
        el.textContent = display(v);
      },
    });
    return () => controls.stop();
  }, [inView, target, done, display]);

  return (
    <span ref={ref} className="tabular-nums">
      {display(0)}
    </span>
  );
}

function Sparkline({
  points,
  tone,
  delay = 0,
}: {
  points: number[];
  tone: "success" | "danger" | "warning";
  delay?: number;
}) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = Math.max(1, max - min);
  const w = 100;
  const h = 32;
  const step = w / (points.length - 1);
  const path = points
    .map((v, i) => {
      const x = i * step;
      const y = h - ((v - min) / range) * h;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");

  const color =
    tone === "success"
      ? "var(--accent-success)"
      : tone === "danger"
      ? "var(--accent-danger)"
      : "var(--accent-warning)";

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full h-8"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay, ease: "easeOut" }}
      />
    </svg>
  );
}

function KpiDashboard() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
      {/* Dashboard frame */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl overflow-hidden"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[var(--accent-success)] animate-pulse-dot" />
            <span className="text-[11px] text-white/60 font-mono tracking-wide">
              LIVE · executive overview
            </span>
          </div>
          <span className="text-[10px] text-white/40 font-mono">May 24</span>
        </div>

        {/* KPI tile grid */}
        <div className="grid grid-cols-2 gap-px bg-white/5">
          {kpiTiles.map((tile, i) => {
            const toneColor =
              tile.tone === "success"
                ? "text-[var(--accent-success)]"
                : tile.tone === "danger"
                ? "text-[var(--accent-danger)]"
                : "text-[var(--accent-warning)]";
            const Icon =
              tile.tone === "success"
                ? TrendingUp
                : tile.tone === "danger"
                ? TrendingDown
                : AlertTriangle;

            return (
              <motion.div
                key={tile.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                className="bg-[#0A0F1E] p-4 flex flex-col gap-2"
              >
                <p className="text-[10px] uppercase tracking-wider text-white/50 leading-tight">
                  {tile.label}
                </p>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-bold text-white font-mono tabular-nums">
                    <CountUp target={tile.value} display={tile.display} />
                  </span>
                  <span
                    className={`text-[10px] font-mono font-semibold flex items-center gap-0.5 ${toneColor}`}
                  >
                    <Icon className="h-3 w-3" />
                    {tile.delta}
                  </span>
                </div>
                <Sparkline
                  points={tile.spark}
                  tone={tile.tone}
                  delay={0.7 + i * 0.12}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40">
          <span>continuiq.bi / overview</span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-success)]" />
            synced 2m ago
          </span>
        </div>
      </motion.div>

      {/* Floating callout */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="absolute -bottom-5 -right-3 sm:-right-6 rounded-lg border border-[var(--accent-success)]/40 bg-[#0A0F1E] px-3 py-2 shadow-xl animate-drift"
      >
        <p className="text-[10px] uppercase tracking-wider text-[var(--accent-success)] font-mono font-semibold">
          ▲ next ₹10L hiding here
        </p>
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-16"
      aria-label="Hero"
      style={{ backgroundColor: "#0A0F1E" }}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 animate-mesh"
          style={{
            background:
              "linear-gradient(135deg, #0A0F1E 0%, #0F1E3D 30%, #0A0F1E 60%, #1E3A8A 100%)",
            opacity: 0.6,
          }}
        />
        <div className="absolute inset-0 grid-overlay opacity-60" />
        <div
          className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full animate-orb opacity-20"
          style={{
            background:
              "radial-gradient(circle, #3B82F6 0%, #1E40AF 40%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-[60fr_40fr] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[#60A5FA]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA] animate-pulse-dot" />
                Business Intelligence Partner
              </span>
            </motion.div>

            <h1
              className="font-bold text-white leading-[1.05] tracking-tight"
              style={{
                fontSize: "clamp(2.25rem, 4.8vw + 0.5rem, 4.25rem)",
                fontFamily: "var(--font-outfit, sans-serif)",
              }}
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.22em]"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.035 }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl"
            >
              Continuiq is the outsourced BI team for growing businesses. We
              turn your sales, inventory, and customer data into decisions that
              increase revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                size="lg"
                asChild
                className="bg-[var(--accent-primary)] hover:brightness-110 text-white font-semibold shadow-lg shadow-[var(--accent-primary)]/30 gap-2"
              >
                <Link href="/audit">
                  Book a Free Data Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white/40 font-semibold"
              >
                <a
                  href="#process"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#process")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  See how we work
                </a>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="text-xs text-white/40 font-medium pt-2"
            >
              Trusted by ecommerce, retail, manufacturing & healthcare brands
              across India.
            </motion.p>
          </div>

          {/* Right */}
          <div className="relative">
            <KpiDashboard />
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
    </section>
  );
}
