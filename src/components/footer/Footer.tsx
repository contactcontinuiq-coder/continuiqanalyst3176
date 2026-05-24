import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { caseStudies } from "@/data/case-studies";

const linkGroups = [
  {
    heading: "Services",
    links: [
      { label: "Overview", href: "/services" },
      ...services.map((s) => ({ label: s.name, href: `/services#${s.slug}` })),
    ],
  },
  {
    heading: "Case Studies",
    links: [
      { label: "All case studies", href: "/case-studies" },
      ...caseStudies.map((c) => ({
        label: c.industry.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase()),
        href: `/case-studies/${c.slug}`,
      })),
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Free Audit", href: "/audit" },
      { label: "Contact", href: "mailto:contactcontinuiq@gmail.com" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="bg-[var(--bg-muted)] border-t border-[var(--border-subtle)]"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top — CTA strip */}
        <div className="py-10 border-b border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p
              className="text-lg sm:text-xl font-bold text-[var(--text-primary)] tracking-tight"
              style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
            >
              Ready to see where the money is hiding?
            </p>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              10 free audit slots open this month.
            </p>
          </div>
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--accent-primary)] hover:brightness-110 text-white font-semibold text-sm shadow-md transition-all whitespace-nowrap"
          >
            Book your free audit
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Main grid */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative h-11 w-11 rounded-full overflow-hidden ring-1 ring-[var(--border-subtle)] shadow-md flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Continuiq logo"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <span
                className="text-xl font-bold text-[var(--text-primary)] tracking-tight"
                style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
              >
                Continuiq
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs">
              The Business Intelligence Partner for growing businesses across
              ecommerce, retail, manufacturing, logistics & healthcare.
            </p>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <MapPin className="h-4 w-4 flex-shrink-0 text-[var(--accent-primary)]" />
              <span>Indore, MP, India</span>
            </div>
            <a
              href="mailto:contactcontinuiq@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors group"
              aria-label="Email contactcontinuiq@gmail.com"
            >
              <Mail className="h-4 w-4 flex-shrink-0 text-[var(--accent-primary)]" />
              <span className="group-hover:underline">contactcontinuiq@gmail.com</span>
            </a>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] mb-4">
                {group.heading}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Continuiq Consulting. All rights reserved.</p>
          <p>Built with care in Indore, India.</p>
        </div>
      </div>
    </footer>
  );
}
