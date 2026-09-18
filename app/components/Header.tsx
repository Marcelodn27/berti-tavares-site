"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PillButton from "./PillButton";
import { WhatsAppIcon } from "./icons";
import { NAV_LINKS, getWhatsAppUrl } from "../lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-wine/90 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#inicio" className="flex items-center gap-2.5">
          <Image
            src="/images/marca-escudo-dourado.png"
            alt=""
            width={42}
            height={48}
            className="h-10 w-auto shrink-0 object-contain"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-brand text-[1.35rem] font-medium uppercase tracking-[-0.04em] text-cream">
              Berti Tavares
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-gold">
              Advocacia e Consultoria
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/90 transition-colors duration-150 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PillButton href={getWhatsAppUrl()} variant="solid-cream">
            <WhatsAppIcon className="h-4 w-4" />
            Fale no WhatsApp
          </PillButton>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-cream lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="bg-wine/95 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-cream/90 hover:bg-cream/10"
              >
                {link.label}
              </a>
            ))}
            <PillButton
              href={getWhatsAppUrl()}
              variant="solid-cream"
              className="mt-2 justify-center"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Fale no WhatsApp
            </PillButton>
          </nav>
        </div>
      )}
    </header>
  );
}
