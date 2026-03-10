"use client";

import { useEffect } from "react";
import { fadeUp } from "@/animations/fadeUp";
import { revealText } from "@/animations/reveal";

export default function MotionEffects() {
  useEffect(() => {
    fadeUp("[data-fade]");
    revealText("[data-reveal]");
  }, []);

  return null;
}
