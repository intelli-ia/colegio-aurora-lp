"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-[100vh] md:min-h-[118vh] flex items-start md:items-center rounded-b-[4rem] md:rounded-b-[5.5rem] overflow-hidden z-10">

      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/hero.webp"
          alt="Moto aquática na Baía de Todos os Santos"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "80% 65%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 md:from-black/60 md:via-black/40 md:to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20 md:from-black/80 md:via-black/20 md:to-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-16 pt-20 pb-16 md:-mt-20 md:pt-0 md:pb-20 md:pl-24 lg:pl-32">
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">

          {/* Logo + nome */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-start gap-3 mb-5 md:mb-8"
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
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-title font-bold leading-[1.22] md:leading-[1.04] text-white mb-3 md:mb-7 text-[1.85rem] md:text-[2.5rem] lg:text-[3.25rem] md:max-w-xl lg:max-w-2xl"
          >
            Educação que forma a inteligência, o caráter e o coração.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="text-white/65 text-base md:text-xl font-light leading-relaxed max-w-2xl md:max-w-lg mb-5 md:mb-10"
          >
            No Colégio Aurora, unimos excelência acadêmica, ensino bilíngue e valores cristãos para acompanhar cada aluno em sua formação integral, desde a Educação Infantil até os anos finais do ensino fundamental.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center md:items-start gap-5 mb-5 md:mb-12"
          >
            <CTAButton
              href="#contato"
              label="Agende uma visita"
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
            className="flex items-center justify-center md:justify-start gap-0 divide-x divide-white/15"
          >
            {[
              { num: 500, prefix: "+", suffix: "", label: "alunos formados" },
              { num: 95, prefix: "", suffix: "%", label: "taxa de aprovação" },
              { num: 15, prefix: "", suffix: "+", label: "anos de experiência" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col px-3 md:px-5 first:pl-0">
                <AnimatedNumber
                  value={stat.num}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="font-title text-white font-bold text-lg md:text-lg leading-none"
                />
                <span className="text-white/40 text-xs md:text-xs mt-1 whitespace-nowrap">
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
