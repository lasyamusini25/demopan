"use client";

import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Project } from "@/lib/constants";
import Link from "next/link";

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
} as const;

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
    const [imgIndex, setImgIndex] = useState(0);
    const dragX = useMotionValue(0);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < projects.length - 1) {
            setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv) => pv - 1);
        }
    };

    return (
        <section style={{ padding: "7rem 0", background: "#ffffff", overflow: "hidden" }} aria-label="Featured projects">
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
                {/* Section header */}
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "#ee2e22", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                        Selected Work
                    </p>
                    <h2 style={{
                        fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                        fontSize: "clamp(2.5rem,5.5vw,4.5rem)",
                        lineHeight: 1,
                        color: "#005c97",
                        marginBottom: "2rem",
                    }}>
                        Featured Projects
                    </h2>
                </div>

                {/* Carousel Container */}
                <div style={{ position: "relative", cursor: "grab" }} className="active:cursor-grabbing">
                    <motion.div
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        style={{ x: dragX, display: "flex", gap: "1.5rem" }}
                        animate={{ translateX: `calc(-${imgIndex * 85}% - ${imgIndex * 1.5}rem)` }}
                        transition={SPRING_OPTIONS}
                        onDragEnd={onDragEnd}
                    >
                        {projects.map((project, i) => (
                            <div key={project.slug} style={{ width: "85%", flexShrink: 0, minWidth: "300px" }}>
                                <ProjectCard project={project} index={i} featured={false} />
                            </div>
                        ))}
                    </motion.div>

                    {/* Controls */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "3rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                            {/* Navigation Arrows */}
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                                <button
                                    onClick={() => setImgIndex((pv) => Math.max(0, pv - 1))}
                                    disabled={imgIndex === 0}
                                    style={{
                                        width: "2.5rem",
                                        height: "2.5rem",
                                        borderRadius: "50%",
                                        border: "1px solid rgba(0, 92, 151, 0.2)",
                                        background: "transparent",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: imgIndex === 0 ? "not-allowed" : "pointer",
                                        opacity: imgIndex === 0 ? 0.3 : 1,
                                        transition: "all 0.3s ease",
                                        color: "#005c97"
                                    }}
                                    onMouseEnter={(e) => { if (imgIndex !== 0) { e.currentTarget.style.background = "#005c97"; e.currentTarget.style.color = "#ffffff"; } }}
                                    onMouseLeave={(e) => { if (imgIndex !== 0) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#005c97"; } }}
                                    aria-label="Previous project"
                                >
                                    ←
                                </button>
                                <button
                                    onClick={() => setImgIndex((pv) => Math.min(projects.length - 1, pv + 1))}
                                    disabled={imgIndex === projects.length - 1}
                                    style={{
                                        width: "2.5rem",
                                        height: "2.5rem",
                                        borderRadius: "50%",
                                        border: "1px solid rgba(0, 92, 151, 0.2)",
                                        background: "transparent",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: imgIndex === projects.length - 1 ? "not-allowed" : "pointer",
                                        opacity: imgIndex === projects.length - 1 ? 0.3 : 1,
                                        transition: "all 0.3s ease",
                                        color: "#005c97"
                                    }}
                                    onMouseEnter={(e) => { if (imgIndex !== projects.length - 1) { e.currentTarget.style.background = "#005c97"; e.currentTarget.style.color = "#ffffff"; } }}
                                    onMouseLeave={(e) => { if (imgIndex !== projects.length - 1) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#005c97"; } }}
                                    aria-label="Next project"
                                >
                                    →
                                </button>
                            </div>

                            {/* Dots */}
                            <div style={{ display: "flex", gap: "0.75rem" }}>
                                {projects.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setImgIndex(idx)}
                                        style={{
                                            width: idx === imgIndex ? "1.5rem" : "0.5rem",
                                            height: "2px",
                                            borderRadius: "999px",
                                            background: idx === imgIndex ? "#ee2e22" : "#005c97",
                                            opacity: idx === imgIndex ? 1 : 0.2,
                                            border: "none",
                                            padding: 0,
                                            cursor: "pointer",
                                            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                                        }}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <Link
                            href="/projects"
                            style={{
                                fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase",
                                textDecoration: "none", color: "#005c97",
                                borderBottom: "1px solid #005c97", paddingBottom: "3px",
                                transition: "all 0.3s ease",
                                fontWeight: 600,
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = "#ee2e22";
                                e.currentTarget.style.borderBottomColor = "#ee2e22";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = "#005c97";
                                e.currentTarget.style.borderBottomColor = "#005c97";
                            }}
                        >
                            View All →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
