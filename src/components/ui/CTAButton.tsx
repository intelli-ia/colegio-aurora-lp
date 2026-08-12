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
  variant?: "primary" | "secondary";
}

export function CTAButton({
  href,
  label,
  target,
  rel,
  className = "",
  size = "md",
  variant = "primary",
}: CTAButtonProps) {
  const sizeClasses = size === "sm"
    ? "px-5 py-2.5 text-sm gap-2"
    : "px-6 py-3 text-sm gap-2 md:px-8 md:py-4 md:text-base md:gap-2.5";

  if (variant === "secondary") {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={`group inline-flex items-center justify-center rounded-full border border-white/40 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/10 ${sizeClasses} ${className}`}
      >
        <span>{label}</span>
        <ArrowRight className={`transition-transform duration-300 group-hover:translate-x-1 ${size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"}`} />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(63,174,188,0.45)] ${sizeClasses} ${className}`}
    >
      {/* Solid gradient fill */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3FAEBC] to-[#0164A4]" />
      {/* Top shine for depth */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent" />

      {/* Content */}
      <span className="relative z-10">{label}</span>
      <ArrowRight className={`relative z-10 transition-transform duration-300 group-hover:translate-x-1 ${size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"}`} />
    </Link>
  );
}
