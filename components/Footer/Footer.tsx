"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE, NAV_LINKS } from "@/lib/constants";

const SOCIALS = [
  { label: "Facebook", href: SITE.social.facebook },
  { label: "Instagram", href: SITE.social.instagram },
  { label: "X", href: SITE.social.twitter },
  { label: "LinkedIn", href: SITE.social.linkedin },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0c0c0c", color: "#ffffff", borderTop: "1px solid rgba(197,164,109,0.2)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "5rem 2.5rem 2rem" }}>

        {/* Main row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem" }}>

          {/* Brand */}
          <div style={{ maxWidth: "300px" }}>
            <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "0.5rem" }}>
              <Image
                src="/images/Pan-Infra-Logo.png.webp"
                alt="Pan Infra Logo"
                width={140}
                height={48}
                style={{
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)"
                }}
              />
            </Link>
            <p style={{ fontSize: "0.55rem", color: "#c5a46d", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: "0.3rem", marginBottom: "0.9rem" }}>
              Premium Plots & Villas · Est. 2010
            </p>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
              Hyderabad's most trusted real estate developer. HMDA & DTCP approved plots, premium villas, and gated communities across all growth corridors.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: "0.5rem", letterSpacing: "0.3em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "1.25rem" }}>USEFUL LINKS</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: "0.5rem", letterSpacing: "0.3em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "1.25rem" }}>VISIT US</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a
                href={`tel:${SITE.phone}`}
                style={{
                  fontSize: "1.25rem",
                  color: "#ffffff",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontWeight: 600
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#c5a46d">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{SITE.email}</a>
              <div style={{ marginTop: "0.25rem" }}>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.6 }}>{SITE.address}</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <p style={{ fontSize: "0.5rem", letterSpacing: "0.3em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "1.25rem" }}>Follow</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "4rem", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Pan Infra. All rights reserved. Designed for a better lifestyle.
          </p>
          <p style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em" }}>
            Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
}
