"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

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
              background: "linear-gradient(to right, #c5a46d, #d4b98a)",
              width: `${pct}%`,
              transition: "width 0.05s linear",
            }}
          />

          {/* Corner brackets */}
          <motion.div style={{ position: "absolute", top: "2rem", left: "2rem", width: "28px", height: "28px", borderTop: "1px solid rgba(197,164,109,0.35)", borderLeft: "1px solid rgba(197,164,109,0.35)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} />
          <motion.div style={{ position: "absolute", top: "2rem", right: "2rem", width: "28px", height: "28px", borderTop: "1px solid rgba(197,164,109,0.35)", borderRight: "1px solid rgba(197,164,109,0.35)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} />
          <motion.div style={{ position: "absolute", bottom: "2rem", left: "2rem", width: "28px", height: "28px", borderBottom: "1px solid rgba(197,164,109,0.35)", borderLeft: "1px solid rgba(197,164,109,0.35)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} />
          <motion.div style={{ position: "absolute", bottom: "2rem", right: "2rem", width: "28px", height: "28px", borderBottom: "1px solid rgba(197,164,109,0.35)", borderRight: "1px solid rgba(197,164,109,0.35)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} />

          {/* Center content */}
          <div style={{ textAlign: "center" }}>
            <motion.p
              style={{
                fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                fontSize: "0.6rem", letterSpacing: "0.55em", color: "#c5a46d",
                textTransform: "uppercase", marginBottom: "1.25rem",
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              Hyderabad, India
            </motion.p>

            <div style={{ overflow: "hidden" }}>
              <motion.h1
                style={{
                  fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                  fontSize: "clamp(2.5rem,5vw,4.5rem)",
                  color: "#ffffff", fontWeight: 600,
                  letterSpacing: "0.05em", lineHeight: 1, margin: 0,
                }}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                Pan Infra
              </motion.h1>
            </div>

            <motion.div
              style={{
                margin: "1.75rem auto 1.5rem", height: "1px",
                background: "rgba(197,164,109,0.3)", width: "80px",
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
              color: "rgba(255,255,255,0.2)", textTransform: "uppercase",
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
