import FadeIn from "./FadeIn";
import Kicker from "./Kicker";
import CursorImageGallery from "./CursorImageGallery";
import { TEAM, PARTNERS } from "../lib/constants";

// Recortes individuais da arte de equipe fornecida pela cliente.
const TEAM_PHOTOS: Record<string, string> = {
  "Dra. Bianca Berti": "/images/equipe/bianca-cutout.png",
  "Dra. Larissa": "/images/equipe/larissa-cutout.png",
  "Mayara Godoy": "/images/equipe/mayara-cutout.png",
  "Maria Eduarda": "/images/equipe/maria-eduarda-cutout.png",
  "Thamires": "/images/equipe/thamires-cutout.png",
  "Isadora": "/images/equipe/isadora-cutout.png",
  "Paloma": "/images/equipe/paloma-cutout.png",
};

const PARTNER_PHOTOS: Record<string, string> = {
  "Dra. Ellen": "/images/equipe/ellen-cutout.png",
  "Dr. Isaque": "/images/equipe/isaque-cutout.png",
  "Dr. Aloysio": "/images/equipe/aloysio-cutout.png",
};

export default function Team() {
  return (
    <section id="equipe" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <Kicker tone="onLight" className="justify-self-center">Nossa equipe</Kicker>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-textDark sm:text-4xl">
            Pessoas dedicadas ao seu caso
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} scale={0.98}>
          <CursorImageGallery
            people={TEAM.map((member) => ({
              name: member.name,
              role: member.role,
              photo: TEAM_PHOTOS[member.name] ?? "/images/equipe/bianca-cutout.png",
            }))}
          />
        </FadeIn>

        <FadeIn className="mx-auto mt-24 max-w-2xl text-center">
          <Kicker tone="onLight" className="justify-self-center">Parceiros</Kicker>
          <h3 className="mt-4 font-serif text-2xl leading-tight tracking-tight text-textDark sm:text-3xl">
            Advogados responsáveis por área
          </h3>
        </FadeIn>

        <FadeIn delay={0.1} scale={0.98}>
          <CursorImageGallery
            people={PARTNERS.map((partner) => ({
              name: partner.name,
              role: partner.role,
              photo: PARTNER_PHOTOS[partner.name] ?? "/images/equipe/ellen-cutout.png",
            }))}
          />
        </FadeIn>
      </div>
    </section>
  );
}
