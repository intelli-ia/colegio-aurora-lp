"use client";

import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { Badge } from "@/components/ui/badge";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#07152c] md:min-h-screen"
    >
      <div className="absolute inset-0 z-0">
        <HeroSlideshow className="h-full w-full" />
      </div>

      {/* Gradient overlay keeps the copy readable over every slide. */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/35 via-black/10 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[72%] bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

      <header className="relative z-10 flex w-full items-center justify-between px-6 pt-8 pb-6 md:px-12 md:pt-10 lg:px-16">
        <Image
          src="/aurora-logo.png"
          alt="Logo Colégio Aurora"
          width={150}
          height={150}
          className="h-[76px] w-[76px] object-contain md:h-[140px] md:w-[140px]"
          priority
        />
        <div className="flex flex-col items-end">
          <span className="text-right font-title text-3xl font-extrabold uppercase leading-[0.95] text-white md:text-4xl">
            Matrículas<br />Abertas
          </span>
          <Badge variant="outline" className="mt-1.5 border-white/50 bg-black/20 text-white">
            Do G2 ao 9° ano
          </Badge>
        </div>
      </header>

      <div className="relative z-[3] mt-auto w-full px-6 pb-12 pt-24 md:px-12 md:pb-8 lg:px-16">
        <div className="max-w-3xl text-left">
          <h1 className="mb-3 max-w-2xl font-title text-[1.75rem] font-bold leading-[1.1] text-white md:text-[2.5rem] lg:text-[3rem]">
            Ensino bilíngue.<br />
            Valores cristãos.<br />
            Excelência acadêmica.
          </h1>
          <p className="mb-6 max-w-xl text-sm font-light leading-snug text-white/85 md:mb-8 md:text-xl">
            Da Educação Infantil ao Ensino Fundamental II.
          </p>
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-start">
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
              className="border-white/70 bg-black/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
