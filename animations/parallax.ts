"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const parallax = (selector: string, yPercent = 18) => {
  gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
    gsap.fromTo(
      el,
      { yPercent: -yPercent },
      {
        yPercent,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      }
    );
  });
};
