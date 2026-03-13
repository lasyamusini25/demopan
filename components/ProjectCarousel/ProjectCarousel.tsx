"use client";

import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Project } from "@/lib/constants";
import Link from "next/link";

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
    return (
        <section style={{ background: "#ffffff", padding: "6rem 5vw" }} aria-label="Featured projects">

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "#ee2e22", textTransform: "uppercase", marginBottom: "1rem" }}>
                    Selected Work
                </p>
                <h2 style={{
                    fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                    fontSize: "clamp(2rem,4vw,3.5rem)",
                    lineHeight: 1,
                    color: "#005c97",
                    marginBottom: "1.25rem",
                }}>
                    Featured Projects
                </h2>
                <Link
                    href="/projects"
                    style={{
                        fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase",
                        textDecoration: "none", color: "#005c97",
                        borderBottom: "1px solid #005c97", paddingBottom: "3px",
                        fontWeight: 600,
                    }}
                >
                    View All →
                </Link>
            </div>

            {/* 2-column grid */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1.5rem",
                maxWidth: "1400px",
                margin: "0 auto",
            }}>
                {projects.map((project, i) => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                        index={i}
                        featured={false}
                        cardAspectRatio="1/1"
                    />
                ))}
            </div>

        </section>
    );
}
