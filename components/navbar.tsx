"use client";

import { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "תוכנית הלימודים", href: "#curriculum" },
  { label: "תוצאות", href: "#instructors" },
  { label: "שאלות נפוצות", href: "#faq" },
  { label: "למה לי?", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="#register">שמירת מושב</Link>
          </Button>
        </div>

        <button
          onClick={() => {
            flushSync(() => setMobileOpen((open) => !open));
          }}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">
            סדנת פיתוח אפליקציות עם
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">
              AI
            </span>
          </div>
        </Link>
      </nav>

      {mobileOpen && (
        <div className="border-b border-border bg-background md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="w-fit">
              <Link href="#register" onClick={() => setMobileOpen(false)}>
                שמירת מושב
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
