"use client";

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const SERVICES = [
  {
    tag: "01",
    heading: "Residential Plots",
    imgUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    content:
      "HMDA & DTCP approved premium residential plots in Hyderabad's fastest-growing corridors — Shadnagar, Mokila, Adibatla, and Tukkuguda. Wide BT roads, underground utilities, and clear title deeds.",
  },
  {
    tag: "02",
    heading: "Premium Villas",
    imgUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
    content:
      "Architect-designed luxury 3 & 4 BHK independent villas with private gardens, smart home automation, premium fixtures, and resort-style community amenities.",
  },
  {
    tag: "03",
    heading: "Gated Communities",
    imgUrl:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800",
    content:
      "Integrated gated townships with clubhouse, Olympic pool, landscaped parks, children's play areas, jogging tracks, and 24/7 security. 60% open green space guaranteed.",
  },
  {
    tag: "04",
    heading: "Commercial Plots",
    imgUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    content:
      "Prime commercial real estate in Gachibowli, HITEC City, and key Hyderabad business districts — ideal for office buildings, retail outlets, and mixed-use developments.",
  },
  {
    tag: "05",
    heading: "Villa Plots",
    imgUrl:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
    content:
      "Large-format villa plots (200–600 sq.yd) in exclusive enclaves — the freedom to build your dream home with your choice of architect and design, on DTCP-approved land.",
  },
  {
    tag: "06",
    heading: "Investment Properties",
    imgUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    content:
      "Strategically located investment plots in upcoming micro-markets with 3× to 5× appreciation potential. Backed by deep infrastructure research and government masterplan analysis.",
  },
  {
    tag: "07",
    heading: "NRI Corner",
    imgUrl:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800",
    content:
      "Dedicated NRI investment services — virtual site tours, power of attorney assistance, FEMA-compliant transactions, and a dedicated relationship manager for your entire journey.",
  },
  {
    tag: "08",
    heading: "Property Management",
    imgUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    content:
      "End-to-end property management services — mutation assistance, EC fetching, resale support, lease management, and property appreciation advisory.",
  },
];

export default function WhyPanInfraPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Why Pan Infra", url: "/why-paninfra" },
  ]);

  const faqData = faqJsonLd([
    { q: "What types of properties does Pan Infra offer in Hyderabad?", a: "Pan Infra offers HMDA & DTCP approved residential plots, luxury 3 & 4 BHK villas, integrated gated communities, commercial plots, villa plots, and investment properties across Shadnagar, Mokila, Kokapet, Adibatla, Tukkuguda and all Hyderabad growth corridors." },
    { q: "Are Pan Infra plots HMDA or DTCP approved?", a: "Yes, all Pan Infra projects are fully government-approved — either HMDA (Hyderabad Metropolitan Development Authority) or DTCP (Directorate of Town and Country Planning) approved, with clear title deeds and no legal encumbrances." },
    { q: "Does Pan Infra offer services for NRI buyers?", a: "Yes. Pan Infra has a dedicated NRI Corner with virtual site tours, power of attorney assistance, FEMA-compliant transaction support, and a dedicated relationship manager to make remote property purchase completely hassle-free." },
  ]);

  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* ── Page header ───────────────────────────── */}
      <section
        style={{
          background: "#005c97",
          padding: "10rem 2.5rem 6rem",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(238, 46, 34,0.15)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
            <div style={{ width: "28px", height: "1px", background: "#ee2e22" }} />
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "#ee2e22", textTransform: "uppercase" }}>
              Our Properties
            </p>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
              fontSize: "clamp(2.5rem,7vw,6rem)",
              lineHeight: 0.9,
              color: "#ffffff",
              maxWidth: "800px",
              marginBottom: "2.5rem",
              fontWeight: 700,
            }}
          >
            Plots, Villas &amp;<br />Gated Communities
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.5)", maxWidth: "520px", lineHeight: 1.8 }}>
            Eight specialised real estate offerings — from investment plots to luxury villas — all HMDA &amp; DTCP approved.
          </p>
        </div>
      </section>

      {/* ── 3D Service Cards Grid ─────────────────── */}
      <section style={{ maxWidth: "1440px", margin: "0 auto", padding: "5rem 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "0",
          }}
        >
          {SERVICES.map((service) => (
            <CardContainer key={service.tag} containerClassName="py-8 px-4">
              <CardBody
                className="relative"
                style={{
                  background: "#1a1a1a",
                  border: "1px solid rgba(238, 46, 34,0.15)",
                  width: "320px",
                  height: "auto",
                }}
              >
                {/* Image */}
                <CardItem translateZ={80} className="w-full">
                  <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden" }}>
                    <Image
                      src={service.imgUrl}
                      alt={service.heading}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="320px"
                    />
                    {/* Dark overlay */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(26,26,26,0.6) 100%)" }} />
                  </div>
                </CardItem>

                {/* Tag + Heading */}
                <CardItem
                  translateZ={60}
                  className="w-full"
                  style={{ padding: "1.5rem 1.5rem 0" }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.6rem" }}>
                    <span style={{ color: "#ee2e22", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                      {service.tag}
                    </span>
                    <h2
                      style={{
                        fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                        fontSize: "1.25rem",
                        color: "#ffffff",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      {service.heading}
                    </h2>
                  </div>
                </CardItem>

                {/* Description */}
                <CardItem
                  as="p"
                  translateZ={40}
                  style={{
                    fontSize: "0.82rem",
                    lineHeight: 1.75,
                    color: "rgba(255,255,255,0.45)",
                    padding: "0 1.5rem",
                    margin: 0,
                  }}
                >
                  {service.content}
                </CardItem>

                {/* CTA */}
                <CardItem
                  translateZ={20}
                  style={{ padding: "1.25rem 1.5rem 1.5rem", display: "flex", justifyContent: "flex-end" }}
                >
                  <Link
                    href="/contact"
                    style={{
                      fontSize: "0.58rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#ee2e22",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontWeight: 500,
                      borderBottom: "1px solid rgba(238, 46, 34,0.3)",
                      paddingBottom: "2px",
                      transition: "border-color 0.2s",
                    }}
                    className="footer-contact-link"
                  >
                    Enquire Now <FiArrowUpRight />
                  </Link>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────── */}
      <section style={{ background: "#005c97", padding: "6rem 2.5rem", borderTop: "1px solid rgba(238, 46, 34,0.12)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.4em", color: "#ee2e22", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Ready to invest in Hyderabad real estate?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
              fontSize: "clamp(2rem,4vw,3.5rem)",
              color: "#ffffff",
              marginBottom: "2.5rem",
              lineHeight: 1.1,
            }}
          >
            Book a Free Site Visit Today.
          </h2>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2.5rem",
              background: "#ee2e22",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Get In Touch <FiArrowUpRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
