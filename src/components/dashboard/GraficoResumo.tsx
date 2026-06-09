"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export function GraficoResumo({
  titulo,
  descricao,
  children,
}: {
  titulo: string;
  descricao?: string;
  children: ReactNode;
}) {
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMontado(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="rounded-lg border border-linha bg-card p-4 sm:p-5">
      <div className="mb-5 flex flex-col gap-1 border-b border-linha pb-4">
        <h2 className="font-display text-xl font-semibold text-texto sm:text-2xl">
          {titulo}
        </h2>
        {descricao ? (
          <p className="text-sm leading-6 text-texto-fraco">{descricao}</p>
        ) : null}
      </div>
      <div className="h-[280px] w-full min-w-0">
        {montado ? (
          children
        ) : (
          <div className="h-full w-full animate-pulse rounded-md border border-linha bg-card-solido" />
        )}
      </div>
    </section>
  );
}
