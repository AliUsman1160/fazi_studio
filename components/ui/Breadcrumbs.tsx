import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.2em] text-white/80">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="transition-colors hover:text-champagne">
            Home
          </Link>
        </li>
        <li aria-hidden>
          <ChevronRight size={12} />
        </li>
        <li aria-current="page" className="text-champagne">
          {current}
        </li>
      </ol>
    </nav>
  );
}
