"use client";

import { motion } from "framer-motion";

const items = [
  "Residential Plots",
  "Premium Villas",
  "Gated Communities",
  "HMDA Approved",
  "DTCP Approved",
  "Clear Title Deeds",
  "NRI Services",
  "Investment Properties",
];

export default function MarqueeStrip() {
  // Use three sets for a seamless infinite scroll even on ultra-wide screens
  const repeated = [...items, ...items, ...items];

  return (
    <div
      style={{
        background: "#ee2e22",
        padding: "1.25rem 0",
        overflow: "hidden",
        display: "flex",
      }}
      aria-hidden="true"
    >
      <motion.div
        animate={{ x: "-33.33%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          width: "max-content",
        }}
      >
        {repeated.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
            <span style={{
              fontSize: "0.65rem",
              letterSpacing: "0.4em",
              
              color: "#ffffff",
              padding: "0 3rem",
              fontWeight: 600,
            }}>
              {item}
            </span>
            <span style={{
              display: "inline-block",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.6)",
              flexShrink: 0,
            }} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
