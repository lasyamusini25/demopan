"use client";

import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Project } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [featured, ...rest] = projects;

  return (
    <section
      style={{ padding: "7rem 0", background: "#ffffff" }}
      aria-label="Featured projects"
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
        {/* Section header */}
        <div style={{
          textAlign: "center",
          marginBottom: "6rem",
          maxWidth: "800px",
          margin: "0 auto 6rem",
        }}>
          <motion.p
            style={{
              fontSize: "0.6rem", letterSpacing: "0.45em", color: "#c5a46d",
              textTransform: "uppercase", marginBottom: "1.5rem",
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Selected Work
          </motion.p>
          <motion.h2
            style={{
              fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
              fontSize: "clamp(2.5rem,5.5vw,4.5rem)",
              lineHeight: 1,
              color: "#111111",
              marginBottom: "2.5rem",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/projects"
              style={{
                fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase",
                textDecoration: "none", color: "#111111",
                borderBottom: "1px solid #111111", paddingBottom: "3px",
                transition: "all 0.3s ease",
                display: "inline-block",
                fontWeight: 600,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "#c5a46d";
                e.currentTarget.style.borderBottomColor = "#c5a46d";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "#111111";
                e.currentTarget.style.borderBottomColor = "#111111";
              }}
            >
              View All Projects →
            </Link>
          </motion.div>
        </div>

        {/* Featured (full-width) card */}
        {featured && (
          <div style={{ marginBottom: "1.5rem" }}>
            <ProjectCard project={featured} index={0} featured />
          </div>
        )}

        {/* 3-column secondary grid */}
        <div
          style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "1fr" }}
          className="md:grid-cols-3"
        >
          {rest.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i + 1} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          style={{
            marginTop: "6rem",
            paddingTop: "4rem",
            borderTop: "1px solid rgba(0,0,0,0.07)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            textAlign: "center",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p style={{ fontSize: "0.95rem", color: "#777777", letterSpacing: "0.05em" }}>
            Showing {projects.length} of our flagship projects
          </p>
          <Link
            href="/projects"
            style={{
              fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase",
              textDecoration: "none", color: "#ffffff",
              background: "#111111", padding: "1.25rem 2.5rem",
              transition: "all 0.3s ease",
              display: "inline-block",
              fontWeight: 600,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#c5a46d"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#111111"; }}
          >
            See All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
