"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Project } from "@/lib/constants";
import { useRef } from "react";

interface Props {
  project: Project;
  index?: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index = 0, featured = false }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["7.5deg", "-7.5deg"]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-7.5deg", "7.5deg"]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;

    mouseX.set(mouseXFromCenter / width);
    mouseY.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        breakInside: "avoid",
        marginBottom: featured ? 0 : "2rem",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`Open ${project.title}`}
          style={{ textDecoration: "none", display: "block" }}
        >
          <div
            style={{ position: "relative", overflow: "hidden", background: "#005c97" }}
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
              <motion.div
                style={{
                  position: "absolute",
                  inset: "-15% 0",
                  y,
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
                  className="group-hover:scale-[1.05]"
                  sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
                />
              </motion.div>
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
                  color: "#ee2e22",
                  
                  background: "rgba(12,12,12,0.6)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(238, 46, 34,0.25)",
                  padding: "0.5rem 1.1rem",
                  fontWeight: 800,
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
                  fontSize: featured ? "clamp(2.2rem, 4vw, 3.5rem)" : "1.75rem",
                  color: "#ffffff",
                  lineHeight: 1.1,
                  marginBottom: "0.75rem",
                  transition: "color 0.4s",
                  fontWeight: 800,
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
                  <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.9)", letterSpacing: "0.15em",  fontWeight: 700 }}>
                    {project.location}
                  </span>
                  <span style={{ width: "6px", height: "1px", background: "#ee2e22", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.9)", letterSpacing: "0.15em",  fontWeight: 700 }}>{project.year}</span>
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
                  
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}>
                  View Case Study
                  <span style={{ width: "20px", height: "1px", background: "#ee2e22" }} />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.article>
  );
}
