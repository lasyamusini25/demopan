import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import ProjectCarousel from "@/components/ProjectCarousel/ProjectCarousel";
import AboutSection from "@/components/AboutSection/AboutSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTASection from "@/components/CTASection/CTASection";
import MarqueeStrip from "@/components/MarqueeStrip/MarqueeStrip";
import InstaFeed from "@/components/InstaFeed/InstaFeed";
import { PROJECTS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Best Real Estate Company in Hyderabad | Premium Plots & Villas — Pan Infra",
  description: "Pan Infra — Hyderabad's most trusted real estate developer. HMDA & DTCP approved premium residential plots, luxury villas, and gated communities. Shadnagar, Mokila, Kokapet, Adibatla, Tukkuguda & all growth corridors. 1,000+ happy families. Book a site visit today.",
  path: "/",
  keywords: [
    "best real estate company Hyderabad", "Pan Infra", "plots for sale Hyderabad",
    "premium plots Hyderabad", "villas for sale Hyderabad", "HMDA approved plots Hyderabad",
    "gated community Hyderabad", "residential plots Hyderabad", "luxury villas Hyderabad",
    "plots in Shadnagar", "plots in Mokila", "villas in Kokapet",
    "plots in Adibatla", "real estate Tukkuguda", "NRI plots Hyderabad",
    "real estate investment Hyderabad", "property developer Hyderabad", "buy property Hyderabad",
    "DTCP approved plots Hyderabad", "township Hyderabad",
  ],
});

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <ProjectCarousel projects={PROJECTS.slice(0, 6)} />
      <AboutSection />
      <MarqueeStrip />
      <ServicesSection />
      <Testimonials />
      <InstaFeed />
      <CTASection />
    </>
  );
}
