"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";

const modalidades = [
  {
    tag: "JetSki",
    title: "Motonauta",
    description:
      "Habilitação para conduzir motos aquáticas. Ideal para quem quer liberdade e adrenalina nas águas de Salvador.",
    price: "R$ 599",
    image: "/jet.png",
    imageAlt: "JetSki nas águas de Salvador",
    imagePosition: "object-[center_90%]",
    imageScale: "scale-130",
    highlight: false,
    duration: "4h",
  },
  {
    tag: "Lancha",
    title: "Arrais",
    description:
      "Habilitação para conduzir lanchas de até 8 metros. Perfeita para passeios e navegação com conforto e segurança.",
    price: "R$ 599",
    image: "/lancha.png",
    imageAlt: "Lancha navegando na Baía de Todos os Santos",
    imagePosition: "object-[center_70%]",
    highlight: false,
    duration: "4h",
  },
  {
    tag: "Ambos",
    title: "Habilitação Completa",
    description:
      "Combine JetSki e Lancha em uma única formação. A escolha de quem quer aproveitar o melhor do mundo náutico.",
    price: "R$ 1.099",
    image: "/jetski_lancha.png",
    imagePosition: "object-[center_65%]",
    imageScale: "scale-130",
    imageAlt: "JetSki e Lancha em Salvador",
    highlight: true,
    duration: "6h",
  },
];

export default function ModalidadesSection() {
  return (
    <section id="modalidades" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-block text-white/50 font-semibold text-sm uppercase tracking-widest mb-3">
            Modalidades
          </span>
          <h2 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Escolha a habilitação ideal{" "}
            <br className="hidden md:block" />
            para você
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {modalidades.map((item, i) => (
            <motion.div
              key={item.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className={`relative flex flex-col rounded-[2rem] overflow-hidden border ${item.highlight
                ? "border-[#00B8D9]/40 bg-gradient-to-b from-[#0d1f24] to-[#0a0a0a] shadow-[0_0_48px_rgba(0,184,217,0.12)]"
                : "border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]"
                }`}
            >
              {/* Popular badge */}
              {item.highlight && (
                <div className="absolute top-5 right-5 z-10">
                  <span className="bg-[#00B8D9] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Mais popular
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="px-4 pt-4">
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className={`object-cover ${item.imageScale ?? ""} ${item.imagePosition}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              {/* Top: tag + title */}
              <div className="px-7 pt-4 pb-4">
                <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">
                  {item.tag}
                </span>
                <h3 className="font-title font-bold text-white text-2xl md:text-[1.6rem] mt-1">
                  {item.title}
                </h3>
              </div>

              {/* Description + price + CTA */}
              <div className="flex flex-col flex-1 px-7 pt-5 pb-7 gap-5">
                <div className="flex-1 flex flex-col gap-3">
                  <p className="text-white/55 text-[14px] md:text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="flex flex-col gap-2 mt-1">
                    {[
                      `${item.duration} de aulas práticas e teóricas incluídas`,
                      "Apostilas e simulados para se preparar",
                      "Certificado de conclusão emitido",
                      "Suporte e acompanhamento pós-curso",
                      "Membro VIP da Jet Salvador",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-white text-[13px] md:text-[14px]">
                        <Check className="w-3.5 h-3.5 text-[#00B8D9] mt-0.5 shrink-0" />
                        <span className="font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-white/40 text-xs uppercase tracking-widest">
                    Por apenas
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <p className="font-title font-bold text-white text-[2rem] md:text-[2.25rem] leading-none">
                      {item.price}
                    </p>
                    <span className="text-white/35 text-[11px] leading-tight">+ R$60 de laudo</span>
                  </div>
                </div>

                <CTAButton
                  href="https://wa.me/557199891008?text=Vim%20do%20site%20e%20gostaria%20de%20entender%20mais"
                  target="_blank"
                  rel="noopener noreferrer"
                  label="Quero me inscrever"
                  size="sm"
                  className="w-full justify-center mt-2"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
