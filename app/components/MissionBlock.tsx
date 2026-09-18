import FadeIn from "./FadeIn";
import AmbientGlow from "./AmbientGlow";
import PillButton from "./PillButton";
import { WhatsAppIcon } from "./icons";
import { MANIFESTO, getWhatsAppUrl } from "../lib/constants";

export default function MissionBlock() {
  return (
    <section className="relative overflow-hidden bg-wine py-24">
      <AmbientGlow className="-right-20 -top-24 h-72 w-72 opacity-70 sm:h-96 sm:w-96" />
      <AmbientGlow tone="cream" className="-bottom-28 -left-20 h-64 w-64 opacity-40 sm:h-80 sm:w-80" />
      <FadeIn className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6" scale={0.99}>
        <span className="font-script text-2xl text-gold">nosso compromisso</span>
        <p className="mt-4 text-balance font-serif text-3xl italic leading-snug tracking-tight text-cream sm:text-4xl lg:text-5xl">
          {MANIFESTO}
        </p>
        <div className="mt-10 flex justify-center">
          <PillButton
            href={getWhatsAppUrl(
              "Olá! Gostaria de falar com um dos advogados da Berti Tavares."
            )}
            variant="solid-cream"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Fale com um de nossos advogados
          </PillButton>
        </div>
      </FadeIn>
    </section>
  );
}
