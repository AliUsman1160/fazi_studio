"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navLinks } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { MobileNavigation } from "./MobileNavigation";
import { cn } from "@/lib/utils";

export function Wordmark({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span className={cn("font-display flex flex-col leading-none", light ? "text-white" : "text-espresso", className)}>
      <span className="text-[1.7rem] font-semibold tracking-[0.04em]">Fazi</span>
      <span className="eyebrow mt-1 !text-[0.58rem] !tracking-[0.5em] text-gold">Studio</span>
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid ? "border-b border-gold/20 bg-ivory/95 py-3 shadow-[0_8px_30px_-20px_rgba(48,37,34,.4)] backdrop-blur" : "bg-transparent py-5",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link href="/" aria-label="Fazi Studio — home">
            <Wordmark light={!solid} />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {navLinks.map((l) => {
              const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-1 text-[0.78rem] font-medium uppercase tracking-[0.2em] transition-colors",
                    solid ? "text-espresso hover:text-gold-deep" : "text-white/90 hover:text-white",
                    "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-gold after:transition-transform after:duration-300",
                    active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              variant={solid ? "primary" : "light"}
              className="!min-h-10 !px-4 !py-2 !text-[0.68rem] sm:!px-6 sm:!py-3 sm:!text-[0.74rem]"
            >
              <span className="sm:hidden">Book Now</span>
              <span className="hidden sm:inline">Book a Consultation</span>
            </Button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className={cn("grid h-11 w-11 place-items-center rounded-full lg:hidden", solid ? "text-espresso" : "text-white")}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>
      <MobileNavigation open={open} onClose={() => setOpen(false)} />
    </>
  );
}
