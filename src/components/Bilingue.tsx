"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

export default function Bilingue() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="bg-[#0a0a0a] rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch w-full mx-auto"
        >
          {/* Left: text */}
          <div className="flex flex-col justify-center gap-5 p-10 md:p-14 md:w-1/2">
            <h2 className="font-title text-3xl md:text-4xl font-bold text-white leading-tight">
              Do Infantil ao Fundamental,{" "}
              <span className="text-[#3FAEBC]">sempre em dois idiomas.</span>
            </h2>
            {/* Mobile-only image */}
            <div className="flex items-center justify-center w-full h-[220px] rounded-2xl overflow-hidden md:hidden bg-white/5 border border-white/10">
              <span className="text-[120px] leading-none select-none">🇺🇸</span>
            </div>
            <p className="text-white text-[17px] leading-relaxed">
              No Colégio Aurora, o inglês não é uma disciplina isolada. É parte do dia a dia do aluno. Com aulas diárias desde a Educação Infantil, nossa abordagem bilíngue garante exposição contínua ao idioma, favorecendo fluência natural, repertório cultural amplo e segurança para se comunicar no mundo.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {[
                "Aulas de inglês todos os dias",
                "Professores especializados em ensino bilíngue",
                "Imersão progressiva desde o Grupo 2",
                "Material didático bilíngue",
                "Desenvolvimento de fluência oral e escrita",
                "Confiança para se expressar em outro idioma",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 bg-white/5 border border-white/[0.08] rounded-xl px-3 py-2.5">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3FAEBC]/15 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#3FAEBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/70 text-[13px] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <CTAButton href="#contato" label="Agende uma visita" />
            </div>
          </div>

          {/* Right: flag */}
          <div className="relative hidden md:flex md:w-1/2 items-center justify-center">
            <div className="absolute inset-4 md:left-5 md:right-14 md:top-14 md:bottom-14 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="text-[160px] leading-none select-none">🇺🇸</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
