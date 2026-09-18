"use client";

import { motion } from "framer-motion";
import Kicker from "./Kicker";
import { OFFICE_TEXT } from "../lib/constants";

export default function Office() {
  return (
    <section id="escritorio" className="scroll-mt-20 bg-cream py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="relative lg:order-2 lg:z-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Kicker tone="onLight">O escritório</Kicker>
          </motion.div>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[0.98] tracking-tight text-textDark sm:text-5xl">
            {"Direito com estratégia. Atendimento com presença.".split(" ").map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className={`mr-[0.24em] inline-block ${word.includes("estratégia") || word.includes("presença") ? "text-gold" : ""}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.52, delay: 0.08 + index * 0.07, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-textDark/80 sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.48, ease: "easeOut" }}
          >
            {OFFICE_TEXT}
          </motion.p>
        </div>

        <div className="relative z-10 flex justify-center lg:order-1 lg:-my-24 lg:-translate-x-[10%] lg:translate-y-[20%] lg:self-stretch">
          <motion.div
            className="relative w-full lg:h-full"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative w-full lg:h-full lg:scale-[1.12]">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-wine/5 blur-2xl"
              />
              <div className="relative h-[300px] w-full overflow-hidden sm:h-[420px] lg:h-full lg:min-h-[620px] lg:overflow-visible">
                {/* eslint-disable-next-line @next/next/no-img-element -- equipe local com fundo transparente */}
                <img
                  src="/images/equipe-institucional-transparente.png"
                  alt="Equipe da Berti Tavares Advocacia e Consultoria"
                  className="absolute inset-0 h-full w-full object-contain object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
