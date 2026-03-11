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
                      ? "#ee2e22"
                      : isDarkPage && !scrolled
                        ? "rgba(255,255,255,0.85)"
                        : "#005c97",
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
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.75rem 1.75rem",
                border: "1px solid #ee2e22",
                color: "#ee2e22",
                transition: "all 0.3s ease",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ee2e22";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#ee2e22";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
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
            color: isDarkPage && !scrolled ? "#ffffff" : "#005c97",
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
                      color: pathname === item.href ? "#ee2e22" : "#005c97",
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
