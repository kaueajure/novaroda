"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/utils/cn";

type BotaoPrimarioProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  carregando?: boolean;
  icone?: ReactNode;
};

export function BotaoPrimario({
  className,
  children,
  carregando,
  icone,
  disabled,
  ...props
}: BotaoPrimarioProps) {
  return (
    <button
      className={cn(
        "foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-principal/40 bg-principal px-4 py-2 text-sm font-bold text-[#12100a] shadow-[0_12px_34px_rgba(0,0,0,0.28)] transition duration-200 hover:bg-principal-forte active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      disabled={disabled || carregando}
      {...props}
    >
      {carregando ? <Loader2 className="size-4 animate-spin" /> : icone}
      {children}
    </button>
  );
}
