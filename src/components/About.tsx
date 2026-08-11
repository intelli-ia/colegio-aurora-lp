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
                src="/barretao-profile.jpg"
                alt="Barretão, fundador da Jet Salvador"
                fill
                className="object-cover object-center"
              />

              {/* Marquee glassmorphism */}
              <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 bg-white/10 backdrop-blur-md border-t border-white/20">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 18, ease: "linear", repeat: Infinity }}
                  className="flex whitespace-nowrap w-max"
                >
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="mx-8 font-title font-bold text-white text-4xl md:text-5xl tracking-[0.2em] uppercase">
                      BARRETÃO
                    </span>
                  ))}
                </motion.div>
              </div>
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
                Aprenda com{" "}
                <span className="bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] bg-clip-text text-transparent">
                  Barretão!
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-[#4B4B4B] text-base md:text-[17px] leading-relaxed">
              <p>
                Sob a liderança do nosso fundador,{" "}
                <strong className="text-[#1C1C1C]">Barretão</strong>, construímos um histórico inquestionável de eficiência na Baía de Todos os Santos com mais de 15 anos de atuação focados em elevar o padrão de segurança e profissionalismo no mercado náutico baiano.
              </p>
              <p>
                O rigor do nosso trabalho rendeu ao fundador o prestigiado título de{" "}
                <strong className="text-[#1C1C1C]">"Amigo da Marinha"</strong>, honraria oficial concedida pela Capitania dos Portos da Bahia. O maior atestado de credibilidade que um profissional do setor pode conquistar.
              </p>
              <p>
                Já ultrapassamos{" "}
                <strong className="text-[#1C1C1C]">500 alunos formados</strong>, mantendo uma taxa de{" "}
                <strong className="text-[#1C1C1C]">95% de aprovação</strong> nos exames oficiais.
              </p>
            </div>

            <CTAButton
              href="https://wa.me/557199891008?text=Vim%20do%20site%20e%20gostaria%20de%20entender%20mais"
              target="_blank"
              rel="noopener noreferrer"
              label="Começar com a Jet Salvador"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
