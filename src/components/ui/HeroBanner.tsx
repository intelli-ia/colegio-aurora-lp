import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlobPhotoProps {
  src: string;
  alt: string;
  className?: string;
  radius: string;
  position?: string;
  sizes: string;
  accent?: string;
  priority?: boolean;
}

/** Photo clipped into an organic blob, with an offset colour shape behind it. */
function BlobPhoto({ src, alt, className, radius, position = "center", sizes, accent, priority }: BlobPhotoProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden
        className={cn("absolute inset-0 translate-x-2.5 translate-y-2.5 md:translate-x-4 md:translate-y-4", accent)}
        style={{ borderRadius: radius }}
      />
      <div
        className="relative h-full w-full overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.35)] ring-4 ring-white/90"
        style={{ borderRadius: radius }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </div>
    </div>
  );
}

function Chip({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "absolute z-20 whitespace-nowrap rounded-full px-3 py-1.5 font-title text-[11px] font-bold uppercase tracking-wide shadow-lg md:px-5 md:py-2 md:text-sm",
        className
      )}
    >
      {children}
    </span>
  );
}

export function HeroBanner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden bg-gradient-to-br from-[#012f52] via-[#0164A4] to-[#013e69]",
        className
      )}
    >
      {/* Decorative layers */}
      <svg
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M330 -20 C 520 30, 640 120, 590 260 S 380 470, 560 540 L 1220 540 L 1220 -20 Z" fill="#3FAEBC" opacity="0.22" />
        <path d="M-20 380 C 150 330, 260 430, 420 520 L -20 520 Z" fill="#3FAEBC" opacity="0.25" />
        <path d="M900 520 C 960 420, 1100 400, 1220 300 L 1220 520 Z" fill="#FABD22" opacity="0.95" />
        <path d="M960 520 C 1010 450, 1120 440, 1220 380 L 1220 520 Z" fill="#F56800" opacity="0.95" />
      </svg>

      {/* Halftone dots, like the reference banner */}
      <div
        aria-hidden
        className="absolute -z-10 left-[34%] top-[-10%] h-[70%] w-[34%] opacity-60 [background-image:radial-gradient(circle,rgba(255,255,255,0.55)_1.6px,transparent_2px)] [background-size:14px_14px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_72%)]"
      />
      <div
        aria-hidden
        className="absolute -z-10 bottom-[-10%] left-[-4%] h-[55%] w-[30%] opacity-50 [background-image:radial-gradient(circle,rgba(250,189,34,0.8)_1.6px,transparent_2px)] [background-size:14px_14px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]"
      />
      {/* Notebook grid, bottom right */}
      <div
        aria-hidden
        className="absolute -z-10 right-0 top-[8%] hidden h-[45%] w-[16%] opacity-40 md:block [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_left,black,transparent)]"
      />

      {/* Photos */}
      <div className="absolute inset-0 flex items-stretch justify-center gap-5 px-6 py-8 md:gap-10 md:px-14 md:py-10">
        <BlobPhoto
          src="/ctas/2236656f-c922-4b31-b881-c044aff4e4c7.jpeg"
          alt="Professor auxiliando aluno em atividade de sala"
          radius="42% 58% 46% 54% / 50% 44% 56% 50%"
          position="60% 35%"
          sizes="(min-width: 1280px) 340px, 30vw"
          accent="bg-[#3FAEBC]"
          className="hidden w-[28%] -translate-y-3 md:block"
        />
        <BlobPhoto
          src="/ctas/f4100ae9-4157-40f4-ad8f-c4f1c5336792.jpeg"
          alt="Aluna do Colégio Aurora sorrindo com uniforme"
          radius="50% 50% 44% 56% / 40% 46% 54% 60%"
          position="50% 25%"
          sizes="(min-width: 1280px) 420px, 60vw"
          accent="bg-[#FABD22]"
          className="w-[52%] md:w-[36%] md:translate-y-2"
          priority
        />
        <BlobPhoto
          src="/02.png"
          alt="Aluno do Colégio Aurora acenando"
          radius="56% 44% 52% 48% / 46% 56% 44% 54%"
          position="50% 30%"
          sizes="(min-width: 1280px) 320px, 40vw"
          accent="bg-[#F56800]"
          className="w-[38%] translate-y-4 md:w-[26%] md:-translate-y-2"
        />
      </div>

      {/* Stickers */}
      <Chip className="left-4 top-4 -rotate-3 bg-[#FABD22] text-[#012f52] md:left-10 md:top-8">Inglês todos os dias</Chip>
      <Chip className="bottom-4 right-4 rotate-2 bg-white text-[#0164A4] md:bottom-8 md:right-14">Tempo integral</Chip>
      <Chip className="bottom-4 left-4 hidden -rotate-2 bg-[#F56800] text-white md:bottom-8 md:left-12 md:block">Valores cristãos</Chip>
    </div>
  );
}
