"use client";

import { useEffect, useRef, useState } from "react";

export type CarouselPerson = { name: string; role: string; photo: string };

export default function MagneticCarousel({ people }: { people: CarouselPerson[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targets = useRef(people.map(() => 0));
  const current = useRef(people.map(() => 0));
  const frame = useRef(0);
  const [factors, setFactors] = useState(people.map(() => 0));
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  function animate() {
    if (frame.current) return;
    const step = () => {
      let moving = false;
      current.current = current.current.map((value, index) => {
        const delta = targets.current[index] - value;
        if (Math.abs(delta) <= 0.001) return targets.current[index];
        moving = true;
        return value + delta * 0.2;
      });
      setFactors([...current.current]);
      frame.current = moving ? requestAnimationFrame(step) : 0;
    };
    frame.current = requestAnimationFrame(step);
  }

  function onMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current || open !== null) return;
    const collapsedWidth = 72;
    const gap = 12;
    const rect = containerRef.current.getBoundingClientRect();
    const startX = (rect.width - (people.length * collapsedWidth + (people.length - 1) * gap)) / 2;
    targets.current = people.map((_, index) => {
      const center = startX + index * (collapsedWidth + gap) + collapsedWidth / 2;
      const proximity = Math.max(0, 1 - Math.abs(event.clientX - rect.left - center) / 200);
      return proximity * proximity * (3 - 2 * proximity);
    });
    animate();
  }

  function close() {
    targets.current = people.map(() => 0);
    current.current = people.map(() => 0);
    setFactors([...current.current]);
    setOpen(null);
  }

  return (
    <div ref={containerRef} onMouseMove={onMove} onMouseLeave={() => { if (open === null) { targets.current = people.map(() => 0); animate(); } }} className="mx-auto mt-12 flex w-full max-w-6xl items-end justify-center gap-3 overflow-x-auto px-2 pb-4">
      {people.map((person, index) => {
        const factor = factors[index] ?? 0;
        const selected = open === index;
        const width = selected ? 420 : 72 + (188 - 72) * factor;
        const height = selected ? 420 : 467 + (392 - 467) * factor;
        return (
          <button type="button" key={person.name} aria-label={`Ver detalhes de ${person.name}`} aria-pressed={selected} onClick={() => selected ? close() : setOpen(index)} style={{ width, height, transition: open !== null ? "width 300ms ease-in-out, height 300ms ease-in-out, filter 300ms ease-in-out, opacity 300ms ease-in-out" : "none" }} className={`group relative shrink-0 overflow-hidden rounded-[22px] bg-white text-left shadow-lg ${open !== null && !selected ? "opacity-50 blur-[1px]" : "opacity-100"}`}>
            {/* eslint-disable-next-line @next/next/no-img-element -- retrato PNG local */}
            <img src={person.photo} alt="" className="h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]" />
            <span className={`absolute inset-x-0 bottom-0 bg-white/95 px-4 pb-5 pt-6 text-wine transition-opacity duration-200 ${selected ? "opacity-100" : "opacity-0"}`}>
              <span className="block font-serif text-lg leading-tight sm:text-xl">{person.name}</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-textMuted">{person.role}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
