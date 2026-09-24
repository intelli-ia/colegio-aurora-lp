"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const SLIDES = [
  { src: "/hero/IMG_4147.webp", alt: "Alunos em atividade no Colégio Aurora" },
  { src: "/hero/IMG_4141.webp", alt: "Atividade escolar no Colégio Aurora" },
  { src: "/hero/18E27FC6-3B46-44AC-B63D-4A330B5CFA31.webp", alt: "Vivência dos alunos no Colégio Aurora" },
  { src: "/ctas/2236656f-c922-4b31-b881-c044aff4e4c7.jpeg", alt: "Professor auxiliando aluno em atividade de sala" },
  { src: "/ctas/80bd77db-3c77-4865-8827-2d8bbb8116f1.jpeg", alt: "Aluno pintando durante atividade pedagógica" },
  { src: "/ctas/f4100ae9-4157-40f4-ad8f-c4f1c5336792.jpeg", alt: "Aluna do Colégio Aurora sorrindo com uniforme" },
];

interface HeroSlideshowProps {
  className?: string;
  interval?: number;
}

export function HeroSlideshow({ className = "", interval = 4000 }: HeroSlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence initial={false}>
        <motion.div
          key={SLIDES[index].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: interval / 1000 + 0.9, ease: "linear" }}
            className="relative w-full h-full"
          >
            <Image
              src={SLIDES[index].src}
              alt={SLIDES[index].alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {SLIDES.map((slide, i) => (
          <span
            key={slide.src}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-5 bg-white" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
