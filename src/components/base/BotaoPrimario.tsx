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
        "foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-principal px-4 py-2 text-sm font-semibold text-[#051113] shadow-[0_10px_30px_rgba(97,214,200,0.18)] transition duration-200 hover:bg-[#76eadc] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",
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
