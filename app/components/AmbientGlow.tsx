"use client";

import { motion, useReducedMotion } from "framer-motion";

type AmbientGlowProps = {
  className?: string;
  tone?: "gold" | "cream";
};

/** Camada abstrata de movimento para fundos escuros, sem adicionar linhas ou ruído visual. */
export default function AmbientGlow({
  className = "",
  tone = "gold",
}: AmbientGlowProps) {
  const reduceMotion = useReducedMotion();
  const background = tone === "gold"
    ? "radial-gradient(circle, rgba(211, 166, 85, 0.22) 0%, rgba(211, 166, 85, 0.055) 43%, transparent 74%)"
    : "radial-gradient(circle, rgba(255, 248, 232, 0.18) 0%, rgba(255, 248, 232, 0.04) 46%, transparent 76%)";

  return (
    <motion.span
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-xl ${className}`}
      style={{ background }}
      initial={false}
      animate={reduceMotion ? undefined : {
        x: ["-7%", "10%", "-2%"],
        y: ["-5%", "8%", "2%"],
        scale: [0.94, 1.08, 0.99],
      }}
      transition={reduceMotion ? undefined : {
        duration: 18,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      }}
    />
  );
}
