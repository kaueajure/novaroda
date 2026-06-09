import type { ReactNode } from "react";

type ContainerPaginaProps = {
  titulo: string;
  subtitulo?: string;
  acao?: ReactNode;
  children: ReactNode;
};

export function ContainerPagina({
  titulo,
  subtitulo,
  acao,
  children,
}: ContainerPaginaProps) {
  return (
    <main id="conteudo" className="mx-auto w-full min-w-0 max-w-[1480px] px-4 py-5 sm:px-6 lg:px-8">
      <div className="mb-5 border-b border-linha pb-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="etiqueta-metal mb-3">Nova Roda</p>
            <h1 className="font-display text-3xl font-semibold leading-tight text-texto sm:text-4xl">
              {titulo}
            </h1>
            {subtitulo ? (
              <p className="mt-2 max-w-3xl text-base leading-7 text-texto-suave">
                {subtitulo}
              </p>
            ) : null}
          </div>
          {acao ? <div className="flex shrink-0 items-center gap-3">{acao}</div> : null}
        </div>
      </div>
      {children}
    </main>
  );
}
