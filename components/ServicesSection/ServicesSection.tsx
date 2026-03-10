"use client";

import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";
import { ReactNode } from "react";

const icons = ["◈", "⬡", "◎", "◉", "⬢"];

const gradients = [
  "linear-gradient(135deg, #c5a46d 0%, #a8893d 100%)",
  "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
  "linear-gradient(135deg, #c5a46d 0%, #d4b97a 100%)",
  "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
  "linear-gradient(135deg, #c5a46d 0%, #a8893d 100%)",
];

const cardSpans = [
  "col-span-12 md:col-span-4",
  "col-span-12 md:col-span-8",
  "col-span-12 md:col-span-8",
  "col-span-12 md:col-span-4",
  "col-span-12",
];

function BounceCard({ className, children }: { className: string; children: ReactNode }) {
  return (
    <CardContainer containerClassName={className} className="w-full h-full min-h-[260px]">
      <CardBody
        className="group relative h-full w-full cursor-pointer rounded-2xl p-8 flex flex-col items-center justify-center text-center"
        style={{ background: "#1a1714", border: "1px solid rgba(197,164,109,0.15)" }}
      >
        {children}
      </CardBody>
    </CardContainer>
  );
}

function CardTitle({ children, index }: { children: ReactNode; index: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
      <div style={{
        width: "60px", height: "60px", flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        border: "1px solid rgba(197,164,109,0.3)",
        background: "rgba(197,164,109,0.08)",
        color: "#c5a46d", fontSize: "1.75rem", borderRadius: "1rem",
        transition: "transform 0.4s ease",
      }} className="group-hover:scale-110">
        {icons[index]}
      </div>
      <h3 style={{
        fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
        fontSize: "clamp(1.75rem,3.5vw,2.5rem)",
        color: "#ffffff", lineHeight: 1.1,
        transition: "opacity 0.3s ease",
      }} className="group-hover:opacity-10">
        {children}
      </h3>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section style={{ padding: "7rem 0" }} aria-label="Services">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: "6rem",
          maxWidth: "800px", margin: "0 auto 6rem",
        }}>
          <motion.p
            style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "1.5rem" }}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            Our Properties
          </motion.p>
          <motion.h2
            style={{
              fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
              fontSize: "clamp(2.5rem,5.5vw,4.5rem)",
              lineHeight: 1, color: "#111111", marginBottom: "2.5rem",
            }}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            Plots, Villas &amp; Gated Communities
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "#666666", marginBottom: "2.5rem" }}>
              From HMDA-approved residential plots to luxury villa communities — we offer transparent transactions, clear title deeds, and world-class amenities.
            </p>
            <Link
              href="/why-paninfra"
              style={{
                fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase",
                textDecoration: "none", color: "#111111",
                borderBottom: "1px solid #111111", paddingBottom: "3px",
                transition: "all 0.3s ease",
                display: "inline-block",
                fontWeight: 600,
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#c5a46d"; e.currentTarget.style.borderBottomColor = "#c5a46d"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#111111"; e.currentTarget.style.borderBottomColor = "#111111"; }}
            >
              Why Pan Infra →
            </Link>
          </motion.div>
        </div>

        {/* Bouncy Cards — Row 1 */}
        <div className="mb-4 grid grid-cols-12 gap-4">
          {SERVICES.slice(0, 2).map((service, idx) => (
            <BounceCard key={service.title} className={cardSpans[idx]}>
              <CardItem translateZ={30} as="span" style={{
                fontFamily: "var(--font-playfair,Georgia,serif)",
                fontSize: "0.85rem", color: "rgba(197,164,109,0.3)",
                letterSpacing: "0.08em", position: "absolute", top: "2rem", right: "2rem",
              }}>
                {String(idx + 1).padStart(2, "0")}
              </CardItem>
              <CardItem translateZ={50}>
                <CardTitle index={idx}>{service.title}</CardTitle>
              </CardItem>
              <CardItem
                translateZ={80}
                className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none"
              >
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-transform duration-[400ms] translate-y-full group-hover:translate-y-0"
                  style={{ background: gradients[idx] }}
                >
                  <h3 style={{
                    fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                    fontSize: "clamp(1.75rem,3.5vw,2.5rem)",
                    color: "#ffffff", marginBottom: "1.5rem", lineHeight: 1.1,
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: "1.1rem", lineHeight: 1.6,
                    color: "#ffffff",
                    textAlign: "center", fontWeight: 500,
                    maxWidth: "400px",
                  }}>
                    {service.description}
                  </p>
                </div>
              </CardItem>
            </BounceCard>
          ))}
        </div>

        {/* Bouncy Cards — Row 2 */}
        <div className="mb-4 grid grid-cols-12 gap-4">
          {SERVICES.slice(2, 4).map((service, idx) => (
            <BounceCard key={service.title} className={cardSpans[idx + 2]}>
              <CardItem translateZ={30} as="span" style={{
                fontFamily: "var(--font-playfair,Georgia,serif)",
                fontSize: "0.85rem", color: "rgba(197,164,109,0.3)",
                letterSpacing: "0.08em", position: "absolute", top: "2rem", right: "2rem",
              }}>
                {String(idx + 3).padStart(2, "0")}
              </CardItem>
              <CardItem translateZ={50}>
                <CardTitle index={idx + 2}>{service.title}</CardTitle>
              </CardItem>
              <CardItem
                translateZ={80}
                className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none"
              >
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-transform duration-[400ms] translate-y-full group-hover:translate-y-0"
                  style={{ background: gradients[idx + 2] }}
                >
                  <h3 style={{
                    fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                    fontSize: "clamp(1.75rem,3.5vw,2.5rem)",
                    color: "#ffffff", marginBottom: "1.5rem", lineHeight: 1.1,
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: "1.1rem", lineHeight: 1.6,
                    color: "#ffffff",
                    textAlign: "center", fontWeight: 500,
                    maxWidth: "400px",
                  }}>
                    {service.description}
                  </p>
                </div>
              </CardItem>
            </BounceCard>
          ))}
        </div>

        {/* Bouncy Cards — Row 3 */}
        {SERVICES.length > 4 && (
          <div className="grid grid-cols-12 gap-4">
            {SERVICES.slice(4).map((service, idx) => (
              <BounceCard key={service.title} className={cardSpans[4]}>
                <CardItem translateZ={30} as="span" style={{
                  fontFamily: "var(--font-playfair,Georgia,serif)",
                  fontSize: "0.85rem", color: "rgba(197,164,109,0.3)",
                  letterSpacing: "0.08em", position: "absolute", top: "2rem", right: "2rem",
                }}>
                  {String(idx + 5).padStart(2, "0")}
                </CardItem>
                <CardItem translateZ={50}>
                  <CardTitle index={idx + 4}>{service.title}</CardTitle>
                </CardItem>
                <CardItem
                  translateZ={80}
                  className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none"
                >
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-transform duration-[400ms] translate-y-full group-hover:translate-y-0"
                    style={{ background: gradients[4] }}
                  >
                    <h3 style={{
                      fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                      fontSize: "clamp(1.75rem,3.5vw,2.5rem)",
                      color: "#ffffff", marginBottom: "1.5rem", lineHeight: 1.1,
                    }}>
                      {service.title}
                    </h3>
                    <p style={{
                      fontSize: "1.1rem", lineHeight: 1.6,
                      color: "#ffffff",
                      textAlign: "center", fontWeight: 500,
                      maxWidth: "600px",
                    }}>
                      {service.description}
                    </p>
                  </div>
                </CardItem>
              </BounceCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
