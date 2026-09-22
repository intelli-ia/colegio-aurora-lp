import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide transition-colors",
        variant === "default" &&
          "bg-gradient-to-r from-[#3FAEBC] to-[#0164A4] text-white",
        variant === "outline" &&
          "border border-[#0164A4]/30 text-[#0164A4] bg-[#0164A4]/5",
        className
      )}
      {...props}
    />
  );
}
