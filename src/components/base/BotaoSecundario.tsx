"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type BotaoSecundarioProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icone?: ReactNode;
};

export function BotaoSecundario({
  className,
  children,
  icone,
  ...props
}: BotaoSecundarioProps) {
  return (
    <button
      className={cn(
        "foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-linha bg-white/[0.03] px-4 py-2 text-sm font-semibold text-texto-suave transition duration-200 hover:border-linha-forte hover:bg-white/[0.07] hover:text-texto active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {icone}
      {children}
    </button>
  );
}
