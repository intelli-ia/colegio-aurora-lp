"use client";

import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { HeroBanner } from "@/components/ui/HeroBanner";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col bg-white md:min-h-screen"
    >
      {/* Marquee strip */}
      <div className="w-full overflow-hidden bg-[#0164A4] py-2.5 md:py-3" aria-label="Matrículas abertas 2027 em Lauro de Freitas">
        <div className="flex w-max animate-marquee" aria-hidden>
          {[0, 1].map((group) => (
            <div key={group} className="flex flex-shrink-0 items-center">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="flex items-center font-title text-sm font-extrabold uppercase tracking-[0.15em] text-white md:text-base">
                  <span className="px-5 md:px-8">{i % 2 === 0 ? "Matrículas abertas 2027" : "Lauro de Freitas"}</span>
                  <span className="text-[#FABD22]">&#9733;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-8 pt-8 md:px-12 md:pb-10 md:pt-12 xl:px-0">
        <header className="mx-auto mb-8 flex w-fit max-w-full items-center justify-center gap-4 md:mb-11 md:gap-8">
          <Image
            src="/aurora-logo-light.png"
            alt="Logo Colégio Aurora"
            width={687}
            height={660}
            className="h-auto w-[80px] flex-shrink-0 md:w-[120px]"
            priority
          />
          <div aria-hidden className="h-14 w-px flex-shrink-0 bg-[#0164A4]/30 md:h-24" />
          <h1 className="max-w-[18rem] text-balance text-center font-title md:max-w-[32rem] lg:max-w-[36rem] text-xl font-bold leading-[1.2] text-[#0164A4] md:text-3xl lg:text-4xl">
            Excelência acadêmica e valores cristãos, em dois idiomas.
          </h1>
        </header>

        <div className="relative min-h-[260px] w-full flex-1 overflow-hidden rounded-3xl md:min-h-[360px] md:rounded-[2rem]">
          <HeroBanner className="absolute inset-0 h-full w-full" />
        </div>

        <div className="mt-6 flex flex-col items-center md:mt-8">
          <span className="text-center font-title text-3xl font-extrabold uppercase leading-[0.95] text-[#0164A4] md:text-4xl">
            Matrículas Abertas
          </span>
        </div>

        <div className="mt-6 flex w-full flex-col items-stretch justify-center gap-4 self-center sm:w-auto sm:flex-row sm:items-center md:mt-8">
          <CTAButton
            href="https://wa.me/5571981262448?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
            target="_blank"
            rel="noopener noreferrer"
            label="Agende uma visita"
          />
          <CTAButton
            href="#depoimentos"
            label="Conheça nossa proposta pedagógica"
            variant="secondary"
            className="border-[#0164A4]/40 text-[#0164A4] hover:border-[#0164A4] hover:bg-[#0164A4]/10"
          />
        </div>
      </div>
    </section>
  );
}
