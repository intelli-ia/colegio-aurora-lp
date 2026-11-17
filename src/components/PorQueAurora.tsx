"use client";

import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";

const etapas = [
  {
    tag: "Educação Infantil",
    image: "/ctas/80bd77db-3c77-4865-8827-2d8bbb8116f1.jpeg",
    imageAlt: "Aluno pintando durante atividade pedagógica",
    imagePosition: "50% 40%",
    descricao:
      "Desenvolvimento integral da criança, com ênfase na linguagem via Método Fônico (consciência fonológica, associação som-letra, base para alfabetização). Trabalho contínuo de coordenação motora, autonomia e socialização.",
  },
  {
    tag: "Ensino Fundamental I e II",
    image: "/hero/IMG_4141.webp",
    imageAlt: "Sala de aula do Colégio Aurora",
    imagePosition: "50% 50%",
    descricao:
      "Formação acadêmica aprofundada via leitura de textos clássicos (compreensão leitora, vocabulário, pensamento crítico). Matemática pelo Método Singapura (raciocínio lógico, compreensão de conceitos, resolução de problemas).",
  },
  {
    tag: "Tempo integral",
    image: "/04.png",
    imageAlt: "Alunos reunidos no pátio do Colégio Aurora",
    imagePosition: "50% 60%",
    descricao:
      "A rotina do seu filho continua dentro de uma formação que une excelência acadêmica, formação do caráter e valores cristãos.",
  },
  {
    tag: "Educação Bilíngue",
    image: "/Gemini_Generated_Image_iw4q3giw4q3giw4q.webp",
    imageAlt: "Bandeiras dos Estados Unidos e do Brasil",
    imagePosition: "50% 50%",
    descricao:
      "O Colégio Aurora oferece ensino bilíngue com aulas de inglês diariamente, da Educação Infantil ao Ensino Fundamental. Exposição contínua ao idioma favorece fluência progressiva, repertório cultural e comunicação.",
  },
];

const LAYERS = [
  "top-0 inset-x-12 md:inset-x-48 bg-[#1B6BAE]",
  "top-5 inset-x-8 md:top-6 md:inset-x-32 bg-[#2C7DBD]",
  "top-10 inset-x-4 md:top-12 md:inset-x-16 bg-[#3E8DCA]",
];

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function PorQueAurora() {
  return (
    <div className="relative bg-white pt-[3.75rem] md:pt-[4.5rem]">
      {/* Background layers, from the outermost (deepest tone) to the innermost */}
      {LAYERS.map((layer) => (
        <div
          key={layer}
          aria-hidden
          className={`absolute bottom-0 rounded-t-[3rem] md:rounded-t-[5rem] ${layer}`}
        />
      ))}
    <section id="por-que-aurora" className="relative overflow-hidden py-20 md:py-32 bg-[#5199D2] rounded-t-[3rem] md:rounded-t-[5rem]">
      {/* Subtle grain texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-overlay"
        style={{ backgroundImage: GRAIN }}
      />
      <div className="container relative z-10 mx-auto px-6 md:px-16">
        {/* Header */}
        <div
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="font-title text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] text-balance">
            Por que escolher o{" "}
            <span className="font-[family-name:var(--font-garamond),Georgia,serif] text-[1.18em] font-medium italic">Aurora</span>?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {etapas.map((item, i) => (
            <div
              key={item.tag}
              className="flex flex-col sm:flex-row overflow-hidden rounded-2xl bg-gradient-to-br from-[#0164A4] to-[#013e69] shadow-[0_12px_30px_rgba(1,100,164,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(1,100,164,0.35)]"
            >
              <div className="relative h-52 sm:h-auto sm:w-2/5 sm:min-h-[240px] flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 220px, (min-width: 640px) 40vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: item.imagePosition }}
                />
              </div>
              <div className="flex flex-1 flex-col justify-start p-6 md:p-8">
                <h3 className="font-title font-bold text-white text-xl md:text-2xl lg:text-xl leading-tight">
                  {item.tag}
                </h3>
                <span aria-hidden className="mt-3 mb-4 block h-1 w-10 rounded-full bg-[#FABD22]" />
                <p className="text-white/85 text-base leading-relaxed">
                  {item.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex justify-center mt-14 md:mt-20"
        >
          <CTAButton href="https://wa.me/5571981262448?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer" label="Agende uma visita" />
        </div>
      </div>
    </section>
    </div>
  );
}
