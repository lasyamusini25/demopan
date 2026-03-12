"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Project } from "@/lib/constants";
import Link from "next/link";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
    const containerRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;

        if (!container || !track) return;

        const ctx = gsap.context(() => {
            gsap.to(track, {
                x: () => -(track.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => "+=" + (track.scrollWidth - window.innerWidth),
                    invalidateOnRefresh: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} style={{ height: "100vh", overflow: "hidden", position: "relative", background: "#ffffff" }} aria-label="Featured projects">

            {/* Overlay Header */}
            <div style={{ position: "absolute", top: "4rem", left: 0, right: 0, textAlign: "center", zIndex: 10 }}>
                <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "#ee2e22", textTransform: "uppercase", marginBottom: "1rem" }}>
                    Selected Work
                </p>
                <h2 style={{
                    fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                    fontSize: "clamp(2rem,4vw,3.5rem)",
                    lineHeight: 1,
                    color: "#005c97",
                }}>
                    Featured Projects
                </h2>
                <div style={{ marginTop: "1rem" }}>
                    <Link
                        href="/projects"
                        style={{
                            fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase",
                            textDecoration: "none", color: "#005c97",
                            borderBottom: "1px solid #005c97", paddingBottom: "3px",
                            transition: "all 0.3s ease",
                            fontWeight: 600,
                        }}
                    >
                        View All →
                    </Link>
                </div>
            </div>

            {/* Carousel Container */}
            <div ref={trackRef} style={{ position: "relative", cursor: "grab", display: "flex", alignItems: "center", height: "100%", padding: "0 2.5rem" }} className="active:cursor-grabbing">
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
                <div style={{ position: "absolute", bottom: "4rem", left: "2.5rem", right: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
                </div>
            </div>
        </section>
    );
}
