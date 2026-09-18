import FadeIn from "./FadeIn";
import AmbientGlow from "./AmbientGlow";
import Kicker from "./Kicker";
import { DIFFERENTIALS } from "../lib/constants";

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-wineDeep via-wine to-[#6c2632] py-24">
      <AmbientGlow className="-right-24 -top-28 h-80 w-80 opacity-70 sm:h-[30rem] sm:w-[30rem]" />
      <AmbientGlow tone="cream" className="-bottom-40 -left-28 h-72 w-72 opacity-45 sm:h-96 sm:w-96" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] bg-cream/[0.06] px-7 py-12 shadow-[0_20px_44px_-30px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:px-12 sm:py-14">
            <div className="relative max-w-3xl">
              <Kicker>Nosso diferencial</Kicker>
              <h2 className="mt-4 font-brand text-4xl font-medium leading-[0.95] tracking-[-0.035em] text-cream sm:text-6xl">
                Por que clientes confiam na Berti Tavares
              </h2>
            </div>
          </div>
        </FadeIn>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((text, index) => (
            <FadeIn key={text} delay={index * 0.07} scale={0.98}>
              <div className="relative h-full overflow-hidden rounded-2xl bg-cream p-7 shadow-[0_18px_34px_-30px_rgba(0,0,0,0.7)] transition-colors duration-300 hover:bg-white">
                <div className="max-w-xs">
                  <p className="font-brand text-[22px] font-medium leading-[1.08] tracking-[-0.015em] text-wine">{text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
