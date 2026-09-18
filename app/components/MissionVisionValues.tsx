import FadeIn from "./FadeIn";
import Kicker from "./Kicker";
import { MISSION, VISION, VALUES } from "../lib/constants";

const CARDS = [
  { title: "Missão", text: MISSION },
  { title: "Visão", text: VISION },
  { title: "Valores", text: VALUES },
];

export default function MissionVisionValues() {
  return (
    <section id="principios" className="bg-[#f4ede3] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_2fr] lg:items-stretch lg:gap-10">
          <FadeIn direction="left" className="rounded-[2rem] bg-white p-8 shadow-[0_18px_38px_-30px_rgba(43,17,22,0.45)] sm:p-10">
            <Kicker tone="onLight">Quem somos</Kicker>
            <h2 className="mt-4 max-w-sm font-serif text-4xl leading-[1.03] tracking-tight text-textDark sm:text-5xl">
              O que nos move todos os dias
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-textMuted sm:text-base">
              Princípios que orientam cada conversa, estratégia e decisão.
            </p>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-3">
            {CARDS.map((card, index) => (
              <FadeIn key={card.title} delay={index * 0.08} className="h-full" scale={0.98}>
                <div className="h-full rounded-[1.5rem] bg-wine p-8 text-cream shadow-[0_18px_34px_-28px_rgba(43,17,22,0.65)] md:p-9">
                  <h3 className="font-serif text-2xl leading-none">{card.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-cream/75">
                    {card.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
