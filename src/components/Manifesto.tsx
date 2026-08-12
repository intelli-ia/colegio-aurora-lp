"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

export default function ManifestoSection() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-[#0E1C26] overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#3FAEBC]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16 relative z-10">

        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-left md:text-center mb-12"
        >
          <span className="text-[#3FAEBC]/60 font-medium text-sm uppercase tracking-widest mb-8 block">
            Nossa missão
          </span>

          <p className="font-title text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-snug mb-8">
            O Colégio Aurora é uma instituição de ensino comprometida com a formação integral do aluno, atendendo da Educação Infantil ao Ensino Fundamental.
          </p>

          <p className="text-white text-base md:text-lg font-light leading-relaxed">
            Oferecemos um ambiente seguro, acolhedor e acadêmico de excelência, em parceria constante com as famílias, respeitando o ritmo de cada criança e cultivando virtudes, disciplina e amor pelo conhecimento.
          </p>
        </motion.div>

        {/* Stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-14"
        >
          {[
            { value: "1.000", suffix: "+", unit: "", label: "famílias parceiras do Aurora", desc: "Incentivando a fé unida à educação." },
            { value: "2.000", suffix: "", unit: "m²", label: "de espaço para o desenvolvimento", desc: "Em contato com a natureza, nossas crianças aprendem melhor a se relacionarem com o mundo à sua volta!" },
            { value: "20", suffix: "+", unit: "", label: "profissionais diretamente envolvidos na educação de nossas crianças", desc: "Educadores que transmitem virtudes junto ao conteúdo." },
            { value: "05", suffix: "+", unit: "", label: "anos de história", desc: "Formando gerações com base em fé, excelência e amor pelo conhecimento." },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8 text-center md:text-left"
            >
              <div className="font-title font-bold text-white text-4xl md:text-5xl leading-none mb-2">
                {stat.value}
                <span className="text-[#3FAEBC]">{stat.suffix}</span>
                {stat.unit && <span className="text-[#3FAEBC] text-2xl ml-1">{stat.unit}</span>}
              </div>
              <p className="text-white font-semibold text-base mb-3">{stat.label}</p>
              <p className="text-white text-base leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton href="#contato" label="Fale conosco" />
        </div>

      </div>

    </section>
  );
}
