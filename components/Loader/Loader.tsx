"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let frame = 0;
    const total = 80;
    const timer = setInterval(() => {
      frame++;
      const ease = 1 - Math.pow(1 - frame / total, 3);
      setPct(Math.min(Math.round(ease * 100), 100));
      if (frame >= total) clearInterval(timer);
    }, 17);
    const exit = setTimeout(() => setLoading(false), 1900);
    return () => { clearInterval(timer); clearTimeout(exit); };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "#0a0a0a",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            overflow: "hidden",
          }}
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Progress bar */}
          <div
            style={{
              position: "absolute", top: 0, left: 0,
              height: "2px",
              background: "linear-gradient(to right, #ee2e22, #f46b1d)",
              width: `${pct}%`,
              transition: "width 0.05s linear",
            }}
          />

          {/* Corner brackets */}
          <motion.div style={{ position: "absolute", top: "2rem", left: "2rem", width: "28px", height: "28px", borderTop: "1px solid rgba(238, 46, 34,0.35)", borderLeft: "1px solid rgba(238, 46, 34,0.35)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} />
          <motion.div style={{ position: "absolute", top: "2rem", right: "2rem", width: "28px", height: "28px", borderTop: "1px solid rgba(238, 46, 34,0.35)", borderRight: "1px solid rgba(238, 46, 34,0.35)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} />
          <motion.div style={{ position: "absolute", bottom: "2rem", left: "2rem", width: "28px", height: "28px", borderBottom: "1px solid rgba(238, 46, 34,0.35)", borderLeft: "1px solid rgba(238, 46, 34,0.35)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} />
          <motion.div style={{ position: "absolute", bottom: "2rem", right: "2rem", width: "28px", height: "28px", borderBottom: "1px solid rgba(238, 46, 34,0.35)", borderRight: "1px solid rgba(238, 46, 34,0.35)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} />

          {/* Center content */}
          <div style={{ textAlign: "center" }}>
            <motion.p
              style={{
                fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                fontSize: "0.6rem", letterSpacing: "0.55em", color: "#ee2e22",
                 marginBottom: "1.25rem",
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              Hyderabad, India
            </motion.p>

            <div style={{ overflow: "hidden", display: "flex", justifyContent: "center" }}>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{
                  position: "relative",
                  width: "clamp(200px, 40vw, 400px)",
                  height: "clamp(60px, 12vw, 120px)",
                  filter: "brightness(0) invert(1)" // Optional: makes logo white if it's a dark logo
                }}>
                  <Image
                    src="/images/Pan-Infra-Logo.png.webp"
                    alt="Pan Infra Logo"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              style={{
                margin: "1.75rem auto 1.5rem", height: "1px",
                background: "rgba(238, 46, 34,0.3)", width: "80px",
                transformOrigin: "center",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />

            <motion.p
              style={{
                fontFamily: "var(--font-playfair,Georgia,serif)",
                fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {String(pct).padStart(3, "0")}
            </motion.p>
          </div>

          <motion.p
            style={{
              position: "absolute", bottom: "2.5rem",
              fontSize: "0.55rem", letterSpacing: "0.35em",
              color: "rgba(255,255,255,0.2)", 
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Premium Plots &amp; Villas · Hyderabad
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
