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
    <footer style={{ background: "#005c97", color: "#ffffff", borderTop: "1px solid rgba(0, 92, 151, 0.2)" }}>
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
            <p style={{ fontSize: "0.75rem", color: "#ffffff", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: "0.3rem", marginBottom: "0.9rem", fontWeight: 700 }}>
              Premium Plots & Villas · Est. 2010
            </p>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
              Hyderabad&apos;s most trusted real estate developer. HMDA & DTCP approved plots, premium villas, and gated communities across all growth corridors.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#ffffff", textTransform: "uppercase", marginBottom: "1.25rem", fontWeight: 800 }}>USEFUL LINKS</p>
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
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#ffffff", textTransform: "uppercase", marginBottom: "1.25rem", fontWeight: 800 }}>VISIT US</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  fontSize: "0.85rem",
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ee2e22")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
              <a href={`mailto:${SITE.email}`} style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{SITE.email}</a>
              <div style={{ marginTop: "0.25rem" }}>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.6 }}>{SITE.address}</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#ffffff", textTransform: "uppercase", marginBottom: "1.25rem", fontWeight: 800 }}>Follow</p>
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
