import Link from "next/link";
import { Crest } from "./Crest";
import { InstagramIcon, MailIcon, PhoneIcon, WhatsAppIcon, MapPinIcon } from "./icons";
import {
  CONTACT,
  OAB_NUMBER,
  PRACTICE_AREA_NAMES,
  getWhatsAppUrl,
} from "../lib/constants";

const OFFICE_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#escritorio" },
  { label: "Equipe", href: "#equipe" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-wineDeep pt-20 pb-8 text-cream/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Crest className="h-9 w-9" tone="gold" />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg text-cream">Berti Tavares</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-gold">
                  Advocacia e Consultoria
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Atendimento ágil, criativo e ético em Nova Iguaçu/RJ, há 22 anos
              ao lado de quem precisa de uma defesa justa.
            </p>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram da Berti Tavares: ${CONTACT.instagramHandle}`}
              className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cream/10 text-cream transition-colors duration-150 hover:bg-cream/20 hover:text-gold"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Escritório
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {OFFICE_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors duration-150 hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Áreas de Atuação
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {PRACTICE_AREA_NAMES.map((area) => (
                <li key={area}>
                  <a href="#areas-de-atuacao" className="transition-colors duration-150 hover:text-cream">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Contato
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{CONTACT.addressFull}</span>
              </li>
              <li className="flex gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{CONTACT.phoneDisplay}</span>
              </li>
              <li className="flex gap-2.5">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                  {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li className="flex gap-2.5">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-cream">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-cream/60 sm:flex-row sm:text-left">
            <p>{OAB_NUMBER}</p>
            <p>© {year} Berti Tavares Advocacia e Consultoria. Todos os direitos reservados.</p>
            <Link href="/politica-de-privacidade" className="hover:text-cream">
              Política de Privacidade
            </Link>
          </div>
          <p className="mt-6 text-center text-[11px] leading-relaxed text-cream/70">
            O conteúdo deste site tem caráter meramente informativo e não
            constitui aconselhamento jurídico.
          </p>
        </div>
      </div>
    </footer>
  );
}
