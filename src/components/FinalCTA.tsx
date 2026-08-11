"use client";

import { motion } from "motion/react";
import { CTAButton } from "@/components/ui/CTAButton";

const IMAGES = [
  "/cta/gallery-01.webp", "/cta/gallery-02.webp", "/cta/gallery-03.webp",
  "/cta/gallery-04.webp", "/cta/gallery-05.webp", "/cta/gallery-06.webp",
  "/cta/gallery-07.webp", "/cta/gallery-08.webp", "/cta/gallery-09.webp",
  "/cta/gallery-10.webp", "/cta/gallery-11.webp", "/cta/gallery-12.webp",
];

/* ------------------------------------------------------------------ */
/* 12 colunas × 6 linhas — 25 células com proporções variadas         */
/* Cada linha soma exatamente 12 colunas                              */
/* ------------------------------------------------------------------ */
interface Cell {
  src: string;
  col: number;
  cspan: number;
  row: number;
  rspan: number;
}

const BENTO: Cell[] = [
  // ── Linhas 1–2 (células tall) ─────────────────────────────────────
  { src: IMAGES[11], col: 1,  cspan: 1, row: 1, rspan: 1 }, // col 1 topo
  { src: IMAGES[10], col: 1,  cspan: 1, row: 2, rspan: 1 }, // col 1 baixo
  { src: IMAGES[0],  col: 2,  cspan: 2, row: 1, rspan: 2 }, // tall (cols 2-3)
  { src: IMAGES[1],  col: 4,  cspan: 2, row: 1, rspan: 1 },
  { src: IMAGES[2],  col: 6,  cspan: 3, row: 1, rspan: 2 }, // tall
  { src: IMAGES[3],  col: 9,  cspan: 1, row: 1, rspan: 2 }, // tall estreito
  { src: IMAGES[4],  col: 10, cspan: 3, row: 1, rspan: 1 },
  { src: IMAGES[5],  col: 4,  cspan: 2, row: 2, rspan: 1 },
  { src: IMAGES[6],  col: 10, cspan: 3, row: 2, rspan: 1 },
  // ── Linhas 3–4 (células tall) ─────────────────────────────────────
  { src: IMAGES[7],  col: 1,  cspan: 2, row: 3, rspan: 1 },
  { src: IMAGES[8],  col: 3,  cspan: 4, row: 3, rspan: 2 }, // tall
  { src: IMAGES[9],  col: 7,  cspan: 2, row: 3, rspan: 1 },
  { src: IMAGES[10], col: 9,  cspan: 1, row: 3, rspan: 2 }, // tall estreito
  { src: IMAGES[11], col: 10, cspan: 3, row: 3, rspan: 1 },
  { src: IMAGES[0],  col: 1,  cspan: 2, row: 4, rspan: 1 },
  { src: IMAGES[1],  col: 7,  cspan: 2, row: 4, rspan: 1 },
  { src: IMAGES[2],  col: 10, cspan: 3, row: 4, rspan: 1 },
  // ── Linha 5 ───────────────────────────────────────────────────────
  { src: IMAGES[3],  col: 1,  cspan: 3, row: 5, rspan: 1 },
  { src: IMAGES[4],  col: 4,  cspan: 2, row: 5, rspan: 1 },
  { src: IMAGES[5],  col: 6,  cspan: 2, row: 5, rspan: 1 },
  { src: IMAGES[6],  col: 8,  cspan: 2, row: 5, rspan: 1 },
  { src: IMAGES[7],  col: 10, cspan: 3, row: 5, rspan: 1 },
  // ── Linha 6 ───────────────────────────────────────────────────────
  { src: IMAGES[8],  col: 1,  cspan: 2, row: 6, rspan: 1 },
  { src: IMAGES[9],  col: 3,  cspan: 3, row: 6, rspan: 1 },
  { src: IMAGES[10], col: 6,  cspan: 2, row: 6, rspan: 1 },
  { src: IMAGES[11], col: 8,  cspan: 3, row: 6, rspan: 1 },
  { src: IMAGES[0],  col: 11, cspan: 2, row: 6, rspan: 1 },
];

/* ------------------------------------------------------------------ */

export function FinalCTASection() {
  return (
    <section className="relative w-full bg-[#0A1628] overflow-hidden" style={{ minHeight: 900 }}>

      {/* ── Mobile grid: 3 × 4 simples ── */}
      <div
        className="xl:hidden absolute inset-0 grid"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(4, 1fr)",
          gap: 6,
          padding: 6,
        }}
      >
        {IMAGES.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt=""
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        ))}
      </div>

      {/* ── Bento grid (xl+) — 12 colunas ── */}
      <div
        className="hidden xl:grid absolute inset-0"
        style={{
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(6, 1fr)",
          gap: 10,
          padding: 10,
        }}
      >
        {BENTO.map((cell, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={cell.src}
            alt=""
            className="w-full h-full object-cover rounded-xl"
            loading="lazy"
            style={{
              gridColumn: `${cell.col} / span ${cell.cspan}`,
              gridRow: `${cell.row} / span ${cell.rspan}`,
            }}
          />
        ))}
      </div>

      {/* ── Overlay escuro sobre o bento ── */}
      <div className="absolute inset-0 bg-black/50 z-[5] pointer-events-none" />

      {/* ── Center copy ── */}
      <div
        className="relative z-10 flex items-center justify-center py-10 md:py-20 px-4 md:px-6 xl:px-[160px]"
        style={{ minHeight: 900 }}
      >
        {/* Glass rectangle */}
        <div
          className="relative z-20 max-w-5xl w-full rounded-3xl px-5 py-6 md:px-12 md:py-8"
          style={{
            background: "rgba(255, 255, 255, 0.10)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
<h2 className="font-title text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
                Tire sua habilitação náutica com quem mais entende{"\u00A0"}do{"\u00A0"}assunto.
              </h2>
              <p className="text-white text-lg font-light leading-relaxed">
                Mais de 500 alunos formados, 95% de aprovação nos exames oficiais
                e 15 anos de experiência na Baía de Todos os Santos.
                <br /><br />
                Sua habilitação está em boas mãos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center items-center mb-6"
            >
              <CTAButton
                href="https://wa.me/557199891008?text=Vim%20do%20site%20e%20gostaria%20de%20entender%20mais"
                target="_blank"
                rel="noopener noreferrer"
                label="Garantir minha vaga agora"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-white/40 text-sm flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Atendimento 24h no WhatsApp
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
