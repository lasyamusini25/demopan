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
    <footer style={{ background: "#f8f6f2", color: "#555555", borderTop: "1px solid rgba(0, 92, 151, 0.08)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "6rem 2.5rem 2rem" }}>

        {/* Main row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "4rem" }}>

          {/* Column 1: Brand */}
          <div style={{ maxWidth: "300px" }}>
            <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "1.5rem" }}>
              <Image
                src="/images/Pan-Infra-Logo.png.webp"
                alt="Pan Infra Logo"
                width={160}
                height={54}
                style={{
                  objectFit: "contain",
                }}
              />
            </Link>
            <p style={{ fontSize: "0.75rem", color: "#005c97", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1.25rem", fontWeight: 800 }}>
              ESTABLISHED 2010
            </p>
            <p style={{ fontSize: "0.9rem", color: "#666666", lineHeight: 1.8 }}>
              Hyderabad&apos;s most trusted real estate developer. Delivering premium plots and luxury villas across all growth corridors.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.32em", color: "#005c97", textTransform: "uppercase", marginBottom: "1.75rem", fontWeight: 950 }}>EXPLORE OUR VISION</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: "0.9rem", color: "#555555", textDecoration: "none", transition: "color 0.2s", fontWeight: 500 }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Reach Us */}
          <div>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.32em", color: "#005c97", textTransform: "uppercase", marginBottom: "1.75rem", fontWeight: 950 }}>REACH US BELOW</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  fontSize: "0.9rem",
                  color: "#555555",
                  textDecoration: "none",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ee2e22")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
              >
                <span style={{ fontWeight: 600, color: "#005c97" }}>WhatsApp:</span> {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  fontSize: "0.9rem",
                  color: "#555555",
                  textDecoration: "none",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ee2e22")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
              >
                <span style={{ fontWeight: 600, color: "#005c97" }}>Email:</span> {SITE.email}
              </a>
            </div>
          </div>

          {/* Column 4: Location */}
          <div>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.32em", color: "#005c97", textTransform: "uppercase", marginBottom: "1.75rem", fontWeight: 950 }}>PAN INFRA SPACES PVT LTD</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.9rem",
                  color: "#555555",
                  lineHeight: 1.7,
                  textDecoration: "none",
                  display: "block",
                  transition: "color 0.2s",
                  marginBottom: "1.5rem"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ee2e22")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
              >
                {SITE.address}
              </a>
            </div>
            {/* Map Integration */}
            <div style={{ border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden", borderRadius: "0.5rem" }}>
              <iframe
                title="Pan Infra office location"
                src="https://www.google.com/maps?q=Dallas+Centre,+Knowledge+City+Rd,+Rai+Durg,+Hyderabad,+Telangana+500032&output=embed"
                style={{ width: "100%", height: "180px", display: "block", border: "none" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", marginTop: "5rem", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <p style={{ fontSize: "0.7rem", color: "#999999", marginBottom: "0.4rem" }}>
              © {new Date().getFullYear()} Pan Infra. All rights reserved.
            </p>
            <p style={{ fontSize: "0.65rem", color: "#bbbbbb", letterSpacing: "0.05em" }}>
              Hyderabad, India
            </p>
          </div>

          {/* Horizontal Social Links */}
          <div style={{ display: "flex", gap: "2rem" }}>
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.75rem",
                  color: "#005c97",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  fontWeight: 700,
                  transition: "color 0.2s"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ee2e22")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#005c97")}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
