"use client";

import { motion } from "framer-motion";
import Kicker from "./Kicker";
import Avatar from "./Avatar";
import { Crest } from "./Crest";
import { PRACTICE_AREAS } from "../lib/constants";

export default function PracticeAreas() {
  return (
    <section id="areas-de-atuacao" className="relative scroll-mt-20 overflow-hidden bg-wine py-24">
      <div aria-hidden className="text-wave-backdrop">
        {["DIREITO", "JUSTIÇA", "DIREITO", "JUSTIÇA", "DIREITO", "JUSTIÇA"].map((word, index) => (
          <span key={`${word}-${index}`}>{word}</span>
        ))}
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Kicker className="justify-self-center">Áreas de atuação</Kicker>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-cream sm:text-4xl">
            Onde podemos ajudar você
          </h2>
        </motion.div>

        <div className="mt-16 flex flex-col gap-16 sm:mt-20 sm:gap-24">
          {PRACTICE_AREAS.map((area, index) => {
            const reversed = index % 2 === 1;
            return (
              <motion.div
                key={area.id}
                id={area.id}
                className="scroll-mt-24 grid items-center gap-10 rounded-[2rem] p-2 lg:grid-cols-2 lg:gap-16 lg:p-6"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <div className={reversed ? "lg:order-2" : ""}>
                  <Kicker>Área de atuação</Kicker>
                  <h3 className="mt-3 font-serif text-2xl text-cream sm:text-3xl">
                    {area.title}
                  </h3>
                  {area.responsible && (
                    <p className="mt-1 text-sm text-gold">
                      Advogado(a) responsável: {area.responsible}
                    </p>
                  )}
                  <p className="mt-5 leading-relaxed text-cream/80">
                    {area.description}
                  </p>

                  {area.groups.map((group) => (
                    <div key={group.heading ?? area.id} className="mt-5">
                      {group.heading && (
                        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                          {group.heading}
                        </p>
                      )}
                      <ul className="mt-3 space-y-2">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm leading-relaxed text-cream/80"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className={reversed ? "lg:order-1" : ""}>
                  {area.photoUrl ? (
                    <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-3xl shadow-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element -- next/image tem instabilidade nesta versão canário do Next; img simples é usado no restante do projeto (ver Avatar.tsx) */}
                      <img
                        src={area.photoUrl}
                        alt={area.photoAlt ?? area.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="mx-auto flex aspect-square w-full max-w-xs flex-col items-center justify-center gap-4 rounded-3xl bg-cream/5 p-8 shadow-lg">
                      {area.responsible ? (
                        <>
                          <Avatar name={area.responsible} size={104} inverted />
                          <div className="text-center">
                            <p className="font-serif text-lg text-cream">
                              {area.responsible}
                            </p>
                            <p className="text-xs uppercase tracking-widest text-gold">
                              Advogado(a) responsável
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <Crest tone="gold" className="h-10 w-10" />
                        </>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
