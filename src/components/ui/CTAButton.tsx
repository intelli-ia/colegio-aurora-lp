"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href: string;
  label: string;
  target?: string;
  rel?: string;
  className?: string;
  size?: "sm" | "md";
}

export function CTAButton({
  href,
  label,
  target,
  rel,
  className = "",
  size = "md",
}: CTAButtonProps) {
  const sizeClasses = size === "sm"
    ? "px-5 py-2.5 text-sm gap-2"
    : "px-6 py-3 text-sm gap-2 md:px-8 md:py-4 md:text-base md:gap-2.5";

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(0,184,217,0.45)] ${sizeClasses} ${className}`}
    >
      {/* Solid gradient fill */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00B8D9] to-[#00A6BF]" />
      {/* Top shine for depth */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent" />

      {/* Content */}
      <span className="relative z-10">{label}</span>
      <ArrowRight className={`relative z-10 transition-transform duration-300 group-hover:translate-x-1 ${size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"}`} />
    </Link>
  );
}
