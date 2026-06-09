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
  principal: "text-principal bg-principal/10 border-principal/20",
  azul: "text-azul bg-azul/10 border-azul/20",
  verde: "text-verde bg-verde/10 border-verde/20",
  roxo: "text-roxo bg-roxo/10 border-roxo/20",
  alerta: "text-alerta bg-alerta/10 border-alerta/20",
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
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22 }}
      className="rounded-xl border border-linha bg-card p-5 shadow-[0_16px_44px_rgba(0,0,0,0.2)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-texto-fraco">{titulo}</p>
          <p className="mt-3 font-display text-4xl font-semibold leading-none text-texto">
            {valor}
          </p>
        </div>
        <span
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-lg border",
            classesDestaque[destaque],
          )}
        >
          {icone}
        </span>
      </div>
      {descricao ? (
        <p className="mt-4 text-sm leading-5 text-texto-suave">{descricao}</p>
      ) : null}
    </motion.article>
  );
}
