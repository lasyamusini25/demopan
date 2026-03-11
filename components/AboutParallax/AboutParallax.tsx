"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const SECTIONS = [
  {
    imgUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000",
    subheading: "Our Process",
    heading: "Every property purchase begins with trust.",
    content: {
      heading: "Transparent from Day One",
      tag: "01 — Transparency",
      body: [
        "At Pan Infra, we believe buying real estate should be simple, honest, and stress-free. Every project comes with complete legal documentation, HMDA or DTCP approvals, and clear title deeds — no hidden charges, no last-minute surprises.",
        "Our buying process is structured in four clear steps: Site Visit, Documentation Review, Registration, and Handover. We assign a dedicated relationship manager to guide you at every stage, so you always know exactly where your investment stands.",
        "We believe the best real estate transactions are built on transparency. Our team provides detailed layout maps, government approvals, and payment schedules upfront — because an informed buyer is a confident buyer.",
      ],
      stats: [
        { n: "4", l: "Simple Steps" },
        { n: "100%", l: "Legal Clarity" },
        { n: "0", l: "Hidden Charges" },
      ],
    },
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2000",
    subheading: "Our Quality",
    heading: "Infrastructure that stands the test of time.",
    content: {
      heading: "Premium Development Standards",
      tag: "02 — Quality",
      body: [
        "Every Pan Infra project is developed to the highest infrastructure standards — wide BT roads, underground electricity, water supply, drainage, compound walls, and landscaped green spaces. We don't just sell land; we build communities.",
        "Our in-house project management team oversees every phase of development — from land acquisition and layout design to road construction and amenity development. Nothing is compromised in the pursuit of quality.",
        "Quality is a long-term commitment. We remain available post-handover for documentation support, resale assistance, and property management — because our relationship with customers doesn't end at registration.",
      ],
      stats: [
        { n: "800+", l: "Acres Developed" },
        { n: "15+", l: "Projects Delivered" },
        { n: "100%", l: "On-time Handover" },
      ],
    },
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=2000",
    subheading: "Our Vision",
    heading: "Hyderabad's growth corridors are your opportunity.",
    content: {
      heading: "Investing in the Right Locations",
      tag: "03 — Location Strategy",
      body: [
        "Hyderabad is one of India's fastest-growing cities, and our projects are strategically positioned in the micro-markets with the highest appreciation potential — Shadnagar on NH-44, Mokila near the ORR, Kokapet in the Financial District, and Adibatla near the aerospace corridor.",
        "We study infrastructure pipelines, government masterplans, and employment hub growth before acquiring any land. This rigorous location strategy has delivered 3× to 5× appreciation for our early investors across multiple projects.",
        "Our vision is to make premium real estate accessible to every Hyderabad family — whether you're buying your first plot, upgrading to a luxury villa, or seeking high-yield investment opportunities. Every Pan Infra property is a step towards a better future.",
      ],
      stats: [
        { n: "5×", l: "Appreciation in Key Projects" },
        { n: "1,000+", l: "Happy Families" },
        { n: "∞", l: "Growth Potential" },
      ],
    },
  },
];

export const AboutParallax = () => (
  <div style={{ background: "#f8f6f2", paddingBottom: "2rem" }}>
    {SECTIONS.map((s) => (
      <TextParallaxContent
        key={s.subheading}
        imgUrl={s.imgUrl}
        subheading={s.subheading}
        heading={s.heading}
      >
        <SectionContent {...s.content} />
      </TextParallaxContent>
    ))}
  </div>
);

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}) => (
  /* px-0 on mobile, px-3 on md+ so image is edge-to-edge on small screens */
  <div className="px-0 md:px-3 mb-6 md:mb-0">
    <div className="relative h-[60vh] md:h-[90vh]">
      <StickyImage imgUrl={imgUrl} />
      <OverlayCopy heading={heading} subheading={subheading} />
    </div>
    {children}
  </div>
);

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        scale,
      }}
      /* rounded-none on mobile, rounded-2xl on md+ */
      className="sticky z-0 overflow-hidden top-3 h-[60vh] md:h-[calc(90vh-24px)] rounded-none md:rounded-2xl"
    >
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)",
      }} />
      <motion.div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.5)", opacity }} />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: { subheading: string; heading: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-[60vh] md:h-[90vh] w-full flex-col items-center justify-center text-white px-8 md:px-16"
    >
      <p style={{
        fontSize: "0.55rem",
        letterSpacing: "0.4em",
        textTransform: "uppercase",
        color: "#ee2e22",
        marginBottom: "1.1rem",
        textAlign: "center",
      }}>
        {subheading}
      </p>
      <p style={{
        fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
        fontSize: "clamp(1.6rem,5vw,4.5rem)",
        fontWeight: 700,
        textAlign: "center",
        maxWidth: "680px",
        lineHeight: 1.18,
        padding: "0 1rem",
      }}>
        {heading}
      </p>
    </motion.div>
  );
};

const SectionContent = ({
  heading,
  tag,
  body,
  stats,
}: {
  heading: string;
  tag: string;
  body: string[];
  stats: { n: string; l: string }[];
}) => (
  <div style={{
    maxWidth: "800px",
    margin: "0 auto",
    padding: "8rem 2rem",
    textAlign: "center",
    position: "relative"
  }}>

    {/* Tag */}
    <p style={{
      fontSize: "0.6rem",
      letterSpacing: "0.45em",
      color: "#ee2e22",
      textTransform: "uppercase",
      marginBottom: "2.5rem",
    }}>
      {tag}
    </p>

    {/* Section Heading */}
    <h3 style={{
      fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
      fontSize: "clamp(2rem, 5vw, 4rem)",
      color: "#005c97",
      lineHeight: 1.1,
      fontWeight: 700,
      marginBottom: "4.5rem",
    }}>
      {heading}
    </h3>

    {/* Body text */}
    <div style={{ marginBottom: "6rem" }}>
      {body.map((para, i) => (
        <p key={i} style={{
          fontSize: "1.1rem",
          lineHeight: 2,
          color: "#555555",
          marginBottom: "2.5rem",
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 2.5rem"
        }}>
          {para}
        </p>
      ))}
    </div>

    {/* Stats — centered row */}
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "4rem",
      marginBottom: "6rem"
    }}>
      {stats.map(s => (
        <div key={s.l} style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-playfair,Georgia,serif)",
            fontSize: "2.5rem",
            color: "#005c97",
            fontWeight: 600,
            lineHeight: 1,
          }}>{s.n}</div>
          <div style={{
            fontSize: "0.55rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#ee2e22",
            marginTop: "0.75rem",
          }}>{s.l}</div>
        </div>
      ))}
    </div>

    {/* CTA button */}
    <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
      <Link
        href="/contact"
        className="btn-dark-hover"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          textDecoration: "none",
          padding: "1.5rem 3.5rem",
          background: "#005c97",
          color: "#ffffff",
          fontWeight: 800,
          transition: "all 0.4s ease",
          border: "2px solid #005c97",
        }}
      >
        Book a Site Visit →
      </Link>
    </div>
  </div>
);
