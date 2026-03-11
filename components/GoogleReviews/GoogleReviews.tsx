"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GoogleReviews() {
    return (
        <section
            style={{
                background: "#005c97",
                padding: "7rem 2.5rem",
                textAlign: "center"
            }}
            aria-label="Google Reviews"
        >
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                <motion.p
                    style={{
                        fontSize: "0.6rem",
                        letterSpacing: "0.45em",
                        color: "#ee2e22",
                        textTransform: "uppercase",
                        marginBottom: "2rem"
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Trust & Excellence
                </motion.p>

                <motion.h2
                    style={{
                        fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                        fontSize: "clamp(2.2rem,5vw,3.75rem)",
                        lineHeight: 1.1,
                        color: "#ffffff",
                        marginBottom: "3rem",
                        fontWeight: 700
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    What Our Clients Say on Google
                </motion.h2>

                {/* Google Review Summary Widget Style */}
                <motion.div
                    style={{
                        background: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        padding: "4rem 2rem",
                        borderRadius: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2rem"
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <div style={{ position: "relative", width: "100px", height: "40px" }}>
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg"
                                alt="Google"
                                fill
                                style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
                            />
                        </div>
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "3.5rem", fontWeight: 800, color: "#ffffff", lineHeight: 1, marginBottom: "0.5rem" }}>
                            4.8
                        </div>
                        <div style={{ display: "flex", gap: "0.25rem", justifyContent: "center", marginBottom: "1rem" }}>
                            {[1, 2, 3, 4, 5].map((s) => (
                                <svg key={s} width="24" height="24" viewBox="0 0 24 24" fill="#ee2e22">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em" }}>
                            BASED ON 150+ GENUINE REVIEWS
                        </p>
                    </div>

                    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
                        <a
                            href="https://www.google.com/maps/place/Pan+Infra+Spaces+Pvt+Ltd/@17.439735,78.379435,15z/data=!4m8!3m7!1s0x3bcb93dc7d8f5b8d:0x7d9f7d3d7d9f7d3d!8m2!3d17.439735!4d78.379435!9m1!1b1"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                background: "#ee2e22",
                                color: "#ffffff",
                                padding: "1rem 2.5rem",
                                textDecoration: "none",
                                fontSize: "0.75rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.2em",
                                fontWeight: 700,
                                transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = "#ffffff" + " !important"} // Note: handling hover via CSS is better but keeping inline for consistency
                            className="hover:bg-white hover:text-[#005c97]"
                        >
                            See All Reviews
                        </a>
                        <a
                            href="https://search.google.com/local/writereview?placeid=ChIJjVvefdyTuzsRPX09fT19fX0"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                border: "1px solid rgba(255,255,255,0.3)",
                                color: "#ffffff",
                                padding: "1rem 2.5rem",
                                textDecoration: "none",
                                fontSize: "0.75rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.2em",
                                fontWeight: 700,
                                transition: "all 0.3s ease"
                            }}
                            className="hover:bg-white/10"
                        >
                            Write a Review
                        </a>
                    </div>
                </motion.div>

                <p style={{ marginTop: "3rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", fontStyle: "italic" }}>
                    We take pride in our service. Transparency is our core value.
                </p>
            </div>
        </section>
    );
}
