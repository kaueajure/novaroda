"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function CardFuncionalidade({
  icone,
  titulo,
  descricao,
}: {
  icone: ReactNode;
  titulo: string;
  descricao: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="rounded-xl border border-linha bg-card p-5 shadow-[0_16px_44px_rgba(0,0,0,0.22)]"
    >
      <div className="grid size-11 place-items-center rounded-lg bg-principal/10 text-principal">
        {icone}
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold text-texto">
        {titulo}
      </h3>
      <p className="mt-2 text-sm leading-6 text-texto-suave">{descricao}</p>
    </motion.article>
  );
}
