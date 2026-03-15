import type { Metadata } from "next";
import ProjectsClient from "@/components/projects-client";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section style={{ paddingTop: "6rem" }}>
        <ProjectsClient />
      </section>
    </>
  );
}
