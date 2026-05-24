import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | Continuiq",
  description:
    "Real businesses. Real numbers. Sample engagements showing how Continuiq turned messy data into measurable revenue impact across D2C, retail, and manufacturing.",
};

const toneColor = {
  success: "var(--accent-success)",
  danger: "var(--accent-danger)",
  warning: "var(--accent-warning)",
};

export default function CaseStudiesIndexPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section
          className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden"
          style={{ backgroundColor: "#0A0F1E" }}
        >
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
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[#60A5FA] mb-4">
              Case Studies
            </p>
            <h1
              className="font-bold text-white leading-[1.05] tracking-tight mb-5"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw + 0.5rem, 3.75rem)",
                fontFamily: "var(--font-outfit, sans-serif)",
              }}
            >
              Real businesses. Real numbers.
            </h1>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
              Sample engagements with anonymized client names. Each one shows
              the problem, what we did, and the numbers that moved.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-20 lg:py-24 bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {caseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="group relative flex flex-col h-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-6 hover:border-[var(--accent-primary)]/40 hover:shadow-xl hover:shadow-[var(--accent-primary)]/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[var(--accent-primary)]">
                      {cs.industry}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider font-semibold text-[var(--text-muted)] border border-[var(--border-subtle)] rounded px-1.5 py-0.5">
                      Sample
                    </span>
                  </div>

                  <h2
                    className="text-lg font-bold text-[var(--text-primary)] leading-tight mb-3 tracking-tight"
                    style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
                  >
                    {cs.headline}
                  </h2>

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

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">
                    {cs.context}
                  </p>

                  <div className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent-primary)] group-hover:gap-2 transition-all">
                    Read case study
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
