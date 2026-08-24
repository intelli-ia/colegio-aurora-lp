"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

const steps = [
  {
    number: "01",
    title: "Entre em contato\npelo WhatsApp",
    body: "Entre em contato com nossa equipe e tire todas as dúvidas sobre o Colégio Aurora. Vamos alinhar juntos os detalhes da sua visita antes mesmo de você chegar.",
    image: null,
  },
  {
    number: "02",
    title: "Escolha o melhor\nhorário para você",
    body: "Nós nos adaptamos à sua rotina. Combinamos o dia e o horário que forem mais convenientes para a sua família, porque o seu tempo também importa.",
    image: "/02.png",
  },
  {
    number: "03",
    title: "Visite presencialmente\no Colégio Aurora",
    body: "Participe de nossa visita guiada conduzida diretamente pela equipe de coordenação. Conheça os espaços, as metodologias e tudo que torna o Colégio Aurora único.",
    image: "/03.png",
  },
  {
    number: "04",
    title: "Experimente o que o seu\nfilho vai viver aqui",
    body: "Mais do que ver as instalações, você vai sentir na prática o ambiente, nosso compromisso com a educação do seu filho e as vivências que formam o dia a dia dos nossos alunos.",
    image: "/04.png",
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const isLeft = index % 2 === 0;

  const content = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-md ${isLeft ? "text-right pr-4 md:pr-8" : "text-left pl-4 md:pl-8"}`}
    >
      <span className="font-title font-bold text-white/35 text-[48px] md:text-[80px] leading-none select-none">
        {step.number}
      </span>
      <h3 className="font-title font-bold text-white text-[22px] md:text-[30px] lg:text-[36px] leading-snug mb-4 whitespace-pre-line">
        {step.title}
      </h3>
      <p className="text-white text-[14px] md:text-[17px] leading-relaxed">
        {step.body}
      </p>
    </motion.div>
  );

  const image = (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden ${isLeft ? "pl-2 md:pl-4" : "pr-2 md:pr-4"}`}
    >
      {step.image ? (
        <div className="relative w-full h-full">
          <Image src={step.image} alt={step.title} fill className="object-cover rounded-2xl" />
        </div>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-20 h-20 md:w-28 md:h-28 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      )}
    </motion.div>
  );

  const dot = (
    <div className="flex justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="relative z-10 mt-4 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#FABD22] border-[3px] border-white/20 shadow-[0_0_12px_rgba(250,189,34,0.4)]"
      />
    </div>
  );

  return (
    <div className="relative grid grid-cols-[1fr_40px_1fr] md:grid-cols-[1fr_64px_1fr] items-center">
      {/* Col 1 */}
      <div className="flex justify-end">
        {isLeft ? content : image}
      </div>

      {/* Col 2 — dot */}
      {dot}

      {/* Col 3 */}
      <div className="flex justify-start">
        {isLeft ? image : content}
      </div>
    </div>
  );
}

/* Mobile step card — all on the right side of the line */
function MobileStepCard({
  step,
}: {
  step: (typeof steps)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <div className="relative grid grid-cols-[32px_1fr] items-start">
      {/* Dot */}
      <div className="flex justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="relative z-10 mt-4 w-3.5 h-3.5 rounded-full bg-[#FABD22] border-[2.5px] border-white/20 shadow-[0_0_10px_rgba(250,189,34,0.4)]"
        />
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pl-4"
      >
        <span className="font-title font-bold text-white/35 text-[40px] leading-none select-none">
          {step.number}
        </span>
        <h3 className="font-title font-bold text-white text-[22px] leading-snug mb-3 whitespace-pre-line">
          {step.title}
        </h3>
        {step.image ? (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-3">
            <Image src={step.image} alt={step.title} fill className="object-cover" />
          </div>
        ) : (
          <div className="w-full aspect-video bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl mb-3 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-16 h-16 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
        )}
        <p className="text-white text-[14px] leading-relaxed">
          {step.body}
        </p>
      </motion.div>
    </div>
  );
}

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const mobileTimelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const { scrollYProgress: mobileScrollYProgress } = useScroll({
    target: mobileTimelineRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const mobileLineHeight = useTransform(mobileScrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="processo" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#F56800] to-[#FABD22]">

      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Veja como é simples conhecer
            <br />
            o Colégio Aurora:
          </h2>
        </motion.div>

        {/* Desktop stepper — alternating sides */}
        <div ref={timelineRef} className="relative hidden md:block max-w-7xl mx-auto">
          {/* Background line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/10" />
          {/* Animated progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#3FAEBC] to-[#0164A4] origin-top"
          />

          <div className="flex flex-col gap-20 lg:gap-28">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Mobile stepper — single column */}
        <div ref={mobileTimelineRef} className="relative md:hidden max-w-lg mx-auto">
          {/* Background line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-white/10" />
          {/* Animated progress line */}
          <motion.div
            style={{ height: mobileLineHeight }}
            className="absolute left-[15px] top-0 w-[2px] bg-gradient-to-b from-[#3FAEBC] to-[#0164A4] origin-top"
          />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <MobileStepCard key={step.number} step={step} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-16 md:mt-24"
        >
          <CTAButton href="https://wa.me/5571997110421?text=Oi%2C%20vim%20do%20site%20e%20gostaria%20de%20conhecer%20o%20Aurora" target="_blank" rel="noopener noreferrer" label="Agendar minha visita" />
        </motion.div>
      </div>
    </section>
  );
}
