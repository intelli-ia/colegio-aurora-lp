"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [lightBg, setLightBg] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const pastHero = hero.getBoundingClientRect().bottom <= 0;

      const cta = document.getElementById("final-cta");
      const ctaInView = cta ? cta.getBoundingClientRect().top <= window.innerHeight * 0.6 : false;

      setVisible(pastHero && !ctaInView);

      if (pastHero) {
        const navbarY = 40;
        const sections = document.querySelectorAll("section, footer");
        let isLight = true; // default azul

        for (const section of Array.from(sections)) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= navbarY && rect.bottom > navbarY) {
            const bg = window.getComputedStyle(section).backgroundColor;
            const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
            if (match) {
              const alpha = match[4] !== undefined ? +match[4] : 1;
              if (alpha < 0.1) {
                // bg image via filho — verifica se a section é explicitamente escura
                isLight = (section as HTMLElement).id !== "processo";
                break;
              }
              const luminance = (+match[1] * 299 + +match[2] * 587 + +match[3] * 114) / 1000;
              isLight = luminance > 100;
            }
            break;
          }
        }
        setLightBg(isLight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed bottom-5 md:bottom-auto md:top-5 left-0 right-0 z-50 flex justify-center px-4 transition-[opacity,transform] duration-500 ease-out ${
      visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 md:-translate-y-4 pointer-events-none"
    }`}>
      <div style={{ WebkitBackdropFilter: "blur(12px)", backdropFilter: "blur(12px)" }} className="flex items-center justify-between gap-3 md:gap-6 bg-white/10 border border-white/20 rounded-full px-4 py-2.5 shadow-lg w-full max-w-xl transform-gpu">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <Image
            src="/aurora-logo.png"
            alt="Logo Colégio Aurora"
            width={34}
            height={34}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span className={`font-title font-bold text-[13px] md:text-base tracking-wide whitespace-nowrap transition-colors duration-300 ${lightBg ? "text-[#0164A4]" : "text-white"}`}>
            Matrículas Abertas
          </span>
        </Link>

        {/* CTA */}
        <Link
          href="https://wa.me/5571981262448?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold text-sm md:text-base rounded-full px-4 py-1.5 md:px-5 md:py-2 transition-colors duration-300"
        >
          Fale conosco
        </Link>

      </div>
    </header>
  );
}
