"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const testimonials = [
  {
    quote: "Ambiente acolhedor e gracioso. É revigorante para a alma estar no Colégio Aurora.",
    author: "Hauana Marques",
  },
  {
    quote: "Colégio maravilhoso! Além de lindo e aconchegante, é um lugar onde se preza pelos valores da família e da sociedade, buscando a preservação da inocência das crianças de forma lúdica e interativa. Sem falar no ensino católico, que é diferencial.",
    author: "Silmara Rodrigues",
  },
  {
    quote: "Um colégio fenomenal! Excelente ensino fundamental com base católica que promove um desenvolvimento das capacidades da criança e do jovem, trazendo valores e condições de buscar o conhecimento com alegria e entusiasmo.",
    author: "Carvalho Carvalho",
  },
  {
    quote: "Formação alicerçada em princípios e valores necessários à sociedade! Formação curricular de qualidade!",
    author: "Eduardo Cardoso Garrido",
  },
  {
    quote: "Excelente Colégio. Verdadeiramente católico. Melhor opção para a educação do seu filho.",
    author: "Rosiclayde Maria",
  },
  {
    quote: "Uma excelente escolha para o ensino e preservação da inocência das crianças. Super recomendo!!!",
    author: "Bruno Lima Batista",
  },
  {
    quote: "A melhor escolha da nossa família!",
    author: "Andrea Cordeiro",
  },
  {
    quote: "Minha filha está no Colégio Aurora há dois anos e a evolução dela é nítida. O cuidado dos professores com cada aluno é admirável.",
    author: "Mariana Costa",
  },
  {
    quote: "Escola que realmente forma o caráter. Meu filho cresceu muito como pessoa e como aluno. Recomendo de coração.",
    author: "Felipe Andrade",
  },
  {
    quote: "O ambiente é acolhedor, os professores são dedicados e o ensino bilíngue fez toda a diferença. Escolha certa para a nossa família.",
    author: "Patrícia Souza",
  },
  {
    quote: "Desde que meu filho entrou no Aurora, percebemos uma mudança enorme. Disciplina, respeito e alegria em aprender.",
    author: "Roberto Mendes",
  },
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 11);

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative w-full py-16 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#3FAEBC]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-16 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="font-title text-3xl md:text-5xl font-bold text-[#1C1C1C] leading-tight">
            O que as nossas famílias
            <span className="block mt-2">
              dizem do{" "}
              <span className="bg-gradient-to-r from-[#3FAEBC] to-[#0164A4] bg-clip-text text-transparent">
                Aurora
              </span>
            </span>
          </h2>
        </motion.div>

        {/* Mobile: horizontal looping carousel */}
        <div className="-mx-6 mb-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] md:hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-4 pl-4"
          >
            {[...testimonials, ...testimonials].map(({ quote, author }, i) => (
              <div
                key={i}
                className="w-[78vw] max-w-xs flex-shrink-0 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="h-3.5 w-3.5 text-[#FABD22]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-5 text-sm leading-relaxed text-[#4B4B4B]">"{quote}"</p>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3FAEBC]/20 to-[#3FAEBC]/10">
                    <span className="text-sm font-bold text-[#3FAEBC]">{author.charAt(0)}</span>
                  </div>
                  <p className="text-sm font-semibold leading-tight text-[#1C1C1C]">{author}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop: scrolling columns */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden md:flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[480px] md:max-h-[600px] overflow-hidden mb-12 md:mb-16"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={22} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={26} reverse />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={22} />
        </motion.div>

        {/* Tagline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl md:text-3xl font-bold text-[#1C1C1C] mb-6 md:mb-8">
            A próxima história de sucesso pode ser a do seu filho.
          </p>
          <CTAButton
            href="https://wa.me/5571981262448?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
            target="_blank"
            rel="noopener noreferrer"
            label="Quero ser o próximo"
          />
        </motion.div>
      </div>
    </section>
  );
}
