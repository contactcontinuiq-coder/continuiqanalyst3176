import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { services } from "@/data/services";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "Services | Continuiq — Data Audit, Dashboards, Growth Intelligence",
  description:
    "Four ways we work with you. Start with an audit. Grow into a partnership. Data Audit, Executive Dashboards, Growth Intelligence, Revenue Optimization.",
};

const toneAccent: Record<string, string> = {
  audit: "var(--accent-primary)",
  build: "var(--accent-success)",
  subscribe: "var(--accent-warning)",
  premium: "var(--accent-danger)",
};

export default function ServicesPage() {
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
              Services
            </p>
            <h1
              className="font-bold text-white leading-[1.05] tracking-tight mb-5"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw + 0.5rem, 3.75rem)",
                fontFamily: "var(--font-outfit, sans-serif)",
              }}
            >
              Four ways we work with you.
            </h1>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
              Start with an audit. Grow into a partnership. Every service is
              productized with clear deliverables, prices, and timelines — so
              you know what you&apos;re getting before you sign.
            </p>
          </div>
        </section>

        {/* Expanded service blocks */}
        <section className="py-16 lg:py-20 bg-[var(--bg-secondary)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
            {services.map((service, i) => {
              const accent = toneAccent[service.tone];
              return (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-28 grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12"
                >
                  {/* Left column: number + name */}
                  <div className="lg:sticky lg:top-28 lg:self-start">
                    <span
                      className="inline-block text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-md mb-4"
                      style={{
                        color: accent,
                        background: `color-mix(in srgb, ${accent} 12%, transparent)`,
                      }}
                    >
                      {service.number}
                    </span>
                    <h2
                      className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3 leading-tight tracking-tight"
                      style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
                    >
                      {service.name}
                    </h2>
                    <p className="text-base font-medium text-[var(--text-primary)]/85 leading-snug mb-5">
                      {service.tagline}
                    </p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-1">
                          Price
                        </p>
                        <p className="text-lg font-bold text-[var(--text-primary)] font-mono tabular-nums">
                          {service.priceRange}
                        </p>
                        {service.priceNote && (
                          <p className="text-xs text-[var(--text-muted)] mt-0.5">
                            {service.priceNote}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right column: details */}
                  <div className="space-y-6">
                    <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                      {service.description}
                    </p>

                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[var(--accent-primary)] font-mono font-bold mb-3">
                        What you get
                      </p>
                      <ul className="space-y-2.5">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: accent }}
                            />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-mono font-bold mb-2">
                        Best for
                      </p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {service.bestFor}
                      </p>
                    </div>

                    <Link
                      href="/audit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-semibold text-sm shadow-md transition-all hover:brightness-110 hover:scale-[1.01]"
                      style={{ backgroundColor: accent }}
                    >
                      {service.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {i < services.length - 1 && (
                    <div className="lg:col-span-2 border-b border-[var(--border-subtle)]" />
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
