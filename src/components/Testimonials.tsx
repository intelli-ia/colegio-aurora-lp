"use client";

import { motion } from "framer-motion";

export default function SocialProofSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Galera muito atenciosa! Atenção 100% com o aluno, gostei bastante.",
      author: "Janderson Santana",
      rating: 5
    },
    {
      id: 2,
      quote: "Indico todos vocês, melhor escola náutica.",
      author: "Pablo Cardoso",
      rating: 5
    },
    {
      id: 3,
      quote: "Atendimento extraordinário.",
      author: "Talysson Felipe",
      rating: 5
    },
    {
      id: 4,
      quote: "Aula fantástica com o Instrutor de Motoaquática Barretão!!",
      author: "Luis Fernando",
      rating: 5
    },
    {
      id: 5,
      quote: "O curso é sensacional. Barretão ama o que faz e só libera o aluno após o processo de aprendizagem ser concluído.",
      author: "Alex Silvestre",
      rating: 5
    },
    {
      id: 6,
      quote: "Com certeza a melhor que temos em Salvador e região!!",
      author: "Esdras Pimentel",
      rating: 5
    },
    {
      id: 7,
      quote: "Super satisfeita com a aula! Sou iniciante, fui recebida por Adriele, muito solicita nos cadastros e agendamentos.",
      author: "Rafaela Leal",
      rating: 5
    },
    {
      id: 8,
      quote: "Nunca tinha pilotado um jet e simplesmente saí da aula com Barretão com muita confiança. Muito atencioso e dedicado! Top dos tops.",
      author: "Luiza Calasans",
      rating: 5
    },
    {
      id: 9,
      quote: "Experiência incrível e super recomendo, eu amei e foi super aproveitado.",
      author: "Thiago Souza Fonseca",
      rating: 5
    },
    {
      id: 10,
      quote: "Excelentes! Super recomendo!",
      author: "Fernanda Santana",
      rating: 5
    },
    {
      id: 11,
      quote: "Experiência incrível, super indico. Atendimento de excelência.",
      author: "Jaime Bonfim",
      rating: 5
    }
  ];

  const stats = [
    {
      number: "200+",
      label: "Habilitações concluídas"
    },
    {
      number: "500+",
      label: "Experiências realizadas"
    },
    {
      number: "100%",
      label: "Aprovação nos cursos"
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-gray-50/30">
      <div className="container mx-auto px-6 md:px-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <div className="mb-6">
            <span className="text-[#3FAEBC]/70 font-medium text-sm uppercase tracking-wider">
              Depoimentos
            </span>
          </div>
          
          <h2 className="font-title text-4xl md:text-5xl font-bold text-[#1C1C1C] leading-tight mb-8">
            Famílias que confiam,
            <span className="block text-[#3FAEBC]">
              alunos que florescem.
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: index * 0.15 
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100/50 h-full flex flex-col">
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[#3FAEBC]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-[#4B4B4B] text-lg leading-relaxed font-light mb-8 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3FAEBC]/20 to-[#3FAEBC]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#3FAEBC] font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-[#1C1C1C] font-medium">
                        {testimonial.author}
                      </p>
                      <p className="text-[#3FAEBC] text-sm font-medium">
                        Google Reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border-t border-gray-200/60 pt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut", 
                  delay: 0.2 + (index * 0.1) 
                }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4">
                  <span className="font-title text-4xl md:text-5xl font-bold text-[#3FAEBC] block">
                    {stat.number}
                  </span>
                </div>
                <p className="text-[#4B4B4B] font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subtle CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-[#4B4B4B] text-lg font-light max-w-2xl mx-auto">
            Faça parte desta comunidade de navegadores satisfeitos. 
            <span className="text-[#3FAEBC] font-medium"> Sua próxima experiência náutica começa aqui.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}