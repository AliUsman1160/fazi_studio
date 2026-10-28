import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "light" | "ghost";

const base =
  "group relative inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-all duration-300";

const variants: Record<Variant, string> = {
  primary:
    "bg-espresso text-ivory hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-[0_12px_30px_-10px_rgba(143,118,70,.7)]",
  secondary:
    "border border-espresso/40 text-espresso hover:border-espresso hover:bg-espresso hover:text-ivory",
  light:
    "border border-white/70 text-white backdrop-blur-sm hover:bg-white hover:text-espresso",
  ghost: "px-0 text-espresso hover:text-gold-deep",
};

type Props = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  href?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button({ variant = "primary", className, children, href, ...rest }: Props) {
  const cls = cn(base, variants[variant], className);
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
