"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Process", href: "/#process" },
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
  const pathname = usePathname();
  const isHome = pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth-scroll for in-page anchors when already on home, otherwise let Link navigate.
  const handleAnchorScroll = (e: React.MouseEvent, href: string) => {
    if (isHome && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.slice(2);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  // Header text color: white on dark hero (when transparent on home), normal otherwise.
  const navTextColor = !scrolled && isHome
    ? "text-white/85 hover:text-white"
    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]";
  const logoTextColor = !scrolled && isHome
    ? "text-white"
    : "text-[var(--text-primary)]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Continuiq home"
          >
            <div className="relative h-11 w-11 rounded-full overflow-hidden ring-2 ring-[var(--accent-primary)]/20 group-hover:ring-[var(--accent-primary)]/60 transition-all duration-300 shadow-md group-hover:shadow-[var(--accent-primary)]/30">
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
              className={`text-xl font-bold tracking-tight transition-colors duration-300 ${logoTextColor}`}
              style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
            >
              Continuiq
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchorScroll(e, link.href)}
                className={`text-sm font-medium transition-colors duration-200 relative group ${navTextColor}`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-[var(--accent-primary)] group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              size="sm"
              asChild
              className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:brightness-110 text-white shadow-md shadow-[var(--accent-primary)]/20 font-semibold"
            >
              <Link href="/audit">Book Free Audit</Link>
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className={`h-9 w-9 inline-flex items-center justify-center rounded-lg border transition-colors ${
                    !scrolled && isHome
                      ? "border-white/20 text-white hover:bg-white/10"
                      : "border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-muted)]"
                  }`}
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <div className="flex flex-col h-full pt-8">
                  <div className="flex items-center gap-2.5 mb-10">
                    <div className="relative h-11 w-11 rounded-full overflow-hidden ring-2 ring-[var(--accent-primary)]/20 shadow-md flex-shrink-0">
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
                  <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.label}>
                        <Link
                          href={link.href}
                          onClick={(e) => handleAnchorScroll(e, link.href)}
                          className="flex items-center px-4 py-3 rounded-lg text-base font-medium text-[var(--text-primary)] hover:bg-[var(--bg-muted)] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto pt-8">
                    <SheetClose asChild>
                      <Button
                        asChild
                        className="w-full bg-[var(--accent-primary)] text-white font-semibold"
                      >
                        <Link href="/audit">Book Free Audit</Link>
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
