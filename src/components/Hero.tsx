"use client";

import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { Badge } from "@/components/ui/badge";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full md:min-h-screen flex flex-col rounded-b-[4rem] md:rounded-b-[5.5rem] overflow-hidden z-10 bg-white">

      {/* Logo + Matrículas abertas (mobile only, above the card) */}
      <div
        className="md:hidden flex items-center justify-between px-6 pt-8 pb-6"
      >
        <Image
          src="/aurora-logo.png"
          alt="Logo Colégio Aurora"
          width={90}
          height={90}
        />
        <div className="flex flex-col items-end">
          <span className="font-title font-extrabold uppercase leading-[0.95] text-right text-3xl bg-gradient-to-r from-[#3FAEBC] to-[#0164A4] bg-clip-text text-transparent">
            Matrículas<br />Abertas
          </span>
          <Badge variant="outline" className="mt-1.5">
            Do G2 ao 9° ano
          </Badge>
        </div>
      </div>

      {/* Mobile card */}
      <div className="md:hidden px-5 pb-8">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#0B3B66] via-[#0164A4] to-[#3FAEBC]">

          <div className="relative z-10 px-6 pt-10 pb-6 text-left">
            <h1 className="font-title font-bold leading-[1.3] text-white text-[1.6rem]">
              Excelência acadêmica. Ensino bilíngue. Valores cristãos.
            </h1>
            <p className="text-white/70 text-left text-base font-light leading-snug mb-6 mt-2">
              Da Educação Infantil ao Ensino Fundamental II.
            </p>

            <div
              className="flex flex-col items-stretch gap-4 mb-6"
            >
              <CTAButton
                href="https://wa.me/5571981262448?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                target="_blank"
                rel="noopener noreferrer"
                label="Agende uma visita"
                className="w-full [&>div:first-child]:from-[#16A34A] [&>div:first-child]:to-[#4ADE80]"
              />
              <CTAButton
                href="#depoimentos"
                label="Conheça nossa proposta pedagógica"
                variant="secondary"
                className="w-full"
              />
            </div>

            <div>
              <HeroSlideshow className="rounded-[1.75rem] h-[300px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop content */}
      <div className="hidden md:flex flex-1 flex-col container mx-auto px-8 lg:px-16 pb-8">
        <div className="flex items-center justify-between px-6 lg:px-8 pt-8 pb-6">
          <Image
            src="/aurora-logo.png"
            alt="Logo Colégio Aurora"
            width={100}
            height={100}
          />
          <div className="flex flex-col items-end">
            <span className="font-title font-extrabold uppercase leading-[0.95] text-right text-3xl lg:text-4xl bg-gradient-to-r from-[#3FAEBC] to-[#0164A4] bg-clip-text text-transparent">
              Matrículas<br />Abertas
            </span>
            <Badge variant="outline" className="mt-1.5">
              Do G2 ao 9° ano
            </Badge>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 items-center gap-10 lg:gap-14 rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#0B3B66] via-[#0164A4] to-[#3FAEBC] px-10 py-10 lg:px-14 lg:py-12 text-left">
          <div>
            <h1 className="font-title font-bold leading-[1.04] text-white mb-3 text-[2.5rem] lg:text-[3.25rem] max-w-xl">
              Excelência acadêmica. Ensino bilíngue. Valores cristãos.
            </h1>
            <p className="text-white/70 text-left text-xl font-light leading-snug max-w-lg mb-8">
              Da Educação Infantil ao Ensino Fundamental II.
            </p>
            <div className="flex flex-wrap items-start gap-4 mb-10">
              <CTAButton
                href="https://wa.me/5571981262448?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                target="_blank"
                rel="noopener noreferrer"
                label="Agende uma visita"
                className="[&>div:first-child]:from-[#16A34A] [&>div:first-child]:to-[#4ADE80]"
              />
              <CTAButton
                href="#depoimentos"
                label="Conheça nossa proposta pedagógica"
                variant="secondary"
              />
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-white/10 p-2 h-[min(58vh,520px)] min-h-[360px]">
            <HeroSlideshow className="rounded-[1.25rem] h-full" />
          </div>
        </div>
      </div>

    </section>
  );
}
