"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type CardResumoProps = {
  titulo: string;
  valor: string | number;
  descricao?: string;
  icone: ReactNode;
  destaque?: "principal" | "azul" | "verde" | "roxo" | "alerta";
};

const classesDestaque = {
  principal: "border-principal/35 bg-principal/10 text-principal",
  azul: "border-metal/35 bg-metal/10 text-metal",
  verde: "border-sucesso/35 bg-sucesso/10 text-sucesso",
  roxo: "border-aco/35 bg-aco/10 text-aco",
  alerta: "border-alerta/35 bg-alerta/10 text-alerta",
};

export function CardResumo({
  titulo,
  valor,
  descricao,
  icone,
  destaque = "principal",
}: CardResumoProps) {
  return (
    <motion.article
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -1 }}
      transition={{ duration: 0.18 }}
      className="relative overflow-hidden rounded-lg border border-linha bg-card p-4"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-principal/50 to-transparent" />
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-texto-fraco">
            {titulo}
          </p>
          <p className="numero-tecnico mt-3 truncate text-[clamp(1.65rem,2.2vw,2.35rem)] font-semibold leading-none text-texto">
            {valor}
          </p>
        </div>
        <span
          className={cn(
            "grid size-10 shrink-0 place-items-center rounded-md border",
            classesDestaque[destaque],
          )}
        >
          {icone}
        </span>
      </div>
      {descricao ? (
        <p className="mt-3 min-h-10 text-sm leading-5 text-texto-suave">{descricao}</p>
      ) : null}
    </motion.article>
  );
}
