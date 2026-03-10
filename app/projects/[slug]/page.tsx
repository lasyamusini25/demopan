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
            <div style={{ width: "24px", height: "1px", background: "#c5a46d" }} />
            <p style={{ fontSize: "0.55rem", letterSpacing: "0.38em", color: "#c5a46d", textTransform: "uppercase" }}>
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
            fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase",
            color: "#999999",
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
        <div>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.38em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "1.25rem" }}>Overview</p>
          <h2 style={{
            fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
            fontSize: "clamp(1.75rem,3.5vw,2.75rem)",
            color: "#111111", marginBottom: "2rem", lineHeight: 1.1,
          }}>
            {project.title}
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555555", maxWidth: "600px" }}>
            {project.description}
          </p>
        </div>
        <aside style={{
          border: "1px solid rgba(0,0,0,0.07)",
          background: "#f8f6f2",
          padding: "2rem",
          display: "flex", flexDirection: "column", gap: "1.75rem",
          alignSelf: "start",
        }}>
          <p style={{ fontSize: "0.55rem", letterSpacing: "0.35em", color: "#c5a46d", textTransform: "uppercase", paddingBottom: "1rem", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
            Project Details
          </p>
          {[
            { label: "Client", value: project.client },
            { label: "Location", value: project.location },
            { label: "Year", value: project.year },
            { label: "Area", value: project.area },
          ].map(item => (
            <div key={item.label}>
              <p style={{ fontSize: "0.55rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#bbbbbb", marginBottom: "0.4rem" }}>{item.label}</p>
              <p style={{ fontSize: "0.95rem", color: "#333333", fontWeight: 500 }}>{item.value}</p>
            </div>
          ))}
        </aside>
      </div>

      {/* Gallery */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem 2rem" }} aria-label="Project gallery">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
          <div style={{ width: "24px", height: "1px", background: "#c5a46d" }} />
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.38em", color: "#c5a46d", textTransform: "uppercase" }}>Gallery</p>
        </div>

        <SwipeCarousel images={project.gallery} />
      </section>

      {/* Next project CTA */}
      <div style={{ maxWidth: "1280px", margin: "4rem auto 0", padding: "0 2.5rem" }}>
        <div style={{
          borderTop: "1px solid rgba(0,0,0,0.07)",
          paddingTop: "3rem",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "1.5rem",
        }}>
          <Link
            href="/projects"
            className="link-gold-hover"
            style={{
              fontSize: "0.6rem", letterSpacing: "0.25em",
              textTransform: "uppercase", color: "#777777",
            }}
          >
            ← Back to Projects
          </Link>
          <Link
            href="/contact"
            className="btn-dark-hover"
            style={{
              fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase",
              textDecoration: "none", padding: "0.9rem 2rem",
              background: "#111111", color: "#ffffff",
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
