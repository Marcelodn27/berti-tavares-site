"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type PointerEvent } from "react";
import type { CarouselPerson } from "./MagneticCarousel";

export default function CursorImageGallery({ people }: { people: CarouselPerson[] }) {
  const [index, setIndex] = useState(0);
  const [side, setSide] = useState<"left" | "right" | null>(null);
  const reduceMotion = useReducedMotion();
  const person = people[index];

  function move(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const next = event.clientX - rect.left > rect.width / 2 ? "right" : "left";
    if ((next === "left" && index === 0) || (next === "right" && index === people.length - 1)) setSide(null);
    else setSide(next);
  }

  function navigate(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setIndex((current) => event.clientX - rect.left > rect.width / 2 ? Math.min(current + 1, people.length - 1) : Math.max(current - 1, 0));
  }

  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <div onPointerMove={move} onPointerLeave={() => setSide(null)} onClick={navigate} className="relative h-[430px] cursor-none overflow-hidden rounded-3xl bg-white shadow-xl sm:h-[520px]">
        <AnimatePresence initial={!reduceMotion} mode="wait">
          <motion.img
            key={person.photo}
            src={person.photo}
            alt={person.name}
            className="absolute inset-0 h-full w-full object-contain object-bottom"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.985 }}
            transition={{ duration: reduceMotion ? 0 : 0.38, ease: "easeOut" }}
          />
        </AnimatePresence>
        {side && <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl text-wine shadow-md">{side === "right" ? "›" : "‹"}</span>}
        <AnimatePresence initial={!reduceMotion} mode="wait">
          <motion.div
            key={person.name}
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/95 to-transparent px-7 pb-7 pt-16 text-center"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
          >
            <p className="font-serif text-2xl text-wine">{person.name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-textMuted">{person.role}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-5 flex justify-center gap-2" aria-label="Navegação da galeria">
        {people.map((item, i) => <button type="button" key={item.name} onClick={() => setIndex(i)} aria-label={`Ver ${item.name}`} className={`h-2 rounded-full transition-all ${i === index ? "w-7 bg-wine" : "w-2 bg-gold/40"}`} />)}
      </div>
    </div>
  );
}
