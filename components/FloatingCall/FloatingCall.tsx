"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export default function FloatingCall() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            style={{
                position: "fixed",
                bottom: "2rem",
                right: "2rem",
                zIndex: 100,
            }}
        >
            <a
                href={`tel:${SITE.phone}`}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "1rem 1.5rem",
                    background: "#c5a46d",
                    color: "#ffffff",
                    borderRadius: "99px",
                    textDecoration: "none",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2), 0 0 0 1px rgba(197,164,109,0.5)",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                }}
                className="group"
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ animation: "pulse 2s infinite" }}
                >
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                <span style={{ letterSpacing: "0.05em" }}>CALL NOW: {SITE.phone}</span>

                <style dangerouslySetInnerHTML={{
                    __html: `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
        ` }} />
            </a>
        </motion.div>
    );
}
