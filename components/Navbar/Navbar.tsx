"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Pages that start with a dark background hero/parallax section
  const isDarkPage = pathname === "/" || pathname === "/projects" || pathname === "/why-paninfra" || pathname === "/about" || pathname === "/contact";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
        background: scrolled ? "rgba(255,255,255,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <nav
        className="px-5 py-4 md:px-10 md:py-6 min-h-[80px] md:min-h-[110px] flex justify-center md:justify-between items-center relative"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none"
          }}
        >
          <Image
            src="/images/Pan-Infra-Logo.png.webp"
            alt="Pan Infra Logo"
            width={140}
            height={48}
            style={{
              objectFit: "contain",
              filter: isDarkPage && !scrolled ? "brightness(0) invert(1)" : "none",
              transition: "filter 0.3s ease"
            }}
            priority
          />
        </Link>
        {/* Desktop links */}
        <ul
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color:
                    pathname === item.href
                      ? "#c5a46d"
                      : isDarkPage && !scrolled
                        ? "rgba(255,255,255,0.85)"
                        : "#111111",
                  transition: "color 0.25s",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={`tel:${SITE.phone}`}
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.75rem 1.75rem",
                border: "1px solid #c5a46d",
                color: "#c5a46d",
                transition: "all 0.3s ease",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#c5a46d";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#c5a46d";
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              {SITE.phone}
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center"
          style={{
            position: "absolute",
            right: "2.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: scrolled ? "1px solid rgba(0,0,0,0.15)" : "1px solid rgba(255,255,255,0.25)",
            borderRadius: "50%",
            width: "42px",
            height: "42px",
            fontSize: "1.3rem",
            color: isDarkPage && !scrolled ? "#ffffff" : "#111111",
          }}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "×" : "≡"}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: "hidden",
              background: "#ffffff",
              borderTop: "1px solid rgba(0,0,0,0.07)",
            }}
          >
            <ul style={{ listStyle: "none", padding: "3rem 1.25rem", margin: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "1.75rem" }}>
              {NAV_LINKS.map((item) => (
                <li key={item.href} style={{ textAlign: "center" }}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{
                      fontFamily: "var(--font-playfair, Georgia, serif)",
                      fontSize: "1.5rem",
                      letterSpacing: "0.05em",
                      color: pathname === item.href ? "#c5a46d" : "#111111",
                      textDecoration: "none",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header >
  );
}
