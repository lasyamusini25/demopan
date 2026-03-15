import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/constants";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { SwipeCarousel } from "@/components/SwipeCarousel/SwipeCarousel";


type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) return buildMetadata({ title: "Project", description: "Project details", path: "/projects" });
  return buildMetadata({ title: `${project.title} Project`, description: project.description, path: `/projects/${project.slug}`, image: project.heroImage });
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) notFound();

  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: project.title, url: `/projects/${project.slug}` },
  ]);

  return (
    <article style={{ paddingBottom: "6rem" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Full-bleed hero */}
      <div style={{ position: "relative", height: "85vh", minHeight: "560px", overflow: "hidden" }}>
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.4) 45%, rgba(5,5,5,0.1) 100%)",
        }} />
        <div style={{
          position: "absolute", bottom: "4rem", left: "2.5rem", right: "2.5rem",
          maxWidth: "1280px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{ width: "24px", height: "1px", background: "#ee2e22" }} />
            <p style={{ fontSize: "0.55rem", letterSpacing: "0.38em", color: "#ee2e22", }}>
              {project.category}
            </p>
          </div>
          <h1 style={{
            fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
            fontSize: "clamp(2.5rem,7vw,6rem)",
            lineHeight: 0.9, color: "#ffffff", fontWeight: 700,
          }}>
            {project.title}
          </h1>
        </div>
      </div>

      {/* Back link */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "2.5rem 2.5rem 0" }}>
        <Link
          href="/projects"
          className="link-gold-hover"
          style={{
            fontSize: "0.6rem", letterSpacing: "0.25em", 
            color: "rgba(255,255,255,0.6)",
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
          }}
        >
          ← All Projects
        </Link>
      </div>

      {/* Overview + specs */}
      <div style={{
        maxWidth: "1280px", margin: "0 auto",
        padding: "4rem 2.5rem",
        display: "grid", gridTemplateColumns: "1fr",
        gap: "4rem",
      }} className="md:grid-cols-[2fr_1fr]">
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {/* Overview */}
          <section>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.38em", color: "#ee2e22",  marginBottom: "1.25rem" }}>Overview</p>
            <h2 style={{
              fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
              fontSize: "clamp(1.75rem,3.5vw,2.75rem)",
              color: "#ffffff", marginBottom: "2rem", lineHeight: 1.1,
            }}>
              {project.title}
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "rgba(255,255,255,0.75)", maxWidth: "600px" }}>
              {project.description}
            </p>
          </section>

          {/* Highlights */}
          {project.highlights && (
            <section>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.38em", color: "#ee2e22",  marginBottom: "1.5rem" }}>Project Highlights</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "1rem" }}>
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "center", gap: "1rem", color: "rgba(255,255,255,0.75)", fontSize: "1rem" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ee2e22", flexShrink: 0 }} />
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Master Layout */}
          {project.masterLayoutPdf && (
            <section>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.38em", color: "#ee2e22",  marginBottom: "1.5rem" }}>Master Layout</p>
              <div
                className="transition-all duration-300 hover:border-red-500/40 hover:bg-white/[0.13] hover:shadow-[0_8px_32px_rgba(238,46,34,0.12)]"
                style={{
                background: "rgba(255,255,255,0.1)",
                padding: "2.5rem",
                border: "1px solid rgba(255,255,255,0.15)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "1.5rem"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "40px", background: "#ee2e22", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#ffffff" }}>Project Master Plan</p>
                    <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>PDF Document</p>
                  </div>
                </div>
                <a
                  href={project.masterLayoutPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#ee2e22",
                    color: "#ffffff",
                    textDecoration: "none",
                    padding: "0.8rem 1.5rem",
                    fontSize: "0.7rem",
                    
                    letterSpacing: "0.15em",
                    fontWeight: 700,
                    transition: "all 0.3s ease"
                  }}
                  className="btn-dark-hover"
                >
                  View Master Layout →
                </a>
              </div>
            </section>
          )}

          {/* Videos */}
          {project.videos && project.videos.length > 0 && (
            <section>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.38em", color: "#ee2e22",  marginBottom: "1.5rem" }}>Project Videos</p>
              <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                {project.videos.map((video, idx) => (
                  <div key={idx} style={{ position: "relative", aspectRatio: "16/9", background: "#000000", overflow: "hidden" }}>
                    <video
                      src={video}
                      controls
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
        <aside
          className="transition-all duration-300 hover:border-white/20 hover:bg-white/[0.09] hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
          style={{
          border: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(255,255,255,0.06)",
          padding: "2rem",
          display: "flex", flexDirection: "column", gap: "1.75rem",
          alignSelf: "start",
          position: "sticky",
          top: "6rem"
        }}>
          <p style={{ fontSize: "0.55rem", letterSpacing: "0.35em", color: "#ee2e22",  paddingBottom: "1rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            Project Details
          </p>
          {[
            { label: "Client", value: project.client },
            { label: "Location", value: project.location },
            { label: "Year", value: project.year },
            { label: "Area", value: project.area },
          ].map(item => (
            <div key={item.label}>
              <p style={{ fontSize: "0.55rem", letterSpacing: "0.28em",  color: "rgba(255,255,255,0.5)", marginBottom: "0.4rem" }}>{item.label}</p>
              <p style={{ fontSize: "0.95rem", color: "#ffffff", fontWeight: 500 }}>{item.value}</p>
            </div>
          ))}
        </aside>
      </div>

      {/* Gallery */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem 2rem" }} aria-label="Project gallery">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
          <div style={{ width: "24px", height: "1px", background: "#ee2e22" }} />
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.38em", color: "#ee2e22", }}>Project Images</p>
        </div>

        <SwipeCarousel images={project.gallery} />
      </section>

      {/* Next project CTA */}
      <div style={{ maxWidth: "1280px", margin: "4rem auto 0", padding: "0 2.5rem" }}>
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "3rem",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "1.5rem",
        }}>
          <Link
            href="/projects"
            className="link-gold-hover"
            style={{
              fontSize: "0.6rem", letterSpacing: "0.25em",
               color: "rgba(255,255,255,0.6)",
            }}
          >
            ← Back to Projects
          </Link>
          <Link
            href="/contact"
            className="btn-dark-hover"
            style={{
              fontSize: "0.6rem", letterSpacing: "0.3em", 
              textDecoration: "none", padding: "0.9rem 2rem",
              background: "#ee2e22", color: "#ffffff",
              display: "inline-block",
            }}
          >
            Enquire About This Property →
          </Link>
        </div>
      </div>
    </article>
  );
}
