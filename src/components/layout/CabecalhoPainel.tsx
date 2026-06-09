"use client";

import { Menu, Search } from "lucide-react";
import { AlternadorTema } from "@/components/layout/AlternadorTema";
import { useLojaStore } from "@/store/useLojaStore";
import { cn } from "@/utils/cn";

type CabecalhoPainelProps = {
  aoAbrirMenu: () => void;
  sidebarDesktopAberta: boolean;
};

export function CabecalhoPainel({
  aoAbrirMenu,
  sidebarDesktopAberta,
}: CabecalhoPainelProps) {
  const loja = useLojaStore((state) => state.loja);
  const usuario = useLojaStore((state) => state.usuario);

  return (
    <header
      className={cn(
        "sticky top-0 z-20 border-b border-linha bg-fundo/86 backdrop-blur-xl transition-[margin] duration-200",
        sidebarDesktopAberta ? "lg:ml-[280px]" : "lg:ml-[84px]",
      )}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-principal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#051113]"
      >
        Ir para conteúdo
      </a>
      <div className="flex min-h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={aoAbrirMenu}
          className="foco-visivel grid size-11 place-items-center rounded-lg border border-linha bg-white/[0.03] text-texto-suave lg:hidden"
          aria-label="Abrir menu"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
        <div className="hidden min-w-0 flex-1 md:block">
          <p className="text-sm font-semibold text-texto">{loja.nome}</p>
          <p className="text-xs text-texto-fraco">
            {loja.cidade} · Plano {loja.plano}
          </p>
        </div>

        <label className="foco-visivel flex h-11 min-w-0 flex-1 items-center gap-2 rounded-lg border border-linha bg-white/[0.03] px-3 md:max-w-md">
          <Search className="size-4 shrink-0 text-texto-fraco" aria-hidden="true" />
          <span className="sr-only">Buscar no painel</span>
          <input
            type="search"
            placeholder="Buscar veículo, cliente ou oportunidade"
            className="w-full bg-transparent text-sm text-texto outline-none placeholder:text-texto-fraco"
          />
        </label>

        <AlternadorTema />

        <div className="flex items-center gap-3 rounded-lg border border-linha bg-white/[0.03] p-1.5">
          <span className="grid size-9 place-items-center rounded-md bg-principal/14 text-sm font-bold text-principal">
            {usuario.avatar}
          </span>
          <div className="hidden pr-2 sm:block">
            <p className="text-sm font-semibold text-texto">{usuario.nome}</p>
            <p className="text-xs text-texto-fraco">{usuario.cargo}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
