"use client";

import { motion } from "framer-motion";

export default function LocalizacaoSection() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-title text-3xl md:text-5xl font-bold text-[#1C1C1C] leading-tight mb-4">
            Venha nos{" "}
            <span className="bg-gradient-to-r from-[#3FAEBC] to-[#0164A4] bg-clip-text text-transparent">
              conhecer pessoalmente.
            </span>
          </h2>
          <p className="text-[#4B4B4B] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Atendemos famílias de diversas localidades, como Lauro, Salvador, Abrantes, Camaçari, Jauá e demais localidades.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm w-full aspect-[4/3] md:aspect-[16/7]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20335.443378797907!2d-38.337861457343706!3d-12.888436620524779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161774f09a8167%3A0x558190cd0a7bf76c!2sCol%C3%A9gio%20Aurora%20Do%20Saber!5e0!3m2!1spt-BR!2sbr!4v1786499882826!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </motion.div>

        {/* Endereço */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-[#4B4B4B] text-sm md:text-base mt-5"
        >
          R. dos Prazeres, 363 — Recreio Ipitanga, Lauro de Freitas — BA, 42700-290
        </motion.p>

      </div>
    </section>
  );
}
