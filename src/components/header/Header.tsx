"use client";

import * as React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    React.startTransition(() => setMounted(true));
  }, []);

  if (!mounted) {
    return (
      <button
        className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--surface)] transition-colors"
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--surface)] transition-all duration-300"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 transition-transform duration-300 rotate-0" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300 rotate-0" />
      )}
    </button>
  );
}

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Continuiq Consulting home"
          >
            <div className="relative h-11 w-11 rounded-full overflow-hidden ring-2 ring-[var(--brand-accent)]/20 group-hover:ring-[var(--brand-accent)]/60 transition-all duration-300 shadow-md group-hover:shadow-[var(--brand-accent)]/30">
              <Image
                src="/logo.png"
                alt="Continuiq logo"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <span
              className="text-xl font-bold text-[var(--text-primary)] tracking-tight"
              style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
            >
              Continuiq
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-[var(--brand-accent)] group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              size="sm"
              onClick={() => handleNavClick("#contact")}
              className="bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)] hover:brightness-110 text-white shadow-md shadow-[var(--brand-accent)]/20 font-semibold"
            >
              Book Free Audit
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--surface)] transition-colors"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <div className="flex flex-col h-full pt-8">
                  <div className="flex items-center gap-2.5 mb-10">
                    <div className="relative h-11 w-11 rounded-full overflow-hidden ring-2 ring-[var(--brand-accent)]/20 shadow-md flex-shrink-0">
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
                  <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.label}>
                        <a
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(link.href);
                          }}
                          className="flex items-center px-4 py-3 rounded-lg text-base font-medium text-[var(--text-primary)] hover:bg-[var(--surface)] transition-colors"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto pt-8">
                    <SheetClose asChild>
                      <Button
                        className="w-full bg-[var(--brand-accent)] text-white font-semibold"
                        onClick={() => handleNavClick("#contact")}
                      >
                        Book Free Audit
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
