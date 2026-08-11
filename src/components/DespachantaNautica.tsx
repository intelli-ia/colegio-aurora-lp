"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

export default function DespachantaNautica() {
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
              Somos{" "}
              <span className="text-[#00B8D9]">Despachantes Náuticos</span>
              {" "}credenciados
              <br />
              da Marinha.
            </h2>
            {/* Mobile-only image */}
            <div className="relative w-full h-[220px] rounded-2xl overflow-hidden md:hidden">
              <Image
                src="/seadoo_DPv2BqzDpaY_0.jpg"
                alt="Jet Salvador despachante náutica credenciada pela Marinha do Brasil"
                fill
                quality={90}
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <p className="text-white/55 text-[15px] leading-relaxed">
              Cuidamos de toda a documentação da sua embarcação: registro,
              habilitação, transferência e renovações, com agilidade, segurança e respaldo oficial para você navegar sem preocupações.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {[
                "Inscrição para exames (Arrais e Mestre)",
                "Transferência de propriedade de embarcação",
                "Renovação da Carteira de Habilitação (CHA)",
                "Inscrição inicial de embarcação nova",
                "Renovação do TIE/TIEM",
                "Segunda via de documentos",
                "Alteração de dados cadastrais",
                "Licença de Estação de Navio (Anatel)",
                "Agendamento de vistorias da Marinha",
                "Seguro Obrigatório (DPEM)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 bg-white/5 border border-white/[0.08] rounded-xl px-3 py-2.5">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00B8D9]/15 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#00B8D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/70 text-[13px] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/40 text-[13px]">Entre outros serviços...</p>
            <div className="pt-2">
              <CTAButton
                href="https://wa.me/557199891008?text=Vim%20do%20site%20e%20gostaria%20de%20entender%20mais"
                target="_blank"
                rel="noopener noreferrer"
                label="Falar com um despachante"
              />
            </div>
          </div>

          {/* Right: image */}
          <div className="relative hidden md:block md:w-1/2 md:min-h-0">
            <div className="absolute inset-4 md:inset-x-5 md:top-14 md:bottom-14 rounded-2xl overflow-hidden">
              <Image
                src="/seadoo_DPv2BqzDpaY_0.jpg"
                alt="Jet Salvador despachante náutica credenciada pela Marinha do Brasil"
                fill
                quality={90}
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
