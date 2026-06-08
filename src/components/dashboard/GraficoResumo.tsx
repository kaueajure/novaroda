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
    <section className="rounded-xl border border-linha bg-card p-5">
      <div className="mb-5">
        <h2 className="font-display text-2xl font-semibold text-texto">{titulo}</h2>
        {descricao ? (
          <p className="mt-1 text-sm text-texto-fraco">{descricao}</p>
        ) : null}
      </div>
      <div className="h-[280px] w-full min-w-0">
        {montado ? (
          children
        ) : (
          <div className="h-full w-full animate-pulse rounded-lg border border-linha bg-white/[0.025]" />
        )}
      </div>
    </section>
  );
}
