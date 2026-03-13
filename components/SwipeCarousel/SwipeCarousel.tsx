"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const AUTO_DELAY = 4000;

interface SwipeCarouselProps {
    images: string[];
}

export const SwipeCarousel = ({ images }: SwipeCarouselProps) => {
    const [index, setIndex] = useState(0);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const startXRef = useRef<number | null>(null);

    const goTo = useCallback((i: number) => {
        setIndex((i + images.length) % images.length);
    }, [images.length]);

    const prev = useCallback(() => goTo(index - 1), [index, goTo]);
    const next = useCallback(() => goTo(index + 1), [index, goTo]);

    // Auto-scroll
    useEffect(() => {
        timerRef.current = setTimeout(next, AUTO_DELAY);
        return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    }, [index, next]);

    // Touch/swipe support
    const onTouchStart = (e: React.TouchEvent) => { startXRef.current = e.touches[0].clientX; };
    const onTouchEnd = (e: React.TouchEvent) => {
        if (startXRef.current === null) return;
        const diff = startXRef.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) { if (diff > 0) next(); else prev(); }
        startXRef.current = null;
    };

    return (
        <div
            style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#0a0a0a", borderRadius: "0.75rem", overflow: "hidden" }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            {/* Slides */}
            {images.map((src, i) => (
                <div
                    key={i}
                    style={{
                        position: "absolute", inset: 0,
                        opacity: i === index ? 1 : 0,
                        transition: "opacity 0.6s ease",
                        pointerEvents: i === index ? "auto" : "none",
                    }}
                >
                    <Image
                        src={src}
                        alt={`Project image ${i + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 1280px"
                        priority={i === 0}
                    />
                </div>
            ))}

            {/* Arrow — Prev */}
            <button
                onClick={prev}
                aria-label="Previous image"
                style={{
                    position: "absolute", left: "1.25rem", top: "50%", transform: "translateY(-50%)",
                    zIndex: 10, width: "44px", height: "44px", borderRadius: "50%",
                    background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.15)",
                    color: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                    backdropFilter: "blur(8px)", transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#005c97")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0.55)")}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>

            {/* Arrow — Next */}
            <button
                onClick={next}
                aria-label="Next image"
                style={{
                    position: "absolute", right: "1.25rem", top: "50%", transform: "translateY(-50%)",
                    zIndex: 10, width: "44px", height: "44px", borderRadius: "50%",
                    background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.15)",
                    color: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                    backdropFilter: "blur(8px)", transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#005c97")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0.55)")}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </button>

            {/* Counter */}
            <div style={{
                position: "absolute", top: "1rem", right: "1.25rem", zIndex: 10,
                fontSize: "0.7rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em",
                background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)",
                padding: "0.3rem 0.75rem", borderRadius: "9999px",
            }}>
                {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </div>

            {/* Dots */}
            <div style={{
                position: "absolute", bottom: "1rem", left: "50%", transform: "translateX(-50%)",
                display: "flex", gap: "6px", zIndex: 10,
            }}>
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to image ${i + 1}`}
                        style={{
                            height: "6px",
                            width: i === index ? "28px" : "6px",
                            borderRadius: "9999px",
                            background: i === index ? "#ee2e22" : "rgba(255,255,255,0.4)",
                            border: "none", cursor: "pointer", padding: 0,
                            transition: "width 0.3s ease, background 0.3s ease",
                        }}
                    />
                ))}
            </div>

            {/* Progress bar */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "rgba(255,255,255,0.1)", zIndex: 10 }}>
                <div
                    key={index}
                    style={{
                        height: "100%", background: "#005c97",
                        animation: `progress ${AUTO_DELAY}ms linear forwards`,
                    }}
                />
            </div>

            <style>{`
                @keyframes progress { from { width: 0% } to { width: 100% } }
            `}</style>
        </div>
    );
};
