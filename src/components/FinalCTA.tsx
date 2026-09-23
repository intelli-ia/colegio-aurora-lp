"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";

export function FinalCTASection() {
  return (
    <section id="final-cta" className="relative z-10 w-full bg-gray-50 overflow-hidden md:min-h-[860px]">

      {/* Mobile: flow layout — image then text */}
      <div className="md:hidden flex flex-col items-center pt-10 pb-12 px-6 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image src="/ctas/f4100ae9-4157-40f4-ad8f-c4f1c5336792.jpeg" alt="" fill className="object-cover" />
        </motion.div>
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-title text-3xl font-bold leading-tight mb-6 bg-gradient-to-r from-[#3FAEBC] to-[#0164A4] bg-clip-text text-transparent"
          >
            A decisão de hoje vai moldar quem o seu filho será amanhã.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <CTAButton href="https://wa.me/5571981262448?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer" label="Agende uma visita" />
          </motion.div>
        </div>
      </div>

      {/* Desktop: 3 cards */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center gap-5 px-6">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex-1 max-w-[320px] h-[560px] rounded-3xl overflow-hidden shadow-2xl -rotate-3"
        >
          <Image src="/ctas/80bd77db-3c77-4865-8827-2d8bbb8116f1.jpeg" alt="" fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative flex-1 max-w-[360px] h-[640px] rounded-3xl overflow-hidden shadow-2xl z-10"
        >
          <Image src="/ctas/2236656f-c922-4b31-b881-c044aff4e4c7.jpeg" alt="" fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex-1 max-w-[320px] h-[560px] rounded-3xl overflow-hidden shadow-2xl rotate-3"
        >
          <Image src="/ctas/f4100ae9-4157-40f4-ad8f-c4f1c5336792.jpeg" alt="" fill className="object-cover" />
        </motion.div>

      </div>

      {/* Desktop overlay — bottom left radial */}
      <div className="hidden md:block absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 85% 90% at 0% 100%, rgba(249,250,251,1) 0%, rgba(249,250,251,0.85) 50%, transparent 78%)" }} />

      {/* Desktop text — bottom left */}
      <div className="hidden md:block absolute inset-x-0 bottom-0 px-16 pb-20">
        <div className="max-w-md">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-title text-3xl lg:text-[2.6rem] font-bold leading-tight mb-8 bg-gradient-to-r from-[#3FAEBC] to-[#0164A4] bg-clip-text text-transparent"
          >
            A decisão de hoje vai moldar quem o seu filho será amanhã.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <CTAButton href="https://wa.me/5571981262448?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer" label="Agende uma visita" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
