import type { Metadata } from "next";
import ProjectsClient from "@/components/projects-client";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { PROJECTS } from "@/lib/constants";
import { SwipeCarousel } from "@/components/SwipeCarousel/SwipeCarousel";

export const metadata: Metadata = buildMetadata({
  title: "Real Estate Projects Portfolio | Hyderabad — Shadnagar, Mokila, Kokapet, Adibatla & More",
  description: "Explore Pan Infra's portfolio of HMDA & DTCP approved residential plots, luxury villas, and integrated gated communities across Shadnagar, Mokila, Kokapet, Adibatla, Tukkuguda, Gachibowli and all Hyderabad growth corridors. 15+ projects. 800+ acres.",
  path: "/projects",
  keywords: [
    "Pan Infra projects Hyderabad", "real estate projects Hyderabad",
    "residential plots Janwada", "gated community Shadnagar",
    "villas Mokila", "plots Tukkuguda", "township Hyderabad",
    "Janwada Project", "Kakatiya Daimond Heights",
    "Dukes Urban Village", "Dukes Western County", "Dukes County",
    "HMDA approved plots Hyderabad", "DTCP approved plots Hyderabad",
    "investment plots Hyderabad", "luxury villas Hyderabad",
  ],
});

export default function ProjectsPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
  ]);

  const allProjectImages = PROJECTS.flatMap(p => p.gallery.slice(0, 1));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section style={{ background: "#005c97", padding: "10rem 2.5rem 5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.38em", color: "#ee2e22",  marginBottom: "1.5rem" }}>Our Portfolio</p>
          <h1 style={{ fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)", fontSize: "clamp(3rem,7vw,5.5rem)", lineHeight: 0.9, color: "#ffffff", marginBottom: "2.5rem" }}>
            Our Projects
          </h1>
          <div style={{ marginBottom: "4rem" }}>
            <SwipeCarousel images={allProjectImages} />
          </div>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", maxWidth: "440px", lineHeight: 1.8 }}>
            A curated portfolio of HMDA & DTCP approved plots, premium villas, and gated communities across Hyderabad&apos;s most promising growth corridors.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: "4rem" }}>
        <ProjectsClient />
      </section>
    </>
  );
}
