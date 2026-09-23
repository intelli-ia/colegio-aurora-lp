"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

export default function DesireSection() {
  return (
    <section className="relative w-full bg-[#1C1C1C] overflow-hidden flex flex-col md:flex-row md:items-stretch md:min-h-[90vh]">

      {/* Vídeo — topo no mobile (quadrado), coluna esquerda no desktop */}
      <div className="w-full aspect-square md:aspect-auto md:w-[38%] md:flex-shrink-0 relative">
        <video
          src="/d6e38ac5-cb53-457d-83a0-8d89b6f6cb29.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Conteúdo — abaixo no mobile, coluna direita no desktop */}
      <div className="flex-1 flex items-center py-12 md:py-0">
        <div className="w-full px-6 md:pl-24 md:pr-16 max-w-2xl">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-title text-3xl md:text-5xl font-bold text-white leading-tight mb-5 md:mb-6"
          >
            Não ensinamos apenas conteúdo, formamos o caráter dos nossos alunos.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-8 md:mb-10"
          >
            O caráter se constrói na música, na arte, na oração e no contato com os outros. A vivência da fé e o exemplo dos santos inspiram nossas crianças a crescer com virtude e propósito, enquanto os espaços verdes e a convivência diária com os colegas ensinam partilha, respeito e amizade. Tudo com a mesma atenção que dedicamos ao conteúdo pedagógico.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <CTAButton href="https://wa.me/5571981262448?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer" label="Conheça o Aurora" />
          </motion.div>

        </div>
      </div>

    </section>
  );
}
