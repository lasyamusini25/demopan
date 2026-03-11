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

            <div ref={trackRef} style={{ display: "flex", height: "100%", width: "max-content", alignItems: "center", gap: "2rem", padding: "0 5vw" }}>
                {projects.map((project, i) => (
                    <div
                        key={project.slug}
                        className="project-card-wrapper"
                        style={{
                            width: "85vw",
                            maxWidth: "1000px",
                            height: "100vh",
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: "6rem"
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            <ProjectCard project={project} index={i} featured={false} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
