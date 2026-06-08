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
    <main id="conteudo" className="mx-auto w-full min-w-0 max-w-[1440px] px-4 py-5 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-3xl font-semibold text-texto sm:text-4xl">
            {titulo}
          </h1>
          {subtitulo ? (
            <p className="mt-2 max-w-2xl text-base leading-7 text-texto-suave">
              {subtitulo}
            </p>
          ) : null}
        </div>
        {acao ? <div className="flex shrink-0 items-center gap-3">{acao}</div> : null}
      </div>
      {children}
    </main>
  );
}
