"use client";

import * as React from "react";
import Image from "next/image";
import { MapPin, Mail, Link as LinkIcon } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)]" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative h-11 w-11 rounded-full overflow-hidden ring-1 ring-[var(--border)] shadow-md flex-shrink-0">
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
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs">
              Continuity for the data that runs your business.
            </p>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <MapPin className="h-4 w-4 flex-shrink-0 text-[var(--brand-accent)]" />
              <span>Indore, MP, India</span>
            </div>
            <a
              href="mailto:contactcontinuiq@gmail.com"
              className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--brand-accent)] transition-colors group"
              aria-label="Email contactcontinuiq@gmail.com"
            >
              <Mail className="h-4 w-4 flex-shrink-0 text-[var(--brand-accent)]" />
              <span className="group-hover:underline">contactcontinuiq@gmail.com</span>
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
              Quick links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social / CTA */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="https://linkedin.com/company/continuiq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--brand-accent)] transition-colors group"
                aria-label="Continuiq on LinkedIn"
              >
                <LinkIcon className="h-4 w-4" />
                <span>LinkedIn (coming soon)</span>
              </a>
            </div>
            <div className="mt-6 p-4 rounded-xl border border-[var(--brand-accent)]/20 bg-[var(--brand-accent)]/5">
              <p className="text-xs text-[var(--text-secondary)] mb-3">
                Ready to clean up your data?
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm font-semibold text-[var(--brand-accent)] hover:underline"
              >
                Book your free audit →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--text-muted)] text-center sm:text-left">
            © 2026 Continuiq Consulting. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Made with ❤️ in Indore, India
          </p>
        </div>
      </div>
    </footer>
  );
}
