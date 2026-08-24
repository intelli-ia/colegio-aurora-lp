"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-16 md:py-36 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-1 lg:self-stretch lg:flex lg:flex-col"
          >
            <div className="relative aspect-[4/5] lg:aspect-auto lg:flex-1 w-full max-w-sm mx-auto lg:max-w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/ekcnk kec-mkencke.webp"
                alt="Educadora do Colégio Aurora"
                fill
                className="object-cover object-center"
              />

            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 order-2 lg:order-2"
          >
            <div>
              <h2 className="font-title text-3xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight">
                Professores preparados para{" "}
                <span className="bg-gradient-to-r from-[#3FAEBC] to-[#0164A4] bg-clip-text text-transparent">
                  muito mais do que ensinar.
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-[#4B4B4B] text-base md:text-[17px] leading-relaxed">
              <p>
                Nosso corpo docente é formado por educadores com{" "}
                <strong className="text-[#1C1C1C]">formação acadêmica sólida e especializações comprovadas</strong>{" "}
                em suas áreas de atuação. Cada professor é selecionado não apenas pela competência técnica, mas pelo compromisso com a missão do Colégio Aurora: formar pessoas, não apenas alunos.
              </p>
              <p>
                Além da competência pedagógica, nossos educadores compartilham os{" "}
                <strong className="text-[#1C1C1C]">valores cristãos</strong>{" "}
                que fundamentam o Aurora: respeito, dedicação, afeto e exemplo. Porque ensinar bem começa por ser uma boa pessoa.
              </p>
            </div>

            <CTAButton href="https://wa.me/5571997110421?text=Oi%2C%20vim%20do%20site%20e%20gostaria%20de%20conhecer%20o%20Aurora" target="_blank" rel="noopener noreferrer" label="Conheça nossa equipe" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
