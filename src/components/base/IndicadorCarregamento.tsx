"use client";

import { Loader2 } from "lucide-react";
import { cn } from "@/utils/cn";

export function IndicadorCarregamento({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold text-principal",
        className,
      )}
    >
      <Loader2 className="size-4 animate-spin" aria-hidden="true" />
      Carregando
    </span>
  );
}
