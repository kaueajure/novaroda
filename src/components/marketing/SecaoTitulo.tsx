import type { ReactNode } from "react";

export function SecaoTitulo({
  etiqueta,
  titulo,
  descricao,
}: {
  etiqueta: string;
  titulo: ReactNode;
  descricao: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-principal">
        {etiqueta}
      </p>
      <h2 className="text-balance mt-3 font-display text-4xl font-semibold leading-tight text-texto sm:text-5xl">
        {titulo}
      </h2>
      <p className="mt-4 text-lg leading-8 text-texto-suave">{descricao}</p>
    </div>
  );
}
