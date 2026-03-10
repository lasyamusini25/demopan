"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/constants";

interface Props {
  project: Project;
  index?: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index = 0, featured = false }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] }}
      style={{ breakInside: "avoid", marginBottom: featured ? 0 : "1.5rem" }}
    >
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`Open ${project.title}`}
        style={{ textDecoration: "none", display: "block" }}
      >
        <div
          style={{ position: "relative", overflow: "hidden", background: "#0c0c0c" }}
          className="group"
        >
          {/* Image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: featured ? "21/9" : index % 3 === 0 ? "16/9" : "2/1",
              overflow: "hidden",
            }}
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              style={{
                objectFit: "cover",
                transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="group-hover:scale-[1.08]"
              sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
            />
            {/* Elegant overlay gradient */}
            <div
              style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(12,12,12,0.9) 0%, rgba(12,12,12,0.4) 40%, transparent 100%)",
                opacity: 0.8,
                transition: "opacity 0.6s",
              }}
              className="group-hover:opacity-100"
            />

            {/* Category tag */}
            <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem" }}>
              <span style={{
                fontSize: "0.55rem",
                letterSpacing: "0.38em",
                color: "#c5a46d",
                textTransform: "uppercase",
                background: "rgba(12,12,12,0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(197,164,109,0.25)",
                padding: "0.4rem 0.9rem",
                fontWeight: 600,
              }}>
                {project.category}
              </span>
            </div>

            {/* Index number */}
            <div style={{
              position: "absolute", top: "1.5rem", right: "1.5rem",
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "0.75rem", color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.08em",
              fontWeight: 500,
            }}>
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Bottom info */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "3rem 2rem 2rem",
              transform: "translateY(10px)",
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
              className="group-hover:translate-y-0"
            >
              <h3 style={{
                fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
                fontSize: featured ? "clamp(2rem, 3.5vw, 3rem)" : "1.5rem",
                color: "#ffffff",
                lineHeight: 1.1,
                marginBottom: "0.75rem",
                transition: "color 0.4s",
              }}>
                {project.title}
              </h3>
              <div style={{
                display: "flex", alignItems: "center", gap: "1rem",
                opacity: 0.75,
                transition: "opacity 0.4s",
              }}
                className="group-hover:opacity-100"
              >
                <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {project.location}
                </span>
                <span style={{ width: "4px", height: "1px", background: "#c5a46d", flexShrink: 0 }} />
                <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{project.year}</span>
              </div>
            </div>

            {/* View project hover CTA */}
            <div
              style={{
                position: "absolute", bottom: "2rem", right: "2.5rem",
                opacity: 0,
                transform: "translateX(-15px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="group-hover:opacity-100 group-hover:translate-x-0"
            >
              <span style={{
                fontSize: "0.55rem", letterSpacing: "0.35em", color: "#ffffff",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}>
                View Case Study
                <span style={{ width: "20px", height: "1px", background: "#c5a46d" }} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
