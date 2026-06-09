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
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18 }}
      className="rounded-lg border border-linha bg-card p-5 transition hover:border-principal/40"
    >
      <div className="grid size-10 place-items-center rounded-md border border-linha bg-card-solido text-principal">
        {icone}
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-texto">
        {titulo}
      </h3>
      <p className="mt-2 text-sm leading-6 text-texto-suave">{descricao}</p>
    </motion.article>
  );
}
