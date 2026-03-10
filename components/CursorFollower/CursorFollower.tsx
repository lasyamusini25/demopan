"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 200, damping: 22 });
  const springY = useSpring(y, { stiffness: 200, damping: 22 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
    };
    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button")) setHovered(true);
    };
    const onLeave = () => setHovered(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [x, y]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0, left: 0,
          zIndex: 9998,
          width: hovered ? "48px" : "32px",
          height: hovered ? "48px" : "32px",
          border: "1px solid rgba(197,164,109,0.7)",
          borderRadius: "50%",
          pointerEvents: "none",
          x: springX,
          y: springY,
          transition: "width 0.2s, height 0.2s",
        }}
        className="hidden md:block"
      />
      {/* Dot */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0, left: 0,
          zIndex: 9999,
          width: "5px",
          height: "5px",
          background: "#c5a46d",
          borderRadius: "50%",
          pointerEvents: "none",
          x: useSpring(x, { stiffness: 400, damping: 20 }),
          y: useSpring(y, { stiffness: 400, damping: 20 }),
          translateX: "11px",
          translateY: "11px",
        }}
        className="hidden md:block"
      />
    </>
  );
}
