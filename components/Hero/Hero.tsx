"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { SITE } from "@/lib/constants";

const headline = ["Premium", "Plots &", "Villas"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#005c97",
      }}
      aria-label="Hero section"
    >
      {/* ── FULL-BLEED BACKGROUND IMAGE ───────────────────── */}
      <motion.div
        style={{ y: imageY, position: "absolute", inset: "-10% 0", minHeight: "120%", zIndex: 0 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000"
          alt="Pan Infra – Premium Plots & Villas Hyderabad"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)",
        }} />
      </motion.div>

      {/* ── CONTENT ───────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          flexGrow: 1,
          padding: "7rem 2.5rem 2.5rem",
          zIndex: 1,
        }}
      >
        {/* Horizontal top rule */}
        <motion.div
          style={{
            position: "absolute",
            top: "110px",
            left: "2.5rem",
            right: "2.5rem",
            height: "1px",
            background: "rgba(255,255,255,0.12)",
            transformOrigin: "left",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
        />

        {/* Vertical index line */}
        <motion.div
          style={{
            position: "absolute",
            top: "25%",
            left: "2.5rem",
            width: "1px",
            height: "120px",
            background: "linear-gradient(to bottom, #005c97, transparent)",
            transformOrigin: "top",
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        <motion.div
          style={{ y: textY, maxWidth: "1280px", width: "100%", margin: "0 auto" }}
        >
          {/* Eyebrow */}
          <motion.div
            style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div style={{ width: "28px", height: "1px", background: "#ee2e22" }} />
            <p style={{
              fontSize: "0.6rem",
              letterSpacing: "0.45em",
              color: "rgba(255,255,255,0.55)",
              textTransform: "uppercase",
            }}>
              Hyderabad · Real Estate Developer
            </p>
          </motion.div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
              fontSize: "clamp(3rem, 7.5vw, 7.5rem)",
              lineHeight: 0.88,
              color: "#ffffff",
              margin: "0 0 1rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            {headline.map((word, i) => (
              <span
                key={word}
                style={{ display: "block", overflow: "hidden" }}
              >
                <motion.span
                  style={{ display: "block" }}
                  initial={{ y: "105%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.15 * i + 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            {/* Accent word in gold */}
            <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.15em" }}>
              <motion.span
                style={{ display: "block", color: "#ee2e22", fontStyle: "italic", textTransform: "uppercase", fontWeight: 800 }}
                initial={{ y: "105%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
              >
                In Hyderabad.
              </motion.span>
            </span>
          </h1>

          {/* Bottom row */}
          <motion.div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "2rem",
              marginTop: "2rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p style={{
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "420px",
              lineHeight: 1.75,
            }}>
              HMDA &amp; DTCP approved residential plots, luxury villas, and gated communities across Hyderabad&apos;s fastest-growing corridors.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  textDecoration: "none",
                  background: "linear-gradient(90deg, #ee2e22 0%, #f99918 100%)",
                  padding: "1.2rem 2.5rem",
                  transition: "all 0.35s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontWeight: 800,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
              <Link
                href="/projects"
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  textDecoration: "none",
                  background: "linear-gradient(90deg, #005c97 0%, #1e96d3 100%)",
                  padding: "1.2rem 2.5rem",
                  transition: "all 0.35s",
                  display: "inline-block",
                  border: "none",
                  fontWeight: 800,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  transition: "color 0.25s",
                  display: "inline-block",
                  fontWeight: 800,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#ffffff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
              >
                Enquire →
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            right: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <p style={{
            fontSize: "0.55rem",
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.35)",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
            marginBottom: "0.5rem",
          }}>Scroll</p>
          <motion.div
            style={{ width: "1px", height: "56px", background: "#005c97", transformOrigin: "top" }}
            animate={{ scaleY: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* ── YEAR BADGE (centered on hero) ─────────────────── */}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          right: "3rem",
          transform: "translateY(-50%)",
          textAlign: "center",
          zIndex: 2,
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.7 }}
      >
        <div style={{
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(0, 92, 151, 0.3)",
          padding: "1.5rem 2rem",
        }}>
          <p style={{ fontSize: "0.55rem", letterSpacing: "0.4em", color: "#ee2e22", textTransform: "uppercase", marginBottom: "0.5rem" }}>Est.</p>
          <p style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "2.5rem", color: "#ffffff", lineHeight: 1, fontWeight: 600 }}>2010</p>
        </div>
      </motion.div>

      {/* ── STATS STRIP ───────────────────────────────────── */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "1.5rem 2.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          alignItems: "center",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.6 }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%", display: "flex", gap: "3rem", flexWrap: "wrap" }}>
          {[
            { num: "1,000+", label: "Happy Families" },
            { num: "800+", label: "Acres Developed" },
            { num: "15+", label: "Projects Delivered" },
            { num: "100%", label: "HMDA / DTCP Approved" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
              <span style={{
                fontFamily: "var(--font-playfair, Georgia, serif)",
                fontSize: "1.6rem",
                color: "#ee2e22",
                fontWeight: 600,
                lineHeight: 1,
              }}>{stat.num}</span>
              <span style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
