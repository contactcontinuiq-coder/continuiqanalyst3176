import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Page Not Found | Continuiq Consulting",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="flex-1 flex items-center justify-center min-h-[80svh] relative overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(37,99,235,0.08) 0%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 grid-overlay opacity-30" />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center py-24">
          {/* 404 number */}
          <div
            className="text-[clamp(6rem,20vw,12rem)] font-bold leading-none mb-4 select-none"
            style={{
              fontFamily: "var(--font-outfit, sans-serif)",
              background: "linear-gradient(135deg, var(--brand-primary), var(--brand-accent), var(--brand-glow))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </div>

          {/* Logo mark */}
          <div className="flex items-center justify-center gap-2.5 mb-8">
            <div className="relative h-11 w-11 rounded-full overflow-hidden ring-2 ring-[var(--brand-accent)]/30 shadow-lg shadow-[var(--brand-accent)]/20 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Continuiq logo"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <span
              className="text-xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
            >
              Continuiq
            </span>
          </div>

          <h1
            className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
          >
            This page doesn&apos;t exist
          </h1>
          <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Looks like this URL led nowhere. The data here is missing — just like the
            insights hiding in your analytics stack.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--brand-accent)] text-white font-semibold hover:brightness-110 transition-all shadow-lg shadow-[var(--brand-accent)]/25 text-sm"
            >
              ← Back to home
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text-primary)] font-semibold hover:bg-[var(--surface)] transition-all text-sm"
            >
              Book a free audit
            </Link>
          </div>

          <p className="mt-10 text-sm text-[var(--text-muted)]">
            Need help?{" "}
            <a
              href="mailto:contactcontinuiq@gmail.com"
              className="text-[var(--brand-accent)] hover:underline"
            >
              contactcontinuiq@gmail.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
