"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { cn } from "@/lib/utils";

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

type Variant = "light" | "dark" | "blue";

// Alterna variações de cor e alinhamento (texto colado no rodapé do card) para dar ritmo ao carrossel
const RHYTHM: { variant: Variant; bottom?: boolean }[] = [
  { variant: "dark" },
  { variant: "light", bottom: true },
  { variant: "blue" },
  { variant: "light" },
  { variant: "dark", bottom: true },
  { variant: "light" },
  { variant: "blue", bottom: true },
  { variant: "light" },
];

const tones = {
  light: { box: "bg-[#F56800] border-[#F56800]", text: "text-white", name: "text-[#012f52]" },
  dark: { box: "bg-[#013e69] border-[#013e69]", text: "text-white/95", name: "text-[#9ACBE8]" },
  blue: { box: "bg-[#0164A4] border-[#0164A4]", text: "text-white", name: "text-white" },
} as const;

function Card({ quote, author, index }: { quote: string; author: string; index: number }) {
  const { variant, bottom } = RHYTHM[index % RHYTHM.length];
  const tone = tones[variant];
  // Texto o maior possível: só os depoimentos longos reduzem a fonte, para caber sem cortar
  const len = quote.length;
  const size =
    len > 450 ? "text-sm sm:text-base" : len > 300 ? "text-base sm:text-lg" : len > 180 ? "text-lg sm:text-xl" : "text-xl sm:text-2xl";
  return (
    <div
      className={cn(
        "mx-1 flex h-[30rem] w-72 shrink-0 flex-col overflow-hidden rounded-3xl border p-6 sm:mx-2 sm:h-[32rem] sm:w-[23rem] sm:p-9",
        bottom ? "justify-end" : "justify-between",
        tone.box
      )}
    >
      <blockquote className={cn("leading-relaxed", tone.text, size)}>{quote}</blockquote>
      <p className={cn("mt-5 text-base font-semibold", tone.name)}>{author}</p>
    </div>
  );
}

// Duas metades iguais: o loop (-50%) é contínuo e a cópia fica oculta aos leitores de tela
function Half({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex" aria-hidden={hidden || undefined}>
      {testimonials.map((t, i) => (
        <Card key={t.author} quote={t.quote} author={t.author} index={i} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative w-full overflow-hidden bg-white py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-8 px-6 text-center md:mb-10"
      >
        <h2 className="mx-auto max-w-5xl text-balance font-[family-name:var(--font-garamond),Georgia,serif] text-[2.5rem] font-medium leading-[1.1] text-[#0164A4] md:text-6xl lg:text-7xl">
          O que as nossas famílias dizem{" "}
          <span className="italic text-[#3F8DBB]">do Aurora</span>
        </h2>
      </motion.div>

      <div className="relative flex overflow-hidden [@media(pointer:coarse)]:pointer-events-none [@media(pointer:coarse)]:select-none">
        <div className="flex animate-marquee [animation-duration:100s] motion-reduce:animate-none">
          <Half />
          <Half hidden />
        </div>
      </div>

      {/* Tagline + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 px-6 text-center md:mt-16"
      >
        <p className="mb-6 text-xl font-bold text-[#0164A4] md:mb-8 md:text-3xl">
          A próxima história de sucesso pode ser a do seu filho.
        </p>
        <CTAButton
          href="https://wa.me/5571981262448?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
          target="_blank"
          rel="noopener noreferrer"
          label="Quero ser o próximo"
        />
      </motion.div>
    </section>
  );
}
