"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";

const faqs = [
  {
    q: "Preciso ter um Jet Ski ou Lancha para tirar a habilitação?",
    a: "De jeito nenhum! A grande maioria dos nossos alunos não possui embarcação própria. Hoje em dia, alugar um Jet ou compartilhar um passeio de lancha com amigos é muito fácil e acessível. A habilitação é apenas o seu passaporte para aproveitar tudo isso. A JetSalvador fornece toda a estrutura e as embarcações para as aulas práticas.",
  },
  {
    q: "Tirar a carteira náutica é muito caro?",
    a: "Pelo contrário! Tirar sua habilitação náutica costuma ter um custo menor do que tirar a CNH de carro. Com validade de 10 anos, na JetSalvador o valor do pacote cobre todo o processo, sem taxas surpresas no meio do caminho.",
  },
  {
    q: "A JetSalvador oferece serviços de despachante náutico?",
    a: "Sim! A JetSalvador oferece o serviço de despachante náutico como uma opção adicional. Nos planos de habilitação, algumas etapas burocráticas junto à Marinha são resolvidas pelo próprio aluno. Mas, se preferir mais comodidade, você pode contratar o serviço de despachante e aí só precisa aparecer na Marinha no dia da prova. Basta perguntar sobre essa opção no momento da matrícula.",
  },
  {
    q: "O que exatamente está incluso no serviço da JetSalvador?",
    a: "Tudo o que você precisa para tirar sua habilitação: material teórico constantemente atualizado, simulados com questões oficiais da Marinha para você treinar de verdade, e aulas práticas com nossos instrutores credenciados. Caso prefira delegar também a parte burocrática junto à Marinha, oferecemos o serviço de despachante náutico como opcional, assim você fica despreocupado do início ao fim.",
  },
  {
    q: "Posso alugar um Jet Ski pela JetSalvador depois de habilitado?",
    a: "Com certeza! A JetSalvador é a sua porta de entrada para o mundo náutico. Ao se tornar aluno, você passa a fazer parte da nossa comunidade náutica de forma vitalícia. Nossa equipe segue disponível para te apoiar e, claro, nossos membros têm condições especiais no aluguel de embarcações. Você tira a habilitação com a gente e já sai navegando com quem te formou.",
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
          <span className="inline-block text-[#00B8D9] font-semibold text-sm uppercase tracking-widest mb-4">
            Dúvidas
          </span>
          <h2 className="font-title text-3xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] bg-clip-text text-transparent">
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
                <span className="font-title font-semibold text-[15px] md:text-[17px] text-[#1C1C1C] group-hover:text-[#00B8D9] transition-colors duration-200 leading-snug">
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open === i ? "bg-gradient-to-br from-[#00B8D9] to-[#00A6BF] rotate-45" : "bg-gray-100 group-hover:bg-[#00B8D9]/10"
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
            Ainda tem dúvidas? Fale com a gente agora pelo WhatsApp.
          </p>
          <CTAButton
            href="https://wa.me/557199891008?text=Vim%20do%20site%20e%20gostaria%20de%20entender%20mais"
            target="_blank"
            rel="noopener noreferrer"
            label="Quero entrar em contato"
          />
        </motion.div>

      </div>
    </section>
  );
}
