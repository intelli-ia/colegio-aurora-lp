"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

const etapas = [
  {
    tag: "Educação Infantil",
    subtag: "Grupo 2 ao Grupo 5",
    descricao:
      "Desenvolvimento integral da criança, com ênfase na linguagem via Método Fônico (consciência fonológica, associação som-letra, base para alfabetização). Trabalho contínuo de coordenação motora, autonomia e socialização.",
  },
  {
    tag: "Ensino Fundamental I e II",
    subtag: "1º ao 9º ano",
    descricao:
      "Formação acadêmica aprofundada via leitura de textos clássicos (compreensão leitora, vocabulário, pensamento crítico). Matemática pelo Método Singapura (raciocínio lógico, compreensão de conceitos, resolução de problemas).",
  },
  {
    tag: "Educação Bilíngue",
    subtag: "",
    descricao:
      "O Colégio Aurora oferece ensino bilíngue com aulas de inglês diariamente, da Educação Infantil ao Ensino Fundamental. Exposição contínua ao idioma favorece fluência progressiva, repertório cultural e comunicação.",
  },
];

export default function PorQueAurora() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1C] leading-tight mb-4">
            Por que escolher o
            <span className="text-[#3FAEBC]"> Aurora?</span>
          </h2>
          <p className="text-[#4B4B4B] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Porque conosco as etapas de ensino são totalmente personalizadas para o momento adequado dos nossos alunos:
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-5 max-w-4xl mx-auto">
          {etapas.map((item, i) => (
            <motion.div
              key={item.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-[#1C1C1C]/8 bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 hover:border-[#3FAEBC]/40 transition-colors duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-title font-bold text-[#1C1C1C] text-xl md:text-2xl">
                  {item.tag}
                </span>
                {item.subtag && (
                  <span className="text-[#3FAEBC] text-sm font-medium bg-[#3FAEBC]/10 px-3 py-1 rounded-full">
                    {item.subtag}
                  </span>
                )}
              </div>
              <p className="text-[#4B4B4B] text-base md:text-lg leading-relaxed">
                {item.descricao}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-14 md:mt-20"
        >
          <CTAButton href="#contato" label="Agende uma visita" />
        </motion.div>
      </div>
    </section>
  );
}
