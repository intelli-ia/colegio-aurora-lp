"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

const beneficios = [
  {
    titulo: "Loja Exclusiva para Membros",
    descricao:
      "Ao se formar, você entra para o clube. Acesse nossa loja exclusiva com produtos selecionados para quem vive o mundo náutico: acessórios, equipamentos, facas para churrasco, copos térmicos, sistemas de som e muito mais, tudo com condições especiais para alunos Jet Salvador.",
    image: "/store.png",
    imageAlt: "Loja exclusiva Jet Salvador",
    imagePosition: "origin-[center_80%]",
    imageScale: "scale-[3.2]",
  },
  {
    titulo: "Aluguel com Preço de Membro",
    descricao:
      "Habilitou? Agora navega com desconto. Alunos da Jet Salvador têm acesso a preços especiais no aluguel de jet skis e lanchas, para continuar curtindo o mar sem pesar no bolso, quando e como quiser.",
    image: "/cta/gallery-07.webp",
    imageAlt: "Aluguel de jetski e lancha com desconto",
  },
  {
    titulo: "Roteiros que Só o Barretão Conhece",
    descricao:
      "Embarque em navegações únicas guiadas pelo próprio Barretão: a rota histórica até Cachoeira-BA, passeios pela Baía de Todos os Santos e destinos exclusivos que você não encontra em nenhum tour convencional. Com suporte completo, segurança garantida e ao lado de uma comunidade apaixonada pelo mar.",
    image: "/cta/gallery-04.webp",
    imageAlt: "Navegações exclusivas pela Baía de Todos os Santos",
    imagePosition: "object-[center_63%]",
  },
  {
    titulo: "A Maior Comunidade Náutica da Bahia",
    descricao:
      "Acesse o grupo exclusivo no WhatsApp com mais de 800 membros ativos: empresários, navegadores e entusiastas do mar. Networking de valor, informações privilegiadas sobre navegação, ofertas de equipamentos, compra e venda de embarcações e muito mais.",
    image: "/cta/gallery-09.webp",
    imageAlt: "Comunidade náutica Jet Salvador",
  },
];

export default function PorQueJetSalvador() {
  return (
    <section className="py-20 md:py-32 bg-[#060606]">
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
            Vantagens exclusivas
          </span>
          <h2 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Por que escolher a
            <br className="hidden md:block" />
            <span className="text-[#00B8D9]"> Jet Salvador?</span>
          </h2>
          <p className="mt-4 text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Aqui você não apenas tira a habilitação: você entra para uma comunidade que vive o mar de verdade.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {beneficios.map((item, i) => {
            return (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="flex flex-col rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.05] to-white/[0.02] overflow-hidden hover:border-[#00B8D9]/25 transition-colors duration-300"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    quality={100}
                    className={`object-cover ${"imageScale" in item ? `${item.imageScale} ${item.imagePosition ?? "origin-center"}` : (item.imagePosition ?? "object-[center_50%]")} ${"imageScale" in item ? "[filter:contrast(1.15)_saturate(1.05)]" : ""}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 p-7">
                  <h3 className="font-title font-bold text-white text-[17px] md:text-[19px] leading-snug">
                    {item.titulo}
                  </h3>
                  <p className="text-white/55 text-[14px] md:text-[15px] leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-14 md:mt-20"
        >
          <CTAButton
            href="https://wa.me/557199891008?text=Vim%20do%20site%20e%20gostaria%20de%20entender%20mais"
            target="_blank"
            rel="noopener noreferrer"
            label="Quero fazer parte"
          />
        </motion.div>
      </div>
    </section>
  );
}
