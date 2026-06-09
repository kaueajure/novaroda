"use client";

import { Moon, Sun } from "lucide-react";
import { useTemaStore } from "@/store/useTemaStore";
import { cn } from "@/utils/cn";

export function AlternadorTema({ className }: { className?: string }) {
  const tema = useTemaStore((state) => state.tema);
  const alternarTema = useTemaStore((state) => state.alternarTema);
  const claro = tema === "claro";

  return (
    <button
      type="button"
      onClick={alternarTema}
      className={cn(
        "foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-linha bg-card-solido px-3 text-sm font-bold text-texto-suave transition hover:border-principal/35 hover:text-texto",
        className,
      )}
      aria-label={claro ? "Mudar para tema escuro" : "Mudar para tema claro"}
      title={claro ? "Tema escuro" : "Tema claro"}
    >
      {claro ? <Moon className="size-4" aria-hidden="true" /> : <Sun className="size-4" aria-hidden="true" />}
      <span className="hidden xl:inline">{claro ? "Escuro" : "Claro"}</span>
    </button>
  );
}
