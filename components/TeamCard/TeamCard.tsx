"use client";

import React from "react";
import Image from "next/image";

interface Props {
    member: {
        name: string;
        role: string;
        image: string;
    };
    index: number;
}

export default function TeamCard({ member, index }: Props) {
    return (
        <>
            {/* We inject scoped styles for this exact component animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .team-card-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4/5;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border-radius: 12px;
          cursor: pointer;
          z-index: 10;
        }

        .team-card-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          left: -4px;
          margin: auto;
          width: calc(100% + 8px);
          height: calc(100% + 8px);
          border-radius: 14px;
          background: linear-gradient(-45deg, #c5a46d 0%, #3a3020 50%, #111111 100%);
          z-index: -10;
          pointer-events: none;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          opacity: 0.2; /* Subtle by default */
        }

        .team-card-wrap::after {
          content: "";
          z-index: -11;
          position: absolute;
          inset: 0;
          background: linear-gradient(-45deg, #c5a46d 0%, #111111 100%);
          transform: translate3d(0, 0, 0) scale(0.95);
          filter: blur(15px);
          opacity: 0;
          transition: all 0.6s ease;
        }

        .team-card-wrap:hover::after {
          filter: blur(25px);
          opacity: 0.6;
        }

        .team-card-wrap:hover::before {
          /* Scale math: depending on aspect ratio, card needs to stretch to cover background */
          /* Assuming approx 300x420 standard, scaleX/Y adapt the dimensions when rotated */
          transform: rotate(-90deg) scaleX(1.3) scaleY(0.7);
          opacity: 1;
        }

        .team-card-inner {
          position: absolute;
          inset: 0;
          background-color: #111111;
          border-radius: 12px;
          overflow: hidden;
          z-index: -1;
        }
        `
            }} />

            <div className="team-card-wrap group">
                <div className="team-card-inner">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{
                            objectFit: "cover",
                            opacity: 0.6,
                            transition: "opacity 0.5s ease"
                        }}
                        className="group-hover:opacity-40 grayscale"
                    />
                    {/* Gradient overlay to ensure text remains readable */}
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(17,17,17,1) 0%, rgba(17,17,17,0.4) 50%, transparent 100%)"
                    }} />
                </div>

                <div style={{ padding: "2rem 1.5rem", position: "relative", zIndex: 10, textAlign: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "0.75rem" }}>
                        <h3 style={{
                            fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                            fontSize: "1.75rem", color: "#ffffff", lineHeight: 1.1,
                            marginBottom: "0.5rem"
                        }}>
                            {member.name}
                        </h3>
                        <div style={{ width: "20px", height: "1px", background: "rgba(197,164,109,0.3)", marginBottom: "0.75rem" }} />
                    </div>
                    <p style={{ fontSize: "0.6rem", color: "#c5a46d", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>
                        {member.role}
                    </p>
                    <span style={{
                        position: "absolute",
                        top: "1.5rem",
                        right: "1.5rem",
                        fontFamily: "var(--font-playfair,Georgia,serif)",
                        fontSize: "0.85rem", color: "rgba(255,255,255,0.15)", letterSpacing: "0.05em",
                    }}>
                        0{index + 1}
                    </span>
                </div>
            </div>
        </>
    );
}
