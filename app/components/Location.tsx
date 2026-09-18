import FadeIn from "./FadeIn";
import Kicker from "./Kicker";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "./icons";
import { CONTACT, MAPS_EMBED_URL } from "../lib/constants";

export default function Location() {
  return (
    <section id="localizacao" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <FadeIn direction="left">
            <div className="h-full rounded-[2rem] bg-wine p-8 text-cream shadow-[0_24px_50px_-28px_rgba(43,17,22,0.75)] sm:p-10">
              <Kicker>Localização</Kicker>
              <h2 className="mt-4 font-brand text-4xl font-medium leading-[0.96] tracking-[-0.03em] sm:text-5xl">
                Um escritório de fácil acesso
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-cream/80">
                No Centro de Nova Iguaçu, com fácil acesso por transporte público e estacionamento nas proximidades.
              </p>

              <div className="mt-8 rounded-2xl bg-cream/[0.07] p-5 text-sm leading-relaxed text-cream sm:text-base">
                <div className="flex gap-3"><MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><span>{CONTACT.addressLine1}<br />{CONTACT.addressLine2}</span></div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a href={`tel:${CONTACT.phoneDisplay.replace(/\D/g, "")}`} className="rounded-2xl bg-cream px-5 py-4 text-wine transition-colors hover:bg-gold/20">
                  <PhoneIcon className="h-5 w-5 text-gold" /><span className="mt-3 block text-xs font-semibold uppercase tracking-[0.16em] text-wine/60">Telefone</span><span className="mt-1 block font-brand text-2xl leading-none">{CONTACT.phoneDisplay}</span>
                </a>
                <a href={`mailto:${CONTACT.email}`} className="rounded-2xl bg-cream px-5 py-4 text-wine transition-colors hover:bg-gold/20">
                  <MailIcon className="h-5 w-5 text-gold" /><span className="mt-3 block text-xs font-semibold uppercase tracking-[0.16em] text-wine/60">E-mail</span><span className="mt-1 block break-all text-sm font-semibold leading-tight">{CONTACT.email}</span>
                </a>
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-2xl bg-gold/15 px-5 py-4">
                <ClockIcon className="h-5 w-5 shrink-0 text-gold" /><span><span className="block text-xs font-semibold uppercase tracking-[0.16em] text-gold">Horário de atendimento</span><span className="mt-1 block font-brand text-xl leading-none">Segunda a sexta, 9h às 18h</span></span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1} scale={0.98}>
            <div className="relative h-full min-h-[460px] overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_50px_-28px_rgba(43,17,22,0.55)]">
              <div className="absolute left-5 top-5 z-10 rounded-full bg-cream px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-wine shadow-md">Mapa em tempo real</div>
              <iframe
                src={MAPS_EMBED_URL}
                title="Mapa de localização do escritório Berti Tavares Advocacia e Consultoria"
                width="100%"
                height="100%"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
