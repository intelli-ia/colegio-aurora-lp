"use client";

import { motion } from "motion/react";
import { CTAButton } from "@/components/ui/CTAButton";

export function FinalCTASection() {
  return (
    <section className="relative w-full bg-[#0E1C26] py-24 md:py-36 overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#3FAEBC]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-16">
        <div className="max-w-2xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-title text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
              A decisão de hoje vai moldar quem o seu filho será amanhã.
            </h2>
            <p className="text-white text-lg font-light leading-relaxed">
              No Colégio Aurora, cada criança é acolhida, respeitada e desafiada a crescer — com excelência acadêmica, fé e valores que duram para a vida toda.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <CTAButton href="#contato" label="Agende uma visita" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm flex items-center justify-center gap-2"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Nossa equipe está pronta para te receber
          </motion.p>

        </div>
      </div>
    </section>
  );
}
