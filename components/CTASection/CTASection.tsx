"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export default function CTASection() {
  return (
    <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "2rem 2.5rem 7rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          background: "linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #111111 100%)",
          padding: "5rem 4rem",
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(197,164,109,0.2)",
        }}
      >
        {/* Decorative element */}
        <div style={{
          position: "absolute", top: 0, right: 0, width: "280px", height: "280px",
          background: "radial-gradient(circle, rgba(197,164,109,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-3rem", left: "-3rem", width: "200px", height: "200px",
          border: "1px solid rgba(197,164,109,0.1)", borderRadius: "50%",
          pointerEvents: "none",
        }} />

        <p style={{ fontSize: "0.6rem", letterSpacing: "0.38em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          Book a Site Visit
        </p>
        <h2
          style={{
            fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
            fontSize: "clamp(2.5rem,5.5vw,5rem)",
            lineHeight: 0.95,
            color: "#ffffff",
            marginBottom: "2.5rem",
            maxWidth: "720px",
          }}
        >
          Find your perfect plot or villa in Hyderabad.
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", maxWidth: "480px", lineHeight: 1.75, marginBottom: "3rem" }}>
          Book a free site visit and let our experts guide you to the ideal property in Hyderabad&apos;s most promising growth corridors.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href={`tel:${SITE.phone}`}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase",
              textDecoration: "none", padding: "1rem 2.5rem",
              background: "#c5a46d", color: "#ffffff",
              transition: "all 0.3s",
              fontWeight: 700,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#b8975e")}
            onMouseLeave={e => (e.currentTarget.style.background = "#c5a46d")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            Book Site Visit
          </a>
          <Link
            href="/contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase",
              textDecoration: "none", padding: "1rem 2.5rem",
              border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.7)",
              transition: "all 0.3s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#c5a46d";
              e.currentTarget.style.color = "#c5a46d";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.color = "rgba(255,255,255,0.7)";
            }}
          >
            Enquire →
          </Link>
          <Link
            href="/projects"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase",
              textDecoration: "none", padding: "1rem 2rem",
              border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.7)",
              transition: "all 0.3s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#c5a46d";
              e.currentTarget.style.color = "#c5a46d";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.color = "rgba(255,255,255,0.7)";
            }}
          >
            View Our Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
