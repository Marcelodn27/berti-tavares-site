"use client";

import { motion } from "framer-motion";
import AmbientGlow from "./AmbientGlow";
import PillButton from "./PillButton";
import { WhatsAppIcon } from "./icons";
import {
  HERO_TAGS,
  getWhatsAppUrl,
} from "../lib/constants";

const HEADLINE_LINES = [
  { start: "Seu ", highlight: "direito." },
  { start: "Nossa ", highlight: "missão." },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[720px] scroll-mt-20 overflow-hidden bg-wine pb-20 pt-32 sm:pt-36 lg:pt-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 hidden bg-no-repeat lg:block"
        style={{
          backgroundColor: "#501923",
          backgroundImage:
            "linear-gradient(90deg, #501923 0%, #501923 43%, rgba(80, 25, 35, 0.9) 62%, rgba(80, 25, 35, 0) 86%), url('/images/bianca-hero-ambiente.png')",
          backgroundPosition: "center, right bottom",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "100% 100%, auto 92%",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-no-repeat lg:hidden"
        style={{
          backgroundColor: "#501923",
          backgroundImage:
            "linear-gradient(90deg, #501923 0%, #501923 37%, rgba(80, 25, 35, 0.96) 58%, rgba(80, 25, 35, 0.58) 78%, rgba(80, 25, 35, 0.05) 100%), url('/images/bianca-hero-ambiente.png')",
          backgroundPosition: "center, calc(100% + 205px) bottom",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "100% 100%, auto 100%",
        }}
      />
      <AmbientGlow className="-right-28 -top-28 z-0 h-80 w-80 opacity-80 sm:h-[28rem] sm:w-[28rem]" />
      <AmbientGlow tone="cream" className="-bottom-32 left-[26%] z-0 h-64 w-64 opacity-60 sm:h-80 sm:w-80" />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-[minmax(0,64%)_minmax(0,36%)] px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          <h1 className="font-serif text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-cream sm:text-5xl lg:text-6xl">
            {HEADLINE_LINES.map((line, i) => (
              <motion.span
                key={line.highlight}
                className="block"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.15, ease: "easeOut" }}
              >
                {line.start}
                <span className="text-gold">{line.highlight}</span>
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
          >
            Há 22 anos ao lado de quem precisa de uma defesa ágil, ética e
            humana. Nas áreas Previdenciária, Trabalhista, Cível, Consumidor,
            Família e Bancária.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {HERO_TAGS.map((tag) => (
              <span
                key={tag}
                className="moving-tag"
              >
                <span>{tag}</span>
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.74 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <PillButton href={getWhatsAppUrl()} variant="solid-cream">
              <WhatsAppIcon className="h-4 w-4" />
              Fale no WhatsApp
            </PillButton>
            <PillButton href="#contato" variant="outline-cream">
              Agende uma consulta
            </PillButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-10 text-xs uppercase tracking-[0.16em] text-cream/60"
          >
            Nova Iguaçu/RJ. Atendimento presencial e online. OAB/RJ 130208
          </motion.p>
        </div>

        <div aria-hidden />
      </div>
    </section>
  );
}
