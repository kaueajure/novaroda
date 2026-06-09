"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, CarFront, Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { paginasInstitucionais } from "@/components/institucional/dadosInstitucionais";
import { AlternadorTema } from "@/components/layout/AlternadorTema";

export function CabecalhoSite() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-linha bg-fundo/94">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="foco-visivel flex min-w-0 items-center gap-3 rounded-md">
          <span className="grid size-11 shrink-0 place-items-center rounded-md border border-principal/35 bg-card-solido text-principal">
            <CarFront className="size-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block font-display text-2xl font-extrabold leading-none text-texto">
              Nova Roda
            </span>
            <span className="etiqueta-metal mt-1 border-0 text-[0.62rem]">inventário comercial</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação institucional">
          {paginasInstitucionais.map((pagina) => {
            const ativo = pathname === pagina.href;
            return (
              <Link
                key={pagina.href}
                href={pagina.href}
                className={cn(
                  "foco-visivel rounded-md border border-transparent px-3 py-2 text-sm font-semibold text-texto-suave transition hover:border-linha hover:text-texto",
                  ativo && "border-principal/30 bg-card-solido text-principal",
                )}
              >
                {pagina.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <AlternadorTema className="hidden sm:inline-flex" />
          <Link
            href="/login"
            className="foco-visivel hidden min-h-11 items-center justify-center gap-2 rounded-md border border-principal/40 bg-principal px-4 text-sm font-bold text-[#12100a] transition hover:bg-principal-forte sm:inline-flex"
          >
            Acessar painel
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setAberto((valor) => !valor)}
            className="foco-visivel grid size-11 place-items-center rounded-md border border-linha bg-card-solido text-texto-suave lg:hidden"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
          >
            {aberto ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {aberto ? (
        <nav className="border-t border-linha bg-fundo-elevado px-4 py-3 lg:hidden" aria-label="Menu mobile">
          <div className="mx-auto grid max-w-7xl gap-2">
            <AlternadorTema className="w-full" />
            {paginasInstitucionais.map((pagina) => {
              const ativo = pathname === pagina.href;
              return (
                <Link
                  key={pagina.href}
                  href={pagina.href}
                  onClick={() => setAberto(false)}
                  className={cn(
                    "foco-visivel rounded-md border border-linha bg-card px-3 py-3 text-sm font-semibold text-texto-suave",
                    ativo && "border-principal/30 bg-card-solido text-principal",
                  )}
                >
                  {pagina.label}
                </Link>
              );
            })}
            <Link
              href="/login"
              onClick={() => setAberto(false)}
              className="foco-visivel inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-principal/40 bg-principal px-4 text-sm font-bold text-[#12100a]"
            >
              Acessar painel
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
