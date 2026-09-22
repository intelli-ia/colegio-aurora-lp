"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { Badge } from "@/components/ui/badge";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full md:min-h-[118vh] flex flex-col md:flex-row items-stretch md:items-center rounded-b-[4rem] md:rounded-b-[5.5rem] overflow-hidden z-10 bg-white md:bg-none md:bg-transparent">

      {/* Background (desktop only) */}
      <div className="hidden md:block absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/hero-fachada.png"
          alt="Moto aquática na Baía de Todos os Santos"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "right -10%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 md:from-black/60 md:via-black/40 md:to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20 md:from-black/80 md:via-black/10 md:to-transparent" />
      </div>

      {/* Logo + Matrículas abertas (mobile only, above the card) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
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
      </motion.div>

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

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col items-stretch gap-4 mb-6"
            >
              <CTAButton
                href="https://wa.me/5571997110421?text=Oi%2C%20vim%20do%20site%20e%20gostaria%20de%20conhecer%20o%20Aurora"
                target="_blank"
                rel="noopener noreferrer"
                label="Agende uma visita"
                className="w-full [&>div:first-child]:from-[#16A34A] [&>div:first-child]:to-[#4ADE80]"
              />
              <CTAButton
                href="#proposta"
                label="Conheça nossa proposta pedagógica"
                variant="secondary"
                className="w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <HeroSlideshow className="rounded-[1.75rem] h-[300px]" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop content */}
      <div className="hidden md:block container mx-auto px-16 -mt-20 pb-20 pl-8 lg:pl-12">
        <div className="max-w-3xl text-left">

          {/* Logo + nome */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-start gap-3 mb-8"
          >
            <Image
              src="/aurora-logo.png"
              alt="Logo Colégio Aurora"
              width={130}
              height={130}
              className=""
            />
          </motion.div>

          {/* Headline */}
          <h1 className="font-title font-bold leading-[1.04] text-white mb-3 text-[2.5rem] lg:text-[3.25rem] max-w-xl lg:max-w-2xl">
            Excelência acadêmica. Ensino bilíngue. Valores cristãos.
          </h1>

          {/* Subheadline */}
          <p className="text-white/70 text-left text-xl font-light leading-snug max-w-lg mb-10">
            Da Educação Infantil ao Ensino Fundamental II.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-row items-start gap-5 mb-12"
          >
            <CTAButton
              href="https://wa.me/5571997110421?text=Oi%2C%20vim%20do%20site%20e%20gostaria%20de%20conhecer%20o%20Aurora"
              target="_blank"
              rel="noopener noreferrer"
              label="Agende uma visita"
              className="[&>div:first-child]:from-[#16A34A] [&>div:first-child]:to-[#4ADE80]"
            />
            <CTAButton
              href="#proposta"
              label="Conheça nossa proposta pedagógica"
              variant="secondary"
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-start gap-0 divide-x divide-white/15"
          >
            {[
              { num: 1000, prefix: "", suffix: "+", label: "famílias parceiras" },
              { num: 5, prefix: "0", suffix: "+", label: "anos de história" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col px-5 first:pl-0">
                <AnimatedNumber
                  value={stat.num}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="font-title text-white font-bold text-lg leading-none"
                />
                <span className="text-white/40 text-xs mt-1 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  );
}
