import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left", className)}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-5 flex items-center gap-4", align === "center" && "justify-center", light && "!text-champagne")}>
          <span className="h-px w-8 bg-gold" aria-hidden />
          {eyebrow}
          {align === "center" && <span className="h-px w-8 bg-gold" aria-hidden />}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-[2.4rem] leading-[1.08] sm:text-5xl lg:text-[3.6rem]",
          light ? "text-white" : "text-espresso",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-6 text-base leading-relaxed sm:text-lg", light ? "text-white/80" : "text-espresso/70")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
