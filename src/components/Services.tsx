"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

const steps = [
  {
    number: "01",
    title: "Entre em contato pelo\nnosso WhatsApp",
    body: "Atendemos 24h por dia para te guiar sobre todas as etapas iniciais e darmos entrada na sua habilitação.",
  },
  {
    number: "02",
    title: "Acesse as aulas teóricas\nsem sair de casa",
    body: "Assista às aulas online com conteúdo 100% atualizado, incluindo videoaulas e simulados com questões de provas reais da Marinha do Brasil.",
  },
  {
    number: "03",
    title: "Faça suas aulas\npráticas com Barretão",
    body: "Aprenda a navegar com quem entende e carrega o título de um dos melhores do Brasil.",
  },
  {
    number: "04",
    title: "Chegue na prova\npreparado e confiante",
    body: "Com nosso método de alta aprovação, você faz a sua prova com a tranquilidade que um navegador deve ter.",
  },
  {
    number: "05",
    title: "Receba a sua\nhabilitação náutica!",
    body: "Com sua habilitação em mãos, coloque a sua embarcação na água e desfrute das maravilhas do mundo náutico.",
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
      <span className="font-title font-bold text-white/10 text-[48px] md:text-[80px] leading-none select-none">
        {step.number}
      </span>
      <h3 className="font-title font-bold text-white text-[17px] md:text-[24px] lg:text-[28px] leading-snug mb-2 whitespace-pre-line">
        {step.title}
      </h3>
      <p className="text-white/60 text-[14px] md:text-[17px] leading-relaxed">
        {step.body}
      </p>
    </motion.div>
  );

  const dot = (
    <div className="flex justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="relative z-10 mt-4 w-4 h-4 md:w-5 md:h-5 rounded-full bg-amber-400 border-[3px] border-white/20 shadow-[0_0_12px_rgba(251,191,36,0.4)]"
      />
    </div>
  );

  return (
    <div className="relative grid grid-cols-[1fr_40px_1fr] md:grid-cols-[1fr_64px_1fr] items-start">
      {/* Col 1 */}
      <div className="flex justify-end">
        {isLeft && content}
      </div>

      {/* Col 2 — dot */}
      {dot}

      {/* Col 3 */}
      <div className="flex justify-start">
        {!isLeft && content}
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
          className="relative z-10 mt-4 w-3.5 h-3.5 rounded-full bg-amber-400 border-[2.5px] border-white/20 shadow-[0_0_10px_rgba(251,191,36,0.4)]"
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
        <span className="font-title font-bold text-white/10 text-[40px] leading-none select-none">
          {step.number}
        </span>
        <h3 className="font-title font-bold text-white text-[17px] leading-snug mb-1.5 whitespace-pre-line">
          {step.title}
        </h3>
        <p className="text-white/60 text-[14px] leading-relaxed">
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
    <section ref={sectionRef} id="processo" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/casal-jetski.webp"
            alt="Casal se divertindo no jet ski"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/casal-jetski.webp"
            alt="Casal se divertindo no jet ski"
            fill
            className="object-cover object-[30%_70%]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/55 md:bg-black/50" />
      </div>

      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block text-white/60 font-semibold text-sm uppercase tracking-widest mb-2">
            Passo a passo
          </span>
          <h2 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Veja como é simples conquistar
            <br />
            a sua habilitação náutica:
          </h2>
        </motion.div>

        {/* Desktop stepper — alternating sides */}
        <div ref={timelineRef} className="relative hidden md:block max-w-5xl mx-auto">
          {/* Background line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/10" />
          {/* Animated progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-amber-400 to-amber-500 origin-top"
          />

          <div className="flex flex-col gap-10 lg:gap-14">
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
            className="absolute left-[15px] top-0 w-[2px] bg-gradient-to-b from-amber-400 to-amber-500 origin-top"
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
          <CTAButton
            href="https://wa.me/557199891008?text=Vim%20do%20site%20e%20gostaria%20de%20entender%20mais"
            target="_blank"
            rel="noopener noreferrer"
            label="Quero garantir minha vaga"
          />
        </motion.div>
      </div>
    </section>
  );
}
