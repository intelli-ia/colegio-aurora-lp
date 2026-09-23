"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";

const faqs = [
  {
    q: "A partir de qual idade meu filho pode ingressar no Colégio Aurora?",
    a: "O Colégio Aurora atende a partir do Grupo 2 da Educação Infantil, o que corresponde a crianças com 2 anos completos até 31 de março do ano letivo. Acreditamos que quanto antes a criança inicia sua jornada conosco, mais sólida é a base que construímos juntos.",
  },
  {
    q: "O ensino bilíngue é obrigatório ou opcional?",
    a: "O ensino bilíngue faz parte da proposta pedagógica do Aurora para todos os alunos, da Educação Infantil ao Ensino Fundamental. As aulas de inglês acontecem diariamente, integradas à rotina escolar, e não como uma disciplina isolada — o que garante uma exposição contínua e natural ao idioma.",
  },
  {
    q: "Como funciona a parceria entre o colégio e as famílias?",
    a: "Para nós, a família é o primeiro ambiente de formação da criança. Por isso, buscamos uma parceria ativa com os pais: comunicação frequente, reuniões pedagógicas e um ambiente aberto ao diálogo. Acreditamos que escola e família precisam caminhar juntas para que a formação integral do aluno aconteça de verdade.",
  },
  {
    q: "O Colégio Aurora tem base católica. Isso influencia o currículo?",
    a: "Sim, e de forma muito positiva. Os valores cristãos permeiam toda a proposta pedagógica: no cuidado com o próximo, na disciplina, no respeito e na formação do caráter. A vivência da fé acontece de forma natural no dia a dia escolar, sem prejuízo do rigor acadêmico — pelo contrário, ela o complementa.",
  },
  {
    q: "Como posso agendar uma visita ao colégio?",
    a: "É simples! Entre em contato com nossa equipe pelo WhatsApp, e vamos combinar o melhor dia e horário para você conhecer pessoalmente o Colégio Aurora. A visita é guiada pela equipe de coordenação, para que você possa tirar todas as suas dúvidas e conhecer os espaços e a rotina dos nossos alunos.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative w-full py-16 md:py-36 bg-gray-50">
      <div className="container mx-auto px-6 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="font-title text-3xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-[#3FAEBC] to-[#0164A4] bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3 mb-10 md:mb-16">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 px-5 md:px-7 py-5 md:py-6 text-left group hover:bg-gray-50/70 transition-colors duration-200"
              >
                <span className="font-title font-semibold text-[15px] md:text-[17px] text-[#1C1C1C] group-hover:text-[#3FAEBC] transition-colors duration-200 leading-snug">
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open === i ? "bg-gradient-to-br from-[#16A34A] to-[#4ADE80] rotate-45" : "bg-gray-100 group-hover:bg-[#16A34A]/10"
                  }`}>
                  <svg className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-colors duration-300 ${open === i ? "text-white" : "text-[#4B4B4B]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-7 pb-5 md:pb-7">
                      <div className="w-full h-px bg-gray-100 mb-4 md:mb-5" />
                      <p className="text-[#4B4B4B] leading-relaxed text-[14px] md:text-[16px]">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#4B4B4B] text-base md:text-lg mb-5 md:mb-6">
            Ainda tem dúvidas? Nossa equipe está pronta para te atender.
          </p>
          <CTAButton href="https://wa.me/5571981262448?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer" label="Fale conosco" />
        </motion.div>

      </div>
    </section>
  );
}
