"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECT_FILTERS, PROJECTS } from "@/lib/constants";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default function ProjectsClient() {
  const [filter, setFilter] = useState<(typeof PROJECT_FILTERS)[number]>("All");

  const projects = useMemo(
    () => filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter),
    [filter]
  );

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem 6rem" }}>
      {/* Filter bar */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "3.5rem" }}>
        {PROJECT_FILTERS.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            style={{
              padding: "0.5rem 1.25rem",
              border: filter === item ? "1px solid #c5a46d" : "1px solid rgba(0,0,0,0.15)",
              background: filter === item ? "#c5a46d" : "transparent",
              color: filter === item ? "#ffffff" : "#111111",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.25s",
              fontFamily: "inherit",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ columns: "1", columnGap: "1.5rem" }}
          className="md:columns-2 lg:columns-3"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
