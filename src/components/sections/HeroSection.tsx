"use client";

import * as React from "react";
import { motion } from "motion/react";
import { ArrowRight, BarChart3, TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const headline = "Turn your messy business data into decisions that make money.";
const headlineWords = headline.split(" ");

const techLogos = [
  { name: "Power BI", abbr: "PBI" },
  { name: "Python", abbr: "Py" },
  { name: "SQL", abbr: "SQL" },
  { name: "Google Analytics", abbr: "GA4" },
  { name: "Shopify", abbr: "SHO" },
];

const barData = [65, 80, 55, 90, 70, 85, 78, 92, 68, 88];
const linePoints = [20, 35, 28, 45, 38, 52, 44, 60, 55, 72];

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative rounded-2xl border border-[var(--border)]/60 bg-[var(--surface-elevated)]/80 backdrop-blur-sm shadow-2xl shadow-[var(--brand-accent)]/10 overflow-hidden"
        style={{ backdropFilter: "blur(20px)" }}
      >
        {/* Dashboard header */}
        <div className="flex items-center gap-2 px-5 py-4 border-b border-[var(--border)]/50">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <div className="h-3 w-3 rounded-full bg-green-400/80" />
          </div>
          <div className="flex-1 mx-4">
            <div className="h-5 rounded-md bg-[var(--surface)] flex items-center px-3">
              <span className="text-[10px] text-[var(--text-muted)] font-mono">continuiq.analytics / overview</span>
            </div>
          </div>
          <BarChart3 className="h-4 w-4 text-[var(--brand-accent)]" />
        </div>

        {/* Dashboard content */}
        <div className="p-5 space-y-5">
          {/* Mini stats row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Revenue", val: "₹24.8L", up: true },
              { label: "Orders", val: "1,847", up: true },
              { label: "Refunds", val: "2.1%", up: false },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="rounded-xl bg-[var(--surface)] border border-[var(--border)]/50 px-3 py-3"
              >
                <p className="text-[10px] text-[var(--text-muted)] font-medium">{stat.label}</p>
                <p className="text-base font-bold text-[var(--text-primary)] font-mono mt-0.5">
                  {stat.val}
                </p>
                <div className={`flex items-center gap-0.5 mt-1 ${stat.up ? "text-green-500" : "text-red-500"}`}>
                  {stat.up ? (
                    <TrendingUp className="h-2.5 w-2.5" />
                  ) : (
                    <TrendingDown className="h-2.5 w-2.5" />
                  )}
                  <span className="text-[9px] font-mono">{stat.up ? "+12.4%" : "-3.2%"}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="rounded-xl bg-[var(--surface)] border border-[var(--border)]/50 p-4">
            <p className="text-[11px] text-[var(--text-secondary)] font-medium mb-3">Weekly Revenue</p>
            <div className="flex items-end gap-1 h-20">
              {barData.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 7
                      ? "var(--brand-accent)"
                      : `color-mix(in srgb, var(--brand-accent) ${40 + i * 6}%, transparent)`,
                    transformOrigin: "bottom",
                  }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.06, ease: "easeOut" }}
                />
              ))}
            </div>
          </div>

          {/* Line chart mini */}
          <div className="rounded-xl bg-[var(--surface)] border border-[var(--border)]/50 p-4">
            <p className="text-[11px] text-[var(--text-secondary)] font-medium mb-3">Customer LTV Trend</p>
            <svg viewBox="0 0 200 60" className="w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--brand-accent)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Area fill */}
              <motion.path
                d={`M ${linePoints.map((v, i) => `${i * 22},${60 - v}`).join(" L ")} L 198,60 L 0,60 Z`}
                fill="url(#lineGrad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
              {/* Line */}
              <motion.polyline
                points={linePoints.map((v, i) => `${i * 22},${60 - v}`).join(" ")}
                fill="none"
                stroke="var(--brand-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Floating KPI cards */}
      <motion.div
        className="absolute -top-4 -right-4 rounded-xl border border-green-500/30 bg-green-500/10 backdrop-blur-sm px-4 py-3 shadow-lg"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        style={{ animation: "drift 4s ease-in-out infinite" }}
      >
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-green-500/20 flex items-center justify-center">
            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
          <div>
            <p className="text-[10px] text-green-600 dark:text-green-400 font-medium">Revenue</p>
            <p className="text-sm font-bold text-green-700 dark:text-green-300 font-mono">+23%</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -left-4 rounded-xl border border-red-400/30 bg-red-400/10 backdrop-blur-sm px-4 py-3 shadow-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        style={{ animation: "drift 5s ease-in-out infinite 1.5s" }}
      >
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-red-400/20 flex items-center justify-center">
            <TrendingDown className="h-4 w-4 text-red-500" />
          </div>
          <div>
            <p className="text-[10px] text-red-600 dark:text-red-400 font-medium">Churn</p>
            <p className="text-sm font-bold text-red-700 dark:text-red-300 font-mono">-8%</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 -right-6 -translate-y-1/2 rounded-xl border border-[var(--brand-accent)]/30 bg-[var(--brand-accent)]/10 backdrop-blur-sm px-4 py-3 shadow-lg"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        style={{ animation: "drift 6s ease-in-out infinite 0.8s" }}
      >
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[var(--brand-accent)]/20 flex items-center justify-center">
            <DollarSign className="h-4 w-4 text-[var(--brand-accent)]" />
          </div>
          <div>
            <p className="text-[10px] text-[var(--text-secondary)] font-medium">LTV</p>
            <p className="text-sm font-bold text-[var(--text-primary)] font-mono">₹4,200</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Mesh gradient */}
        <div
          className="absolute inset-0 animate-mesh"
          style={{
            background:
              "linear-gradient(135deg, #050B1A 0%, #0F2A5C 25%, #050B1A 50%, #1E3A8A 75%, #050B1A 100%)",
          }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-40" />
        {/* Glowing orb */}
        <div
          className="absolute top-1/4 right-1/3 h-96 w-96 rounded-full animate-orb opacity-20"
          style={{
            background:
              "radial-gradient(circle, #3B82F6 0%, #1E40AF 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full animate-orb opacity-10"
          style={{
            background:
              "radial-gradient(circle, #60A5FA 0%, #3B82F6 50%, transparent 70%)",
            filter: "blur(40px)",
            animationDelay: "7s",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-[60fr_40fr] gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--brand-accent)]/30 bg-[var(--brand-accent)]/10 text-sm font-medium text-[var(--brand-glow)]">
                📍 India · Serving D2C brands globally
              </span>
            </motion.div>

            {/* H1 */}
            <h1
              className="font-bold text-white leading-[1.1]"
              style={{
                fontSize: "clamp(2.5rem, 5vw + 1rem, 4.5rem)",
                fontFamily: "var(--font-outfit, sans-serif)",
              }}
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.25em]"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.04 }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-lg text-blue-100/80 leading-relaxed max-w-xl"
            >
              Continuiq builds dashboards, runs audits, and surfaces the insights
              your Shopify and Google Analytics dashboards are hiding. Get a free
              data audit this week.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                asChild
                className="bg-[var(--brand-accent)] hover:brightness-110 text-white font-semibold shadow-lg shadow-[var(--brand-accent)]/30 gap-2"
              >
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}>
                  Get My Free Audit
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/30 font-semibold"
              >
                <a href="#services" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
                }}>
                  See What We Do
                </a>
              </Button>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="pt-2"
            >
              <p className="text-xs text-blue-200/50 font-medium mb-3 uppercase tracking-wider">Built on</p>
              <div className="flex flex-wrap items-center gap-3">
                {techLogos.map((logo) => (
                  <div
                    key={logo.name}
                    title={logo.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                  >
                    <span className="text-xs font-mono font-bold text-blue-200/70">
                      {logo.abbr}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column */}
          <div className="relative">
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
    </section>
  );
}
