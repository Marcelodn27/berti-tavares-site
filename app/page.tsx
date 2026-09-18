import Header from "./components/Header";
import Hero from "./components/Hero";
import Office from "./components/Office";
import MissionBlock from "./components/MissionBlock";
import MissionVisionValues from "./components/MissionVisionValues";
import PracticeAreas from "./components/PracticeAreas";
import Differentials from "./components/Differentials";
import Team from "./components/Team";
import Location from "./components/Location";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { WhatsAppIcon } from "./components/icons";
import { getWhatsAppUrl } from "./lib/constants";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Office />
        <MissionBlock />
        <MissionVisionValues />
        <PracticeAreas />
        <Differentials />
        <Team />
        <Location />
        <ContactForm />
      </main>
      <Footer />
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-wine shadow-[0_12px_30px_rgb(43_17_22_/_0.26)] transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  );
}
