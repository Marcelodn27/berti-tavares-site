"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Distância (px) que o elemento percorre verticalmente ao entrar. */
  offset?: number;
  direction?: Direction;
  amount?: number;
  scale?: number;
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  offset = 24,
  direction = "up",
  amount = 0.15,
  scale = 0.985,
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const axis = {
    up: { x: 0, y: offset },
    down: { x: 0, y: -offset },
    left: { x: -offset, y: 0 },
    right: { x: offset, y: 0 },
  }[direction];

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...axis, scale }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration: reduceMotion ? 0 : 0.62, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
