import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { caseStudies, getCaseStudy, type MetricTile } from "@/data/case-studies";

const toneColor = {
  success: "var(--accent-success)",
  danger: "var(--accent-danger)",
  warning: "var(--accent-warning)",
  neutral: "var(--text-primary)",
};

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Case study not found" };
  return {
    title: `${cs.headline} | Continuiq Case Study`,
    description: cs.context,
  };
}

function MetricCard({ tile }: { tile: MetricTile }) {
  const color = toneColor[tile.tone ?? "neutral"];
  return (
    <div
      className="rounded-xl p-5 border"
      style={{
        borderColor: `color-mix(in srgb, ${color} 25%, transparent)`,
        background: `color-mix(in srgb, ${color} 5%, transparent)`,
      }}
    >
      <p className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
        {tile.label}
      </p>
      <p
        className="text-2xl sm:text-3xl font-bold font-mono tabular-nums leading-none"
        style={{ color }}
      >
        {tile.value}
      </p>
      {(tile.delta || tile.caption) && (
        <p className="text-xs text-[var(--text-secondary)] mt-2">
          {tile.delta || tile.caption}
        </p>
      )}
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

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
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All case studies
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#60A5FA]">
                {cs.industry}
              </span>
              <span className="text-[9px] uppercase tracking-wider font-semibold text-white/60 border border-white/20 rounded px-1.5 py-0.5">
                Sample engagement
              </span>
            </div>

            <h1
              className="font-bold text-white leading-[1.05] tracking-tight mb-6"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw + 0.5rem, 3.75rem)",
                fontFamily: "var(--font-outfit, sans-serif)",
              }}
            >
              {cs.headline}
            </h1>

            <p className="text-base text-white/60 mb-8">{cs.industryLabel}</p>

            {/* "The number" hero tile */}
            <div
              className="inline-flex items-baseline gap-3 rounded-2xl border p-6"
              style={{
                borderColor: `color-mix(in srgb, ${toneColor[cs.wowMetric.tone]} 40%, transparent)`,
                background: `color-mix(in srgb, ${toneColor[cs.wowMetric.tone]} 10%, transparent)`,
              }}
            >
              <span
                className="text-4xl sm:text-5xl font-bold font-mono tabular-nums leading-none"
                style={{ color: toneColor[cs.wowMetric.tone] }}
              >
                {cs.wowMetric.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-white/60 font-semibold">
                {cs.wowMetric.label}
              </span>
            </div>
          </div>
        </section>

        {/* Body */}
        <article className="bg-[var(--bg-secondary)] py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            {/* Sample disclaimer */}
            <aside className="rounded-xl border border-[var(--accent-warning)]/30 bg-[var(--accent-warning)]/5 p-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <strong className="text-[var(--text-primary)]">Sample engagement —</strong>{" "}
              The client identity is anonymized. Numbers are illustrative of the
              kind of outcome this process delivers; specific results vary by
              business.
            </aside>

            <section>
              <p className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)] mb-3">
                The Business
              </p>
              {cs.business.map((para, i) => (
                <p
                  key={i}
                  className="text-base text-[var(--text-secondary)] leading-relaxed mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </section>

            <section>
              <p className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[var(--accent-danger)] mb-3">
                The Problem
              </p>
              {cs.problem.map((para, i) => (
                <p
                  key={i}
                  className="text-base text-[var(--text-secondary)] leading-relaxed mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </section>

            <section>
              <p className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)] mb-3">
                What We Did
              </p>
              {cs.whatWeDid.map((para, i) => (
                <p
                  key={i}
                  className="text-base text-[var(--text-secondary)] leading-relaxed mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </section>

            <section>
              <p className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[var(--accent-success)] mb-4">
                The Result
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {cs.result.tiles.map((tile) => (
                  <MetricCard key={tile.label} tile={tile} />
                ))}
              </div>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {cs.result.summary}
              </p>
            </section>

            <section>
              <p className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)] mb-3">
                What Changed for the Owner
              </p>
              <blockquote className="border-l-2 border-[var(--accent-primary)] pl-5 py-1">
                <p className="text-lg sm:text-xl font-medium text-[var(--text-primary)] italic leading-relaxed">
                  {cs.ownerOutcome}
                </p>
              </blockquote>
            </section>

            {/* CTA */}
            <div className="rounded-2xl bg-[var(--bg-muted)] p-8 text-center">
              <h2
                className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3 tracking-tight"
                style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
              >
                Want a result like this?
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mb-5">
                Book a free data audit. We&apos;ll review your business and
                tell you exactly where the money is hiding.
              </p>
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--accent-primary)] hover:brightness-110 text-white font-semibold text-sm shadow-lg shadow-[var(--accent-primary)]/30 transition-all"
              >
                Book a free audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
